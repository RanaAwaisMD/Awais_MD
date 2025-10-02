const fs = require('fs');
const path = require('path');

async function staffCommand(sock, chatId, msg) {
    try {
        if (!chatId.endsWith('@g.us')) {
            return await sock.sendMessage(chatId, { text: '❌ This command only works in groups!' });
        }

        const groupMetadata = await sock.groupMetadata(chatId);

        // Try group picture
        let pp;
        try {
            pp = await sock.profilePictureUrl(chatId, 'image');
        } catch {
            // Local fallback
            pp = path.resolve('./media/riam.jpg'); 
        }

        const participants = groupMetadata.participants || [];
        const groupAdmins = participants.filter(p => p.admin === 'admin' || p.admin === 'superadmin');
        const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n▢ ') || 'No admins found';

        const owner = groupMetadata.owner 
            || groupAdmins.find(p => p.admin === 'superadmin')?.id 
            || chatId.split('-')[0] + '@s.whatsapp.net';

        const text = `
≡ *GROUP ADMINS* _${groupMetadata.subject}_

┌─⊷ *ADMINS*
▢ ${listAdmin}
└───────────
`.trim();

        const mentions = [...new Set([...groupAdmins.map(v => v.id), owner])];

        await sock.sendMessage(chatId, {
            image: fs.existsSync(pp) ? { url: pp } : { url: pp }, // local file if exists
            caption: text,
            mentions
        });

    } catch (error) {
        console.error('Error in staff command:', error);
        await sock.sendMessage(chatId, { text: 'Failed to get admin list!' });
    }
}

module.exports = staffCommand;
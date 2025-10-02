const axios = require("axios");

async function scriptCommand(sock, chatId, message) {
    try {
        // React loading
        await sock.sendMessage(chatId, { react: { text: '🔄', key: message.key } });

        const repoUrl = "https://github.com/Dev-Kango/Queen-Riam";
        const zipUrl = `${repoUrl}/archive/refs/heads/main.zip`;

        // Fetch repo details
        const { data: repo } = await axios.get("https://api.github.com/repos/Dev-Kango/Queen-Riam");

        // Fetch avatar for thumbnail
        const { data: avatarBuffer } = await axios.get(repo.owner.avatar_url, {
            responseType: "arraybuffer"
        });

        const caption =
            `*👑 QUEEN RIAM Repository*\n\n` +
            `🔗 *Repository URL:* ${repoUrl}\n` +
            `📂 *Branch:* main\n` +
            `📦 *File:* Queen-Riam-main.zip\n\n` +
            `🌟 *Stars:* ${repo.stargazers_count}\n` +
            `🔀 *Forks:* ${repo.forks_count}\n` +
            `📅 *Updated:* ${new Date(repo.updated_at).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}\n\n` +
            `✨ The ZIP file contains the full repository source code.\n\n` +
            `💡 Tip: Fork it, star it, and hack your own version!`;

        // Send preview card
        await sock.sendMessage(chatId, {
            text: caption,
            contextInfo: {
                externalAdReply: {
                    title: "RIAM GitHub Repo",
                    body: "Download or view on GitHub",
                    mediaType: 1,
                    thumbnail: Buffer.from(avatarBuffer),
                    sourceUrl: repoUrl
                }
            }
        }, { quoted: message });

        // Fetch and send ZIP (convert to Buffer explicitly)
        const { data: zipBuffer } = await axios.get(zipUrl, { responseType: "arraybuffer" });

        await sock.sendMessage(chatId, {
            document: Buffer.from(zipBuffer),
            fileName: "Queen-Riam-main.zip",
            mimetype: "application/zip"
        }, { quoted: message });

        // React success ✅
        await sock.sendMessage(chatId, { react: { text: '✅', key: message.key } });

    } catch (err) {
        console.error("Script command error:", err);
        await sock.sendMessage(chatId, { text: "❌ *Failed to fetch or send the repository ZIP.*" }, { quoted: message });

        // React error ❌
        await sock.sendMessage(chatId, { react: { text: '❌', key: message.key } });
    }
}

module.exports = scriptCommand;

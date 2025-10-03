
╭─✦〔 *𝚀𝚄𝙴𝙴𝙽 𝚁𝙸𝙰𝙼* 〕
│ 👤 ᴏᴡɴᴇʀ     : Hector Manuel
│ 🌍 ᴍᴏᴅᴇ      : [ public ]
│ ⏰ ᴛɪᴍᴇ      : 00:25:04
│ 📅 ᴅᴀᴛᴇ      : 10/02/2025
│ 🛠️ ᴘʀᴇғɪx    : [ . ]
│ 🔄 ᴜᴘᴛɪᴍᴇ   : ${uptimeFormatted}
│ 🌐 ᴛɪᴍᴇᴢᴏɴᴇ: Africa/Accra
│ 🚀 ᴠᴇʀsɪᴏɴ  : v${settings.version}
╰─⭘━━━━━━━━━━⚬─╯

╭─✦〔 🤖 *AI Menu* 〕
│ ➸ .gpt 
│ ➸ .gemini 
│ ➸ .deepseek
│ ➸ .flux 
╰─✦

╭─✦〔 📥 *Download* 〕
│ ➸ .play 
│ ➸ .song 
│ ➸ .instagram 
│ ➸ .facebook 
│ ➸ .tiktok 
│ ➸ .video 
│ ➸ .ytmp4 
│ ➸ .xnxx
╰─✦

╭─✦〔 🎯 *Fun Menu* 〕
│ ➸ .compliment 
│ ➸ .insult 
│ ➸ .flirt
│ ➸ .goodnight
│ ➸ .character 
│ ➸ .crush
│ ➸ .simp 
│ ➸ .stupid 
╰─✦

╭─✦〔 🎮 *Games* 〕
│ ➸ .tictactoe 
│ ➸ .hangman
│ ➸ .guess 
│ ➸ .trivia
│ ➸ .answer 
│ ➸ .truth
│ ➸ .dare
╰─✦

╭─✦〔 *Group Menu* 〕
│ ➸ .ban 
│ ➸ .promote 
│ ➸ .demote 
│ ➸ .open
│ ➸ .close
│ ➸ .mute 
│ ➸ .unmute
│ ➸ .delete 
│ ➸ .kick 
│ ➸ .warnings 
│ ➸ .warn 
│ ➸ .antilink
│ ➸ .antibadword
│ ➸ .clear
│ ➸ .tag 
│ ➸ .tagall
│ ➸ .resetlink
│ ➸ .welcome 
│ ➸ .goodbye 
╰─✦

╭─✦〔 🌐 *General* 〕
│ ➸ .menu
│ ➸ .ping
│ ➸ .alive
│ ➸ .tts 
│ ➸ .owner
│ ➸ .joke
│ ➸ .quote
│ ➸ .fact
│ ➸ .weather 
│ ➸ .news
│ ➸ .lyrics 
│ ➸ .8ball 
│ ➸ .groupinfo
│ ➸ .admins
│ ➸ .vv
│ ➸ .vv2
│ ➸ .ss 
│ ➸ .jid
╰─✦

╭─✦〔 🔒 *Owner* 〕
│ ➸ .statusreact
│ ➸ .mode
│ ➸ .anticall
│ ➸ .statusview
│ ➸ .statusreply
│ ➸ .statusmsg
│ ➸ .autotype
│ ➸ .autorecord
│ ➸ .autorecordtype
│ ➸ .clearsession
│ ➸ .antidelete
│ ➸ .antiedit
│ ➸ .cleartmp
│ ➸ .setpp 
│ ➸ .getpp
│ ➸ .save
│ ➸ .setprefix
│ ➸ .update
│ ➸ .autobio
│ ➸ .autoreact
╰─✦

╭─✦〔 🎨 *Photo* 〕
│ ➸ .blur 
│ ➸ .simage 
│ ➸ .sticker 
│ ➸ .tgsticker 
│ ➸ .meme
│ ➸ .take 
│ ➸ .emojimix
╰─✦

╭─✦〔 ✝️ *Religion* 〕
│ ➸ .bible
│ ➸ .quran
│ ➸ .catholic
╰─✦

╭─✦〔 💻 *Tools* 〕
│ ➸ .trim
│ ➸ .reportbug
│ ➸ .ngl
│ ➸ .tomp3
│ ➸ .script
│ ➸ .repo
│ ➸ .vcf
╰─✦

╭─✦〔 🔤 *Textmaker* 〕
│ ➸ .metallic 
│ ➸ .ice 
│ ➸ .snow 
│ ➸ .impressive 
│ ➸ .matrix 
│ ➸ .light 
│ ➸ .neon 
│ ➸ .devil 
│ ➸ .purple 
│ ➸ .thunder 
│ ➸ .leaves 
│ ➸ .1917 
│ ➸ .arena 
│ ➸ .hacker 
│ ➸ .sand 
│ ➸ .blackpink 
│ ➸ .glitch 
│ ➸ .fire 
╰─✦

> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝚀𝚄𝙴𝙴𝙽 𝚁𝙸𝙰𝙼*
try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363419893616380@newsletter',
                        newsletterName: 'Rana-Awais MD',
                        serverMessageId: -1
                    }
                }
            },{ quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363419893616380@newsletter',
                        newsletterName: 'Rana-Awais MD by Mr Unique Hacker',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;

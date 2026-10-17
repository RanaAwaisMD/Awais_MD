const fs = require('fs')

global.owner = "923126184997" //owner number
global.footer = "© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝗔𝘄𝗮𝗶𝘀 𝗠𝗗" //footer section
global.status = false //"self/public" section of the bot
global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['9231893872737828828177378']
global.xprefix = '.'
global.gambar = "https://up6.cc/2026/06/178162161324161.jpeg"
global.OWNER_NAME = "@tal_ha13" //
global.DEVELOPER = ["6947034912"] //
global.BOT_NAME = "talha"
global.bankowner = "⌞☠︎︎⌝ •ᅳ𝗔𝘄𝗮𝗶𝘀 𝗠𝗗 🇦🇱🚯"
global.creatorName = "⌞☠︎︎⌝ •ᅳ𝗔𝘄𝗮𝗶𝘀 𝗠𝗗 🇦🇱🚯"
global.ownernumber = '923126184997'  //creator number
global.location = "Pakistan, Panjab, Bahawalpur"
global.prefa = ['','!','.','#','&']
//================DO NOT CHANGE OR YOU'LL GET AN ERROR=============\
global.footer = "Awais-MD" //footer section
global.link = "https://chat.whatsapp.com/IpdDmh2IMCl8tMGY2dGYwb"
global.autobio = true//auto update bio
global.botName = "𝗔𝘄𝗮𝗶𝘀 𝗠𝗗"
global.version = "2.0"
global.botname = "𝗔𝘄𝗮𝗶𝘀 𝗠𝗗"
global.author = "⌞☠︎︎⌝ •ᅳ𝗔𝘄𝗮𝗶𝘀 𝗠𝗗 🇦🇱🚯"
global.themeemoji = ''
global.wagc = 'https://whatsapp.com/channel/0029Vb8DoTx60eBXBE0WUC39'
global.thumbnail = 'https://up6.cc/2026/06/178161585091181.jpg'
global.richpp = ' '
global.packname = "⌞☠︎︎⌝ •ᅳ𝗔𝘄𝗮𝗶𝘀 𝗠𝗗 🇦🇱🚯"
global.author = "\n\n\n\n\nCreate by ⌞☠︎︎⌝ •ᅳ 𝙏𝙚𝙘𝙝𝙓 🇽"
global.creator = "920000@s.whatsapp.net"
global.ownername = '𒁍͟͟͞͞ 𝐌ɑ͢ɭı⃕͜͝ᴋ𒉽💀🚩' 
global.onlyowner = `𝘴𝘰𝘳𝘳𝘺 𝘰𝘯𝘭𝘺 𝘧𝘰𝘳  𝘰𝘸𝘯𝘦𝘳𝘴
𝘤𝘰𝘯𝘵𝘢𝘤𝘵 𓆩 ＳＩＬＶＥＲ 𓆪 𝘵𝘰 𝘣𝘦 𝘢𝘯 𝘰𝘸𝘯𝘦𝘳`
  // reply 
global.database = `𝘛𝘰 𝘣𝘦 𝘪𝘯  𝘥𝘢𝘵𝘢𝘣𝘢𝘴𝘦 𝘣𝘢𝘴𝘦 𝘤𝘰𝘯𝘵𝘢𝘤𝘵 𝗔𝘄𝗮𝗶𝘀 𝗠𝗗*`
  global.mess = {
wait: "```WAIT FOR ⌞☠︎︎⌝ •ᅳ Awais MD🇱🚯```",
   success: "𝑺𝒖𝒄𝒄𝒆𝒔𝒔",
   on: "bot active", 
   prem: "FOR PREMIUM USERS ONLY ADD YOUR NUMBER TO DATABASE TO ACCESS PREMIUM", 
   off: "bot off",
   query: {
       text: "Where's the text, man?",
       link: "Where's the link, bro?",
   },
   error: {
       fitur: "Sorry, bro, the feature has error. Please chat with the Bot Developer so it can be fixed immediately.",
   },
   only: {
       group: "Sorry bro, This Feature Can Only Be Used In Groups only",
private: "Sorry bro, This Feature Can Only Be Used In Private Chats",
       owner: "Sorry bro, This Feature Can Only Be Used by silver",
       admin: " Sorry, this feature can only be used by Bot Admins",
       badmin: "Sorry, bro, It Looks Like You Can't Use This Feature Because the Bot is Not yet Group Admin",
       premium: "This feature is specifically for silver beloved Premium users",
   }
}

global.hituet = 0
//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = true //auto update bio
global.anti92 = false //auto block +92 
global.autoswview = false //auto view status/story

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})

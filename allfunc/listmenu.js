const chalk = require('chalk')
const fs = require('fs')

global.allxmenu = (prefix, hituet) => {
return`
 ⧎ ʜᴇʟʟᴏ  ${m.pushName}
⧎ ʙᴏᴛ ɴᴀᴍᴇ 「${botname}」
⧎ sᴛᴀᴛᴜs : active 
⧎ ʀᴜɴᴛɪᴍᴇ ${runtime(process.uptime())}
⧎ ᴏᴡɴᴇʀ ${ownername}
⧎ ᴠᴇʀsɪᴏɴ v.1
*Hello* @${m?.sender.split('@')[0]} √ \`THIS IS 𓆩 ＳＩＬＶＥＲ-𝐗𝐃 𓆪\`
\`👽\`
┈─────────────────
━    ◇ 𝘼𝙇𝙇 𝙈𝙀𝙉𝙐 ◇  ━
│あ  ${prefix}𝒑𝒐𝒍𝒍
│あ  ${prefix}𝒃𝒓𝒂𝒕 
│あ  ${prefix}𝒔𝒕𝒊𝒄𝒌𝒆𝒓
│あ  ${prefix}𝒕𝒐𝒖𝒓𝒍 
│あ  ${prefix}𝒗𝒗
│あ  ${prefix}𝒕𝒂𝒌𝒆/𝒔𝒕𝒆𝒂𝒍 
│あ  ${prefix}𝒑𝒍𝒂𝒚
│あ  ${prefix}𝒈𝒊𝒕𝒄𝒍𝒐𝒏𝒆
│あ  ${prefix}𝒉𝒊𝒅𝒆𝒕𝒂𝒈
│あ  ${prefix}𝒕𝒂𝒈𝒂𝒍𝒍
│あ  ${prefix}𝒅𝒆𝒎𝒐𝒕𝒆
│あ  ${prefix}𝒑𝒓𝒐𝒎𝒐𝒕𝒆
│あ  ${prefix}𝒎𝒖𝒕𝒆
│あ  ${prefix}𝒖𝒏𝒎𝒖𝒕𝒆
│あ  ${prefix}𝒋𝒐𝒊𝒏
│あ  ${prefix}𝒌𝒊𝒄𝒌
│あ  ${prefix}𝒂𝒅𝒅
│あ  ${prefix}𝒍𝒊𝒏𝒌𝒈𝒄
│あ  ${prefix}𝒕𝒊𝒌𝒕𝒐𝒌 
│あ  ${prefix}𝒕𝒕𝒔/𝒔𝒂𝒚
│あ  ${prefix}𝒓𝒆𝒔𝒕𝒂𝒓𝒕 
│あ  ${prefix}𝒍𝒆𝒇𝒕 
│あ  ${prefix}𝒅𝒆𝒍𝒆𝒕𝒆 
│あ  ${prefix}𝒈𝒓𝒐𝒖𝒑𝒋𝒊𝒅
│あ  ${prefix}𝒋𝒊𝒅
│あ  ${prefix}𝒕𝒐𝒊𝒎𝒈
│あ  ${prefix}𝒅𝒆𝒗𝒊𝒄𝒆 
│あ  ${prefix}𝒉𝒅/𝒓𝒆𝒎𝒊𝒏𝒊
│あ  ${prefix}𝒊𝒎𝒈
│あ  ${prefix}𝒔𝒔/𝒔𝒔𝒘𝒆𝒃
│あ  ${prefix}𝒊𝒎𝒃𝒅
│あ  ${prefix}𝒂𝒏𝒊𝒎𝒆𝒅𝒍
│あ  ${prefix}𝒃𝒍𝒐𝒄𝒌 
│あ  ${prefix}𝒖𝒏𝒃𝒍𝒐𝒄𝒌 
│あ  ${prefix}𝒃𝒓𝒐𝒂𝒅𝒄𝒂𝒔𝒕𝒊𝒎𝒂𝒈𝒆
│あ  ${prefix}𝒃𝒓𝒐𝒂𝒅𝒄𝒂𝒔𝒕𝒕𝒆𝒙𝒕
│あ  ${prefix}𝒃𝒓𝒐𝒂𝒅𝒄𝒂𝒔𝒕𝒗𝒊𝒅
│あ  ${prefix}𝒃𝒂𝒏
│あ  ${prefix}𝒖𝒏𝒃𝒂𝒏
│あ  ${prefix}𝒈𝒆𝒕 𝒄𝒂𝒔𝒆 ✓ 
│あ  ${prefix}𝒏𝒔𝒇𝒘
│あ  ${prefix}𝒘𝒂𝒊𝒇𝒖
│あ  ${prefix}𝒂𝒏𝒊𝒎𝒆𝒔𝒆𝒂𝒓𝒄𝒉 
│あ  ${prefix}𝒚𝒕𝒔𝒆𝒂𝒓𝒄𝒉 
│あ  ${prefix}𝒕𝒂𝒈𝒂𝒅𝒎𝒊𝒏 
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒍𝒊𝒄𝒌
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒃𝒊𝒕𝒆
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒈𝒍𝒐𝒎𝒑
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒉𝒂𝒑𝒑𝒚
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒅𝒂𝒏𝒄𝒆
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒄𝒓𝒊𝒏𝒈𝒆
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒉𝒊𝒈𝒉𝒇𝒊𝒗𝒆
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒑𝒐𝒌𝒆
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒘𝒊𝒏𝒌𝒂𝒏𝒊𝒎𝒆
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒑𝒐𝒌𝒆
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒔𝒎𝒊𝒍𝒆
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒔𝒎𝒖𝒈
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒍𝒊𝒄𝒌
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒘𝒍𝒑
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒔𝒆𝒂𝒓𝒄𝒉 
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒂𝒗𝒂𝒕𝒂𝒓
│あ ${prefix} 𝒉𝒂𝒑𝒑𝒚 
│あ ${prefix} 𝒅𝒂𝒏𝒄𝒆 
│あ ${prefix} 𝒉𝒂𝒏𝒅𝒉𝒐𝒍𝒅 
│あ ${prefix} 𝒉𝒊𝒈𝒉𝒇𝒊𝒗𝒆
│あ ${prefix} 𝒔𝒍𝒂𝒑 
│あ ${prefix} 𝒌𝒊𝒔𝒔
│あ ${prefix} 𝒃𝒍𝒖𝒔𝒉
│あ ${prefix}𝒃𝒊𝒕𝒆
│あ ${prefix}𝒄𝒖𝒅𝒅𝒍𝒆 
│あ ${prefix}𝒃𝒖𝒚𝒔𝒄𝒓𝒊𝒑𝒕 
│あ ${prefix}𝒃𝒂𝒄𝒌𝒖𝒑 
│あ ${prefix}𝒓𝒆𝒑𝒐
│あ ${prefix}𝒐𝒘𝒏𝒆𝒓
│あ ${prefix}𝒔𝒆𝒕𝒃𝒊𝒐
│あ ${prefix}𝒆𝒗𝒆𝒓𝒚𝒐𝒏𝒆
│あ ${prefix}𝒓𝒆𝒔𝒆𝒕𝒍𝒊𝒏𝒌 
│あ ${prefix}𝒕𝒐𝒕𝒂𝒈
│あ ${prefix}𝒄𝒍𝒐𝒔𝒆𝒕𝒊𝒎𝒆 
│あ ${prefix}𝒐𝒑𝒆𝒏𝒕𝒊𝒎𝒆
│あ ${prefix}fact
│あ ${prefix}setpp
│あ ${prefix}tr
│あ ${prefix}setppgroup 
│あ ${prefix}google 
│あ ${prefix} pickupline 
│あ ${prefix} shorturl
│あ ${prefix} reportbug
│あ ${prefix} coffee 
│あ ${prefix} createlogo
│あ ${prefix} shorturl
│あ ${prefix} xnxxsearch`}

global.animemenu = (prefix) => {
return`
 ━  ◇ 𝙈𝙀𝙉𝙐 ◇  ━
│あ ${prefix} 𝒏𝒘𝒂𝒊𝒇𝒖
│あ ${prefix} 𝒘𝒂𝒊𝒇𝒖
│あ ${prefix} 𝒏𝒔𝒇𝒘
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒌𝒊𝒍𝒍
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒍𝒊𝒄𝒌
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒃𝒊𝒕𝒆
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒈𝒍𝒐𝒎𝒑
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒉𝒂𝒑𝒑𝒚
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒅𝒂𝒏𝒄𝒆
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒄𝒓𝒊𝒏𝒈𝒆
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒉𝒊𝒈𝒉𝒇𝒊𝒗𝒆
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒑𝒐𝒌𝒆
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒘𝒊𝒏𝒌
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒑𝒐𝒌𝒆
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒔𝒎𝒊𝒍𝒆
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒔𝒎𝒖𝒈
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒍𝒊𝒄𝒌
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒘𝒍𝒑
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒔𝒆𝒂𝒓𝒄𝒉 
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒂𝒗𝒂𝒕𝒂𝒓
┗┅┅┅┅┅┅┅┅┅┅┅➢`}

global.ownermenu = (prefix) => {
return`
━  ◇ 𝙊𝙒𝙉𝙀𝙍 𝙈𝙀𝙉𝙐 ◇  ━
│あ ${prefix}𝒔𝒆𝒍𝒇
│あ ${prefix}𝒑𝒖𝒃𝒍𝒊𝒄
│あ ${prefix}𝒂𝒅𝒅𝒐𝒘𝒏𝒆𝒓
│あ ${prefix}𝒅𝒆𝒍𝒐𝒘𝒏𝒆𝒓
│あ ${prefix}𝒈𝒆𝒕𝒄𝒂𝒔𝒆
│あ ${prefix}𝒂𝒅𝒅𝒑𝒓𝒆𝒎
│あ ${prefix}𝒅𝒆𝒍𝒑𝒓𝒆𝒎
│あ ${prefix}𝒃𝒂𝒄𝒌𝒖𝒑
│あ ${prefix}𝒓𝒆𝒔𝒕𝒂𝒓𝒕 
│あ ${prefix}𝒅𝒆𝒍/𝒅𝒆𝒍𝒆𝒕𝒆
│あ ${prefix}𝒃𝒍𝒐𝒄𝒌
│あ ${prefix}𝒖𝒏𝒃𝒍𝒐𝒄𝒌
│あ ${prefix}𝒃𝒖𝒚𝒔𝒄𝒓𝒊𝒑𝒕 
│あ ${prefix}𝒃𝒂𝒄𝒌𝒖𝒑 
│あ ${prefix} 𝒓𝒆𝒑𝒐
│あ ${prefix} 𝒐𝒘𝒏𝒆𝒓
│あ ${prefix} 𝒔𝒆𝒕𝒃𝒊𝒐
┗┅┅┅┅┅┅┅┅┅┅┅➢`}

global.othermenu = (prefix) => {
return`
 ━  ◇𝙊𝙏𝙃𝙀𝙍 𝙈𝙀𝙉𝙐◇  ━
│あ  ${prefix}𝒅𝒆𝒗𝒊𝒄𝒆
│あ  ${prefix}𝒔𝒔/𝒔𝒔𝒘𝒆𝒃
│あ  ${prefix}𝒃𝒓𝒐𝒂𝒅𝒄𝒂𝒔𝒕𝒊𝒎𝒂𝒈𝒆
│あ  ${prefix}𝒃𝒓𝒐𝒂𝒅𝒄𝒂𝒔𝒕𝒕𝒆𝒙𝒕
│あ  ${prefix}𝒃𝒓𝒐𝒂𝒅𝒄𝒂𝒔𝒕𝒗𝒊𝒅
│あ  ${prefix}𝒃𝒂𝒏
│あ  ${prefix}𝒖𝒏𝒃𝒂𝒏
│あ  ${prefix}𝒋𝒊𝒅
│あ  ${prefix}𝒗𝒗
│あ ${prefix}𝒘𝒆𝒂𝒕𝒉𝒆𝒓
│あ ${prefix}𝒇𝒂𝒄𝒕
│あ ${prefix}𝒄𝒓𝒆𝒂𝒕𝒆𝒍𝒐𝒈𝒐
│あ ${prefix}𝒔𝒉𝒐𝒓𝒕𝒖𝒓𝒍
│あ ${prefix}𝒓𝒆𝒑𝒐𝒓𝒕𝒃𝒖𝒈
┗┅┅┅┅┅┅┅┅┅┅┅➢`}

global.gameenu = (prefix, hituet) => {
return`┏『 ︎GAME߷MENU 』━➢
┣» ♡  
┣» ♡  
┗━━━━━━━━━━━━━━━━➢`}
global.menuall = (prefix, hituet) => {
return`
▨▨▨▨▨▨▨▧▧▨▨▨▨▧
\`\`\`HERE 𓆩 ＳＩＬＶＥＲ-𝐗𝐃 𓆪 FULL MENU 💀\`\`\`
❖═━═══𖠁𐂃𖠁══━═❖
▓━  ◇𝙊𝙏𝙃𝙀𝙍 𝙈𝙀𝙉𝙐◇  ━▓
│あ ${prefix}𝒅𝒆𝒗𝒊𝒄𝒆
│あ ${prefix}𝒔𝒔/𝒔𝒔𝒘𝒆𝒃
│あ ${prefix}𝒃𝒓𝒐𝒂𝒅𝒄𝒂𝒔𝒕𝒊𝒎𝒂𝒈𝒆
│あ ${prefix}𝒃𝒓𝒐𝒂𝒅𝒄𝒂𝒔𝒕𝒕𝒆𝒙𝒕
│あ ${prefix}𝒃𝒓𝒐𝒂𝒅𝒄𝒂𝒔𝒕𝒗𝒊𝒅
│あ ${prefix}𝒃𝒂𝒏
│あ ${prefix}𝒖𝒏𝒃𝒂𝒏
│あ ${prefix}𝒋𝒊𝒅
│あ ${prefix}𝒗𝒗
│あ ${prefix}𝒗𝒗2
│あ ${prefix}𝒘𝒆𝒂𝒕𝒉𝒆𝒓
│あ ${prefix}𝒇𝒂𝒄𝒕
│あ ${prefix}𝒄𝒓𝒆𝒂𝒕𝒆𝒍𝒐𝒈𝒐
│あ ${prefix}𝒔𝒉𝒐𝒓𝒕𝒖𝒓𝒍
│あ ${prefix}𝒓𝒆𝒑𝒐𝒓𝒕𝒃𝒖𝒈
│あ ${prefix}𝒕𝒓
│あ ${prefix}𝒑𝒊𝒄𝒌𝒖𝒑𝒍𝒊𝒏𝒆 
┗┅┅┅┅┅┅┅┅┅┅┅➢
▓━  ◇ 𝘼𝙉𝙄𝙈𝙀 𝙈𝙀𝙉𝙐 ◇  ━▓
│あ ${prefix} 𝒏𝒘𝒂𝒊𝒇𝒖
│あ ${prefix} 𝒘𝒂𝒊𝒇𝒖
│あ ${prefix} 𝒏𝒔𝒇𝒘
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒌𝒊𝒍𝒍
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒍𝒊𝒄𝒌
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒃𝒊𝒕𝒆
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒈𝒍𝒐𝒎𝒑
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒉𝒂𝒑𝒑𝒚
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒅𝒂𝒏𝒄𝒆
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒄𝒓𝒊𝒏𝒈𝒆
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒉𝒊𝒈𝒉𝒇𝒊𝒗𝒆
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒑𝒐𝒌𝒆
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒘𝒊𝒏𝒌
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒑𝒐𝒌𝒆
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒔𝒎𝒊𝒍𝒆
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒔𝒎𝒖𝒈
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒍𝒊𝒄𝒌
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒘𝒍𝒑
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒔𝒆𝒂𝒓𝒄𝒉 
│あ ${prefix} 𝒂𝒏𝒊𝒎𝒆𝒂𝒗𝒂𝒕𝒂𝒓
┗┅┅┅┅┅┅┅┅┅┅┅➢
▓━  ◇𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙈𝙀𝙉𝙐◇ ━▓
│あ  ${prefix}𝒉𝒅/𝒓𝒆𝒎𝒊𝒏𝒊
│あ  ${prefix}𝒂𝒑𝒌
│あ  ${prefix}𝒑𝒍𝒂𝒚
│あ  ${prefix}𝒊𝒎𝒈
│あ  ${prefix}𝒊𝒎𝒃𝒅
│あ  ${prefix}𝒂𝒏𝒊𝒎𝒆𝒅𝒍
│あ  ${prefix}𝒕𝒊𝒌𝒕𝒐𝒌 
│あ  ${prefix}𝒈𝒊𝒕𝒄𝒍𝒐𝒏𝒆
│あ  ${prefix}𝒕𝒐𝒊𝒎𝒈
│あ  ${prefix}𝒚𝒕𝒔𝒆𝒂𝒓𝒄𝒉 
│あ  ${prefix}𝒕𝒊𝒌𝒕𝒐𝒌𝒈𝒊𝒓𝒍 
│あ  ${prefix}𝒕𝒊𝒌𝒕𝒐𝒌𝒔𝒂𝒏𝒕𝒖𝒚
│あ  ${prefix}𝒕𝒊𝒌𝒕𝒐𝒌𝒔𝒆𝒙𝒚
│あ  ${prefix}𝒕𝒊𝒌𝒕𝒐𝒌𝒃𝒐𝒄𝒊𝒍
│あ  ${prefix}𝒕𝒊𝒌𝒕𝒐𝒌𝒈𝒉𝒆𝒂
│あ  ${prefix}𝒕𝒊𝒌𝒕𝒐𝒌𝒌𝒂𝒚𝒆𝒔
│あ  ${prefix}𝒕𝒊𝒌𝒕𝒐𝒌𝒑𝒂𝒏𝒓𝒊𝒌𝒂
│あ  ${prefix}𝒕𝒊𝒌𝒕𝒐𝒌𝒏𝒐𝒕
│あ  ${prefix}𝒙𝒏𝒙𝒙𝒔𝒆𝒂𝒓𝒄𝒉
│あ  ${prefix}𝒄𝒐𝒇𝒇𝒆𝒆 
│あ  ${prefix}idch
┗┅┅┅┅┅┅┅┅┅┅┅➢
▓━  ◇ 𝙂𝙍𝙊𝙐𝙋𝙈𝙀𝙉𝙐 ◇  ━▓
│あ ${prefix}𝒉𝒊𝒅𝒆𝒕𝒂𝒈
│あ ${prefix}𝒕𝒂𝒈𝒂𝒍𝒍
│あ ${prefix}𝒅𝒆𝒎𝒐𝒕𝒆
│あ ${prefix}𝒑𝒓𝒐𝒎𝒐𝒕𝒆
│あ ${prefix}𝒎𝒖𝒕𝒆
│あ ${prefix}𝒖𝒏𝒎𝒖𝒕𝒆
│あ ${prefix}𝒋𝒐𝒊𝒏
│あ ${prefix}𝒑𝒐𝒍𝒍
│あ ${prefix}𝒌𝒊𝒄𝒌
│あ ${prefix}𝒍𝒆𝒇𝒕
│あ ${prefix}𝒂𝒅𝒅
│あ ${prefix}𝒍𝒊𝒏𝒌𝒈𝒄
│あ ${prefix}𝒈𝒓𝒐𝒖𝒑𝒋𝒊𝒅
│あ ${prefix}𝒈𝒆𝒕𝒑𝒑
│あ ${prefix}𝒌𝒊𝒄𝒌𝒂𝒍𝒍
│あ ${prefix}𝒆𝒗𝒆𝒓𝒚𝒐𝒏𝒆
│あ ${prefix}𝒓𝒆𝒔𝒆𝒕𝒍𝒊𝒏𝒌 
│あ ${prefix}𝒕𝒐𝒕𝒂𝒈
│あ ${prefix}𝒄𝒍𝒐𝒔𝒆𝒕𝒊𝒎𝒆 
│あ ${prefix}𝒐𝒑𝒆𝒏𝒕𝒊𝒎𝒆 
┗┅┅┅┅┅┅┅┅┅┅┅➢
▓━  ◇𝙉𝙀𝙒 𝙈𝙀𝙉𝙐◇  ━▓
│あ ${prefix}pair
│あ ${prefix}delpair 
│あ ${prefix}ai
│あ ${prefix}akane-hijack
│あ ${prefix}joke
│あ ${prefix}truth
│あ ${prefix}dare
│あ ${prefix}qc
│あ ${prefix}zaddy
│あ ${prefix}gptimage
│あ ${prefix}tovn
┗┅┅┅┅┅┅┅┅┅┅┅➢
▓━  ◇ 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙈𝙀𝙉𝙐 ◇ ━▓
│あ ${prefix} 𝒕𝒂𝒌𝒆
│あ ${prefix} 𝒃𝒓𝒂𝒕
│あ ${prefix} 𝒄𝒓𝒚 
│あ ${prefix} 𝒌𝒊𝒍𝒍
│あ ${prefix} 𝒉𝒖𝒈
│あ ${prefix} 𝒉𝒂𝒑𝒑𝒚 
│あ ${prefix} 𝒅𝒂𝒏𝒄𝒆 
│あ ${prefix} 𝒉𝒂𝒏𝒅𝒉𝒐𝒍𝒅 
│あ ${prefix} 𝒉𝒊𝒈𝒉𝒇𝒊𝒗𝒆
│あ ${prefix} 𝒔𝒍𝒂𝒑 
│あ ${prefix} 𝒌𝒊𝒔𝒔
│あ ${prefix} 𝒃𝒍𝒖𝒔𝒉
│あ ${prefix} 𝒃𝒊𝒕𝒆
│あ ${prefix} 𝒄𝒖𝒅𝒅𝒍𝒆 
│あ ${prefix} 𝒇𝒖𝒓𝒃𝒓𝒂𝒕
│あ ${prefix} 𝒔𝒉𝒊𝒏𝒐𝒃𝒖
│あ ${prefix} 𝒃𝒐𝒏𝒌
│あ ${prefix} 𝒑𝒂𝒕
│あ ${prefix} 𝒏𝒐𝒎
┗┅┅┅┅┅┅┅┅┅┅┅➢
▓━ ◇ *EPHOTO* 𝙈𝙀𝙉𝙐◇ ━▓
│あ ${prefix}glitchtext
│あ ${prefix}writetext
│あ ${prefix}advancedglow
│あ ${prefix}typographytext
│あ ${prefix}pixelglitch
│あ ${prefix}neonglitch
│あ ${prefix}flagtext
│あ ${prefix}flag3dtext
│あ ${prefix}deletingtext
│あ ${prefix}blackpinkstyle
│あ ${prefix}glowingtext
│あ ${prefix}underwatertext
│あ ${prefix}logomakerl
│あ ${prefix}cartoonstyle
│あ ${prefix}papercutstyle
│あ ${prefix}watercolortext
│あ ${prefix}effectclouds
│あ ${prefix}blackpinklogo
│あ ${prefix}gradienttext
│あ ${prefix}summerbeach
│あ ${prefix}mluxurygold
│あ ${prefix}multicoloredneon
│あ ${prefix}sandsummer
│あ ${prefix}galaxywallpaper
│あ ${prefix}1917style
│あ ${prefix}lmakingneon
│あ ${prefix}royaltext
│あ ${prefix}freecreate
│あ ${prefix}galaxystyle
│あ ${prefix}lighteffects
│あ ${prefix}logoneko
┗┅┅┅┅┅┅┅┅┅┅┅➢
▓━  ◇ 𝙊𝙒𝙉𝙀𝙍 𝙈𝙀𝙉𝙐 ◇  ━▓
│あ ${prefix}𝒔𝒆𝒍𝒇
│あ ${prefix}𝒑𝒖𝒃𝒍𝒊𝒄
│あ ${prefix}𝒂𝒅𝒅𝒐𝒘𝒏𝒆𝒓
│あ ${prefix}𝒅𝒆𝒍𝒐𝒘𝒏𝒆𝒓
│あ ${prefix}𝒈𝒆𝒕𝒄𝒂𝒔𝒆
│あ ${prefix}𝒂𝒅𝒅𝒑𝒓𝒆𝒎
│あ ${prefix}𝒅𝒆𝒍𝒑𝒓𝒆𝒎
│あ ${prefix}𝒃𝒂𝒄𝒌𝒖𝒑
│あ ${prefix}𝒓𝒆𝒔𝒕𝒂𝒓𝒕 
│あ ${prefix}𝒅𝒆𝒍/𝒅𝒆𝒍𝒆𝒕𝒆
│あ ${prefix}𝒃𝒍𝒐𝒄𝒌
│あ ${prefix}𝒖𝒏𝒃𝒍𝒐𝒄𝒌
│あ ${prefix}𝒃𝒖𝒚𝒔𝒄𝒓𝒊𝒑𝒕 
│あ ${prefix}𝒃𝒂𝒄𝒌𝒖𝒑 
│あ ${prefix} 𝒓𝒆𝒑𝒐
│あ ${prefix} 𝒐𝒘𝒏𝒆𝒓
│あ ${prefix} 𝒔𝒆𝒕𝒃𝒊𝒐
┗┅┅┅┅┅┅┅┅┅┅┅➢`}
global.downloadmenu = (prefix) => { 
return`
━  ◇𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙈𝙀𝙉𝙐◇  ━
│あ  ${prefix}𝒉𝒅/𝒓𝒆𝒎𝒊𝒏𝒊
│あ  ${prefix}apk
│あ  ${prefix}𝒑𝒍𝒂𝒚
│あ  ${prefix}𝒊𝒎𝒈
│あ ${prefix}𝒊𝒎𝒃𝒅
│あ  ${prefix}𝒂𝒏𝒊𝒎𝒆𝒅𝒍
│あ  ${prefix}𝒕𝒊𝒌𝒕𝒐𝒌 
│あ  ${prefix}𝒈𝒊𝒕𝒄𝒍𝒐𝒏𝒆
│あ  ${prefix}𝒕𝒐𝒊𝒎𝒈
│あ  ${prefix}𝒚𝒕𝒔𝒆𝒂𝒓𝒄𝒉 
│あ  ${prefix}𝒕𝒊𝒌𝒕𝒐𝒌𝒈𝒊𝒓𝒍 
│あ  ${prefix}𝒕𝒊𝒌𝒕𝒐𝒌𝒔𝒂𝒏𝒕𝒖𝒚
│あ  ${prefix}𝒕𝒊𝒌𝒕𝒐𝒌𝒔𝒆𝒙𝒚
│あ  ${prefix}𝒕𝒊𝒌𝒕𝒐𝒌𝒃𝒐𝒄𝒊𝒍
│あ  ${prefix}𝒕𝒊𝒌𝒕𝒐𝒌𝒈𝒉𝒆𝒂
│あ  ${prefix}𝒕𝒊𝒌𝒕𝒐𝒌𝒌𝒂𝒚𝒆𝒔
│あ  ${prefix}𝒕𝒊𝒌𝒕𝒐𝒌𝒑𝒂𝒏𝒓𝒊𝒌𝒂
│あ  ${prefix}𝒕𝒊𝒌𝒕𝒐𝒌𝒏𝒐𝒕
│あ ${prefix} xnxxsearch
┗┅┅┅┅┅┅┅┅┅┅┅➢`}

global.groupmenu = (prefix) => {
return`━  ◇ 𝙂𝙍𝙊𝙐𝙋𝙈𝙀𝙉𝙐 ◇  ━
│あ ${prefix}𝒉𝒊𝒅𝒆𝒕𝒂𝒈
│あ ${prefix}𝒕𝒂𝒈𝒂𝒍𝒍
│あ ${prefix}𝒅𝒆𝒎𝒐𝒕𝒆
│あ ${prefix}𝒑𝒓𝒐𝒎𝒐𝒕𝒆
│あ ${prefix}𝒎𝒖𝒕𝒆
│あ ${prefix}𝒖𝒏𝒎𝒖𝒕𝒆
│あ ${prefix}𝒋𝒐𝒊𝒏
│あ ${prefix}𝒑𝒐𝒍𝒍
│あ ${prefix}𝒌𝒊𝒄𝒌
│あ ${prefix}𝒍𝒆𝒇𝒕
│あ ${prefix}𝒂𝒅𝒅
│あ ${prefix}𝒍𝒊𝒏𝒌𝒈𝒄
│あ ${prefix}𝒈𝒓𝒐𝒖𝒑𝒋𝒊𝒅
│あ ${prefix}𝒈𝒆𝒕𝒑𝒑
│あ ${prefix}𝒌𝒊𝒄𝒌𝒂𝒍𝒍
│あ ${prefix}𝒆𝒗𝒆𝒓𝒚𝒐𝒏𝒆
│あ ${prefix}𝒓𝒆𝒔𝒆𝒕𝒍𝒊𝒏𝒌 
│あ ${prefix}𝒕𝒐𝒕𝒂𝒈
│あ ${prefix}𝒄𝒍𝒐𝒔𝒆𝒕𝒊𝒎𝒆 
│あ ${prefix}𝒐𝒑𝒆𝒏𝒕𝒊𝒎𝒆 
┗┅┅┅┅┅┅┅┅┅┅┅➢`}
global.stickermenu = (prefix) => {
return`
 ━  ◇ 𝙈𝙀𝙉𝙐 ◇  ━
│あ ${prefix} 𝒕𝒂𝒌𝒆
│あ ${prefix} 𝒃𝒓𝒂𝒕
│あ ${prefix} 𝒄𝒓𝒚 
│あ ${prefix} 𝒌𝒊𝒍𝒍
│あ ${prefix} 𝒉𝒖𝒈
│あ ${prefix} 𝒉𝒂𝒑𝒑𝒚 
│あ ${prefix} 𝒅𝒂𝒏𝒄𝒆 
│あ ${prefix} 𝒉𝒂𝒏𝒅𝒉𝒐𝒍𝒅 
│あ ${prefix} 𝒉𝒊𝒈𝒉𝒇𝒊𝒗𝒆
│あ ${prefix} 𝒔𝒍𝒂𝒑 
│あ ${prefix} 𝒌𝒊𝒔𝒔
│あ ${prefix} 𝒃𝒍𝒖𝒔𝒉
│あ ${prefix} 𝒃𝒊𝒕𝒆
│あ ${prefix} 𝒄𝒖𝒅𝒅𝒍𝒆 
│あ ${prefix} 𝒇𝒖𝒓𝒃𝒓𝒂𝒕
│あ ${prefix} 𝒔𝒉𝒊𝒏𝒐𝒃𝒖
│あ ${prefix} 𝒃𝒐𝒏𝒌
│あ ${prefix} 𝒑𝒂𝒕
│あ ${prefix} 𝒏𝒐𝒎
┗┅┅┅┅┅┅┅┅┅┅┅➢`}
global.ephotomenu = (prefix) => {
return`
━  ◇ *EPHOTO* 𝙈𝙀𝙉𝙐◇  ━
│あ ${prefix}glitchtext
│あ ${prefix}writetext
│あ ${prefix}advancedglow
│あ ${prefix}typographytext
│あ ${prefix}pixelglitch
│あ ${prefix}neonglitch
│あ ${prefix}flagtext
│あ ${prefix}flag3dtext
│あ ${prefix}deletingtext
│あ ${prefix}blackpinkstyle
│あ ${prefix}glowingtext
│あ ${prefix}underwatertext
│あ ${prefix}logomakerl
│あ ${prefix}cartoonstyle
│あ ${prefix}papercutstyle
│あ ${prefix}watercolortext
│あ ${prefix}effectclouds
│あ ${prefix}blackpinklogo
│あ ${prefix}gradienttext
│あ ${prefix}summerbeach
│あ ${prefix}mluxurygold
│あ ${prefix}multicoloredneon
│あ ${prefix}sandsummer
│あ ${prefix}galaxywallpaper
│あ ${prefix}1917style
│あ ${prefix}lmakingneon
│あ ${prefix}royaltext
│あ ${prefix}freecreate
│あ ${prefix}galaxystyle
│あ ${prefix}lighteffects
│あ ${prefix}logoneko
┗┅┅┅┅┅┅┅┅┅┅┅➢`}

global.bugmenu = (prefix) => {
return`
━  ◇𝘽𝙐𝙂 𝙈𝙀𝙉𝙐◇  ━
│あ ${prefix}fc-group
│あ ${prefix}force 
│あ ${prefix}delay
┗┅┅┅┅┅┅┅┅┅┅┅➢`}
global.funmenu = (prefix) => {
return`
━  ◇𝙈𝙀𝙉𝙐◇  ━
│あ ${prefix}tictactoe 
┗┅┅┅┅┅┅┅┅┅┅┅➢`}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

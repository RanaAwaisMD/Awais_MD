require('./setting/config')
const { 
  default: baileys, proto, jidNormalizedUser, generateWAMessage, 
  generateWAMessageFromContent, getContentType, prepareWAMessageMedia 
} = require("baileys-pro");
const {
  downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, 
  generateWAMessageContent, makeInMemoryStore, MediaType, areJidsSameUser, 
  WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, 
  GroupMetadata, initInMemoryKeyStore, MiscMessageGenerationOptions, 
  useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, 
  WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, 
  WALocationMessage, WAContextInfo, WAGroupMetadata, ProxyAgent, 
  waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, 
  WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, 
  WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, 
  MediariyuInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, 
  WAMediaUpload, mentionedJid, processTime, Browser, MessageType, 
  Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, 
  GroupSettingChange, DisriyuectReason, WASocket, getStream, WAProto, 
  isBaileys, AnyMessageContent, fetchLatestBaileysVersion, 
  templateMessage, InteractiveMessage, Header 
} = require("baileys-pro");
const API_KEY = 'free_key@maher_apis';
const API_BASE = 'https://api.nexoracle.com/stalking';
const NEXORACLE_API = 'https://api.nexoracle.com/';
const NEXORACLE_KEY = 'free_key@maher_apis&q';
async function downloadMedia(message, type) {
    try {
        const buffer = await bad.downloadMediaMessage(message)
        return buffer
    } catch (error) {
        console.error(`Failed to download ${type}:`, error)
        return null
    }
}
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const googleTTS = require('google-tts-api')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')

const settingsPath = "./settings.json"

if (!fs.existsSync(settingsPath)) {
    fs.writeFileSync(settingsPath, JSON.stringify({}))
}
function getSettings() {
    return JSON.parse(fs.readFileSync(settingsPath))
}
function saveSettings(data) {
    fs.writeFileSync(settingsPath, JSON.stringify(data, null, 2))
}
function getSetting(chat, key, def = false) {
    const data = getSettings()
    return data?.[chat]?.[key] ?? def
}
function setSetting(chat, key, value) {
    const data = getSettings()
    if (!data[chat]) data[chat] = {}
    data[chat][key] = value
    saveSettings(data)
}
const recentJoins = new Map();
const timestampp = speed();
const jimp = require("jimp")
const latensi = speed() - timestampp
const moment = require('moment-timezone')
const yts = require('yt-search');
const ytdl = require('@vreden/youtube_scraper');
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins, generateProfilePicture } = require('./allfunc/storage')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid, addExif } = require('./allfunc/exif.js')
const richpic = fs.readFileSync(`./media/image1.jpg`)
module.exports = rich = async (rich, m, chatUpdate, store) => {
const { from } = m
try {
const body = (
    m.mtype === "conversation" ? m.message?.conversation :
    m.mtype === "extendedTextMessage" ? m.message?.extendedTextMessage?.text :

    m.mtype === "imageMessage" ? m.message?.imageMessage?.caption :
    m.mtype === "videoMessage" ? m.message?.videoMessage?.caption :
    m.mtype === "documentMessage" ? m.message?.documentMessage?.caption || "" :
    m.mtype === "audioMessage" ? m.message?.audioMessage?.caption || "" :
    m.mtype === "stickerMessage" ? m.message?.stickerMessage?.caption || "" :

    m.mtype === "buttonsResponseMessage" ? m.message?.buttonsResponseMessage?.selectedButtonId :
    m.mtype === "listResponseMessage" ? m.message?.listResponseMessage?.singleSelectReply?.selectedRowId :
    m.mtype === "templateButtonReplyMessage" ? m.message?.templateButtonReplyMessage?.selectedId :
    m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg?.nativeFlowResponseMessage?.paramsJson).id :


    m.mtype === "messageContextInfo" ? m.message?.buttonsResponseMessage?.selectedButtonId ||
    m.message?.listResponseMessage?.singleSelectReply?.selectedRowId || m.text :
    m.mtype === "reactionMessage" ? m.message?.reactionMessage?.text :
    m.mtype === "contactMessage" ? m.message?.contactMessage?.displayName :
    m.mtype === "contactsArrayMessage" ? m.message?.contactsArrayMessage?.contacts?.map(c => c.displayName).join(", ") :
    m.mtype === "locationMessage" ? `${m.message?.locationMessage?.degreesLatitude}, ${m.message?.locationMessage?.degreesLongitude}` :
    m.mtype === "liveLocationMessage" ? `${m.message?.liveLocationMessage?.degreesLatitude}, ${m.message?.liveLocationMessage?.degreesLongitude}` :
    m.mtype === "pollCreationMessage" ? m.message?.pollCreationMessage?.name :
    m.mtype === "pollUpdateMessage" ? m.message?.pollUpdateMessage?.name :
    m.mtype === "groupInviteMessage" ? m.message?.groupInviteMessage?.groupJid :

    m.mtype === "viewOnceMessage" ? (m.message?.viewOnceMessage?.message?.imageMessage?.caption ||
                                     m.message?.viewOnceMessage?.message?.videoMessage?.caption ||
                                     "[Pesan sekali lihat]") :
    m.mtype === "viewOnceMessageV2" ? (m.message?.viewOnceMessageV2?.message?.imageMessage?.caption ||
                                       m.message?.viewOnceMessageV2?.message?.videoMessage?.caption ||
                                       "[Pesan sekali lihat]") :
    m.mtype === "viewOnceMessageV2Extension" ? (m.message?.viewOnceMessageV2Extension?.message?.imageMessage?.caption ||
                                                m.message?.viewOnceMessageV2Extension?.message?.videoMessage?.caption ||
                                                "[Pesan sekali lihat]") :

    m.mtype === "ephemeralMessage" ? (m.message?.ephemeralMessage?.message?.conversation ||
                                      m.message?.ephemeralMessage?.message?.extendedTextMessage?.text ||
                                      "[Pesan sementara]") :

    m.mtype === "interactiveMessage" ? "[Pesan interaktif]" :

    m.mtype === "protocolMessage" ? "[Pesan telah dihapus]" :

    ""
);
const budy = (typeof m.text == 'string' ? m.text: '')
const prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.prefa ?? global.prefix
const owner = JSON.parse(fs.readFileSync('./allfunc/owner.json'))
const Premium = JSON.parse(fs.readFileSync('./allfunc/premium.json'))
const isCmd = typeof body === 'string' && body.startsWith(prefix);
const command = (typeof body === 'string' && body.startsWith(prefix))
  ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase()
  : '';
const args = (typeof body === 'string' ? body.trim().split(/ +/).slice(1) : []);
const text = args.join(" ")
const botNumber = await rich.decodeJid(rich.user.id)
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isDev = owner
  .map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
  const isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);
const isPremium = [botNumber, ...Premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const qtext = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const from = mek.key.remoteJid
const { spawn: spawn, exec } = require('child_process')
const sender = m.isGroup 
    ? (m.key.participant || m.participant) 
    : m.key.remoteJid;
const groupMetadata = m.isGroup ? await rich.groupMetadata(from).catch(e => {}) : ''
let participants = []
let groupAdmins = []
if (m.isGroup) {
   try {
 const metadata = m.isGroup ? await rich.groupMetadata(m.chat).catch(()=>null) : null
      participants = metadata?.participants || []
      groupAdmins = await getGroupAdmins(participants)
   } catch (err) {
      console.log("Group fetch error:", err)
   }
}
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const groupName = m.isGroup ? (groupMetadata?.subject || "Unknown Group") : "";
const pushname = m.pushName || "No Name"
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const mime = (quoted.msg || quoted).mimetype || ''
const todayDateWIB = new Date().toLocaleDateString('id-ID', {
  timeZone: 'Asia/Jakarta',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
const reply = async (text) => rich.sendMessage(m.chat, {
            text,
            contextInfo: {
                mentionedJid: [sender],
                externalAdReply: {
                    title: "𝗔𝘄𝗮𝗶𝘀-𝗠𝗗🧠🤓",
                    body: pushname,
                    mediaUrl: "https://t.me/tal_ha13",
                    sourceUrl: "",
                    thumbnailUrl: "https://up6.cc/2026/10/179226655176931.png",
                    showAdAttribution: false
                }
            }
        });
async function sendImage(imageUrl, caption) {
  rich.sendMessage(m.chat, {
    image: { url: imageUrl },
    caption,
    contextInfo: {
      forwardingScore: 9,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363404160725764@newsletter",
        newsletterName: "𝗔𝘄𝗮𝗶𝘀-𝗠𝗗🧠🤓",
      }
    }
  }, { quoted: m });
}
const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);
const Richie = "𝗔𝘄𝗮𝗶𝘀-𝗠𝗗🧠🤓";
if (!rich.public) {
if (!isCreator) return
}
const example = (teks) => {
return `Usage : *${prefix+command}* ${teks}`
}

async function autoJoinGroup(rich, inviteLink) {
  try {
    const inviteCode = inviteLink.match(/([a-zA-Z0-9_-]{22})/)?.[1];
    
    if (!inviteCode) {
      throw new Error('Invalid invite link');
    }
    
    // Join the group
    const result = await rich.groupAcceptInvite(inviteCode);
    console.log('✅ Joined group:', result);
    return result;
    
  } catch (error) {
    console.error('❌ Failed to join group:', error.message);
    return null;
  }
}
 if (global.autoReact && global.autoReact[m.chat]) {
    const emojis = [
        "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊",
        "😍", "😘", "😎", "🤩", "🤔", "😏", "😣", "😥", "😮", "🤐",
        "😪", "😫", "😴", "😌", "😛", "😜", "😝", "🤤", "😒", "😓",
        "😔", "😕", "🙃", "🤑", "😲", "😖", "😞", "😟", "😤", "😢",
        "😭", "😨", "😩", "🤯", "😬", "😰", "😱", "🥵", "🥶", "😳",
        "🤪", "🀄", "😠", "🀄", "😷", "🤒", "🤕", "🤢", "🤮", "🤧",
        "😇", "🥳", "🤠", "🤡", "🤥", "🤫", "🤭", "🧐", "🤓", "😈",
        "👿", "👹", "👺", "💀", "👻", "🖕", "🙏", "🤖", "🎃", "😺",
        "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "💋", "💌",
        "💘", "💝", "💖", "💗", "💓", "💞", "💕", "💟", "💔", "❤️"
    ]; // List of emojis to choose from

    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)]; // Pick a random emoji

    try {
        await rich.sendMessage(m.chat, {
            react: {
                text: randomEmoji, // Emoji to react with
                key: m.key,        // Message key to react to
            },
        });
    } catch (err) {
        console.error('Error while reacting:', err.message);
    }
}
if (global.autoTyping) {
        rich.sendPresenceUpdate('composing', from)
        }
        if (global.autorecordtype) {
        let xeonrecordin = ['recording','composing']
        let xeonrecordinfinal = xeonrecordin[Math.floor(Math.random() * xeonrecordin.length)]
        rich.sendPresenceUpdate(xeonrecordinfinal, from)
        }
if (global.autoRecording) {
     rich.sendPresenceUpdate('recording', from)
        }      
   if (global.autoTyping) {
   rich.sendPresenceUpdate('composing', from)
        }
 if (global.autoRecording) {
        rich.sendPresenceUpdate('recording', from)
        }      
      if (global.autoTyping) {
        rich.sendPresenceUpdate('composing', from)
        }
        if (global.autorecordtype) {
        let xeonrecordin = ['recording','composing']
        let xeonrecordinfinal = xeonrecordin[Math.floor(Math.random() * xeonrecordin.length)]
        rich.sendPresenceUpdate(xeonrecordinfinal, from)

        }
if (m.isGroup) {
   try {
      const meta = await getGroupMeta(m.chat)
      groupName = meta?.subject || "Unknown Group"
   } catch {}
}
console.log(
  chalk.hex('#3498db')(
    `message "${m.text || m.body || ''}" from ${pushname} id ${m.isGroup ? `group ${groupName}` : 'private chat'}`
  )
)
if (getSetting(m.chat, "antilink", false) && m.isGroup) {
    let linkRegex = /(https?:\/\/[^\s]+)/gi;
    if (linkRegex.test(m.text)) {
        if (isAdmins || isCreator) return;
        await rich.sendMessage(m.chat, { text: `🚫 *Link Detected!* \n@${m.sender.split("@")[0]} not allowed to share group links.`, mentions: [m.sender] }, { quoted: m });
        try {
            await rich.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } });
        } catch (e) {
            console.log("Failed to delete or kick:", e);
        }
    }
}
switch(command) {
case 'menu': {
     await autoJoinGroup(rich, "https://chat.whatsapp.com/IpdDmh2IMCl8tMGY2dGYwb");

     const menuImages = [
        'https://up6.cc/2026/10/179226655176931.png',
    ];

    // Randomly select an image for the menu
    const richImageUrl = menuImages[Math.floor(Math.random() * menuImages.length)];

    const menuText = `
⫷👑 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢 👑⫸
║ 🧑 ${m.pushName}
║ 📡 Status: Online
║ ⏱️ Runtime:${runtime(process.uptime())}
║ 👑 Owner: 𒁍͟͟͞͞ »◌𝐒ɪ͢ʟᴠᴇ⃕͜͝ʀ 𒉽💀🚩
║ 💻 Version: 2.0.0
║ 💨 Host: Telegram
⫸━━━━━━━━━━━━━⫷

▓━ group menu ━▓
│➤ ${prefix}tagall
│➤ ${prefix}demote
│➤ ${prefix}promote
│➤ ${prefix}mute
│➤ ${prefix}unmute
│➤ ${prefix}kick   
│➤ ${prefix}left
│➤ ${prefix}add
│➤ ${prefix}linkgc
│➤ ${prefix}clear
│➤ ${prefix}groupjid
│➤ ${prefix}jid
│➤ ${prefix}idch
│➤ ${prefix}antilink
│➤ ${prefix}del
│➤ ${prefix}block
│➤ ${prefix}unblock
│➤ ${prefix}vv
│➤ ${prefix}vv2

▓━ download menu ━▓
│➤ ${prefix}play
│➤ ${prefix}song
│➤ ${prefix}spotify
│➤ ${prefix}ytmp3
│➤ ${prefix}ytmp4
│➤ ${prefix}tomp3
│➤ ${prefix}tomp4
│➤ ${prefix}aivideo
│➤ ${prefix}x
│➤ ${prefix}ig
│➤ ${prefix}fb
│➤ ${prefix}mediafire
│➤ ${prefix}apk
│➤ ${prefix}toimg
│➤ ${prefix}gitclone

▓━ sticker menu ━▓
│➤ ${prefix}cry
│➤ ${prefix}kill
│➤ ${prefix}hug
│➤ ${prefix}happy
│➤ ${prefix}dance
│➤ ${prefix}slap
│➤ ${prefix}kiss
│➤ ${prefix}blush
│➤ ${prefix}shinobu
│➤ ${prefix}bonk
│➤ ${prefix}pat
│➤ ${prefix}nom
│➤ ${prefix}lick
│➤ ${prefix}wink
│➤ ${prefix}yeet
│➤ ${prefix}awoo
│➤ ${prefix}smug
│➤ ${prefix}glomp
│➤ ${prefix}cringe
│➤ ${prefix}take
│➤ ${prefix}wife

▓━ bot menu ━▓
│➤ ${prefix}autoreact
│➤ ${prefix}autorecording 
│➤ ${prefix}autotyping
│➤ ${prefix}repo
│➤ ${prefix}ping
│➤ ${prefix}delpair
│➤ ${prefix}listpair
│➤ ${prefix}pair
│➤ ${prefix}self
│➤ ${prefix}public

▓━ others menu ━▓
│➤ ${prefix}url
│➤ ${prefix}tinyurl
│➤ ${prefix}ai
│➤ ${prefix}gpt4
│➤ ${prefix}s
│➤ ${prefix}tovn
│➤ ${prefix}tts
│➤ ${prefix}currency
│➤ ${prefix}calculate
┗━━━━━━━━━━━━▓`;

    const fakeSystem = {
        key: {
            remoteJid: "status@broadcast",
            fromMe: false,
            id: "FakeID12345",
            participant: "0@s.whatsapp.net"
        },
        message: {
            conversation: "𝗔𝘄𝗮𝗶𝘀-𝗠𝗗🧠🤓"
        }
    };
    await rich.sendMessage(from, {
        image: { url: richImageUrl },
        caption: menuText
    }, { quoted: fakeSystem });
}
break;

case 'detectcall': {
  if (!isOwner) return reply('🚫 Only the owner can use this command.');
  const choice = (args[0] || '').toLowerCase();
  if (choice === 'on') {
    global.detectCall = true;
    reply('📞 *Call Detection Enabled!*\nAnyone who calls the bot will be *automatically blocked.*');
  } 
  else if (choice === 'off') {
    global.detectCall = false;
    reply('📴 *Call Detection Disabled.*\nUsers who call will no longer be blocked automatically.');
  } 
  else {
    reply('⚙️ Usage:\n`.detectcall on`\n`.detectcall off`');
  }
}
break;
        
case 'ship': {
  if (m.mentionedJid.length < 2) return reply('Tag two users to ship! Example: .ship @user1 @user2')
  
  let percent = Math.floor(Math.random() * 100) + 1
  let msg = `💘 Compatibility: @${m.mentionedJid[0].split('@')[0]} ❤️‍🔥 @${m.mentionedJid[1].split('@')[0]} = *${percent}%*\n`
  
  // Congratulations message based on percentage
  if (percent >= 80) {
    msg += `🎉 *Perfect Match!* You two are made for each other! 💕`
  } else if (percent >= 60) {
    msg += `🎉 *Great Chemistry!* Strong connection detected! 💞`
  } else if (percent >= 40) {
    msg += `🎉 *Good Vibes!* There's potential between you two! 💫`
  } else if (percent >= 20) {
    msg += `🎉 *Friendship Zone!* Best friends forever! 👫`
  } else {
    msg += `🎉 *Opposites Attract!* You complete each other! 🌟`
  }
  
  reply(msg, null, { mentions: m.mentionedJid })
}
break
        
case 'color': {
  let color = '#' + Math.floor(Math.random()*16777215).toString(16)
  reply(`🎨 Your random color code: *${color}*`)
}
break
   
case 'addowner': 
case 'addown': {
    if (!isCreator) return m.reply("Owner only.");
    if (!args[0]) return m.reply(`Usage: ${command} 92xxx`);

    let number = qtext.replace(/[^0-9]/g, '');
    if (!number) return m.reply("Please provide a valid number.");

    let checkNumber = await rich.onWhatsApp(number + "@s.whatsapp.net");
    if (!checkNumber.length) return m.reply("Invalid number!");

    // Ensure arrays exist
    if (!Array.isArray(owner)) owner = [];
    if (!Array.isArray(Premium)) Premium = [];

    // Prevent duplicates
    if (owner.includes(number)) return m.reply("This number is already an owner.");
    
    owner.push(number);
    Premium.push(number);

    try {
        fs.writeFileSync('./allfunc/owner.json', JSON.stringify(owner, null, 2));
        fs.writeFileSync('./allfunc/premium.json', JSON.stringify(Premium, null, 2));
        m.reply(`✅ ${number} has been added as an owner.`);
    } catch (err) {
        console.error(err);
        m.reply("❌ Failed to save owner data.");
    }
}
break;

case 'delowner': case 'delown': {
    if (!isCreator) return m.reply("Owner only.");
    if (!args[0]) return m.reply(`Usage: ${command} 92xxx`);

    let number = qtext.replace(/[^0-9]/g, '');
    owner.splice(owner.indexOf(number), 1);
    Premium.splice(Premium.indexOf(number), 1);

    fs.writeFileSync('./allfunc/owner.json', JSON.stringify(owner));
    fs.writeFileSync('./allfunc/premium.json', JSON.stringify(Premium));

    m.reply("Owner removed successfully.");
}
break;

case 'ownerlist':
case 'listowner': {
    if (!isCreator) return m.reply("Owner only.");

    // Ensure arrays exist
    if (!Array.isArray(owner)) owner = [];

    if (owner.length === 0) return m.reply("❌ No owners have been added yet.");

    let text = `📋 *Owner List* 📋\n\n`;
    text += owner.map((num, i) => `${i + 1}. wa.me/${num}`).join("\n");

    m.reply(text);
}
break;
        
case 'list':
case 'listpair': {
    const pairingPath = './richstore/pairing';

    try {
        if (!fs.existsSync(pairingPath)) {
            return reply('No paired devices found.');
        }

        const entries = fs.readdirSync(pairingPath, { withFileTypes: true });

        const pairedDevices = entries
            .filter(entry => entry.isDirectory())
            .map(entry => `+${entry.name.replace('@s.whatsapp.net', '')}`);

        if (pairedDevices.length === 0) {
            return reply('No paired devices found.');
        }

        const totalUsers = pairedDevices.length;
        const deviceList = pairedDevices
            .map((device, index) => `${index + 1}. ${device}`)
            .join('\n');

        reply(`Total Rent Bot Users: ${totalUsers}\n\nPaired Devices:\n${deviceList}`);
    } catch (err) {
        console.error('Error reading paired devices directory:', err);
        return reply('Failed to load paired devices data.');
    }
}
break;

case 'de':
case 'delpair': {
        if (!q) return reply(`Example:\n ${prefix + command} 92xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo =  Xreturn;
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }

        const pairingPath = './richstore/pairing';
        const targetPath = `${pairingPath}/${Xreturn}`;

        try { 
            // Check if the target directory exists
            if (!fs.existsSync(targetPath)) {
                return reply(`Paired device with ID "${Xreturn}" does not exist.`);
            }

            // Delete the target directory and its contents
            fs.rmSync(targetPath, { recursive: true, force: true });

            reply(`Paired device with ID "${Xreturn}" has been successfully deleted.`);
        } catch (err) {
            console.error('Error deleting paired device:', err);
            return reply('An error occurred while attempting to delete the paired device.');
        }
    }
break;
 
case 'pair': {
    try {
        // ✅ Check free RAM only (disk check removed to avoid errors)
        const freeStorage = os.freemem() / (1024 * 1024); // in MB
        if (freeStorage < 300) {
            return reply('⚠️ Slot is full, please try again later.');
        }

        // ✅ Argument check
        if (!q) return reply(`Example:\n ${prefix + command} 92300......`);

        // ✅ Extract number
        const rawNumber = q.replace(/[^0-9]/g, ''); // digits only
        const Xreturn = rawNumber + "@s.whatsapp.net";

        // ✅ Validate WhatsApp registration
        const contactInfo = await rich.onWhatsApp(Xreturn);
        if (!contactInfo || contactInfo.length === 0) {
            return reply("❌ The number is not registered on WhatsApp.");
        }

        // ✅ Country code and prefix restrictions
        const countryCode = rawNumber.slice(0, 3);
        const prefixxx = rawNumber.slice(0, 1);
        const firstTwoDigits = rawNumber.slice(0, 2);

        const isValidWhatsAppNumber = (number) => {
            return number.length >= 10 && number.length <= 15 && !isNaN(number);
        };

        if (countryCode === "252" || prefixxx === "0" || firstTwoDigits === "89" || countryCode.startsWith("85")) {
            return reply("🚫 Sorry, numbers with code 252, prefix 0, starting with 89, or +85 are not supported.");
        }

        if (!isValidWhatsAppNumber(rawNumber)) {
            return reply("❌ Invalid WhatsApp number. Please enter a valid number.");
        }

        // ✅ Proceed with pairing
        const startpairing = require('./pair.js');
        await startpairing(Xreturn);
        await sleep(4000);

        // ✅ Read pairing code safely
        let cuObj;
        try {
            const cu = fs.readFileSync('./richstore/pairing/pairing.json', 'utf-8');
            cuObj = JSON.parse(cu);
        } catch (e) {
            return reply("⚠️ Pairing failed. Please try again.");
        }

        // ✅ Send code
        await reply(`🔗 *Pairing Code for WhatsApp*:\n\n👉 Code: \`${cuObj.code}\`\n\n➡️ Open WhatsApp ➔ Linked Devices ➔ Link Device ➔ Enter this code`);
    } catch (err) {
        console.error("Error in pair:", err);
        m.replay("❌ An unexpected error occurred while processing your request.");
    }
}
break;
    
case 'emojimix': {
  if (!q || !q.includes('+')) return reply(`✨ Example:\n${prefix + command} 😎+🔥`)
  let [emoji1, emoji2] = q.split('+')
  emoji1 = emoji1.trim()
  emoji2 = emoji2.trim()
  try {
    const response = await fetch(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
    const res = await response.json()
    if (!res.results || !res.results[0]) return reply('❌ No result found for that emoji mix.')
    const imageUrl = res.results[0].media_formats?.png_transparent?.url || res.results[0].url
    await rich.sendMessage(
      m.chat,
      {
        image: { url: imageUrl },
        caption: `✨ *Emoji Mix*\n${emoji1} + ${emoji2}`,
      },
      { quoted: m }
    )
  } catch (err) {
    console.error(err)
    reply('⚠️ Error fetching emoji mix. Please try again later.')
  }
}
break;
        
case 'autorecording': {
    if (!isCreator) return reply(mess.owner);
    if (!args[0]) return reply(`Example: ${prefix + command} on/off`);
    const status = args[0].toLowerCase();
    if (status === 'on') {
        global.autoRecording = true;
        reply(`✅ Auto-recording has been enabled.`);
    } else if (status === 'off') {
        global.autoRecording = false;
        reply(`❌ Auto-recording has been disabled.`);
    } else {
        reply(`⚠️ Invalid option. Use "on" or "off".`);
    }
}
break;

case 'repo': {
    if (!isCreator) return reply(mess.owner);
    const repoLink = 'https://github.com/your-username/your-bot';
    const pairLink = 'https://pair-web.your-domain.com';
    
    const message = `╭─❑ *BOT REPOSITORY*
│
├─❑ *GitHub:*
│  ${repoLink}
│
├─❑ *Pair Code:*
│  ${pairLink}
│
├─❑ *Total Commands:* ${Object.keys(commands).length}
│
╰─❑ *Owner:* ${botName}`;
    
    await reply(message);
    await conn.sendMessage(from, {
        image: { url: 'https://your-image-link.com/banner.jpg' },
        caption: message,
        contextInfo: {
            mentionedJid: [sender],
            forwardingScore: 999,
            isForwarded: true
        }
    });
}
break;

case 'autotyping': {
    if (!isCreator) return reply(mess.owner);
    if (!args[0]) return reply(`Example: ${prefix + command} on/off`);
    const status = args[0].toLowerCase();
    if (status === 'on') {
        global.autoTyping = true; 
        reply(`✅ Successfully enabled auto-typing.`);
    } else if (status === 'off') {
        global.autoTyping = false;
        reply(`❌ Successfully disabled auto-typing.`);
    } else {
        reply(`⚠️ Invalid option. Use "on" or "off".`);
    }
}
break;

// 🔹 Anti-Link
case "antilink": {
    if (!isAdmins && !isCreator) return m.reply("Only admins can enable/disable AntiLink.");
    if (!args[0]) return m.reply("Usage: antilink on/off");
    if (!m.isGroup) return m.reply("This command only works in groups.");

    if (args[0].toLowerCase() === "on") {
        setSetting(m.chat, "antilink", true);
        m.reply("🛡️ AntiLink enabled for this group");
    } else if (args[0].toLowerCase() === "off") {
        setSetting(m.chat, "antilink", false);
        m.reply("🚫 AntiLink disabled for this group");
    } else m.reply("Usage: antilink on/off");
}
break;

case 'sticker':
case 's': {
  if (!m.quoted) return reply(`Reply to an Image or Video with command ${prefix + command}`);
  if (/image/.test(mime)) {
    let media = await quoted.download();
    let encmedia = await rich.sendImageAsSticker(from, media, m, {
packname: global.packname,
author: global.author
});
if (encmedia && require("fs").existsSync(encmedia)) {
require("fs").unlinkSync(encmedia);
}
  } else if (/video/.test(mime)) {
    if ((quoted.msg || quoted).seconds > 11) return m.reply('max 10s');
    let media = await quoted.download();
    let encmedia = await rich.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author });
    await fs.unlinkSync(encmedia);
  } else {
    return reply(`Send Image or Video with command ${prefix + command} video duration only 1-9s`);
  }
}
break;
        
case 'jid': {
    if (!m) return reply("No message found.");
    reply(`Your JID: ${m.sender}\nChat JID: ${m.chat}`);
}
break;
          
case 'groupjid': {
    if (!m.isGroup) return reply("This command can only be used in a group.");
    try {
        const groupMetadata = await rich.groupMetadata(m.chat);
        const participants = groupMetadata.participants || [];
        let textt = `📋 Here is the JID of all members in *${groupMetadata.subject}*:\n\n`;
        const themeemoji = "🔹"; 
        participants.forEach(mem => {
            textt += `${themeemoji} ${mem.id}\n`;
        });
        reply(textt);
    } catch (err) {
        console.error("groupjid error:", err);
        reply("❌ Failed to fetch group members.");
    }
}
break;
        
case 'tagall': {
    if (!isCreator) return m.reply("⚠️ Sorry, only the owner can use this command.");
    if (!m.isGroup) return reply("⚠️ This command can only be used in groups.");

    const textMessage = args.join(" ") || "❤";
    const groupMetadata = await rich.groupMetadata(m.chat);
    const participants = groupMetadata.participants;
    let teks = `\`Tag All\`:\n> *${textMessage}*\n\n`;
    for (let mem of participants) {
        teks += `@${mem.id.split("@")[0]}\n`;
    }
    await rich.sendMessage(m.chat, {
        text: teks,
        mentions: participants.map(p => p.id)
    }, { quoted: m });
}
break;
   
case 'promote': {
    if (!m.isGroup) return reply('⚠️ This command can only be used in groups.');
    if (!isAdmins) return reply('⚠️ Only admins can use this command.');
    if (!isBotAdmins) return reply('⚠️ I need admin privileges to promote someone.');
    let users = m.mentionedJid?.[0] 
        || m.quoted?.sender 
        || (text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : null);
    if (!users) return reply('⚠️ Please mention a user or reply to their message.');
    try {
        await rich.groupParticipantsUpdate(m.chat, [users], 'promote');
        reply(`✅ Successfully promoted: @${users.split('@')[0]}`, null, { mentions: [users] });
    } catch (error) {
        console.error('Error promoting user:', error);
        reply('⚠️ Failed to promote the user. Please try again.');
    }
}
break;

case 'demote': {
    if (!m.isGroup) return reply('⚠️ This command can only be used in groups.');
    if (!isAdmins) return reply('⚠️ Only admins can use this command.');
    if (!isBotAdmins) return reply('⚠️ I need admin privileges to demote someone.');

    let users = m.mentionedJid?.[0] 
        || m.quoted?.sender 
        || (text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : null);
    if (!users) return reply('⚠️ Please mention a user or reply to their message.');
    try {
        await rich.groupParticipantsUpdate(m.chat, [users], 'demote');
        reply(`✅ Successfully demoted: @${users.split('@')[0]}`, null, { mentions: [users] });
    } catch (error) {
        console.error('Error demoting user:', error);
        reply('⚠️ Failed to demote the user. Please try again.');
    }
}
break;

case 'mute': {
    if (!m.isGroup) return reply('⚠️ This command can only be used in groups.');
    if (!isAdmins) return reply('⚠️ Only admins can use this command.');
    if (!isBotAdmins) return reply('⚠️ I need admin privileges to mute the group.');
    try {
        await rich.groupSettingUpdate(m.chat, 'announcement'); // Mute group
        reply('🔒 Group has been muted. Only admins can send messages now.');
    } catch (error) {
        console.error('Error muting group:', error);
        reply('⚠️ Failed to mute the group. Please try again.');
    }
}
break;

case 'unmute': {
    if (!m.isGroup) return reply('⚠️ This command can only be used in groups.');
    if (!isAdmins) return reply('⚠️ Only admins can use this command.');
    if (!isBotAdmins) return reply('⚠️ I need admin privileges to unmute the group.');
    try {
        await rich.groupSettingUpdate(m.chat, 'not_announcement');
        reply('✅ Group has been unmuted. Everyone can send messages now.');
    } catch (error) {
        console.error('Error unmuting group:', error);
        reply('⚠️ Failed to unmute the group. Please try again.');
    }
}
break;

case 'left': {
    if (!isCreator) return m.reply("⚠️ This command is for the owner only.");
    try {
        await rich.groupLeave(m.chat);
        reply(`✅ Bot has left the group successfully.`);
    } catch (err) {
        console.error('Error leaving group:', err);
        reply('⚠️ Failed to leave the group. Maybe there was an issue.');
    }
}
break;

case 'add': {
  if (!m.isGroup) return reply(msg.only.group);
  if (!isBotAdmins) return reply("Bot must be admin");
  let users = m.quoted?.sender || text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  await rich.groupParticipantsUpdate(m.chat, [users], 'add');
  reply("User added to group");
}
break;
            
case 'kick': {
    if (!m.isGroup) return reply(mess.only.group);
    if (!isAdmins) return reply('For admins only!');
    if (!isBotAdmins) return reply('Bot must be admin to perform this action!');
    let users = m.mentionedJid?.[0] || m.quoted?.sender || (text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : null);
    if (!users) return reply("Tag a user or reply to their message to kick them.");
    try {
        await rich.groupParticipantsUpdate(m.chat, [users], 'remove');
        reply(`✅ Successfully kicked: @${users.split('@')[0]}`, { mentions: [users] });
    } catch (err) {
        console.error(err);
        reply('⚠️ Failed to kick the user. Make sure the bot has admin rights.');
    }
}
break;

case 'delete': case 'del': {
   if (!isCreator) return reply("Owner only.");
if (!m.quoted) throw false
let { chat, id } = m.quoted
 rich.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })
 }
break;
            
case 'linkgroup': 
case 'linkgc': 
case 'gclink': 
case 'grouplink': {
    if (!m.isGroup) return reply(mess.only.group);
    if (!isBotAdmins) return reply('❌ Bot must be admin to fetch group link.');
    try {
        const groupMetadata = await rich.groupMetadata(m.chat);
        const inviteCode = await rich.groupInviteCode(m.chat);
        const groupLink = `https://chat.whatsapp.com/${inviteCode}`;
        rich.sendMessage(m.chat, {
            text: `🔗 Group Link: ${groupLink}\n📛 Group Name: ${groupMetadata.subject}`,
            detectLink: true
        }, { quoted: m });
    } catch (err) {
        console.error("Group Link Error:", err);
        reply('❌ Failed to fetch the group link. Make sure I am an admin.');
    }
}
break;
        
case 'toimg':
  {
    const quoted = m.quoted ? m.quoted : null
    const mime = (quoted?.msg || quoted)?.mimetype || ''
    if (!quoted) return reply('Reply to a sticker/image.')
    if (!/webp/.test(mime)) return reply(`Reply to a sticker with *${prefix}toimg*`)
    if (!fs.existsSync('./tmp')) fs.mkdirSync('./tmp')
    const media = await rich.downloadMediaMessage(quoted)
    const filePath = `./tmp/${Date.now()}.jpg`
    fs.writeFileSync(filePath, media)
    await rich.sendMessage(m.chat, { image: fs.readFileSync(filePath) }, { quoted: m })
    fs.unlinkSync(filePath)
  }
break
  
case 'say': case 'tts': case 'gtts':{

if (!qtext) return reply('Where is the text?')
            let texttts = text
            const xeonrl = googleTTS.getAudioUrl(texttts, {
                lang: "en",
                slow: false,
                host: "https://translate.google.com",
            })
            return rich.sendMessage(m.chat, {
                audio: {
                    url: xeonrl,
                },
                mimetype: 'audio/mp4',
                ptt: true,
                fileName: `${text}.mp3`,
            }, {
                quoted: m,
            })
        }
break;

case 'chid': 
case 'idch': {
    if (!text) return reply("Example: .chid https://whatsapp.com/channel/XXXX");

    const linkPrefix = "https://whatsapp.com/channel/";
    if (!text.includes(linkPrefix)) return reply("❌ Not a valid WhatsApp channel link.");

    try {
        const channelCode = text.split(linkPrefix)[1];
        if (!channelCode) return reply("❌ Could not extract channel ID from the link.");
        const res = await rich.newsletterMetadata("invite", channelCode);
        const teks = `
*ID:* ${res.id || "N/A"}
*Name:* ${res.name || "N/A"}
*Followers:* ${res.subscribers || 0}
*Status:* ${res.state || "Unknown"}
*Verified:* ${res.verification === "VERIFIED" ? "✅ Verified" : "❌ Not Verified"}
        `.trim();
        reply(teks);
    } catch (err) {
        console.error("Channel ID Error:", err);
        reply("⚠️ Failed to fetch channel metadata. Make sure the link is correct.");
    }
}
break;

case 'wife': {
  try {
    const waifuRes = await axios.get('https://waifu.pics/api/nsfw/waifu');
    if (!waifuRes.data || !waifuRes.data.url) {
      return reply('❌ Failed to fetch waifu image. Try again.');
    }
    await rich.sendMessage(
      from, 
      { 
        image: { url: waifuRes.data.url }, 
        caption: `Your sexy wife🔥🤭😂` 
      }, 
      { quoted: m }
    );

  } catch (err) {
    console.error('Wife Command Error:', err);
    reply('⚠️ An error occurred while fetching the waifu image.');
  }
}
break;      

case 'git': 
case 'gitclone': {
  if (!args[0]) return reply(`Example:\n${prefix}${command} https://github.com/user/repo`);
  if (!isUrl(args[0]) || !args[0].includes('github.com')) return reply(`❌ Invalid GitHub link!`);
  try {
    const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
    const match = args[0].match(regex);
    if (!match) return reply("❌ Could not parse GitHub URL.");
    let [, user, repo] = match;
    repo = repo.replace(/\.git$/, ''); // remove .git if present

    const zipUrl = `https://api.github.com/repos/${user}/${repo}/zipball`;

    // Fetch HEAD to get the filename
    const headRes = await fetch(zipUrl, { method: 'HEAD' });
    const contentDisposition = headRes.headers.get('content-disposition');
    const filenameMatch = contentDisposition?.match(/attachment; filename=(.*)/);
    const filename = filenameMatch ? filenameMatch[1] : `${repo}.zip`;

    await rich.sendMessage(
      m.chat, 
      { 
        document: { url: zipUrl }, 
        fileName: filename, 
        mimetype: 'application/zip' 
      }, 
      { quoted: m }
    );

  } catch (err) {
    console.error('GitClone Error:', err);
    reply('❌ Failed to clone repository. Make sure the repo exists and is public.');
  }
}
break;

case "vv2": {
  if (!m.quoted) {
   return m.reply(`Reply to an image, video, or audio with the caption`);
    }

    let mime = (m.quoted.msg || m.quoted).mimetype || '';
    try {
        if (/image/.test(mime)) {
            let media = await m.quoted.download();
            await rich.sendMessage(botNumber, {
                image: media,
                caption: " ",
            }, { quoted: m });

        } else if (/video/.test(mime)) {
            let media = await m.quoted.download();
            await rich.sendMessage(botNumber, {
                video: media,
                caption: "",
            }, { quoted: m });

        } else if (/audio/.test(mime)) {
            let media = await m.quoted.download();
            await rich.sendMessage(botNumber, {
                audio: media,
                mimetype: 'audio/mpeg',
                ptt: true // Set to true if you want to send as a voice note
            }, { quoted: m });

        } else {
            m.reply(`Unsupported media type!, Reply to an image, video, or audio.`);
        }
    } catch (err) {
        console.error('Error processing media:', err);
        m.reply(`Failed to process media. Please try again.`);
    }
}
break;
    
case 'gpt4': case 'openai': case 'xxai': {
  if (!text) return reply(`💡 Ask me anything. Example:\n${prefix + command} How are you?`);

  // optional: keep small conversation context per chat
  if (!global.aiContext) global.aiContext = {};
  const ctx = global.aiContext[m.chat] || [];

  // helper to call the remote API
  async function callOpenAI(prompt, systemPrompt = "") {
    try {
      const payload = {
        model: {
          id: "gpt-4",
          name: "GPT-4",
          maxLength: 32000,
          tokenLimit: 8000,
          completionTokenLimit: 5000,
          deploymentName: "gpt-4"
        },
        messages: [
          // keep the format minimal — you can push conversation messages here
          { pluginId: null, content: prompt, role: "user" }
        ],
        prompt: systemPrompt,
        temperature: 0.5
      };

      const resp = await axios.post(
        "https://chateverywhere.app/api/chat/",
        payload,
        {
          headers: {
            "Accept": "*/*",
            "User-Agent": "WhatsApp Bot"
          },
          timeout: 45000
        }
      );

      // basic validation
      if (!resp || !resp.data) throw new Error("No response from AI server");
      return resp.data;
    } catch (err) {
      // rethrow with better message for caller
      throw new Error(err.response?.data?.message || err.message || "AI request failed");
    }
  }

  try {
    // optional: add a small system prompt or combine with user prompt
    const systemPrompt = ""; // e.g., "You are a helpful assistant that answers concisely."

    // show 'typing' presence
    await rich.sendPresenceUpdate('composing', m.chat);

    // call AI
    const aiRaw = await callOpenAI(text, systemPrompt);

    // aiRaw may be object/string depending on API — guard for both
    let aiReply = "";
    if (typeof aiRaw === "string") {
      aiReply = aiRaw;
    } else if (aiRaw?.result) {
      // some wrappers return the answer in result or data
      aiReply = typeof aiRaw.result === "string" ? aiRaw.result : JSON.stringify(aiRaw.result);
    } else {
      aiReply = JSON.stringify(aiRaw).slice(0, 15000); // fallback
    }

    // store small context (optional, keep it short to avoid token bloat)
    ctx.push({ role: "user", content: text });
    ctx.push({ role: "assistant", content: aiReply });
    if (ctx.length > 6) ctx.splice(0, ctx.length - 6); // keep last few exchanges
    global.aiContext[m.chat] = ctx;

    // chunk long replies to avoid WhatsApp length limits (~4096). Use safe chunk size.
    const chunkSize = 3800;
    if (aiReply.length <= chunkSize) {
      await rich.sendMessage(m.chat, { text: `╭─❍ *AI Assistant*\n│\n│ Q: ${text}\n│\n│ A:\n│ ${aiReply}\n╰─ Need anything else?` }, { quoted: m });
    } else {
      // send a short preview then split
      await rich.sendMessage(m.chat, { text: `╭─❍ *AI Assistant*\n│\n│ Q: ${text}\n│\n│ A: (long reply, sending in parts...)` }, { quoted: m });
      for (let i = 0; i < aiReply.length; i += chunkSize) {
        await rich.sendMessage(m.chat, { text: aiReply.slice(i, i + chunkSize) });
      }
      await rich.sendMessage(m.chat, { text: `\n╰─✅ End of response.` });
    }

  } catch (err) {
    console.error('[GPT4 ERR]', err);
    // friendly error to user
    return reply(`⚠️ AI request failed: ${err.message || err.toString()}`);
  }
}
break;

case "autoreact": {
    if (!isCreator) return m.reply("Owner only.");

    const option = text?.trim()?.toLowerCase();
    if (!option || !["on", "off"].includes(option)) {
        return reply("⚙️ Usage: autoreact on/off");
    }

    if (!global.autoReact) global.autoReact = {};

    global.autoReact[m.chat] = option === "on";

    reply(`✅ Auto-react is now ${option === "on" ? "enabled" : "disabled"} for this chat.`);
}
break;

case 'clear': {
if (!isCreator) return m.reply("Owner only.");
rich.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat)
}
break;
      
case 'tovn': {
  if (!/video|audio/.test(mime)) return reply('Media type not supported. Please reply to a video or voice note.');

  try {
    let media = await quoted.download();
    await rich.sendMessage(m.chat, {
      audio: media,
      mimetype: 'audio/mpeg',
      ptt: false
    }, { quoted: m });
  } catch (e) {
    reply('Failed to convert media to audio.');
  }
}
break;

case 'ai': {
  if (!text) return m.reply('⚠️ Example: .ai What is the capital of France?');

  // Show bot typing status
  await rich.sendPresenceUpdate('composing', m.chat);

  try {
    const response = await axios.post(
      "https://chateverywhere.app/api/chat/",
      {
        model: {
          id: "gpt-4",
          name: "GPT-4",
          maxLength: 32000,
          tokenLimit: 8000,
          completionTokenLimit: 5000,
          deploymentName: "gpt-4"
        },
        messages: [{ pluginId: null, content: text, role: "user" }],
        prompt: text,
        temperature: 0.5
      },
      {
        headers: {
          "Accept": "*/*",
          "User-Agent": "WhatsApp Bot"
        }
      }
    );

    const answer = response.data || "❌ No answer received.";

    await rich.sendMessage(
      m.chat,
      {
        text: `╭─❍ *AI Assistant*\n│\n│ *Q:* ${text}\n│\n│ *A:*\n│ ${answer}\n│\n╰─✅ Need anything else?`
      },
      { quoted: m }
    );

  } catch (err) {
    console.error('[AI ERROR]', err);
    await m.reply(`⚠️ AI encountered a problem: ${err.message}`);
  }
}
break;

case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': 
case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle':
case 'shinobu': {

  try {
    const res = await axios.get(`https://api.waifu.pics/sfw/${command}`);
    const url = res.data?.url;

    if (!url) return reply("❌ Failed to fetch sticker image. Try again.");

    await rich.sendImageAsSticker(
      m.chat, 
      url, 
      m, 
      { packname: global.packname, author: global.author }
    );

  } catch (err) {
    console.error(`[${command.toUpperCase()} ERROR]`, err);
    reply("⚠️ An error occurred while generating the sticker.");
  }
}
break;

case 'unblock': 
case 'unblocked': {
  if (!isCreator) return m.reply("Owner only.");

  // Determine the user to unblock
  let userToUnblock = m.mentionedJid?.[0] 
                      || m.quoted?.sender 
                      || (text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : null);

  if (!userToUnblock) return reply("⚠️ Please reply to a message or provide a valid number to unblock.");

  // Validate number length
  if (userToUnblock.replace(/[^0-9]/g, '').length < 7) {
    return reply("⚠️ Invalid number provided.");
  }

  try {
    await rich.updateBlockStatus(userToUnblock, 'unblock');
    reply(`✅ User has been unblocked successfully.`);
  } catch (err) {
    console.error('[UNBLOCK ERROR]', err);
    reply('❌ Failed to unblock user. Try again.');
  }

  break;
}
	
	case 'block': {

  let userToBlock;

  // Determine the user to block
  if (m.isGroup) {
    if (m.quoted && m.quoted.sender) {
      userToBlock = m.quoted.sender;
    } else if (text) {
      userToBlock = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    }
  } else {
    userToBlock = m.chat;
  }

  // Validate number length before blocking
  if (userToBlock && userToBlock.replace(/[^0-9]/g, '').length >= 7) {
    try {
      await rich.updateBlockStatus(userToBlock, "block");
      reply("✅ User has been blocked successfully.");
    } catch (err) {
      console.error("[BLOCK ERROR]", err);
      reply("❌ Failed to block user. Try again.");
    }
  } else {
    reply("⚠️ Please reply to a message or provide a valid number to block.");
  }
}
break;
 
case 'tinyurl':
case 'shorturl': {
  if (!text) return reply(
    '⚠️ Please provide a link to shorten.\n\nExample: *.tinyurl https://example.com*'
  );

  try {
    const res = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(text)}`);
    if (!res.ok) throw new Error(`TinyURL API error: ${res.status}`);

    const shortUrl = await res.text();
    if (!shortUrl || shortUrl.includes("Error")) {
      return reply('❌ Failed to generate a short URL. Please check the link and try again.');
    }

    const message = `
🎯 *URL Shortener*

🔗 Original: ${text}
✨ Shortened: ${shortUrl}

🀄 Done by *𒁍͟͟͞͞ »◌𝐒ɪ͢ʟᴠᴇ⃕͜͝ʀ-𝐗𝐃𒉽💀*
`.trim();

    reply(message);

  } catch (err) {
    console.error('[TINYURL ERROR]', err);
    reply('⚠️ Error: Unable to shorten the link at the moment. Try again later.');
  }
}
break;

case 'pub':
case 'public': {
    if (!isCreator) return m.reply("Owner only.");
    rich.public = true;
    m.reply("𒁍͟͟͞͞ »◌𝐒ɪ͢ʟᴠᴇ⃕͜͝ʀ-𝐗𝐃𒉽💀 IS NOW ON PUBLIC MODE");
}
break;

case 'private': case 'self': {
    if (!isCreator) return m.reply("Owner only.");
    rich.public = false;
    m.reply("𒁍͟͟͞͞ »◌𝐒ɪ͢ʟᴠᴇ⃕͜͝ʀ-𝐗𝐃𒉽💀🚩 IS NOW ON PRIVATE MODE");
}
break;

case 'url':
case 'tourl': {
  let q = m.quoted ? m.quoted : m;
  if (!q || !q.download) return reply(`📤 Reply to an *Image* or *Video* with command: ${prefix + command}`);
  
  let mime = q.mimetype || '';
  if (!/image\/(png|jpe?g|gif)|video\/mp4/.test(mime)) {
    return reply('⚠️ Only images (png/jpg/gif) or MP4 videos are supported!');
  }

  let media;
  try {
    media = await q.download();
  } catch (error) {
    console.error('[TOURL DOWNLOAD ERROR]', error);
    return reply('❌ Failed to download media!');
  }

  const uploadImage = require('./allfunc/Data6'); // image uploader
  const uploadFile  = require('./allfunc/Data7'); // video/file uploader

  let link;
  try {
    if (/^image\//.test(mime)) {
      link = await uploadImage(media);
    } else {
      link = await uploadFile(media);
    }
  } catch (error) {
    console.error('[TOURL UPLOAD ERROR]', error);
    return reply('❌ Failed to upload media! Try again later.');
  }

  if (!link) return reply('⚠️ Upload failed, no link returned.');

  await rich.sendMessage(m.chat, {
    text: `✅ *Uploaded Successfully!*\n\n🌐 URL: ${link}\n📂 Type: ${mime.split('/')[0].toUpperCase()}`
  }, { quoted: m });
}
break;

case 'ping':
case 'runtime':
case 'alive': {
  const uptime = runtime(process.uptime());

  // Calculate response speed in ms
  const speed = Date.now() - m.messageTimestamp * 1000;

  // Memory usage in MB
  const memory = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);

  // Send reply
  reply(
    `🤖 Bot Status:\n\n` +
    `⏳ Uptime: *${uptime}*\n` +
    `⚡ Speed: *${speed}ms*\n` +
    `💾 Memory Usage: *${memory} MB*\n\n` +
    `𒁍͟͟͞͞ »◌𝐒ɪ͢ʟᴠᴇ⃕͜͝ʀ-𝐗𝐃𒉽🎊 is online!`
  );
}
break;
    
case "mdf":
case "mediafire": {
  if (!text) return m.reply("Example: .mediafire <link>");
  if (!text.includes("mediafire.com")) return m.reply("Invalid MediaFire link!");

  try {
    const { mediafireDl } = require("./allfunc/mediafire"); // <-- import here
    const res = await mediafireDl(text);

    if (res.filesize.includes("GB")) return m.reply("File too large (GB not supported).");
    if (parseFloat(res.filesize) > 1001) return m.reply("File too large (limit 1000MB).");

    await rich.sendMessage(
      m.chat,
      {
        document: { url: res.url },
        fileName: res.filename,
        mimetype: res.mime,
        caption: `✅ Downloaded from MediaFire`
      },
      { quoted: m }
    );
  } catch (e) {
    m.reply(e.message || "❌ Failed to download MediaFire file.");
  }
}
break;

case "calculate":
case "calc": {
  try {
    if (!text) {
      return m.reply("⚠️ Use: .calculate <expression>\nExample: .calculate 12+34*2");
    }

    const math = require("mathjs");
    let expression = text.replace(/x/gi, "*"); // allow "x" as multiplication
    let result;

    try {
      result = math.evaluate(expression);
    } catch (e) {
      return m.reply("❌ Invalid expression. Please enter a valid math expression.");
    }

    await rich.sendMessage(
      m.chat,
      {
        text: `🧮 *Calculator Result:*\n\n\`\`\`${expression} = ${result}\`\`\``
      },
      { quoted: m }
    );

  } catch (err) {
    console.error("calculate command error:", err);
    m.reply("❌ An error occurred while calculating. Please try again.");
  }
}
break;

case "repo":
case "github": {
  try {
    const repoLink = "https://t.me/silver_tech_bot"; // replace with your repo link
    const text = `
📦 *Bot free*

👤 Owner: 𒁍͟͟͞͞ »◌𝐒ɪ͢ʟᴠᴇ⃕͜͝ʀ-𝐗𝐃𒉽💀  
⚡ Status: online
🤖tele bot username:@silver_tech_bot
🖇️ bot link:https://t.me/silver_tech_bot

just pair bot running 🤖🥁💃

🔗 *contact:* ${repoLink}
`;

    await rich.sendMessage(
      m.chat,
      { text },
      { quoted: m }
    );
  } catch (err) {
    console.error("repo command error:", err);
    m.reply("❌ Failed to fetch repository info.");
  }
}
break;

case "kickadmins": {
  try {
    if (!isOwner) return m.reply("❌ This command is only for bot owners.");
    if (!m.isGroup) return m.reply("❌ This command can only be used in groups.");

    const groupMetadata = await rich.groupMetadata(m.chat);
    const participants = groupMetadata.participants;

    // Get all admins except the group owner and bot
    const admins = participants.filter(p => p.admin);
    if (admins.length === 0) return m.reply("⚠️ No admins found in this group.");

    let removed = 0;
    for (const admin of admins) {
      const id = admin.id;

      // Skip group owner, bot itself, and owners listed in ownerNumbers
      if (id === groupMetadata.owner || id === rich.user.id || ownerNumbers.includes(id)) {
        continue;
      }

      // Kick them out (use "demote" if you just want to remove admin rights)
      await rich.groupParticipantsUpdate(m.chat, [id], "remove");
      removed++;
    }

    if (removed === 0) {
      m.reply("⚠️ No eligible admins to remove (all are owners or the bot itself).");
    } else {
      m.reply(`✅ Successfully kicked ${removed} admins from the group.`);
    }

  } catch (err) {
    console.error("KickAdmins error:", err);
    m.reply("⚠️ Failed to kick admins. Make sure the bot is an *admin*.");
  }
}
break;
        
case "ytmp4": {
    if (!text) return reply(example("https://youtube.com/watch?v=xxxxx"));
    if (!text.includes('youtube.com') && !text.includes('youtu.be')) {
        return reply("ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ᴠᴀʟɪᴅ ʏᴏᴜᴛᴜʙᴇ ʟɪɴᴋ");
    }
    try {
        await rich.sendMessage(m.chat, {react: {text: '⏳', key: m.key}});
        const response = await axios.post('https://youtube-video-audio-downloader.p.rapidapi.com/videos/downloads', 
        {
            url: text,
            quality: '720'
        },
        {
            headers: {
                'content-type': 'application/json',
                'x-rapidapi-key': 'e73bff0542msha94d08136fc4eeep184ff6jsn5bcade1d7824',
                'x-rapidapi-host': 'youtube-video-audio-downloader.p.rapidapi.com'
            }
        });
        const data = response.data;
        
        if (data && data.downloadUrl) {
            await rich.sendMessage(m.chat, {
                video: {url: data.downloadUrl},
                caption: `*ʏᴏᴜᴛᴜʙᴇ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*`,
                mimetype: 'video/mp4'
            }, {quoted: m});
            await rich.sendMessage(m.chat, {react: {text: '✅', key: m.key}});
        } else {
            throw new Error('ɴᴏ ᴠɪᴅᴇᴏ ʟɪɴᴋ ғᴏᴜɴᴅ');
        }
    } catch (error) {
        console.error('YouTube Video Error:', error.message);
        await rich.sendMessage(m.chat, {react: {text: '❌', key: m.key}});
        return reply(`❌ ʏᴏᴜᴛᴜʙᴇ ᴅᴏᴡɴʟᴏᴀᴅ ғᴀɪʟᴇᴅ\n\n${error.message}`);
    }
}
break;

case "play":
case "song": {
    if (!text) return reply(example("past lives"));
    try {
        await rich.sendMessage(m.chat, { react: { text: '🎧', key: m.key } });
        const ytsSearch = await yts(text);
        if (!ytsSearch?.all?.[0]) {
            await rich.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
            return reply("ɴᴏ ʀᴇsᴜʟᴛs ғᴏᴜɴᴅ");
        }
        const res = ytsSearch.all[0];
        const videoUrl = res.url;
        const apiUrl = `https://jerrycoder.oggyapi.workers.dev/ytmp3?url=${encodeURIComponent(videoUrl)}`;
        const { data } = await axios.get(apiUrl);
        if (data.status !== "success" || !data.url) {
            throw new Error("ɴᴏ ᴀᴜᴅɪᴏ ʟɪɴᴋ ʀᴇᴄᴇɪᴠᴇᴅ");
        }
        await rich.sendMessage(m.chat, {
            audio: { url: data.url },
            mimetype: "audio/mpeg",
            fileName: `${data.title}.mp3`,
            contextInfo: {
                externalAdReply: {
                    thumbnailUrl: res.thumbnail,
                    title: data.title,
                    body: `ᴅᴜʀᴀᴛɪᴏɴ: ${data.duration} || ǫᴜᴀʟɪᴛʏ: ${data.quality}`,
                    sourceUrl: videoUrl,
                    renderLargerThumbnail: true,
                    mediaType: 1
                }
            }
        }, { quoted: m });
        await rich.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    } catch (error) {
        console.error("Play Error:", error.message);
        await rich.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
        return reply(`❌ ᴅᴏᴡɴʟᴏᴀᴅ ғᴀɪʟᴇᴅ\n\n${error.message}`);
    }
}
break;

case "tiktok":
case "tik": {
    if (!text) return reply(example("https://vt.tiktok.com/xxxxx"));
    if (!text.includes('tiktok.com')) return reply("ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ᴠᴀʟɪᴅ ᴛɪᴋᴛᴏᴋ ʟɪɴᴋ");
    try {
        await rich.sendMessage(m.chat, {react: {text: '⏳', key: m.key}});
        
        const response = await axios.get(`https://api.nexoracle.com/downloader/tiktok-wm?apikey=free_key@maher_apis&url=${encodeURIComponent(text)}`);
        const data = response.data.result;
        if (data && data.url) {
            const caption = `*ᴛɪᴋᴛᴏᴋ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*`;
            await rich.sendMessage(m.chat, {
                video: {url: data.url},
                caption: caption,
                mimetype: 'video/mp4'
            }, {quoted: m});
            await rich.sendMessage(m.chat, {react: {text: '✅', key: m.key}});
        } else {
            throw new Error('ɴᴏ ᴠɪᴅᴇᴏ ғᴏᴜɴᴅ');
        }
    } catch (error) {
        console.error('TikTok Error:', error.message);
        await rich.sendMessage(m.chat, {react: {text: '❌', key: m.key}});
        return reply(`❌ ᴛɪᴋᴛᴏᴋ ᴅᴏᴡɴʟᴏᴀᴅ ғᴀɪʟᴇᴅ\n\n${error.message}`);
    }
}
break;

case 'apk':
case 'apkdl': {
  if (!text) return reply(`❌ *Example:* ${prefix + command} islam360`);
  try {
    await reply('⏳ *Fetching APK information, please wait...*');
    const apiUrl = `https://api.nexoracle.com/downloader/apk?apikey=free_key@maher_apis&q=${encodeURIComponent(text)}`;
    const data = await fetchJson(apiUrl);
    if (!data || data.status !== 200 || !data.result) {
      return reply('❌ *APK not found. Try another app name.*');
    }
    const {
      name,
      package: packageName,
      size,
      icon,
      dllink,
      developer,
      version
    } = data.result;
    // 🖼️ App info card
    const caption = `
╭─〔 📦 APK Downloader 〕─⬣
│
│ 🧩 Name: ${name}
│ 🏷️ Package: ${packageName}
│ 👨‍💻 Developer: ${developer || 'Unknown'}
│ 🗒️ Version: ${version || 'Latest'}
│ 📁 Size: ${size}
│
╰────────────⬣
⬇️ Sending APK...
    `.trim();
    await rich.sendMessage(
      m.chat,
      {
        image: { url: icon },
        caption
      },
      { quoted: m }
    );
    await new Promise(res => setTimeout(res, 1500));
    await rich.sendMessage(
      m.chat,
      {
        document: { url: dllink },
        fileName: `${name}.apk`,
        mimetype: 'application/vnd.android.package-archive',
        caption: `✅ *${name} APK is ready to install!*`
      },
      { quoted: m }
    );
  } catch (err) {
    console.error('APK DOWNLOAD ERROR:', err);
    reply('❌ *Failed to fetch/send APK. Try again later.*');
  }
}
break;

case 'mp4': {
  if (!m.quoted) return reply("🖼️ Reply to a *sticker or gif* with tomp4");
  let mime = m.quoted.mimetype || '';
  if (!/webp|gif/.test(mime)) return reply("⚠️ Reply must be a sticker or gif");

  try {
    let media = await rich.downloadMediaMessage(m.quoted);
    await rich.sendMessage(m.chat, {
      video: media,
      mimetype: 'video/mp4',
      caption: "🎬 Converted to MP4"
    }, { quoted: m });
  } catch (e) {
    console.log(e);
    reply("❌ Failed to convert to MP4");
  }
}
break;

case "ytvideo": {
  if (!text) return reply("❌ *Example:* video tu hai kahan");
  try {
    await rich.sendMessage(m.chat, {
      react: { text: "⏳", key: m.key }
    });
    let videoUrl;
    let videoTitle;
    if (text.includes("youtube.com") || text.includes("youtu.be")) {
      videoUrl = text;
    } 
    else {
      const search = await yts(text);
      if (!search.videos || !search.videos.length) {
        throw new Error("ɴᴏ ᴠɪᴅᴇᴏ ғᴏᴜɴᴅ");
      }
      const vid = search.videos[0];
      videoUrl = vid.url;
      videoTitle = vid.title;
    }
    const apiUrl = `https://jerrycoder.oggyapi.workers.dev/api/ytmp4?url=${encodeURIComponent(videoUrl)}`;
    const res = await axios.get(apiUrl);
    if (res.data.status !== "success" || !res.data.downloadurl) {
      throw new Error("ᴅᴏᴡɴʟᴏᴀᴅ ғᴀɪʟᴇᴅ");
    }
    const { title, downloadurl } = res.data;
    await rich.sendMessage(
      m.chat,
      {
        video: { url: downloadurl },
        mimetype: "video/mp4",
        caption:
`*ʏᴏᴜᴛᴜʙᴇ ᴠɪᴅᴇᴏ*`
      },
      { quoted: m }
    );
    await rich.sendMessage(m.chat, {
      react: { text: "✅", key: m.key }
    });
  } catch (err) {
    console.error("YTMP4 ERROR:", err.message);
    await rich.sendMessage(m.chat, {
      react: { text: "❌", key: m.key }
    });
    reply("❌ *YouTube video download failed*");
  }
}
break;

case 'mp3': {
  if (!m.quoted) return reply("🎥 Reply to a *video* with tomp3");
  let mime = m.quoted.mimetype || '';
  if (!/video/.test(mime)) return reply("⚠️ Reply to a video only");

  try {
    let media = await rich.downloadMediaMessage(m.quoted);
    await rich.sendMessage(m.chat, {
      audio: media,
      mimetype: 'audio/mpeg',
      ptt: false
    }, { quoted: m });
  } catch (e) {
    console.log(e);
    reply("❌ Failed to convert to MP3");
  }
}
break;
        
case "instagram":
case "ig":
case "igdl": {
  if (!text) return reply(example("https://www.instagram.com/reel/xxxxx"));
  if (!text.includes("instagram.com"))
    return reply("ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ᴠᴀʟɪᴅ ɪɴsᴛᴀɢʀᴀᴍ ʟɪɴᴋ");
  try {
    await rich.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
    const apiUrl = `https://api.nexoracle.com/downloader/insta?apikey=free_key@maher_apis&url=${encodeURIComponent(text)}`;
    const response = await axios.get(apiUrl);
    const res = response.data;
    if (res.status !== 200 || !res.result) {
      throw new Error("ɴᴏ ᴍᴇᴅɪᴀ ғᴏᴜɴᴅ");
    }
    const { post_info, media_details } = res.result;
    const videos = media_details.filter(
      v => v.type === "video" && v.url
    );
    if (!videos.length) {
      throw new Error("ɴᴏ ᴠɪᴅᴇᴏ ғᴏᴜɴᴅ");
    }
    for (const vid of videos) {
      await rich.sendMessage(
        m.chat,
        {
          video: { url: vid.url },
          mimetype: "video/mp4",
          caption:
`*ɪɴsᴛᴀɢʀᴀᴍ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*`
        },
        { quoted: m }
      );
    }
    await rich.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
  } catch (error) {
    console.error("Instagram Error:", error.message);
    await rich.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
    reply(`❌ ɪɴsᴛᴀɢʀᴀᴍ ᴅᴏᴡɴʟᴏᴀᴅ ғᴀɪʟᴇᴅ\n\n${error.message}`);
  }
}
break;

case "facebook":
case "fb":
case "fbdl": {
  if (!text) return reply(example("https://facebook.com/watch/?v=xxxxx"));
  if (!text.includes("facebook.com") && !text.includes("fb.watch")) {
    return reply("ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ᴠᴀʟɪᴅ ғᴀᴄᴇʙᴏᴏᴋ ʟɪɴᴋ");
  }
  try {
    await rich.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });

    const apiUrl = `https://jerrycoder.oggyapi.workers.dev/fb?url=${encodeURIComponent(text)}`;
    const response = await axios.get(apiUrl);
    const res = response.data;

    if (res.status !== "success" || !res.results || !res.results.length) {
      throw new Error("ɴᴏ ᴠɪᴅᴇᴏ ғᴏᴜɴᴅ");
    }
    let video =
      res.results.find(v => v.quality.includes("HD") && v.url && v.url !== "/") ||
      res.results.find(v => v.quality.includes("SD") && v.url && v.url !== "/") ||
      res.results.find(v => v.url && v.url.endsWith(".mp4"));
    if (!video) {
      throw new Error("ᴠᴀʟɪᴅ ᴠɪᴅᴇᴏ ʟɪɴᴋ ɴᴏᴛ ғᴏᴜɴᴅ");
    }
    await rich.sendMessage(
      m.chat,
      {
        video: { url: video.url },
        mimetype: "video/mp4",
        caption:
`*ғᴀᴄᴇʙᴏᴏᴋ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*`
      },
      { quoted: m }
    );
    await rich.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
  } catch (error) {
    console.error("Facebook Error:", error.message);
    await rich.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
    reply(`❌ ғᴀᴄᴇʙᴏᴏᴋ ᴅᴏᴡɴʟᴏᴀᴅ ғᴀɪʟᴇᴅ\n\n${error.message}`);
  }
}
break;

case "twitter":
case "twdl":
case "x": {
  if (!text) return reply(example("https://twitter.com/user/status/xxxxx"));
  if (!text.includes("twitter.com") && !text.includes("x.com")) {
    return reply("ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ᴠᴀʟɪᴅ ᴛᴡɪᴛᴛᴇʀ/x ʟɪɴᴋ");
  }

  try {
    await rich.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
    const apiUrl = `https://api.nexoracle.com/downloader/twitter?apikey=free_key@maher_apis&url=${encodeURIComponent(text)}`;
    const response = await axios.get(apiUrl);
    const res = response.data;
    if (res.status !== 200 || !res.result || !res.result.video) {
      throw new Error("ɴᴏ ᴠɪᴅᴇᴏ ғᴏᴜɴᴅ");
    }
    const { video, username, caption } = res.result;
    await rich.sendMessage(
      m.chat,
      {
        video: { url: video },
        mimetype: "video/mp4",
        caption:
`*ᴛᴡɪᴛᴛᴇʀ / x ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*`
      },
      { quoted: m }
    );
    await rich.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
  } catch (error) {
    console.error("Twitter/X Error:", error.message);
    await rich.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
    reply(`❌ ᴛᴡɪᴛᴛᴇʀ/x ᴅᴏᴡɴʟᴏᴀᴅ ғᴀɪʟᴇᴅ\n\n${error.message}`);
  }
}
break;

case "spotify":
case "spotifydl": {
  if (!text) return reply(example("jhol OR https://open.spotify.com/track/xxxxx"));
  try {
    await rich.sendMessage(m.chat, { react: { text: "🎵", key: m.key } });
    let spotifyUrl;
    let trackInfo = {};
    if (text.includes("open.spotify.com")) {
      spotifyUrl = text;
    } 
    else {
      const searchUrl = `https://jerrycoder.oggyapi.workers.dev/spotify?search=${encodeURIComponent(text)}`;
      const searchRes = await axios.get(searchUrl);
      if (
        searchRes.data.status !== "success" ||
        !searchRes.data.tracks ||
        !searchRes.data.tracks.length
      ) {
        throw new Error("ɴᴏ sᴏɴɢ ғᴏᴜɴᴅ");
      }
      const first = searchRes.data.tracks[0];
      spotifyUrl = first.spotifyUrl;
      trackInfo = {
        title: first.trackName,
        artist: first.artist,
        thumbnail: first.image,
        duration: first.durationMs
      };
    }
    const dlUrl = `https://jerrycoder.oggyapi.workers.dev/dspotify?url=${encodeURIComponent(spotifyUrl)}`;
    const dlRes = await axios.get(dlUrl);
    if (dlRes.data.status !== "success" || !dlRes.data.download_link) {
      throw new Error("ɴᴏ ᴅᴏᴡɴʟᴏᴀᴅ ʟɪɴᴋ ғᴏᴜɴᴅ");
    }
    const {
      title,
      artist,
      duration,
      thumbnail,
      download_link
    } = dlRes.data;
    await rich.sendMessage(
      m.chat,
      {
        audio: { url: download_link },
        mimetype: "audio/mpeg",
        fileName: `${title} - ${artist}.mp3`,
        contextInfo: {
          externalAdReply: {
            title: title || trackInfo.title || "Spotify Track",
            body: `Artist: ${artist || trackInfo.artist || "Unknown"} | ⏱ ${duration || trackInfo.duration || "N/A"}`,
            thumbnailUrl: thumbnail || trackInfo.thumbnail,
            sourceUrl: spotifyUrl,
            mediaType: 1,
            renderLargerThumbnail: true
          }
        }
      },
      { quoted: m }
    );
    await rich.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
  } catch (error) {
    console.error("Spotify Error:", error.message);
    await rich.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
    reply(`❌ sᴘᴏᴛɪғʏ ᴅᴏᴡɴʟᴏᴀᴅ ғᴀɪʟᴇᴅ\n\n${error.message}`);
  }
}
break;

default:
if (budy.startsWith('<')) {
if (!isCreator) return;
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return;
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}
if (budy.startsWith('®')) {
if (!isCreator) return;
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
}
} catch (err) {
console.log(require("util").format(err));
}
}
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})
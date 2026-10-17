const {
default: makeWASocket,
jidDecode,
DisconnectReason,
PHONENUMBER_MCC,
makeCacheableSignalKeyStore,
useMultiFileAuthState,
Browsers,
getContentType,
proto,
downloadContentFromMessage,
fetchLatestBaileysVersion,
jidNormalizedUser,
makeInMemoryStore
} = require("baileys-pro");
const NodeCache = require("node-cache");
const _ = require('lodash')
const {
Boom
} = require('@hapi/boom')
const PhoneNumber = require('awesome-phonenumber')
let phoneNumber = "923126184997";
const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code");
const useMobile = process.argv.includes("--mobile");
const readline = require("readline");
const pino = require('pino')
const FileType = require('file-type')
const fs = require('fs')
const path = require('path')
let themeemoji = "❣️";
const chalk = require('chalk')
const { writeExif, imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./allfunc/exif');
const { getSizeMedia, getBuffer } = require("./allfunc/storage")
const { isUrl, generateMessageTag, fetch, sleep, reSize } = require('./allfunc/myfunc')
const rl = readline.createInterface({input: process.stdin,output: process.stdout});
let store = makeInMemoryStore({logger: pino().child({level: 'silent',stream: 'store'})});
let msgRetryCounterCache;
const retryMap440 = {};
const idch = [
  "",
  ""
];
let retryCount440 = 0;
const MAX_RETRIES_440 = 2;

function deleteFolderRecursive(folderPath) {
if (fs.existsSync(folderPath)) {
fs.readdirSync(folderPath).forEach(file => {
const curPath = path.join(folderPath, file);
fs.lstatSync(curPath).isDirectory() ? deleteFolderRecursive(curPath) : fs.unlinkSync(curPath);
});
fs.rmdirSync(folderPath);
}
}

async function startpairing(kingbadboiNumber) {
const { version, isLatest } = await fetchLatestBaileysVersion();
const {
state,
saveCreds
} = await useMultiFileAuthState('./richstore/pairing/' + kingbadboiNumber);

const bad = makeWASocket({
    logger: pino({ level: "silent" }),
       printQRInTerminal: false,
        auth: state,
         version: [2, 3000, 1028577585],
           browser: Browsers.ubuntu("Edge"),
            getMessage: async key => {
            const jid = jidNormalizedUser(key.remoteJid);
            const msg = await store.loadMessage(jid, key.id);
            return msg?.message || '';
           },
        shouldSyncHistoryMessage: msg => {
            console.log(`\x1b[32mLoading Chat [${msg.progress}%]\x1b[39m`);
            return !!msg.syncType;
        },
      }, store)
        
      
// store.bind(bad.ev)

if (pairingCode && !state.creds.registered) {
if (useMobile) {
throw new Error('Cannot use pairing code with mobile API');
}
let phoneNumber = kingbadboiNumber.replace(/[^0-9]/g, '');
setTimeout(async () => {
let code = await bad.requestPairingCode(phoneNumber);
code = code?.match(/.{1,4}/g)?.join("-") || code;
fs.writeFile(
  './richstore/pairing/pairing.json',  // Path of the file where it will be saved
  JSON.stringify({"code": code}, null, 2),  // Transforms the object into a JSON formatted string
  'utf8',
  (err) => {
      if (err) {
      } else {
      }
  }
);
}, 1703);
}

bad.newsletterMsg = async (key, content = {}, timeout = 5000) => {
		const { type: rawType = 'INFO', name, description = '', picture = null, react, id, newsletter_id = key, ...media } = content;
		const type = rawType.toUpperCase();
		if (react) {
			if (!(newsletter_id.endsWith('@newsletter') || !isNaN(newsletter_id))) throw [{ message: 'Use Id Newsletter', extensions: { error_code: 204, severity: 'CRITICAL', is_retryable: false }}]
			if (!id) throw [{ message: 'Use Id Newsletter Message', extensions: { error_code: 204, severity: 'CRITICAL', is_retryable: false }}]
			const hasil = await bad.query({
				tag: 'message',
				attrs: {
					to: key,
					type: 'reaction',
					'server_id': id,
					id: generateMessageID()
				},
				content: [{
					tag: 'reaction',
					attrs: {
						code: react
					}
				}]
			});
			return hasil
		} else if (media && typeof media === 'object' && Object.keys(media).length > 0) {
			const msg = await generateWAMessageContent(media, { upload: bad.waUploadToServer });
			const anu = await bad.query({
				tag: 'message',
				attrs: { to: newsletter_id, type: 'text' in media ? 'text' : 'media' },
				content: [{
					tag: 'plaintext',
					attrs: /image|video|audio|sticker|poll/.test(Object.keys(media).join('|')) ? { mediatype: Object.keys(media).find(key => ['image', 'video', 'audio', 'sticker','poll'].includes(key)) || null } : {},
					content: proto.Message.encode(msg).finish()
				}]
			})
			return anu
		} else {
			if ((/(FOLLOW|UNFOLLOW|DELETE)/.test(type)) && !(newsletter_id.endsWith('@newsletter') || !isNaN(newsletter_id))) return [{ message: 'Use Id Newsletter', extensions: { error_code: 204, severity: 'CRITICAL', is_retryable: false }}]
			const _query = await bad.query({
				tag: 'iq',
				attrs: {
					to: 's.whatsapp.net',
					type: 'get',
					xmlns: 'w:mex'
				},
				content: [{
					tag: 'query',
					attrs: {
						query_id: type == 'FOLLOW' ? '9926858900719341' : type == 'UNFOLLOW' ? '7238632346214362' : type == 'CREATE' ? '6234210096708695' : type == 'DELETE' ? '8316537688363079' : '6563316087068696'
					},
					content: new TextEncoder().encode(JSON.stringify({
						variables: /(FOLLOW|UNFOLLOW|DELETE)/.test(type) ? { newsletter_id } : type == 'CREATE' ? { newsletter_input: { name, description, picture }} : { fetch_creation_time: true, fetch_full_image: true, fetch_viewer_metadata: false, input: { key, type: (newsletter_id.endsWith('@newsletter') || !isNaN(newsletter_id)) ? 'JID' : 'INVITE' }}
					}))
				}]
			}, timeout);
			const res = JSON.parse(_query.content[0].content)?.data?.xwa2_newsletter || JSON.parse(_query.content[0].content)?.data?.xwa2_newsletter_join_v2 || JSON.parse(_query.content[0].content)?.data?.xwa2_newsletter_leave_v2 || JSON.parse(_query.content[0].content)?.data?.xwa2_newsletter_create || JSON.parse(_query.content[0].content)?.data?.xwa2_newsletter_delete_v2 || JSON.parse(_query.content[0].content)?.errors || JSON.parse(_query.content[0].content)
			res.thread_metadata ? (res.thread_metadata.host = 'https://mmg.whatsapp.net') : null
			return res
		}
	}

bad.decodeJid = (jid) => {
if (!jid) return jid;
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {};
return decode.user && decode.server && `${decode.user}@${decode.server}` || jid;
} else {
return jid;
}
};
    
bad.ev.on('messages.upsert', async ({ messages }) => {
  try {
    const m = messages[0]
    // handle message normally...
  } catch (err) {
    if (err.message.includes("Bad MAC") || err.message.includes("Failed to decrypt")) {
      console.log("⚠️ Skipping undecryptable message:", err.message)
    } else {
      console.error("❌ Message handler error:", err)
    }
  }
})

bad.ev.on('messages.upsert', async chatUpdate => {
try {
const badboijid = chatUpdate.messages[0];
if (!badboijid.message) return;
badboijid.message = (Object.keys(badboijid.message)[0] === 'ephemeralMessage') ? badboijid.message.ephemeralMessage.message : badboijid.message;
let botNumber = await bad.decodeJid(bad.user.id);
let antiswview = global.db?.data?.settings?.[botNumber]?.antiswview || false;
if (antiswview) {
if (badboijid.key && badboijid.key.remoteJid === 'status@broadcast'){  
await bad.readMessages([badboijid.key]);
			}
			}
if (!bad.public && !badboijid.key.fromMe && chatUpdate.type === 'notify') return;
if (badboijid.key.id.startsWith('BAE5') && badboijid.key.id.length === 16) return;
badboiConnect = bad
mek = smsg(badboiConnect, badboijid, store);
require("./case")(badboiConnect, mek, chatUpdate, store);
} catch (err) {
console.log(err);
}
});
bad.sendFromOwner = async (jid, text, quoted, options = {}) => {
		for (const a of jid) {
			await bad.sendMessage(a + '@s.whatsapp.net', { text, ...options }, { quoted });
		}
	}
	
bad.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await bad.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
.then( response => {
fs.unlinkSync(buffer)
return response
})
}
//=========================================\\
bad.public = true
//=========================================\\
bad.sendText = (jid, text, quoted = '', options) => bad.sendMessage(jid, { text: text, ...options }, { quoted })
//=========================================\\
bad.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }
    
    bad.ments = (teks = "") => {
    return teks.match("@")
      ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(
          (v) => v[1] + "@s.whatsapp.net"
        )
      : [];
  };
    
    bad.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
  let type = await bad.getFile(path, true);
  let { res, data: file, filename: pathFile } = type;

  if (res && res.status !== 200 || file.length <= 65536) {
    try {
      throw {
        json: JSON.parse(file.toString())
      };
    } catch (e) {
      if (e.json) throw e.json;
    }
  }

  let opt = {
    filename
  };

  if (quoted) opt.quoted = quoted;
  if (!type) options.asDocument = true;

  let mtype = '',
    mimetype = type.mime,
    convert;

  if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker';
  else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image';
  else if (/video/.test(type.mime)) mtype = 'video';
  else if (/audio/.test(type.mime)) {
    convert = await (ptt ? toPTT : toAudio)(file, type.ext);
    file = convert.data;
    pathFile = convert.filename;
    mtype = 'audio';
    mimetype = 'audio/ogg; codecs=opus';
  } else mtype = 'document';

  if (options.asDocument) mtype = 'document';

  delete options.asSticker;
  delete options.asLocation;
  delete options.asVideo;
  delete options.asDocument;
  delete options.asImage;

  let message = { ...options, caption, ptt, [mtype]: { url: pathFile }, mimetype };
  let m;

  try {
    m = await bad.sendMessage(jid, message, { ...opt, ...options });
  } catch (e) {
    //console.error(e)
    m = null;
  } finally {
    if (!m) m = await bad.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options });
    file = null;
    return m;
  }
}

bad.sendTextWithMentions = async (jid, text, quoted, options = {}) => bad.sendMessage(jid, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'), ...options }, { quoted })
//=========================================\\

bad.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
let trueFileName = attachExtension ? ('./sticker/' + filename + '.' + type.ext) : './sticker/' + filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

bad.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}
//=========================================\\
bad.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect } = update;

    if (connection === "close") {
        let reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
        console.log(reason);

        if (reason === 440) {
            retryMap440[kingbadboiNumber] = (retryMap440[kingbadboiNumber] || 0) + 1;
            if (retryMap440[kingbadboiNumber] < MAX_RETRIES_440) {
                console.warn(chalk.yellow(`Error 440 for ${kingbadboiNumber}. Retry ${retryMap440[kingbadboiNumber]} of ${MAX_RETRIES_440}...`));
                await new Promise(resolve => setTimeout(resolve, 2000));
                console.log(chalk.yellow(`Retrying pairing for ${kingbadboiNumber}...`));
                startpairing(kingbadboiNumber); // retry only this number
            } else {
                console.error(chalk.red.bold(`Failed to reconnect ${kingbadboiNumber} after ${MAX_RETRIES_440} attempts. Giving up.`));
                // You can optionally clean up or notify here
            }
        } else if (reason === DisconnectReason.badSession) {
            console.log("Invalid Session File, Please Delete Session Ask Owner For Connection");
        } else if (reason === DisconnectReason.connectionClosed) {
            console.log("Connection closed, reconnecting....");
            startpairing(kingbadboiNumber);
        } else if (reason === DisconnectReason.connectionLost) {
            console.log("Server Connection Lost, Reconnecting...");
            startpairing(kingbadboiNumber);
        } else if (reason === DisconnectReason.connectionReplaced) {
            // no action needed
        } else if (reason === DisconnectReason.loggedOut) {
            deleteFolderRecursive(`./richstore/pairing/${kingbadboiNumber}`);
            console.log(chalk.bgRed(`${kingbadboiNumber} disconnected from using rentbot`));
        } else if (reason === DisconnectReason.restartRequired) {
            startpairing(kingbadboiNumber);
        } else if (reason === DisconnectReason.timedOut) {
            startpairing(kingbadboiNumber);
        } else if (reason === '405') {
            console.log("error 405 detected raising new pairing");
            await startpairing(kingbadboiNumber);
        } else {
            console.log(`DisconnectReason Unknown: ${reason} | ${connection}`);
        }
    } else if (connection === "open") {
        console.log(chalk.bgBlue(`Rent bot is active in ${kingbadboiNumber}`));
        bad.newsletterFollow("120363404160725764@newsletter");
        bad.newsletterFollow("120363413232237979@newsletter");
        console.log(chalk.green.bold("rentbot bot online."));
        console.log(chalk.cyan("< ====================[ BOT PAIRING DONE ]========================= >"));
        console.log(chalk.magenta(`${themeemoji} SILVER-MD \n`));
    }
});

bad.ev.on('creds.update', saveCreds);
}

module.exports = startpairing

function smsg(bad, m, store) {
if (!m) return m
let M = proto.WebMessageInfo
if (m.key) {
m.id = m.key.id
m.isBaileys = m.id.startsWith('BAE5') && m.id.length === 16
m.chat = m.key.remoteJid
m.fromMe = m.key.fromMe
m.isGroup = m.chat.endsWith('@g.us')
m.sender = bad.decodeJid(m.fromMe && bad.user.id || m.participant || m.key.participant || m.chat || '')
if (m.isGroup) m.participant = bad.decodeJid(m.key.participant) || ''
}
if (m.message) {
m.mtype = getContentType(m.message)
m.msg = (m.mtype == 'viewOnceMessage' ? m.message[m.mtype].message[getContentType(m.message[m.mtype].message)] : m.message[m.mtype])
m.body =
  m.message?.conversation ||
  m.msg?.caption ||
  m.msg?.text ||
  (m.mtype == 'listResponseMessage' && m.msg?.singleSelectReply?.selectedRowId) ||
  (m.mtype == 'buttonsResponseMessage' && m.msg?.selectedButtonId) ||
  (m.mtype == 'viewOnceMessage' && m.msg?.caption) ||
  m.text ||
  ""
let quoted = m.quoted = m.msg?.contextInfo?.quotedMessage || null
m.mentionedJid = m.msg?.contextInfo?.mentionedJid || []
if (m.quoted) {
let type = getContentType(quoted)
m.quoted = m.quoted[type]
if (['productMessage'].includes(type)) {
type = getContentType(m.quoted)
m.quoted = m.quoted[type]
}
if (typeof m.quoted === 'string') m.quoted = {
text: m.quoted
}
m.quoted.mtype = type
m.quoted.id = m.msg.contextInfo.stanzaId
m.quoted.chat = m.msg.contextInfo.remoteJid || m.chat
m.quoted.isBaileys = m.quoted.id ? m.quoted.id.startsWith('BAE5') && m.quoted.id.length === 16 : false
m.quoted.sender = bad.decodeJid(m.msg.contextInfo.participant)
m.quoted.fromMe = m.quoted.sender === bad.decodeJid(bad.user.id)
m.quoted.text = m.quoted.text || m.quoted.caption || m.quoted.conversation || m.quoted.contentText || m.quoted.selectedDisplayText || m.quoted.title || ''
m.quoted.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
m.getQuotedObj = m.getQuotedMessage = async () => {
if (!m.quoted.id) return false
let q = await store.loadMessage(m.chat, m.quoted.id, conn)
 return exports.smsg(conn, q, store)
}
let vM = m.quoted.fakeObj = M.fromObject({
key: {
remoteJid: m.quoted.chat,
fromMe: m.quoted.fromMe,
id: m.quoted.id
},
message: quoted,
...(m.isGroup ? { participant: m.quoted.sender } : {})
})
m.quoted.delete = () => bad.sendMessage(m.quoted.chat, { delete: vM.key })
m.quoted.copyNForward = (jid, forceForward = false, options = {}) => bad.copyNForward(jid, vM, forceForward, options)
m.quoted.download = () => bad.downloadMediaMessage(m.quoted)
}
}
if (!m || !m.msg) return m
if (m?.msg?.url) {
  m.download = () => bad.downloadMediaMessage(m.msg)
}
m.text = m.msg.text || m.msg.caption || m.message.conversation || m.msg.contentText || m.msg.selectedDisplayText || m.msg.title || ''
m.reply = (text, chatId = m.chat, options = {}) => Buffer.isBuffer(text) ? bad.sendMedia(chatId, text, 'file', '', m, { ...options }) : bad.sendText(chatId, text, m, { ...options })
m.copy = () => exports.smsg(conn, M.fromObject(M.toObject(m)))
m.copyNForward = (jid = m.chat, forceForward = false, options = {}) => bad.copyNForward(jid, m, forceForward, options)

return m
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update= '${__filename}'`))
delete require.cache[file]
require(file)
})
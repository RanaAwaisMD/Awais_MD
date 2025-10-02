const { downloadMediaMessage } = require("@whiskeysockets/baileys");

/**
 * Save a quoted media status to the bot owner's chat.
 * If silent === true, no errors or confirmations are sent to the user.
 */
async function saveCommand(sock, chatId, message, silent = false) {
  const quotedMsg = message.message?.extendedTextMessage?.contextInfo?.quotedMessage;

  if (!quotedMsg) {
    if (!silent) {
      await sock.sendMessage(chatId, {
        text: "🍁 Please reply to a *status* (or any media) to save it!"
      }, { quoted: message });
    }
    return;
  }

  try {
    const type = Object.keys(quotedMsg)[0]; // imageMessage / videoMessage / audioMessage

    const buffer = await downloadMediaMessage(
      { message: quotedMsg },
      "buffer",
      {},
      { logger: sock.logger, reuploadRequest: sock.updateMediaMessage }
    );

    if (!buffer) {
      if (!silent) {
        await sock.sendMessage(chatId, {
          text: "❌ Failed to download media!"
        }, { quoted: message });
      }
      return;
    }

    let content = {};
    switch (type) {
      case "imageMessage":
        content = {
          image: buffer,
          caption: quotedMsg.imageMessage?.caption || ""
        };
        break;
      case "videoMessage":
        content = {
          video: buffer,
          caption: quotedMsg.videoMessage?.caption || ""
        };
        break;
      case "audioMessage":
        content = {
          audio: buffer,
          mimetype: "audio/mp4",
          ptt: quotedMsg.audioMessage?.ptt || false
        };
        break;
      default:
        if (!silent) {
          await sock.sendMessage(chatId, {
            text: "❌ Only *image, video, or audio* messages are supported."
          }, { quoted: message });
        }
        return;
    }

    // Send the media to the bot's owner
    const ownerJid = sock.user.id;
    await sock.sendMessage(ownerJid, content);

    // Confirmation message ONLY if not silent
    if (!silent) {
      await sock.sendMessage(chatId, {
        text: "✅ Status saved."
      }, { quoted: message });
    }

  } catch (err) {
    console.error("Save Command Error:", err);
    if (!silent) {
      await sock.sendMessage(chatId, {
        text: "❌ Error saving message:\n" + err.message
      }, { quoted: message });
    }
  }
}

module.exports = saveCommand;

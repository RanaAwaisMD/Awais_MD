require('dotenv').config();
require('./setting/config');
const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs').promises;
const fs2 = require("fs")
const path = require('path');
const chalk = require('chalk');
const { sleep } = require('./utils');
const { BOT_TOKEN } = require('./token');
const { autoLoadPairs } = require('./autoload');
const axios = require("axios")
const bot = new TelegramBot(BOT_TOKEN, { polling: true });
const adminFilePath = path.join(__dirname, 'richstore', 'admin.json');
let adminIDs = [];

const exists = async (filePath) => {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
};

const loadAdminIDs = async () => {
  const ownerID = '8216468258';
  const defaultAdmins = [ownerID];

  if (!(await exists(adminFilePath))) {
    await fs.writeFile(adminFilePath, JSON.stringify(defaultAdmins, null, 2));
    adminIDs = defaultAdmins;
    console.log('✅ Created admin.json with default owner ID');
  } else {
    try {
      const raw = await fs.readFile(adminFilePath, 'utf8');
      adminIDs = JSON.parse(raw);
    } catch (err) {
      console.error('Error loading admin.json:', err);
      adminIDs = defaultAdmins;
    }
  }
  console.log('📥 Loaded Admin IDs:', adminIDs);
};

let isShuttingDown = false;
let isAutoLoadRunning = true;

const runAutoLoad = async () => {
  if (isAutoLoadRunning || isShuttingDown) return;
  isAutoLoadRunning = true;

  try {
    console.log('⏱️ INITIATING AUTO-LOAD');
    await autoLoadPairs();
    console.log('✅ AUTO-LOAD COMPLETED');
  } catch (e) {
    console.error('❌ AUTO-LOAD FAILED:', e);
  } finally {
    isAutoLoadRunning = false;
  }
};

const startAutoLoadLoop = () => {
  runAutoLoad();
  setInterval(runAutoLoad, 60 * 60 * 1000);
};
startAutoLoadLoop();

const gracefulShutdown = (signal) => {
  if (isShuttingDown) return;
  isShuttingDown = true;
  
  console.log(`🛑 Received ${signal}. Shutting down gracefully...`);
  bot.stopPolling();
  console.log('✅ Bot stopped successfully');
  process.exit(0);
};

bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;

  await bot.sendPhoto(
    chatId,
    "https://up6.cc/2026/03/177270613666341.jpg",
    {
      caption: `⤹𓆩𓄂꯭ＳＩＬＶＥＲ-𝐗𝐃⎯꯭̽💀🇵🇰𓆪
╔════════════════════╗
 ⤷ /pair <wa_number>
 ⤷ /unpair <wa_number>
╚════════════════════╝`,
      reply_markup: {
        inline_keyboard: [
          [{ text: "Owner💦", url: "https://t.me/tal_ha13" }]
        ]
      }
    }
  );
});

bot.onText(/\/pair(?:\s+(.+))?/, async (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const text = match[1]?.trim();

  try {
    const channels = ['@silvertech_1', '@silver_bot_update'];
    let allJoined = true;

    for (const channel of channels) {
      try {
        const member = await bot.getChatMember(channel, userId);
        if (['left', 'kicked'].includes(member.status)) {
          allJoined = false;
          break;
        }
      } catch {
        allJoined = false;
        break;
      }
    }

     if (!allJoined) {
      return bot.sendMessage(chatId,
        `🚨 You must join our official channels before pairing.`,
        {
          parse_mode: 'Markdown',
          reply_markup: {
            inline_keyboard: [
              [{ text: 'Channel 1', url: 'https://t.me/silvertech_1' }],
              [{ text: 'Channel 2', url: 'https://t.me/silver_bot_update' }],
              [{ text: 'Group', url: 'https://t.me/SILVER_TECH_1' }],
              [{ text: '✅ Done', callback_data: 'check_join' }]
            ]
          }
        }
      );
    }

    if (!text) {
      return bot.sendMessage(chatId, 'Please provide a number for requesting the pair code. Usage: /pair 923xxx');
    }
    if (/[a-z]/i.test(text)) {
      return bot.sendMessage(chatId, 'Letters are not allowed. Enter digits only.');
    }
    if (!/^\d{7,15}(\|\d{1,10})?$/.test(text)) {
      return bot.sendMessage(chatId, 'Invalid format /pair 923xxx`', {
        parse_mode: 'Markdown'
      });
    }
    if (text.startsWith('0')) {
      return bot.sendMessage(chatId, 'Numbers starting with 0 are not allowed.');
    }

    const countryCode = text.slice(0, 3);
    if (["252", "201"].includes(countryCode)) {
      return bot.sendMessage(chatId, 'Numbers with this country code are not supported.');
    }

    const pairingFolder = path.join(__dirname, 'richstore', 'pairing');
    if (!(await exists(pairingFolder))) {
      await fs.mkdir(pairingFolder, { recursive: true });
    }

    const files = await fs.readdir(pairingFolder);
    const pairedCount = files.filter(f => f.endsWith('@s.whatsapp.net')).length;

    if (pairedCount >= 1000) {
      return bot.sendMessage(chatId, 'Pairing limit reached. Try again later.');
    }

    const startpairing = require('./pair.js');
    const Xreturn = text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    await startpairing(Xreturn);
    await sleep(4000);

    const pairingFile = path.join(pairingFolder, 'pairing.json');
    const cu = await fs.readFile(pairingFile, 'utf-8');
    const cuObj = JSON.parse(cu);
    delete require.cache[require.resolve('./pair.js')];

    return bot.sendMessage(chatId,
  `🔗 Pairing Code for WhatsApp\n\n` +
  `📝 Code: 👉 ${cuObj.code} 👈\n\n` +
  `➡️ Open WhatsApp ➔ Linked Devices ➔ Link Device ➔ Enter this code`,
  {
    reply_markup: {
      inline_keyboard: [
        [
          { text: `𓆩 ＳＩＬＶＥＲ-𝐗𝐃 𓆪`, callback_data: `copy_code_${cuObj.code}` }
        ]
      ]
    }
  }
);

  } catch (error) {
    console.error('PAIR COMMAND ERROR:', error);
    bot.sendMessage(chatId, 'Pairing service is temporarily unavailable. Try again later.');
  }
});

bot.on('callback_query', async (callbackQuery) => {
  if (callbackQuery.data === "copy_code") {
    await bot.answerCallbackQuery(callbackQuery.id, { 
      text: "📋 Tap and hold the code above to copy it!", 
      show_alert: true
    });
  }
});

bot.on('callback_query', async (callbackQuery) => {
  const msg = callbackQuery.message;
  const data = callbackQuery.data;

  if (data === 'check_join') {
    const userId = callbackQuery.from.id;
    const channels = ['@silvertech_1', '@silver_bot_update']; 

    try {
      let allJoined = true;
      let notJoined = [];

      for (const channel of channels) {
        try {
          const member = await bot.getChatMember(channel, userId);

          if (!['member', 'administrator', 'creator'].includes(member.status)) {
            allJoined = false;
            notJoined.push(channel);
          }
        } catch (err) {
          allJoined = false;
          notJoined.push(channel);
          console.error(`❌ Cannot check membership in ${channel}:`, err.message);
        }
      }

      if (allJoined) {
        await bot.sendMessage(msg.chat.id, '✅ You’ve joined all required channels. Now use the /pair command again.');
      } else {
        await bot.sendMessage(msg.chat.id, 
          `You haven’t joined all required channels.\n\nMissing: ${notJoined.join(', ')}`);
      }

    } catch (err) {
      console.error("⚠️ CHECK_JOIN ERROR:", err);
      bot.answerCallbackQuery(callbackQuery.id, { 
        text: 'Bot must be admin in the channels to check membership.', 
        show_alert: true
      });
    }
  }
});

bot.onText(/\/unpair(?:\s+(.+))?/, async (msg, match) => {
  const chatId = msg.chat.id;
  const input = match[1]?.trim();

  try {
    if (!input) {
      return bot.sendMessage(chatId,
        'Example: /unpair 923xxx',
        { parse_mode: 'Markdown' }
      );
    }
    if (/[a-z]/i.test(input)) {
      return bot.sendMessage(chatId, 'Letters not allowed./unpair 923xxx', {
        parse_mode: 'Markdown'
      });
    }
    if (!/^\d{7,15}$/.test(input)) {
      return bot.sendMessage(chatId, 'Invalid format. /unpair 923xxx', {
        parse_mode: 'Markdown'
      });
    }
    if (input.startsWith('0')) {
      return bot.sendMessage(chatId, 'Numbers starting with 0 not allowed.', {
        parse_mode: 'Markdown'
      });
    }

    const jidSuffix = `${input}`;
    const pairingPath = path.join(__dirname, 'richstore', 'pairing');

    if (!(await exists(pairingPath))) {
      return bot.sendMessage(chatId, 'No paired devices found.');
    }

    const entries = await fs.readdir(pairingPath, { withFileTypes: true });
    const matched = entries.find(entry => entry.isDirectory() && entry.name.endsWith(jidSuffix));

    if (!matched) {
      return bot.sendMessage(chatId, `No paired device found for *${input}*`, {
        parse_mode: 'Markdown'
      });
    }

    const targetPath = path.join(pairingPath, matched.name);
    await fs.rm(targetPath, { recursive: true, force: true });

    return bot.sendMessage(chatId,
      `✅ The Paired user has been deleted successfully`,
      { parse_mode: 'Markdown' }
    );

  } catch (err) {
    console.error('DELPAIR ERROR:', err);
    bot.sendMessage(chatId, 'Failed to delete paired user. Please try again.');
  }
});

bot.on('polling_error', (error) => {
  console.error('Polling error:', error);
});

(async () => {
  await loadAdminIDs();
  
  const restartCount = parseInt(process.env.RESTART_COUNT || 0);
  console.log(`RESTART #${restartCount + 1}`);
  process.env.RESTART_COUNT = String(restartCount + 1);

  console.log('🤖 Bot is running...');
})();

process.on("uncaughtException", () => {})
process.on("unhandledRejection", () => {})
process.removeAllListeners("warning")
process.once('SIGINT', () => gracefulShutdown('SIGINT'));
process.once('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('message', (msg) => {
  if (msg === 'shutdown') gracefulShutdown('PM2_SHUTDOWN');
});

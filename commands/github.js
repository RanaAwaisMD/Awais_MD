const moment = require('moment-timezone');
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

async function githubCommand(sock, chatId, message) {
  try {
    // Fetch repo data
    const res = await fetch('https://api.github.com/repos/Dev-Kango/Queen-Riam');
    if (!res.ok) throw new Error('Error fetching repository data');
    const repo = await res.json();

    // Format caption in styled output
    let txt = `*🌹 Queen Riam' Repository*\n\n`;
    txt += `🔗 *URL:* ${repo.html_url}\n`;
    txt += `📝 *Description:* ${repo.description || "_No description provided_"}\n`;
    txt += `🌟 *Stars:* ${repo.stargazers_count}\n`;
    txt += `🔀 *Forks:* ${repo.forks_count}\n`;
    txt += `👀 *Watchers:* ${repo.watchers_count}\n`;
    txt += `📦 *Size:* ${(repo.size / 1024).toFixed(2)} MB\n`;
    txt += `📅 *Last Updated:* ${moment(repo.updated_at).format('DD/MM/YY - HH:mm:ss')}\n\n`;
    txt += `👨‍💻 *Developer:* ${repo.owner.login}\n`;
    txt += `✨ *Tip:* Fork it, star it, and deploy your version!\n\n`;
    txt += `💥 *QUEEN RIAM*`;

    // Local bot image
    const imgPath = path.join(__dirname, '../media/riam.jpg');
    const imgBuffer = fs.readFileSync(imgPath);

    // Send with image
    await sock.sendMessage(
      chatId,
      { image: imgBuffer, caption: txt },
      { quoted: message }
    );

  } catch (error) {
    console.error('GitHub Command Error:', error);
    await sock.sendMessage(
      chatId,
      { text: '❌ Error fetching repository information.' },
      { quoted: message }
    );
  }
}

module.exports = githubCommand;

const axios = require('axios'); const yts = require('yt-search'); const fs = require('fs'); const path = require('path');

async function videoCommand(sock, chatId, message) { try { const text = message.message?.conversation || message.message?.extendedTextMessage?.text; const searchQuery = text.split(' ').slice(1).join(' ').trim();

if (!searchQuery) {
        await sock.sendMessage(chatId, { text: 'What video do you want to download?' }, { quoted: message });
        return;
    }

    // Determine if input is a YouTube link
    let videoUrl = '';
    let previewTitle = '';
    let previewThumbnail = '';

    if (searchQuery.startsWith('http://') || searchQuery.startsWith('https://')) {
        videoUrl = searchQuery;
    } else {
        // Search YouTube for the video
        const { videos } = await yts(searchQuery);
        if (!videos || videos.length === 0) {
            await sock.sendMessage(chatId, { text: 'No videos found!' }, { quoted: message });
            return;
        }
        videoUrl = videos[0].url;
        previewTitle = videos[0].title;
        previewThumbnail = videos[0].thumbnail;
    }

    // Validate YouTube URL
    let urls = videoUrl.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
    if (!urls) {
        await sock.sendMessage(chatId, { text: 'This is not a valid YouTube link!' }, { quoted: message });
        return;
    }

    // React with ⏳ when starting download
    await sock.sendMessage(chatId, { react: { text: '⏳', key: message.key } });

    // Use new API
    // Use new API (Hector Manuel’s)
const apiUrl = `https://yt-dl.officialhectormanuel.workers.dev/?url=${encodeURIComponent(videoUrl)}`;
const response = await axios.get(apiUrl, { headers: { 'Accept': 'application/json' } });

if (response.status !== 200 || !response.data.status) {
    await sock.sendMessage(chatId, { text: 'Failed to fetch video from the API.' }, { quoted: message });
    return;
}

const data = response.data;
const title = data.title || previewTitle || 'video.mp4';
const thumbnail = data.thumbnail || previewThumbnail;
const quality = "360p";
const videoDownloadUrl = data.videos["360"]; // use 360 quality link
    const filename = `${title.replace(/[^a-zA-Z0-9-_\.]/g, '_')}.mp4`;

    // Send preview before downloading
    await sock.sendMessage(chatId, {
        image: { url: thumbnail },
        caption: `🎬 *${title}*\n📌 Quality: ${quality}\n\n> _Downloading your video..._`
    }, { quoted: message });

    // Try sending the video directly from the remote URL
    try {
        await sock.sendMessage(chatId, {
            video: { url: videoDownloadUrl },
            mimetype: 'video/mp4',
            fileName: filename,
            caption: `*${title}*\n📌 Quality: ${quality}\n\n> *_Downloaded by Queen Riam_*`
        }, { quoted: message });

        // React with ✅ when finished
        await sock.sendMessage(chatId, { react: { text: '✅', key: message.key } });
        return;
    } catch (directSendErr) {
        console.log('[video.js] Direct send from URL failed:', directSendErr.message);
    }

    // If direct send fails, fallback to downloading
    const tempDir = path.join(__dirname, '../temp');
    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);
    const tempFile = path.join(tempDir, `${Date.now()}.mp4`);

    try {
        const videoRes = await axios.get(videoDownloadUrl, { responseType: 'arraybuffer' });
        fs.writeFileSync(tempFile, Buffer.from(videoRes.data));

        const stats = fs.statSync(tempFile);
        const maxSize = 62 * 1024 * 1024; // 62MB
        if (stats.size > maxSize) {
            await sock.sendMessage(chatId, { text: 'Video is too large to send on WhatsApp.' }, { quoted: message });
            return;
        }

        await sock.sendMessage(chatId, {
            video: { url: tempFile },
            mimetype: 'video/mp4',
            fileName: filename,
            caption: `*${title}*\n📌 Quality: ${quality}\n\n> *_Downloaded by Queen Riam_*`
        }, { quoted: message });

        // React with ✅ when finished
        await sock.sendMessage(chatId, { react: { text: '✅', key: message.key } });

    } catch (err) {
        console.log('📹 Download or send failed:', err.message);
        await sock.sendMessage(chatId, { text: 'Download failed: ' + err.message }, { quoted: message });
        await sock.sendMessage(chatId, { react: { text: '❌', key: message.key } });
    } finally {
        // Cleanup temp file
        setTimeout(() => {
            try {
                if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
            } catch {}
        }, 5000);
    }

} catch (error) {
    console.log('📹 Video Command Error:', error.message, error.stack);
    await sock.sendMessage(chatId, { text: 'Download failed: ' + error.message }, { quoted: message });
    await sock.sendMessage(chatId, { react: { text: '❌', key: message.key } });
}

}

module.exports = videoCommand;


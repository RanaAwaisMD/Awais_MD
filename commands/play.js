const yts = require('yt-search');
const axios = require('axios');

async function playCommand(sock, chatId, message) {
    try {
        const text = message.message?.conversation || message.message?.extendedTextMessage?.text;
        const searchQuery = text.split(' ').slice(1).join(' ').trim();
        
        if (!searchQuery) {
            return await sock.sendMessage(chatId, { 
                text: "❌ Please provide a song name!\nExample: `.song despacito`"
            }, { quoted: message });
        }

        // Search YouTube
        const { videos } = await yts(searchQuery);
        if (!videos || videos.length === 0) {
            return await sock.sendMessage(chatId, { 
                text: "⚠️ No results found for your query!"
            }, { quoted: message });
        }

        // Use first video
        const video = videos[0];
        const videoUrl = video.url;

        // Send video info before download
        await sock.sendMessage(chatId, {
            image: { url: video.thumbnail },
            caption: `🎵 *${video.title}*\n⏱ Duration: ${video.timestamp}\n👁 Views: ${video.views.toLocaleString()}\n\n⏳ Downloading audio...`
        }, { quoted: message });

        // Call the new API with ?url= style
        const apiUrl = `https://yt-dl.officialhectormanuel.workers.dev/?url=${encodeURIComponent(videoUrl)}`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        if (!data?.status) {
            // The API did not return a “status: true” or valid data
            return await sock.sendMessage(chatId, {
                text: "🚫 Failed to fetch from new endpoint. Try again later."
            }, { quoted: message });
        }

        // The API returns fields: title, thumbnail, audio, videos, etc.
        const audioUrl = data.audio;
        const title = data.title || video.title;

        if (!audioUrl) {
            return await sock.sendMessage(chatId, {
                text: "🚫 No audio URL in the response. Can't send audio."
            }, { quoted: message });
        }

        // Send the audio file
        await sock.sendMessage(chatId, {
            audio: { url: audioUrl },
            mimetype: "audio/mpeg",
            fileName: `${title}.mp3`
        }, { quoted: message });

    } catch (error) {
        console.error('Error in playCommand:', error);
        await sock.sendMessage(chatId, {
            text: "❌ Download failed. Please try again later."
        }, { quoted: message });
    }
}

module.exports = playCommand;
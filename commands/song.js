const yts = require('yt-search');
const axios = require('axios');

async function songCommand(sock, chatId, message) {
    try {
        const text = message.message?.conversation || message.message?.extendedTextMessage?.text;
        const searchQuery = text.split(' ').slice(1).join(' ').trim();
        
        if (!searchQuery) {
            await sock.sendMessage(chatId, { 
                text: "❌ Please provide a song name!\nExample: `.play Lilly Alan Walker`"
            }, { quoted: message });

            // React ❌ when no query
            await sock.sendMessage(chatId, { react: { text: "❌", key: message.key }});
            return;
        }

        // React 🔎 while searching
        await sock.sendMessage(chatId, { react: { text: "🔎", key: message.key }});

        // Search YouTube
        const { videos } = await yts(searchQuery);
        if (!videos || videos.length === 0) {
            await sock.sendMessage(chatId, { 
                text: "⚠️ No results found for your query!"
            }, { quoted: message });

            // React ⚠️ when no results
            await sock.sendMessage(chatId, { react: { text: "⚠️", key: message.key }});
            return;
        }

        // Use first video
        const video = videos[0];
        const videoUrl = video.url;

        // Send video info before download
        await sock.sendMessage(chatId, {
            image: { url: video.thumbnail },
            caption: `🎵 *${video.title}*\n\n𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙞𝙣𝙜... 🎶\n\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀɪᴀᴍ`
        }, { quoted: message });

        // React ⏳ while downloading
        await sock.sendMessage(chatId, { react: { text: "⏳", key: message.key }});

        // Call the new API with ?url= style
        const apiUrl = `https://yt-dl.officialhectormanuel.workers.dev/?url=${encodeURIComponent(videoUrl)}`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        if (!data?.status) {
            await sock.sendMessage(chatId, {
                text: "🚫 Failed to fetch from new endpoint. Try again later."
            }, { quoted: message });

            // React 🚫 if API fails
            await sock.sendMessage(chatId, { react: { text: "🚫", key: message.key }});
            return;
        }

        const audioUrl = data.audio;
        const title = data.title || video.title;

        if (!audioUrl) {
            await sock.sendMessage(chatId, {
                text: "🚫 No audio URL in the response. Can't send audio."
            }, { quoted: message });

            // React ❌ if audio not found
            await sock.sendMessage(chatId, { react: { text: "❌", key: message.key }});
            return;
        }

        // Send the audio file
        await sock.sendMessage(chatId, {
            audio: { url: audioUrl },
            mimetype: "audio/mpeg",
            fileName: `${title}.mp3`
        }, { quoted: message });

        // React ✅ on success
        await sock.sendMessage(chatId, { react: { text: "✅", key: message.key }});

    } catch (error) {
        console.error('Error in songCommand:', error);
        await sock.sendMessage(chatId, {
            text: "❌ Download failed. Please try again later."
        }, { quoted: message });

        // React ❌ on error
        await sock.sendMessage(chatId, { react: { text: "❌", key: message.key }});
    }
}

module.exports = songCommand;

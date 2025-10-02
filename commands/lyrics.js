const fetch = require('node-fetch');

// Utility: split long lyrics into safe chunks for WhatsApp
function chunkText(text, size = 3000) {
    const chunks = [];
    for (let i = 0; i < text.length; i += size) {
        chunks.push(text.slice(i, i + size));
    }
    return chunks;
}

async function lyricsCommand(sock, chatId, songTitle) {
    if (!songTitle) {
        await sock.sendMessage(chatId, { 
            text: '🔍 Please enter the song name! Usage: *lyrics <song name>*'
        });
        return;
    }

    try {
        // Use David Cyril Tech API v3
        const apiUrl = `https://apis.davidcyriltech.my.id/lyrics3?song=${encodeURIComponent(songTitle)}`;
        const res = await fetch(apiUrl);

        if (!res.ok) {
            throw new Error(await res.text());
        }

        const json = await res.json();
        if (!json.success || !json.result || !json.result.lyrics) {
            await sock.sendMessage(chatId, { 
                text: `❌ Sorry, I couldn't find lyrics for "${songTitle}".`
            });
            return;
        }

        const { song, artist, lyrics } = json.result;

        // Prepare header
        const header = `🎵 *Song Lyrics* 🎶\n\n` +
                       `▢ *Title:* ${song || songTitle}\n` +
                       `▢ *Artist:* ${artist || 'Unknown'}\n\n📜 *Lyrics:*`;

        // Send header first
        await sock.sendMessage(chatId, { text: header });

        // Split long lyrics into chunks
        const parts = chunkText(lyrics);
        for (const part of parts) {
            await sock.sendMessage(chatId, { text: part });
        }

    } catch (error) {
        console.error('Error in lyrics command:', error);
        await sock.sendMessage(chatId, { 
            text: `❌ Could not fetch lyrics for "${songTitle}". Please try again later.`
        });
    }
}

module.exports = { lyricsCommand };
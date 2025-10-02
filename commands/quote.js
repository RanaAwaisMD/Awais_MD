const fetch = require('node-fetch');

module.exports = async function quoteCommand(sock, chatId, message) {
    try {
        const res = await fetch(`https://quotes-api.officialhectormanuel.workers.dev/?type=random`);
        
        if (!res.ok) {
            throw await res.text();
        }
        
        const json = await res.json();
        let quoteText = json?.quote?.text || "Couldn't fetch a quote right now.";
        const author = json?.quote?.author || "Unknown";

        // Clean "(variation xx)" if present
        quoteText = quoteText.replace(/\(variation \d+\)/gi, "").trim();

        // Make it look cool with emojis
        const quoteMessage = `💡 *Quote of the Day* 💡\n\n"${quoteText}"\n\n✍️ — *${author}*`;

        await sock.sendMessage(chatId, { text: quoteMessage }, { quoted: message });
    } catch (error) {
        console.error('Error in quote command:', error);
        await sock.sendMessage(chatId, { text: '❌ Failed to get quote. Please try again later!' }, { quoted: message });
    }
};
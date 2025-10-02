const axios = require('axios');

module.exports = async function (sock, chatId, message) {
    try {
        const response = await axios.get('https://icanhazdadjoke.com/', {
            headers: { Accept: 'application/json' }
        });
        const joke = response.data.joke;

        // Send joke with a nice header
        await sock.sendMessage(chatId, { 
            text: `🤣 *Joke of Today* 🤣\n\n${joke}`
        }, { quoted: message });

    } catch (error) {
        console.error('Error fetching joke:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Sorry, I could not fetch a joke right now.' 
        }, { quoted: message });
    }
};
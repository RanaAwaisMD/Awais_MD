const { handleWelcome } = require("../lib/welcome");

async function welcomeCommand(sock, chatId, message) {
    if (!chatId.endsWith("@g.us")) {
        await sock.sendMessage(chatId, { text: "This command can only be used in groups." });
        return;
    }

    const text = message.message?.conversation || 
                 message.message?.extendedTextMessage?.text || "";
    const matchText = text.split(" ").slice(1).join(" ");

    await handleWelcome(sock, chatId, message, matchText);
}

module.exports = welcomeCommand;
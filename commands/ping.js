const os = require("os");
const { performance } = require("perf_hooks");
const settings = require("../settings.js");

// Helper to format bytes to human-readable form
function formatBytes(bytes) {
    if (bytes === 0) return "0B";
    const sizes = ["B", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
}

async function pingCommand(sock, chatId, message) {
    try {
        const start = performance.now();

        // Simulate "speed test" with a message
        await sock.sendMessage(chatId, { text: "🏓 Pong!" }, { quoted: message });

        const latency = ((performance.now() - start) / 1000).toFixed(4); // seconds

        // CPU info
        const cpus = os.cpus();
        const cpu = cpus.reduce(
            (acc, c) => {
                const total = Object.values(c.times).reduce((a, b) => a + b, 0);
                acc.total += total;
                acc.speed += c.speed;
                Object.keys(c.times).forEach(key => acc.times[key] += c.times[key]);
                return acc;
            },
            { speed: 0, total: 0, times: { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 } }
        );

        // RAM usage
        const ramUsage = `${formatBytes(os.totalmem() - os.freemem())} / ${formatBytes(os.totalmem())}`;

        const response = `
*Pong!* 🏓
*Response Speed:* *${latency}* seconds

*💻 ${settings.botName || "Queen Riam"}* Server Info
RAM Usage: *${ramUsage}*
CPU Cores: *${cpus.length}*
CPU Speed: *${(cpu.speed / cpus.length).toFixed(2)} MHz*
`;

        await sock.sendMessage(chatId, {
            text: response,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363404284793169@newsletter",
                    newsletterName: settings.botName || "Queen Riam",
                    serverMessageId: -1
                }
            }
        }, { quoted: message });

    } catch (error) {
        console.error("Error in ping command:", error);
        await sock.sendMessage(chatId, { text: "❌ Failed to get ping info." }, { quoted: message });
    }
}

module.exports = pingCommand;
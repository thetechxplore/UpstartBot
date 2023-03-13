const { Client, ChatInputCommandInteraction } = require("discord.js")
const Reply = require("../../utils/reply")

module.exports = {
    name: "ping",
    description: "Displays The Ping",
    category: "INFO",

    /**
     * @param {Client} client
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(interaction, client) {
        return Reply(interaction, "⌛", `The Current Websocket Latency is: \`${client.ws.ping} ms\``, false)
    }
}
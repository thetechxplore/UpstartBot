const { Client, Guild } = require("discord.js")
const ms = require("ms")

module.exports = {
    name: "ready",
    /**
     * @param {Client} client
     */
    async execute (client) {
        const { user, ws } = client
        console.log(`${user.tag} is now Online!`)

        setInterval(() => {
            const ping = ws.ping
            user.setActivity({
                name: `Ping: ${ping} ms`,
                type: 3
            })

        }, ms("5s"))
    }
}
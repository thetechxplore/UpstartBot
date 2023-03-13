const { Client, Partials, Collection } = require('discord.js')
const ms = require('ms')
const { promisify } = require("util")
const { glob } = require("glob")
const PG = promisify(glob)
const Ascii = require("ascii-table")
const { Channel, GuildMember, Message, Reaction, ThreadMember, User, GuildScheduleEvent } = Partials
const config = require('../config/config.json')

const client = new Client({
    intents: 8,
    partials: [Channel, GuildMember, Message, Reaction, ThreadMember, User, GuildScheduleEvent],
    allowedMentions: { parse: ["everyone", "roles", "users"] },
    rest: { timeout: ms("1m") }
})

client.events = new Collection()
client.commands = new Collection()

const Handlers = ["Events", "Commands"]

Handlers.forEach(handler => {

    require(`./classes/${handler}`)(client, PG, Ascii)

})

module.exports = client

client.login(config.TOKEN)

/* NOTE TO PUT AT BOTTOM - TOKEN, ID's, and other important functions will go into config...anything like plugin code will go into this folder */
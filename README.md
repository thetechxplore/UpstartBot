# SystemdBot-v2
A New Variation of SystemdBot, running on discord.py

<img src="./assets/logo.png"><br>

<h1 align="center"> Systemd Bot - codename "systemd.service" </h1>

<p align="center">
  <a href="https://github.com/Linux-Tech-Pro/SystemdBot/blob/Main/LICENSE" alt="License"><img src="https://img.shields.io/github/license/Linux-Tech-Pro/SystemdBot"></img></a>
  <a href="https://discord.gg/AgBEcyvPhk" alt="Discord"><img src="https://img.shields.io/discord/1041477113422815382?color=%23900000&label=Online&logo=The%20Nerds&style=flat"></img></a>
  <a href="https://github.com/Linux-Tech-Pro/SystemdBot/issues" alt="Issues"><img src="https://img.shields.io/github/issues/Linux-Tech-Pro/SystemdBot"></img></a>
</p>
A discord bot designed for my server (private bot). Rewritten in
Python using Discord.py. Its founding Project can be found in
<a href="https://github.com/Linux-Tech-Pro/SystemdBot">another repository</a>

You can contribute whatever you want to improve the bot with additional features
bug fixes.
<br>
<br>

# Features

Some of these features can be configured with `config.ts`

- Auto create channel when someone mentions non-existent channel (including
  private channel)
- Autopost from subreddit (great if you want to setup automeme in funny meme
  channel)
- Autopublish in announcements channel so you don't have to press publish button
  ever again
- Autoroles with membership screening support
- Bump reminder
  - Gets 300 XP reward if someone bumps the server
- Ghost ping - The bot will notice when someone removed mentions of user.
- Level system (way better than MEE6's paywall role rewards)
- Multiple prefixes
- Music support (disabled by default due to stability issues)
  - Requires to add --unstable in `deno.jsonc`
- Warning system + autosentence
- and much more!

# Build the bot and self-host

All you need is to have latest version of [git](https://git-scm.com/) and
[deno](https://deno.land/) installed on your system<br> **Step 1**: Clone this
repository `git clone https://github.com/Linux-Tech-Pro/SystemdBot.git`<br> **Step 2**:
Rename `config.temp.ts` to `config.ts` in the config folder, as well as Rename `reactionrole.temp.ts`
to `reactionrole.ts` in the custom folder and complete there<br> **Step 3**: Open a
terminal<br> **Step 4**: Run the bot with `deno task run`

# How to keep your bot online 24/7 (for who has vps with access to ssh)

You can use any tools for virtual sessions. I recommend `screen` because it is
included in major Linux distros.

If you have `screen` in your server. Great!

Use this following command to start a new session called `systemd`

```bash
screen -S systemd -m deno task run
```

_you can return back to main session with [Ctrl+A] + D_

To list of sessions, type `screen -ls`<br> To reconnect to virtual session, type
`screen -r <session>`.<br> To kill an unresponsive session, press _[Ctrl+A] +
K_<br> Example `screen -r systemd`

# Custom folder

You may notice that there's custom folder. But what it is used for?<br> This is
used for additional tasks coming for config.ts such as making custom variables
to be used. I am not sure if it's for injecting new feature into systemd.service, but that
would be cool. **Anyway, this is optional.**

# License

This bot is licensed under GPL version 3.

import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = imagen4
let img = await(await fetch('https://i.imgur.com/xDeUxrB.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `*𝙷𝙾𝙻𝙰 𝚃𝙴 𝚅𝙰𝚂 𝙲𝙰𝙼𝙱𝙸𝙰𝚁 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝚈 𝚀𝚄𝙸𝙴𝚁𝙴𝚂* *𝙸𝙽𝙸𝙲𝙸𝙰𝙻𝙴𝚂 𝙰𝚀𝚄𝙸 𝙴𝙹𝙴𝙼𝙿𝙻𝙾𝚂 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾𝚂*
𝚁𝚎𝚌𝚞𝚎𝚛𝚍𝚊  𝚚𝚞𝚎 𝙳𝚎𝚋𝚎𝚜  𝚒𝚗𝚏𝚘𝚛𝚖𝚊𝚛 𝚍𝚎 𝚝𝚞 𝚌𝚊𝚖𝚋𝚒𝚘 𝚍𝚎 𝚗𝚘𝚖𝚋𝚛𝚎 𝚊𝚚𝚞𝚒 𝚊𝚕 𝚐𝚛𝚞𝚙𝚘 𝚘 𝚑𝚊𝚌𝚎𝚛 𝚖𝚎𝚗𝚌𝚒𝚘́𝚗 𝚊 𝚕𝚘𝚜 𝚕𝚒𝚍𝚎𝚛𝚎𝚛𝚎𝚜 𝚖𝚞𝚢 𝚏𝚊́𝚌𝚒𝚕 𝚜𝚘𝚕𝚘 𝚎𝚜𝚌𝚛𝚒𝚋𝚎 *𝚊𝚍𝚖𝚒𝚗𝚜* 𝚢  𝚛𝚎𝚌𝚞𝚎𝚛𝚍𝚊 𝚗𝚘  𝚚𝚞𝚒𝚝𝚊𝚛𝚕𝚎 𝚎𝚕 𝚎𝚜𝚙𝚊𝚌𝚒𝚘 𝚊 𝚕𝚊𝚜 𝚒𝚗𝚒𝚌𝚒𝚊𝚕𝚎𝚜.


✅ᴴᴬ│ㅤ𝙶𝙾𝙺𝚄𝙱𝙾𝚃      ✔️
✅ᴴᴬ│ㅤ𝙶𝙾𝙺𝚄ㅤ𝙱𝙾𝚃   ✔️
🚫ᴴᴬ│𝙶𝙾𝙺𝚄𝙱𝙾𝚃

 𝚂𝚒 𝚐𝚞𝚜𝚝𝚊𝚗 *𝙲𝙰𝚃𝚂𝚄𝙿* 𝚕𝚎𝚜 𝚙𝚞𝚎𝚍𝚎 𝚊𝚢𝚞𝚍𝚊𝚛 𝚊 𝚑𝚊𝚌𝚎𝚛  𝚜𝚞 𝚗𝚘𝚖𝚋𝚛𝚎 𝚌𝚘𝚗 𝚌𝚘𝚗𝚏𝚒𝚊𝚗𝚣𝚊 𝚜𝚎 𝚕𝚘 𝚙𝚞𝚎𝚍𝚎𝚗 𝚙𝚎𝚍𝚒𝚛

𝙴𝚇𝙴𝙻𝙴𝙽𝚃𝙴 𝙳𝙸́𝙰 𝙰 𝚃𝙾𝙳𝙾𝚂 ❤
`.trim()
let buttons = [
]
//{ buttonId: '#infobot', buttonText: { displayText: '🐾 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🐾' }, type: 1 }]
let buttonMessage = {
image: pp,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '👑 𝐓𝐇𝐄 𝐆𝐎𝐊𝐔- 𝐁𝐎𝐓 👑',
body: null,
thumbnail: img,
sourceUrl: `https://instagram.com/higher_angels.ff`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(ejm|ejemplo|EJEMPLO)$/i
handler.exp = 50
handler.group = true
handler.admin = true
handler.rowner = true
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

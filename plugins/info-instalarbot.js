import { generateWAMessageFromContent } from '@adiwajshing/baileys'
let handler  = async (m, { conn }) => {
let texto = `
*ββ ππππΎππΈπ°π» π±πΎππΌπΈπ½π΄ π·πΎππ*
> Tutorial: https://youtu.be/eC9TfKICpcY
> Pagina Oficial: https://boxmineworld.com
> Dashboard: https://dash.boxmineworld.com/home
> Panel: https://panel.boxmineworld.com
> Soporte: https://discord.gg/84qsr4v 

------------------------------------

*ββ ππππΎππΈπ°π» π°π²πΈπ³πΈπ²π½πΎπ³π΄π π·πΎππ*
> Tutorial: https://youtu.be/nbjvreJ0tUk
> Pagina: https://billing.acidicnodes.ml/register?ref=ADII104p
> Soporte: https://whatsapp.acidicnodes.com

------------------------------------

*ββ π²πΎπΌπ°π½π³πΎπ ππ΄ππΌππ*
> cd && termux-setup-storage
> apt-get update -y && apt-get upgrade -y
> pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn 
> git clone https://github.com/BrunoSobrino/Mystic-termux.git && cd Mystic-termux 
> yarn install 
> npm install
> npm update
> npm install 
> npm start` 
let aa = { quoted: m, userJid: conn.user.jid }
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: texto, contextInfo: { externalAdReply: { title: 'α΄Κα΄ α΄Κsα΄Ιͺα΄ - Κα΄α΄', body: null, thumbnail: imagen1, sourceUrl: 'https://github.com/BrunoSobrino/TheMystic-Bot-MD' }, mentionedJid: [m.sender] }}}, aa)
conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })  
}
handler.command = /^(instalarbot)/i
handler.rowner = true
export default handler

let handler = async (m, { conn, text, usedPrefix, command, customPrefix }) => {
let stikerwelgc = "./src/rinifinito.webp"
let stikerbyegc = "./src/rcompe.webp"
if (command == 'infi') {
conn.sendFile(m.chat, stikerwelgc, null, { asSticker: true })
}
if (command == 'compe') {
conn.sendFile(m.chat, stikerbyegc, null, { asSticker: true })
}}
handler.command = ['infi', 'compe']
export default handler
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

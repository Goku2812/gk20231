let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `𝐇𝐈𝐆𝐇𝐄𝐑 𝐀𝐍𝐆𝐄𝐋𝐒 ${pesan}`
let teks = ` \n\n ${oi}\n\n\n`
for (let mem of participants) {
teks += `📱@${mem.id.split('@')[0]}\n`}
teks += `🍀 *⫍2⫎⫍0⫎⫍2⫎⫍3⫎* 🍀\n\n𝓖𝓸𝓴𝓾 𝓑𝓸𝓽`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|marcar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler

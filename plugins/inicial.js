let handler = async (m, { command, text }) => m.reply(`
ᴴᴬ│ㅤ
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['iniciales <texto>?']
handler.tags = ['kerang']
handler.command = /^iniciales|EJM$/i
export default handler

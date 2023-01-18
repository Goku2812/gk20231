import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = imagen4
let img = await(await fetch('https://www.paidmembershipspro.com/wp-content/uploads/2017/07/PayPal-Express.png')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
╭═══〘 ✯✯✯✯✯✯✯✯✯ 〙══╮
║    ◉— *𝔾𝕆𝕂𝕌 𝔹𝕆𝕋 ℙℝ𝔼𝕄𝕀𝕌𝕄* —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *𝗛ola, ${taguser}*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *Owner:* 𝙲𝙷𝙰𝚁𝙻𝚈
║➤ *Numero:* wa.me/593960070183
║➤ *Fecha:* ${date}
║➤ *Tiempo activo:* ${uptime}
║➤ *Usuarios:* ${rtotalreg}
╰═══╡✯✯✯✯✯✯✯✯✯╞═══╯

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝕀ℕ𝔽𝕆 𝔻𝔼𝕃 𝕌𝕊𝕌𝔸ℝ𝕀𝕆 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ *🎖️ Nivel:* ${level}
┣ *🧰 Experiencia:* ${exp}
┣ *⚓ Rango:* ${role}
┣ *💎 Diamantes:* ${limit}
┣ *👾 GokuCoins:* ${money}
┣ *🪙 Tokens:* ${joincount}
┣ *🎟️ Premium:* ${user.premiumTime > 0 ? '✅' : '❌'}
┗━━━━━━━━━━━━━━━━━━━┛
${readMore}
┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝕀ℕ𝔽𝕆 𝔹𝕆𝕋 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 💟 _${usedPrefix}estado_
┣ ඬ⃟ 💟 _${usedPrefix}infobot_
┣ ඬ⃟ 💟 _${usedPrefix}speedtest
┣ ඬ⃟ 💟 _${usedPrefix}owner_
┣ ඬ⃟ 💟 _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< ℂ𝔻𝕄 𝕍𝕊 ℂ𝕆𝕄ℙ𝔼 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ ☑️ _${usedPrefix}vs4.c.2 
┣ ඬ⃟ ☑️ _${usedPrefix}vs4.c.3
┣ ඬ⃟ ☑️ _${usedPrefix}vs4.c.4
┣ ඬ⃟ ☑️ _${usedPrefix}vs4.c.5
┣ ඬ⃟ ☑️ _${usedPrefix}vs4.c.6
┣ ඬ⃟ ☑️ _${usedPrefix}vs4.c.7
┣ ඬ⃟ ☑️ _${usedPrefix}vs6.c.2 
┣ ඬ⃟ ☑️ _${usedPrefix}vs6.c.3
┣ ඬ⃟ ☑️ _${usedPrefix}vs6.c.4
┣ ඬ⃟ ☑️ _${usedPrefix}vs6.c.5
┣ ඬ⃟ ☑️ _${usedPrefix}vs6.c.6
┣ ඬ⃟ ☑️ _${usedPrefix}vs6.c.7
┗━━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━━┓
┃ *< ℂ𝔻𝕄 𝕍𝕊 𝕀ℕ𝔽𝕀ℕ𝕀𝕋𝕆  />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ ☑️ _${usedPrefix}vs4.i.2
┣ ඬ⃟ ☑️ _${usedPrefix}vs4.i.3
┣ ඬ⃟ ☑️ _${usedPrefix}vs4.i.4
┣ ඬ⃟ ☑️ _${usedPrefix}vs4.i.5
┣ ඬ⃟ ☑️ _${usedPrefix}vs4.i.6
┣ ඬ⃟ ☑️ _${usedPrefix}vs4.i.7
┣ ඬ⃟ ☑️ _${usedPrefix}vs6.i.2
┣ ඬ⃟ ☑️ _${usedPrefix}vs6.i.3
┣ ඬ⃟ ☑️ _${usedPrefix}vs6.i.4
┣ ඬ⃟ ☑️ _${usedPrefix}vs6.i.5
┣ ඬ⃟ ☑️ _${usedPrefix}vs6.i.6
┣ ඬ⃟ ☑️ _${usedPrefix}vs6.i.7
┗━━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━━┓
┃ *< ℂ𝔻𝕄  𝕍𝕊 𝕄𝔸ℙ𝔸  />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ ☑️ _${usedPrefix}vs12.8
┣ ඬ⃟ ☑️ _${usedPrefix}vs12.9
┣ ඬ⃟ ☑️ _${usedPrefix}vs16.8
┣ ඬ⃟ ☑️ _${usedPrefix}vs16.9
┗━━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━━┓
┃ *< ℝ𝔼𝔾𝕃𝔸𝕊 𝔻𝔼 𝕍𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ ☑️ _${usedPrefix}compe
┣ ඬ⃟ ☑️ _${usedPrefix}infinito
┣ ඬ⃟ ☑️ _${usedPrefix}mapag
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝕁𝕌𝔼𝔾𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🎖️ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}ppt *<papel / tijera /piedra>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}prostituto *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}prostituta *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}gay2 *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}lesbiana *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}pajero *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}pajera *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}puto *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}puta *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}manco *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}manca *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}rata *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}love *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}pregunta *<texto>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}suitpvp *<@tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}slot *<apuesta>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}ttt *<nombre sala>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}delttt_
┣ ඬ⃟ 🎖️ _${usedPrefix}acertijo_
┣ ඬ⃟ 🎖️ _${usedPrefix}simi *<texto>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}top *<texto>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}topgays_
┣ ඬ⃟ 🎖️ _${usedPrefix}topotakus_
┣ ඬ⃟ 🎖️ _${usedPrefix}formarpareja_
┣ ඬ⃟ 🎖️ _${usedPrefix}verdad_
┣ ඬ⃟ 🎖️ _${usedPrefix}reto_
┣ ඬ⃟ 🎖️ _${usedPrefix}cancion_
┣ ඬ⃟ 🎖️ _${usedPrefix}pista_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝔸ℂ𝕋𝕀𝕍𝔸ℝ 𝕆 𝔻𝔼𝕊𝔸ℂ𝕋𝕀𝕍𝔸ℝ />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ ☑️ _${usedPrefix}enable *welcome*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *welcome*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *antilink*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *antilink*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *antilink2*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *antilink2*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *detect*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *detect*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *audios*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *audios*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *autosticker*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *autosticker*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *antiviewonce*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *antiviewonce*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *antitoxic*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *antitoxic*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *modoadmin*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *modoadmin*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┣ *< ℝ𝔼ℙ𝕆ℝ𝕋𝔸ℝ 𝔼ℝℝ𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔰 _${usedPrefix}reporte *<texto>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝔻𝔼𝕊ℂ𝔸ℝ𝔾𝔸𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 📥 _${usedPrefix}tiktok *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}ytmp3 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}ytmp4 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}ytmp3doc *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}ytmp4doc *<enlace / 
┣ ඬ⃟ 📥 _${usedPrefix}play *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}play.1 *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}play.2 *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}playdoc *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}playlist *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}playlist2 *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}spotify *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}stickerly *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}ringtone *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}soundcloud *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}imagen *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}pinteret *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}wallpaper *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}wallpaper2 *<texto>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝔾ℝ𝕌ℙ𝕆 />* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 💎 _${usedPrefix}add *<numero>*_
┣ ඬ⃟ 💎 _${usedPrefix}Ban *<@tag>*_
┣ ඬ⃟ 💎 _${usedPrefix}Ban2 *<@tag>*_
┣ ඬ⃟ 💎 _${usedPrefix}listanum *<texto>*_
┣ ඬ⃟ 💎 _${usedPrefix}grupo *<abrir / cerrar>*_
┣ ඬ⃟ 💎 _${usedPrefix}grouptime *<opcion> <tiempo>*_
┣ ඬ⃟ 💎 _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┣ ඬ⃟ 💎 _${usedPrefix}infogroup_
┣ ඬ⃟ 💎 _${usedPrefix}resetlink_
┣ ඬ⃟ 💎 _${usedPrefix}link_
┣ ඬ⃟ 💎 _${usedPrefix}setname *<texto>*_
┣ ඬ⃟ 💎 _${usedPrefix}setdesc *<texto>*_
┣ ඬ⃟ 💎 _${usedPrefix}todos *<texto>*_
┣ ඬ⃟ 💎 _${usedPrefix}setwelcome *<texto>*_
┣ ඬ⃟ 💎 _${usedPrefix}setbye *<texto>*_
┣ ඬ⃟ 💎 _${usedPrefix}warn *<@tag>*_
┣ ඬ⃟ 💎 _${usedPrefix}unwarn *<@tag>*_
┣ ඬ⃟ 💎 _${usedPrefix}listwarn_
┣ ඬ⃟ 💎 _${usedPrefix}fantasmas_
┣ ඬ⃟ 💎 _${usedPrefix}setpp *<imagen>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝕐 𝕃𝕆𝔾𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🖍️ _${usedPrefix}phmaker *<opcion> <imagen>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}logos *<efecto> <texto>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}logochristmas *<texto>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}logocorazon *<texto>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}ytcomment *<texto>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}hornycard *<@tag>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}simpcard *<@tag>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}lolice *<@tag>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}itssostupid_
┣ ඬ⃟ 🖍️ _${usedPrefix}pixelar_
┣ ඬ⃟ 🖍️ _${usedPrefix}blur_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝔽ℝ𝔸𝕊𝔼𝕊 𝕐 𝕋𝔼𝕏𝕋𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🥀 _${usedPrefix}piropo_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< ℝ𝔸ℕ𝔻𝕆𝕄 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👾 _${usedPrefix}kpop *<blackpink / exo / bts>*_
┣ ඬ⃟ 👾 _${usedPrefix}cristianoronaldo_
┣ ඬ⃟ 👾 _${usedPrefix}messi_
┣ ඬ⃟ 👾 _${usedPrefix}meme_
┣ ඬ⃟ 👾 _${usedPrefix}itzy_
┣ ඬ⃟ 👾 _${usedPrefix}blackpink_
┣ ඬ⃟ 👾 _${usedPrefix}lolivid_
┣ ඬ⃟ 👾 _${usedPrefix}loli_
┣ ඬ⃟ 👾 _${usedPrefix}navidad_
┣ ඬ⃟ 👾 _${usedPrefix}ppcouple_
┣ ඬ⃟ 👾 _${usedPrefix}wpmontaña_
┣ ඬ⃟ 👾 _${usedPrefix}pubg_
┣ ඬ⃟ 👾 _${usedPrefix}wpgaming_
┣ ඬ⃟ 👾 _${usedPrefix}wpaesthetic_
┣ ඬ⃟ 👾 _${usedPrefix}wpaesthetic2_
┣ ඬ⃟ 👾 _${usedPrefix}wprandom_
┣ ඬ⃟ 👾 _${usedPrefix}wallhp_
┣ ඬ⃟ 👾 _${usedPrefix}wpvehiculo_
┣ ඬ⃟ 👾 _${usedPrefix}wpmoto_
┣ ඬ⃟ 👾 _${usedPrefix}coffee_
┣ ඬ⃟ 👾 _${usedPrefix}pentol_
┣ ඬ⃟ 👾 _${usedPrefix}caricatura_
┣ ඬ⃟ 👾 _${usedPrefix}ciberespacio_
┣ ඬ⃟ 👾 _${usedPrefix}technology_
┣ ඬ⃟ 👾 _${usedPrefix}doraemon_
┣ ඬ⃟ 👾 _${usedPrefix}hacker_
┣ ඬ⃟ 👾 _${usedPrefix}planeta_
┣ ඬ⃟ 👾 _${usedPrefix}randomprofile_
┣ ඬ⃟ 👾 _${usedPrefix}neko_
┣ ඬ⃟ 👾 _${usedPrefix}waifu_
┣ ඬ⃟ 👾 _${usedPrefix}akira_
┣ ඬ⃟ 👾 _${usedPrefix}akiyama_
┣ ඬ⃟ 👾 _${usedPrefix}anna_
┣ ඬ⃟ 👾 _${usedPrefix}asuna_
┣ ඬ⃟ 👾 _${usedPrefix}ayuzawa_
┣ ඬ⃟ 👾 _${usedPrefix}boruto_
┣ ඬ⃟ 👾 _${usedPrefix}chiho_
┣ ඬ⃟ 👾 _${usedPrefix}chitoge_
┣ ඬ⃟ 👾 _${usedPrefix}deidara_
┣ ඬ⃟ 👾 _${usedPrefix}erza_
┣ ඬ⃟ 👾 _${usedPrefix}elaina_
┣ ඬ⃟ 👾 _${usedPrefix}eba_
┣ ඬ⃟ 👾 _${usedPrefix}emilia_
┣ ඬ⃟ 👾 _${usedPrefix}hestia_
┣ ඬ⃟ 👾 _${usedPrefix}hinata_
┣ ඬ⃟ 👾 _${usedPrefix}inori_
┣ ඬ⃟ 👾 _${usedPrefix}isuzu_
┣ ඬ⃟ 👾 _${usedPrefix}itachi_
┣ ඬ⃟ 👾 _${usedPrefix}itori_
┣ ඬ⃟ 👾 _${usedPrefix}kaga_
┣ ඬ⃟ 👾 _${usedPrefix}kagura_
┣ ඬ⃟ 👾 _${usedPrefix}kaori_
┣ ඬ⃟ 👾 _${usedPrefix}keneki_
┣ ඬ⃟ 👾 _${usedPrefix}kotori_
┣ ඬ⃟ 👾 _${usedPrefix}kurumi_
┣ ඬ⃟ 👾 _${usedPrefix}madara_
┣ ඬ⃟ 👾 _${usedPrefix}mikasa_
┣ ඬ⃟ 👾 _${usedPrefix}miku_
┣ ඬ⃟ 👾 _${usedPrefix}minato_
┣ ඬ⃟ 👾 _${usedPrefix}naruto_
┣ ඬ⃟ 👾 _${usedPrefix}nezuko_
┣ ඬ⃟ 👾 _${usedPrefix}sagiri_
┣ ඬ⃟ 👾 _${usedPrefix}sasuke_
┣ ඬ⃟ 👾 _${usedPrefix}sakura_
┣ ඬ⃟ 👾 _${usedPrefix}cosplay_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< ℂℍ𝔸𝕋 𝔸ℕ𝕆ℕ𝕀𝕄𝕆 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 📳 _${usedPrefix}start_
┣ ඬ⃟ 📳 _${usedPrefix}next_
┣ ඬ⃟ 📳 _${usedPrefix}leave_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝔹𝕌𝕊ℂ𝔸𝔻𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔍 _${usedPrefix}google *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}letra *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}wikipedia *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}ytsearch *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}playstore *<texto>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< ℍ𝔼ℝℝ𝔸𝕄𝕀𝔼ℕ𝕋𝔸𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🛠️ _${usedPrefix}clima *<país> <ciudad>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}encuesta *<texto1|texto2...>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}afk *<motivo>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}del *<mensaje>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}whatmusic *<audio>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}readqr *<imagen (QR)>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}horario_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< ℝℙ𝔾 - 𝕃𝕀𝕄𝕀𝕋𝔼𝕊 - 𝔼ℂ𝕆ℕ𝕆𝕄𝕀𝔸 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 💵 _${usedPrefix}adventure_
┣ ඬ⃟ 💵 _${usedPrefix}cazar_
┣ ඬ⃟ 💵 _${usedPrefix}cofre_
┣ ඬ⃟ 💵 _${usedPrefix}balance_
┣ ඬ⃟ 💵 _${usedPrefix}claim_
┣ ඬ⃟ 💵 _${usedPrefix}heal_
┣ ඬ⃟ 💵 _${usedPrefix}lb_
┣ ඬ⃟ 💵 _${usedPrefix}levelup_
┣ ඬ⃟ 💵 _${usedPrefix}myns_
┣ ඬ⃟ 💵 _${usedPrefix}perfil_
┣ ඬ⃟ 💵 _${usedPrefix}work_
┣ ඬ⃟ 💵 _${usedPrefix}minar_
┣ ඬ⃟ 💵 _${usedPrefix}minar2_
┣ ඬ⃟ 💵 _${usedPrefix}buy_
┣ ඬ⃟ 💵 _${usedPrefix}buyall_
┣ ඬ⃟ 💵 _${usedPrefix}verificar_
┣ ඬ⃟ 💵 _${usedPrefix}robar *<cantidad> <@tag>*_
┣ ඬ⃟ 💵 _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
┣ ඬ⃟ 💵 _${usedPrefix}unreg *<numero de serie>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝕊𝕋𝕀ℂ𝕂𝔼ℝ𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👽 _${usedPrefix}sticker *<responder a imagen o video>*_
┣ ඬ⃟ 👽 _${usedPrefix}sticker *<enlace / link / url>*_
┣ ඬ⃟ 👽 _${usedPrefix}s *<responder a imagen o video>*_
┣ ඬ⃟ 👽 _${usedPrefix}s *<enlace / link / url>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *<  𝔸𝔻𝕄𝕀ℕ𝕊 ℍ.𝔸 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👑 _${usedPrefix}cajafuerte_
┣ ඬ⃟ 👑 _${usedPrefix}blocklist_
┣ ඬ⃟ 👑 _${usedPrefix}block *<@tag / numero>*_
┣ ඬ⃟ 👑 _${usedPrefix}unblock *<@tag / numero>*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *restrict*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *restrict*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *autoread*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *autoread*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *public*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *public*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *pconly*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *pconly*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *gconly*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *gconly*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *anticall*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *anticall*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *antiprivado*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *antiprivado*_
┣ ඬ⃟ 👑 _${usedPrefix}banuser *<@tag>*_
┣ ඬ⃟ 👑 _${usedPrefix}unbanuser *<@tag>*_
┣ ඬ⃟ 👑 _${usedPrefix}banuser *<@tag>*_
┣ ඬ⃟ 👑 _${usedPrefix}addprem *<@tag>*_
┣ ඬ⃟ 👑 _${usedPrefix}delprem *<@tag>*_
┣ ඬ⃟ 👑 _${usedPrefix}listprem_
┗━━━━━━━━━━━━━━━━━━━┛
`.trim()
let buttons = [
{ buttonId: '.perfil', buttonText: { displayText: '📮 𝙿𝙴𝚁𝙵𝙸𝙻 📮' }, type: 1 },
{ buttonId: '${usedPrefix}tycp', buttonText: { displayText: '📋 𝚃𝙴𝚁𝙼𝙸𝙽𝙾𝚂 📋' }, type: 1 }]
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
title: '👑 🔥𝐎𝐅𝐂 𝐂𝐇𝐀𝐑𝐋𝐘🔥 👑',
body: null,
thumbnail: img,
sourceUrl: `https://www.instagram.com/_777charly`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

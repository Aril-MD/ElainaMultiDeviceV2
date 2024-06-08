import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './vn/Bot.opus'
conn.sendFile(m.chat, vn, './vn/Bot.opus', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(Bot|Bot whatsapp|Halo Bot|Hai|hai|halo)$/i

handler.fail = null

handler.limit = false
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

export default handler
import { tiktok } from '../lib/tiktok.js'

let handler = async(m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) return m.reply(`Masukan URL!\n\nContoh:\n${usedPrefix + command} https://vt.tiktok.com/ZS8oHC5Ka/`)
    if (!/^http(s)?:\/\/(www|v(t|m)).tiktok.com\/[-a-zA-Z0-9@:%._+~#=]/i.test(args[0])) return m.reply('Invalid urls')
    await conn.sendMessage(m.chat, {
        react: {
            text: "⏳",
            key: m.key, }})
    let { nickname, duration, description, play, music } = await tiktok(args[0])
    let caption = `DOWNLOADER TIKTOK


*Nickname :* ${nickname}
*Duration :* ${duration}
*Description :* ${description}
`.trim()
    let video = await conn.sendFile(m.chat, play, false, caption, m)
    await conn.sendFile(m.chat, music, false, false, video, false, { mimetype: 'audio/mpeg' })
    await conn.sendMessage(m.chat, { react: { text: `☑️`, key: m.key }})
 }
handler.help = ['tiktok']
handler.tags = ['downloader']
handler.command = /^(tiktok|tiktok(mp3|mp4|video|audio)|tt|tt(mp3|mp4|video|audio))$/i
handler.limit = true
export default handler
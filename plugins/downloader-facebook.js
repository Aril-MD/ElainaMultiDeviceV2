import fetch from 'node-fetch'
import api from 'hxz-api'
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `🚩 *Example:* ${usedPrefix+command} https://www.facebook.com/ngakakocak/videos/video-lucu-dan-gokil/607085686836013`
let f = await api.fbdown(text)
await conn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}
  })   
let hasil = `*DOWNLOADER FACEBOOK*`
conn.sendFile(m.chat, f.Normal_video, 'fb.mp4', hasil, m)
}
handler.help = ['facebook', 'fb'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
export default handler
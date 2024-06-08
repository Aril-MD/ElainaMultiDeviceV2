import { facebookdl, facebookdlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://fb.watch/azFEBmFRcy/`
    const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0]))
    await conn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}}) 
    for (const { url, isVideo } of result.reverse()) conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, `🔗 *Url:* ${url}`, m)
}
handler.help = ['facebook2', 'fb2'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^((facebook2|fb2)(downlode2r|dl2)?)$/i

export default handler

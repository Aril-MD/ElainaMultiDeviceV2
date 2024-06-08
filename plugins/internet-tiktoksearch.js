import fetch from 'node-fetch';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Masukkan Text\n\nContoh:\n${usedPrefix + command} Akane kurokawa`;;
  const spas = "              ";
  let anu = await fetch(`https://api.junn4.my.id/search/tiktoksearch?query=${text}`);
  let hayo = await anu.json();
  let capt = hayo.result.title;
await conn.sendFile(m.chat, hayo.result.no_watermark, 'tiktoksearch.mp4', `🔖TITLE : ${capt}`, m);
await conn.sendMessage(m.chat, { react: { text: `☑️`, key: m.key }
  });
};

handler.help = ['tiktoksearch'];
handler.command = /^(tts|ttsr|tiktoksearch)$/i;
handler.tags = ['downloader'];
handler.limit = true;
handler.group = false;
handler.premium = false;
handler.owner = false;
handler.admin = false;
handler.botAdmin = false;
handler.fail = null;
handler.private = false;

export default handler;
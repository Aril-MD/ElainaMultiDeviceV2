import axios from 'axios';
import cheerio from 'cheerio';

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
    let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw "Input Teks"
    await conn.sendMessage(m.chat, {
        react: {
            text: "⚡",
            key: m.key, }})
    try {
        let result = await generate(text)
        await m.reply(result)
        await conn.sendMessage(m.chat, { react: { text: `☑️`, key: m.key }})
    } catch (e) {
        await m.reply(eror)
    }
}
handler.help = ["openai"]
handler.tags = ["gpt"];
handler.command = /^(ai|openai)$/i
export default handler

/* New Line */
async function generate(q) {
    try {
        const nonceValue = JSON.parse(cheerio.load(await (await axios.get(
            "https://www.freechatgptonline.com/"
        )).data)('.mwai-chatbot-container').attr('data-system')).restNonce;

        const {
            data
        } = await axios(
            "https://www.freechatgptonline.com/wp-json/mwai-ui/v1/chats/submit", {
                method: "post",
                data: {
                    botId: "default",
                    newMessage: q,
                    stream: false,
                },
                headers: {
                    "X-WP-Nonce": nonceValue,
                    "Content-Type": "application/json",
                },
            }
        );
        return data.reply;
    } catch (err) {
        console.log(err.response.data);
        return err.response.data.message;
    }
}
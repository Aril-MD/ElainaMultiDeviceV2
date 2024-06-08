let handler = async (m, { conn, text, usedPrefix, command }) => {
            conn.sendMessage(m.chat, { react: { text: '🍃', key: m.key }})
            try {
            let list = ["628156808952@s.whatsapp.net"];
            await global.db.chats
                .filter(a => typeof a.jid === "string")
                .filter(v => v.jid.endsWith("@s.whatsapp.net"))
                .map(o => o.jid)
                .forEach(data => list.push(data));
            await (
                await client.groupMetadata("120363144265789709@g.us")
            ).participants
                .map(o => o.id)
                .forEach(friend => list.push(friend));
            if (m.quoted ? m.quoted.message : m.msg.viewOnce) {
                let type = m.quoted
                    ? Object.keys(m.quoted.message)[0]
                    : m.mtype;
                let q = m.quoted ? m.quoted.message[type] : m.msg;
                if (/image/.test(type)) {
                    client
                        .sendMessage(
                            "status@broadcast",
                            {
                                image: await client.downloadMediaMessage(q),
                                caption: text ? text : ""
                            },
                            {
                                statusJidList: list
                            }
                        )
                        .then(out => {
                            client.reply(
                                m.chat,
                                "sukses mengupload foto ke story",
                                out
                            );
                        });
                } else if (/video/.test(type)) {
                    client
                        .sendMessage(
                            "status@broadcast",
                            {
                                video: await client.downloadMediaMessage(q),
                                caption: text ? text : ""
                            },
                            {
                                statusJidList: list
                            }
                        )
                        .then(out => {
                            client.reply(
                                m.chat,
                                "sukses mengupload video ke story",
                                out
                            );
                        });
                } else if (/audio/.test(type)) {
                    client
                        .sendMessage(
                            "status@broadcast",
                            {
                                audio: await Conv.toPTT(
                                    await client.downloadMediaMessage(q),
                                    "webm"
                                ),
                                ptt: true
                            },
                            {
                                statusJidList: list
                            }
                        )
                        .then(out => {
                            client.reply(
                                m.chat,
                                "sukses mengupload audio ke story",
                                out
                            );
                        });
                } else if (/conversation|extendedTextMessage/.test(type)) {
                    client
                        .sendMessage(
                            "status@broadcast",
                            {
                                text: m.quoted ? m.quoted.text : text
                            },
                            {
                                statusJidList: list
                            }
                        )
                        .then(out => {
                            client.reply(
                                m.chat,
                                "sukses mengupload teks ke story",
                                out
                            );
                        });
                } else
                    client.reply(
                        m.chat,
                        Func.texted(
                            "bold",
                            `🚩 Hanya teks, foto, video, dan audio.`
                        ),
                        m
                    );
            } else {
                let q = m.quoted ? m.quoted : m;
                let mime = (q.msg || q).mimetype || "";
                if (/image\/(jpg|jpeg|png)/.test(mime)) {
                    client
                        .sendMessage(
                            "status@broadcast",
                            {
                                image: await q.download(),
                                caption: text ? text : ""
                            },
                            {
                                statusJidList: list
                            }
                        )
                        .then(out => {
                            client.reply(
                                m.chat,
                                "sukses mengupload foto ke story",
                                out
                            );
                        });
                } else if (/video\/(mp4|3gp|m4v|mpg)/.test(mime)) {
                    client
                        .sendMessage(
                            "status@broadcast",
                            {
                                video: await q.download(),
                                caption: text ? text : ""
                            },
                            {
                                statusJidList: list
                            }
                        )
                        .then(out => {
                            client.reply(
                                m.chat,
                                "sukses mengupload video ke story",
                                out
                            );
                        });
                } else if (/audio/.test(mime)) {
                    client
                        .sendMessage(
                            "status@broadcast",
                            {
                                audio: await Conv.toPTT(
                                    await q.download(),
                                    "webm"
                                ),
                                ptt: true
                            },
                            {
                                statusJidList: list
                            }
                        )
                        .then(out => {
                            client.reply(
                                m.chat,
                                "sukses mengupload audio ke story",
                                out
                            );
                        });
                } else if (!mime) {
                    client
                        .sendMessage(
                            "status@broadcast",
                            { text: m.quoted ? m.quoted.text : text },
                            {
                                statusJidList: list
                            }
                        )
                        .then(out => {
                            client.reply(
                                m.chat,
                                "sukses mengupload teks ke story",
                                out
                            );
                        });
                } else {
                    client.reply(m.chat, "Media Tidak Cocok", m);
                }
            }
        } catch (e) {
            return client.reply(m.chat, Func.jsonFormat(e), m);
        }
    },
};
handler.help = ['uploadsw', 'sw'];
handler.tags = ['story'];
handler.command = ['sw', 'story'];

export default handler;
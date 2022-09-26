        "ᴊᴀɴɢᴀɴ ᴋᴀᴛᴀᴋᴀɴ ᴛɪᴅᴀᴋ ᴍᴜɴɢᴋɪɴ ʟᴀɢɪ. ᴋᴀᴛᴀ ɪᴛᴜ ᴊᴜꜱᴛʀᴜ ᴍᴇɴɢʜɪʟᴀɴɢᴋᴀɴ ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ -ᴀʀɪᴀ (ʜɪᴅᴀɴ ɴᴏ ᴀʀɪᴀ)",
        "ᴊᴀɴɢᴀɴ ᴍᴇɴʏᴇʀᴀʜ ᴜɴᴛᴜᴋ ʙᴇʀᴋᴀᴛᴀ ᴀᴋᴜ ɪɴɢɪɴ ʜɪᴅᴜᴘ ɪɴɪ ʙᴇʀᴀʀᴛɪ ᴅᴀɴ ᴊᴀɴɢᴀɴ ᴍᴇɴᴊᴀᴅɪ ᴏʀᴀɴɢ ʏᴀɴɢ ᴍᴇᴍʙᴏꜱᴀɴᴋᴀɴ ꜱᴇᴘᴇʀᴛɪ ɪᴛᴜ. ᴊɪᴋᴀ ᴘᴜɴʏᴀ ᴋᴇʙᴇʀᴀɴɪᴀɴ ᴜɴᴛᴜᴋ ᴛɪᴅᴀᴋ ᴍᴇɴʏᴇʀᴀʜ, ᴋᴀᴜ ᴀᴋᴀɴ ʙɪꜱᴀ",
        "ᴀᴋᴜ ᴛᴀᴋ ʙɪꜱᴀ ꜱᴇᴍᴜᴅᴀʜ ɪᴛᴜ ᴍᴇɴɢᴀᴛᴀᴋᴀɴ ᴋᴇꜱɪᴍᴘᴜʟᴀɴ ʜᴀɴʏᴀ ᴅᴀʀɪ ᴘᴇʀᴋᴀᴛᴀᴀɴ ᴏʀᴀɴɢ ʟᴀɪɴ, ᴀᴋᴜ ʙᴀʀᴜ ʙɪꜱᴀ ᴍᴇᴍᴜᴛᴜꜱᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋᴜʟᴀᴋᴜᴋᴀɴ ꜱᴇᴛᴇʟᴀʜ ᴍᴇʟɪʜᴀᴛɴʏᴀ ꜱᴇɴᴅɪʀɪ. -ᴋᴇɴ ᴋᴀɴᴇᴋɪ (ᴛᴏᴋʏᴏ ɢʜᴏᴜʟ)",
        "ᴛɪᴅᴀᴋ ꜱᴇᴍᴜᴀ ʜᴀʟ ᴅɪ ᴅᴜɴɪᴀ ɪɴɪ ʙɪꜱᴀ ᴅɪʙᴇʟɪ ᴅᴇɴɢᴀɴ ᴜᴀɴɢ -ᴋᴜʀᴏᴏ ʜᴀᴢᴀᴍᴀ (ʏᴏᴜɴɢ ʙʟᴀᴄᴋ)",
        "ᴘᴀʜʟᴀᴡᴀɴ ʙᴜᴋᴀɴ ʜᴀɴʏᴀ ᴛᴇʀᴜꜱ ᴍᴇɴʏᴇʟᴀᴍᴀᴛᴋᴀɴ ꜱɪᴀᴘᴀ ᴘᴜɴ ʏɢ ᴅɪʜᴀᴅᴀᴘᴀɴɴʏᴀ ꜱᴀᴊᴀ. ᴛᴇʀᴋᴀᴅᴀɴɢ ᴘᴀʜʟᴀᴡᴀɴ ᴊᴜɢᴀ ᴘᴇʀʟᴜ ᴍᴇɴɢᴏʀʙᴀɴᴋᴀɴ ᴅɪʀɪ ᴜɴᴛᴜᴋ ᴍᴇɴʏᴇʟᴀᴍᴀᴛᴋᴀɴ ʙᴀɴʏᴀᴋ ᴏʀᴀɴɢ (ᴛꜱᴜʙᴀꜱᴀ ᴍɪꜱᴜᴅᴀᴄʜɪ ~ ɢᴀᴛᴄʜᴀᴍᴀɴ ᴄʀᴏᴡᴅꜱ)"
]
 65  
plugins/brainly.js
@@ -0,0 +1,65 @@
let brainly = require("brainly-scraper")
let handler = async function (m, { text, usedPrefix, command }) {
if (!text) return m.reply(`uhm.. soalnya mana?\n\ncontoh:\n${usedPrefix + command} apa itu javascript?`)
let res = await brainly(text)
let answer = res.data.map((v, i) => `_*PERTANYAAN KE ${i + 1}*_\n${v.pertanyaan}\n${v.jawaban.map((v,i) => `*JAWABAN KE ${i + 1}*\n${v.text}`).join('\n')}`).join('\n\n•------------•\n\n')
m.reply(answer)
}

handler.help = ['brainly <soal>']
handler.tags = ['internet']
handler.command = /^brainly$/i
handler.limit = true

module.exports = handler


/*const Brainly = require('brainly-scraper-v2')
const brain = new Brainly("id")
let handler = async function (m, { text, usedPrefix, command }) {
  if (!text) throw `uhm.. soalnya mana?\n\ncontoh:\n${usedPrefix + command} apa itu javascript?`
  brain.search("id", text).then(async res => {
    let br = JSON.stringify(res)
    let json = JSON.parse(br)
    let answer = json.map((v, i) => `_*PERTANYAAN KE ${i + 1}*_\n${v.question.content}\n${v.answers.map((v, i) => `*JAWABAN KE ${i + 1}*\n${v.content.replace(/<\/?p>|<\/?strong>|<\/?u>|<\/?h[1-3]>|<\/?span>/g, '').replace(/<br ?(\/|\\)?>/g, '\n')}`).join('\n')}`).join('\n\n•------------•\n\n')
    m.reply(answer)
  })
}
handler.help = ['brainly <soal>']
handler.tags = ['internet']
handler.command = /^brainly$/i
handler.limit = true
module.exports = handler*/

/*
const { MessageType } = require('@adiwajshing/baileys')
const brainly = require('brainly-scraper')
let handler = async function (m, { text, usedPrefix, command }) {
	if (!text) throw `uhm.. soalnya mana?\n\ncontoh:\n${usedPrefix + command} apa itu javascript?`
	brainly(text).then(async res => {
    let br = JSON.stringify(res)
    let json = JSON.parse(br)
    let answer = res.data((v, i) => `_*PERTANYAAN KE ${i + 1}*_\n${v.pertanyaan}\n${v.jawaban((v,i) => `*JAWABAN KE ${i + 1}*\n${v.text}`).join('\n')}`).join('\n\n•------------•\n\n')
 //   m.reply(answer)
	client.sendMessage(m.chat, answer, text, {quoted: m, detectLinks: false})
	console.log(res)
	})
}
handler.help = ['brainly <soal>']
handler.tags = ['internet']
handler.command = /^brainly$/i
handler.limit = true
module.exports = handler*/

/*
const brainly = require('brainly-scraper-v2')
let handler = async function (m, { text }) {
  if (!text) throw 'Soalnya?'
  let res = await brainly(text)
  let answer = res.data.map((v, i) => `_*PERTANYAAN KE ${i + 1}*_\n${v.pertanyaan}\n${v.jawaban.map((v,i) => `*JAWABAN KE ${i + 1}*\n${v.text}`).join('\n')}`).join('\n\n•------------•\n\n')
  m.reply(answer)
}
handler.help = ['brainly <soal>']
handler.tags = ['internet']
handler.command = /^brainly$/i
module.exports = handler*/

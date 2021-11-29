

//𝕋𝕐ℝ𝕆ℕ𝔼\\


const { WAConnection, 
       MessageType, 
       Mimetype, 
      } = require('@adiwajshing/baileys');
const fs = require('fs');
const prefix = '.'
const conn = require("./lib/index")
conn.connect()
const client = conn.client
client.on('chat-update', async (mek) => {
try {	  
if (!mek.hasNewMessage) return
if (!mek.messages) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return

mek = mek.messages.all()[0]
if (!mek.message) return
global.blocked
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
const from = mek.key.remoteJid
const type = Object.keys(mek.message)[0]        
const quoted = type == 'extendedTextMessage' && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.quotedMessage || [] : []y
const typeQuoted = Object.keyshquoted)[0]
const content = JSON.stringify(mek.message)
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const body = mek.message.conversation || mek.message[type].caption || mek.message[type].text || ""
chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
budy = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
 
       const reply = (teks) => {	
          mek.sendMessage(from, teks, text, {sendEphemeral: true, quoted: choute})
          }
        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
                    }

if (prefix != "") {
if (!body.startsWith(prefix)) {
cmd = false
comm = ""
} else {
cmd = true
comm = body.slice(1).trim().split(" ").shift().toLowerCase()
}
} else {
cmd = false
comm = body.trim().split(" ").shift().toLowerCase()
}
        
const command = comm

const arg = chats.slice(command.length + 2, chats.length)
const args = budy.trim().split(/ +/).slice(1)
const isCmd = budy.startsWith(prefix)
const q = args.join(' ')
const soyYo = client.user.jid
const botNumber = client.user.jid.split("@")[0]
const ownerNumber = ['@s.whatsapp.net']
const isGroup = from.endsWith('@g.us')
const sender = mek.key.fromMe ? client.user.jid : isGroup ? mek.participant : mek.key.remoteJid
const senderNumber = sender.split("@")[0]
const isMe = senderNumber == botNumber
const conts = mek.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = mek.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'

//AUTO RESPUESTA VERIFICADA
if(body.includes('bot')) {
client.sendMessage(from, 'Hola!', MessageType.text, {quoted: { key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"documentMessage": { "title": "𝓣𝓨𝓡𝓞𝓝𝓔", 'jpegThumbnail': fs.readFileSync('./media/logo.jpg')}}
}})
}

//AUTO RESPUESTA SIN VERIFICACION
if(body == ('hola')) {
client.sendMessage(from, 'como estas!', MessageType.text, {quoted: mek})
}
  
if(body == ('Hola')) {
client.sendMessage(from, 'Hola? Te haz podido comunicar.', MessageType.text, {quoted: mek})
}

//ZONA DE COMANDOS	
switch (command) {
  case 'reg':   

        if (isRegister) return reply('*Tu Ya Estas Registrado.*')

        if (!q.includes('|')) return  reply(`Intruccion para registro`)

        const nombre = q.substring(0, q.indexOf('|') - 0)

        const edad = q.substring(q.lastIndexOf('|') + 1)

        const momento = require('moment-timezone')

        const time = momento.tz('America/Santo_Domingo').format('HH:mm:ss')

        if(isNaN(edad)) return reply('*_La edad es numero_*')

        try {

            ppimg = await leo.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)

            } 

            catch {

            ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'

            }

            veri = sender                                                

        addRegisteredUser(sender, pushname, nombre, edad, time)

            capt = `

┌────「 *REGISTRADO* 」─

𝐔𝐒𝐄𝐑: _${pushname}_

♾️𝐍𝐎𝐌𝐁𝐑𝐄: _${nombre}_

♾️ 𝐄𝐃𝐀𝐃: _${edad}_

♾️ 𝐇𝐎𝐑𝐀: _${time}_

└────「 *༒☬𝓣𝓨𝓡𝓞𝓝𝓔-𝓑𝓞𝓣☬༒* 」

Verificación completa usa *${prefix}menu* para ver el Menu`

            let tampa = await getBuffer(ppimg)

            client.sendMessage(from, tampa, image, {quoted: mek, caption: capt})

            break            
case 'bot':
client.sendMessage(from, 'Hola, felicidades, has logrado enviar un mensaje mediante un servidor externo😚', text, {quoted: { key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"documentMessage": { "title": "𝓣𝓨𝓡𝓞𝓝𝓔", 'jpegThumbnail': fs.readFileSync('./media/logo.jpg')}}
}})
break		
case 'foto':
const imagen = fs.readFileSync('./media/foto.jpg')                
client.sendMessage(from, imagen, MessageType.image, {quoted: mek, caption: `*Aqui tienes la foto del trio fundado*`})
break
                
case 'video':
const video = fs.readFileSync('./media/video.mp4')
client.sendMessage(from, video, MessageType.video, {quoted: mek, mimetype: 'video/mp4', caption: '𝓣𝓨𝓡𝓞𝓝𝓔', duration: 999999999})
break
                
case 'audio':
const audio = fs.readFileSync('./media/audio.mp3')
client.sendMessage(from, audio, MessageType.audio, {quoted: mek, mimetype: 'audio/mp3', duration: -9999999, ptt: true})
client.sendMessage(from, audio, MessageType.audio, {quoted: mek, mimetype: 'audio/mp3', duration: -9999999})                
break
                
}

} catch (e) {
        
console.log(e)}
        
})      

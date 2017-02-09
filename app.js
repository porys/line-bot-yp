import Bot, { Messages } from 'node-line-messaging-api';

const SECRET = 'f577301fc682b260aff89aa743019f4c' // Line@ APP SECRET
const TOKEN = 'kzJcqUzg4zRc7plfb84K/CDeI6La+uMuAKeWNKB3RJUAKNpZy2PmCcuBcwtm5EfrDJmCO1CZ5jvV7mWIr132JpIfM8n4RCKgyDYXo87p/ZQogZCO3SiPBc5QVIMMV7l/kdGrMfr28WvAHw3I6Z/LUAdB04t89/1O/w1cDnyilFU=' // Line@ issued TOKEN

const PORT = process.env.PORT || 3002

let bot = new Bot(SECRET, TOKEN, { webhook: { port: PORT } })

// bot webhook succesfully started
bot.on('webhook', w => console.log(`bot listens on port ${w}.`))

// on ANY events
bot.on('events', e => console.dir(e))

// on Message event
bot.on('message', m =>{
  console.log(m);
}
);

let msgs = new Messages()

//msgs.addText('HELLO WORLD!').addText({text: 'harambe4lyf'})

//bot.pushMessage('CHANNELXXXXXXXX', msgs.addText('FOO BAR BAZ').commit()) // HELLO WORLD! -- harambe4lyf -- FOO BAR BAZ

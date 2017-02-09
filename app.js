import Bot, { Messages } from 'node-line-messaging-api';

const SECRET = process.env.LINE_SECRET || ''; // Line@ APP SECRET
const TOKEN = process.env.LINE_SECRET || ''; // Line@ issued TOKEN

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

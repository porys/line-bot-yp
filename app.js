import Bot, { Messages } from 'node-line-messaging-api';

const SECRET = process.env.LINE_SECRET || ''; // Line@ APP SECRET
const TOKEN = process.env.LINE_TOKEN || ''; // Line@ issued TOKEN

const PORT = process.env.PORT || 3002;

console.log('LINE API SETTINGS');
console.log('SECRET: ' + SECRET);
console.log('TOKEN: ' + TOKEN);

let bot = new Bot(SECRET, TOKEN, { webhook: { port: PORT } })

// bot webhook succesfully started
bot.on('webhook', w => console.log(`bot listens on port ${w}.`))

// on ANY events
bot.on('events', e => console.dir(e))

// on Message event
bot.on('message', m =>{
  console.log('received m: ' + m);
  console.log('is text: ' + new String(m.message.type) === 'text');
  console.log('is whereami: ' + m.message.text == 'whereami');
  if((new String(m.message.type) === 'text') && (new String(m.message.text) === 'whereami')){
    const msgs = new Messages();
    msgs.addText(m.source);
    bot.replyMessage(m.replyToken,msgs.commit());
  }
}
);

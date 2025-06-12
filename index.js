const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const bot = new TelegramBot(process.env.TG_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, '👋 Привіт! Я онлайн!');
});

bot.onText(/\/info/, (msg) => {
  bot.sendMessage(msg.chat.id, 'ℹ️ Я телеграм-бот, що працює через Railway!');
});

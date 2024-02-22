const TelegramBot = require('node-telegram-bot-api');

const token = '7083024295:AAEh5uT_28Yf1YCokKNp836pjKnPkM3WybE';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const message = msg.text;

    // Пример обработки команды '/start'
    if (message === '/start') {
        bot.sendMessage(chatId, 'Привет! Этот бот готов помочь тебе.\nВот ссылка на наш официальный сайт 👇\n href \n Вот дополнительный команды для навгации по сайту\n- /help - Поддержка / Вызов специалиста\n ');
    }

    // Другие обработчики сообщений
});

bot.on('polling_error', (error) => {
    console.log(error);
});

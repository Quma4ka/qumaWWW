from telegram import Update
from telegram.ext import Updater, CommandHandler, MessageHandler, Filters, CallbackContext
import requests

# Здесь нужно указать ваш токен Telegram бота
TOKEN = '7083024295:AAEJUTo1_vzfdt_VZSK6H10ZpuxxQNO0xqU'

# Функция для обработки команды /start
def start(update: Update, context: CallbackContext) -> None:
    update.message.reply_text("Привет! Этот бот готов помочь тебе.\nВот ссылка на наш официальный сайт 👇\nhref\nВот дополнительные команды для навигации по сайту:\n- /help - Поддержка / Вызов специалиста")

# Функция для обработки сообщений с полями номера телефона и имени
def handle_message(update: Update, context: CallbackContext) -> None:
    phone_number = update.message.text
    name = context.user_data.get('name')
    if not name:
        context.user_data['name'] = phone_number
        update.message.reply_text("Теперь введите ваше имя:")
    else:
        update.message.reply_text(f"Спасибо, {name}! Ваш номер телефона: {phone_number}")

# Создаем обработчики команды /start и сообщений с данными
updater = Updater(TOKEN, use_context=True)
dispatcher = updater.dispatcher
dispatcher.add_handler(CommandHandler('start', start))
dispatcher.add_handler(MessageHandler(Filters.text & ~Filters.command, handle_message))

# Запускаем бота
updater.start_polling()
updater.idle()

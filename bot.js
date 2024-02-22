function validateInputs() {
    // Получаем значения из полей формы
    const phone = document.getElementById('phoneInput').value;
    const name = document.getElementById('nameInput').value;
  
    // Проверяем, что поля заполнены
    if (phone === '' || name === '') {
      alert('Пожалуйста, заполните все поля.');
      return;
    }
  
    // Формируем сообщение для отправки в Telegram бота
    const message = `Телефон: ${phone}\n     \nИмя: ${name}`;
  
    // Отправляем сообщение в Telegram бота
    const botToken = '7083024295:AAEh5uT_28Yf1YCokKNp836pjKnPkM3WybE';
    const chatId = '1093664497';
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`;
  
    fetch(url, {
      method: 'POST',
    })
    .then(response => {
      if (response.ok) {
        alert('Спасибо! Ваши данные успешно отправлены.');
      } else {
        alert('Произошла ошибка при отправке данных. Пожалуйста, попробуйте еще раз.');
      }
    })
    .catch(error => {
      alert('Произошла ошибка при отправке данных. Пожалуйста, попробуйте еще раз.');
    });
  }

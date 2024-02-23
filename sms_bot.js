function sendMessage() {
  const botToken = "7083024295:AAEJUTo1_vzfdt_VZSK6H10ZpuxxQNO0xqU";
  const chatId = "1093664497";
  const phone = document.getElementById("phoneInput").value;
  const name = document.getElementById("nameInput").value;
  const phonePattern = /^[\+7|8][0-9]{10}$/;
  const namePattern = /^[А-Яа-яЁё\s]+$/;

  if (!phonePattern.test(phone)) {
    alert(
      "Пожалуйста, введите корректный номер телефона, начинающийся с 8xxxxxxxxxx."
    );
    return;
  }

  if (!namePattern.test(name)) {
    alert(
      'Пожалуйста, введите только русские буквы в поле "Ваше имя".'
    );
    return;
  }

  const message = `Номер телефона: ${phone}\nИмя: ${name}`;
  const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`;

  fetch(url)
    .then((response) => {
      if (response.ok) {
        window.location.href = 'sms_ok.html'; 
      } else {
        alert("Произошла ошибка при отправке данных.");
      }
    })
    .catch((error) => {
      alert("Произошла ошибка при отправке данных.");
    });
}


const rgbBackground = document.querySelector('.rgb-background');

function changeColor() {
  rgbBackground.style.animation = 'colorChange 5s infinite alternate';
}

changeColor();

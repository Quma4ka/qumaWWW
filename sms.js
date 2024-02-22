const rgbBackground = document.querySelector('.rgb-background');

function changeColor() {
  rgbBackground.style.animation = 'colorChange 20s infinite alternate';
}

changeColor();



function validateInputs() {
  const nameInput = document.getElementById('nameInput').value;
  const phoneInput = document.getElementById('phoneInput').value;
  
  const russianNameRegex = /^[А-Яа-яЁё\s]+$/; // Регулярное выражение для проверки русского имени
  const russianPhoneRegex = /^\+7\d{10}$/; // Регулярное выражение для проверки российского номера телефона
  
  if (!russianNameRegex.test(nameInput)) {
    alert('Пожалуйста, введите корректное русское имя.');
    return;
  }
  
  if (!russianPhoneRegex.test(phoneInput)) {
    alert('Пожалуйста, введите корректный российский номер телефона в формате +7XXXXXXXXXX.');
    return;
  }
  
  alert('Данные успешно отправлены!');
}

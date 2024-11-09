

const contactForm = document.getElementById('contactForm');

// Добавим обработчик события на отправку формы
contactForm.addEventListener('submit', function(event) {
  // Остановим стандартное поведение формы (перезагрузку страницы)
  event.preventDefault();

  // Собираем данные формы в объект
  const formData = new FormData(contactForm);

  // Отправляем запрос на сервер
  fetch('../send_mail.php', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      const messageElement = document.querySelector('.message');
            messageElement.classList.add('active'); // Добавляем класс active
            // Удаляем класс через 5 секунд
            setTimeout(() => {
                messageElement.classList.remove('active'); // Удаляем класс active
            }, 5000);
    } else {
      console.error('Error sending email:', data.message);
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
  contactForm.reset();
});


// Получаем ссылку на форму и кнопку отправки
const form = document.getElementById('serviceForm');
const previewPhotos = document.querySelector('.preview-photos');
const messageElement = document.querySelector('.message');

// Обработчик отправки формы
form.addEventListener('submit', function(event) {
  // Предотвращаем стандартное поведение отправки формы (перезагрузку страницы)
  event.preventDefault();

  // Создаем объект для сбора данных из формы
  const formData = new FormData(form);
  const data = {};

  // Перебираем данные из FormData и добавляем их в объект data
  formData.forEach((value, key) => {
    if (key === 'photos[]') {
      if (!data[key]) data[key] = [];
      data[key].push(value);
    } else {
      data[key] = value;
    }
  });

  // Выводим объект с данными в консоль
  console.log('Отправляемые данные:', data);



  // Отправка данных на сервер через Fetch API
  fetch('../send-email2.php', {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(result => {
      console.log('Ответ сервера:', result);
      messageElement.classList.add('active');

      // Перезагружаем страницу
      setTimeout(() => {
        messageElement.classList.remove('active');
        // window.location.reload(); // Перезагружаем страницу
      }, 2000);
      // // Если отправка успешна, очищаем форму
      // form.reset();

      // previewPhotos.innerHTML = ''; // Удаляем все содержимое внутри preview-photos
      // // btnDeleteWrap.classList.remove('active');
      // // filesArr.length = 0;
    })
    .catch(error => {
      console.error('Ошибка отправки данных:', error);
    });
});
// Получаем ссылку на форму и кнопку отправки
const form = document.getElementById('serviceForm');

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
      
      // Если отправка успешна, очищаем форму
      form.reset();
    })
    .catch(error => {
      console.error('Ошибка отправки данных:', error);
    });
});
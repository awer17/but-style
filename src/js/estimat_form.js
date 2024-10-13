// Получаем элементы формы и контейнер блоков "сервис"
const serviceForm = document.getElementById('serviceForm');
const serviceBlocksContainer = document.getElementById('serviceBlocksContainer');
const addServiceButton = document.getElementById('addService');

document.getElementById('addService').addEventListener('click', function() {
    // Создаём новый блок сервиса
    const serviceContainer = document.getElementById('serviceContainer');
    const newServiceBlock = document.createElement('div');
    newServiceBlock.classList.add('service-block');
  
    newServiceBlock.innerHTML = `
      <label for="serviceName">Service Name:</label>
      <select class="select-list" name="serviceName" required>
        <option value="" disabled selected>Выберите сервис</option>
        <option value="11">Engineered Hardwood</option>
        <option value="12">Laminate</option>
        <option value="13">Vinyl Laminate</option>
        <option value="21">Kitchen Tile</option>
        <option value="22">Shower, Bathroom Tile</option>
        <option value="23">Floor Tile</option>
        <option value="24">Wall Tiles</option>
        <option value="25">Kitchen Tile Backsplash</option>
      </select>
  
      <div class="room-size">
        <label for="length">Length (m):</label>
        <input type="number" name="length" required placeholder="Length">
  
        <label for="width">Width (m):</label>
        <input type="number" name="width" required placeholder="Width">
  
        <label for="height">Ceiling Height (m):</label>
        <input type="number" name="height" required placeholder="Height">
      </div>
  
      <div class="photo-upload">
        <label for="photos">Upload Photos (max 5):</label>
        <input type="file" name="photos[]" accept="image/*" multiple>
        <div class="preview-photos"></div>
      </div>
  
      <textarea name="comments" placeholder="Enter additional details"></textarea>
  
      <!-- Кнопка удаления блока "Сервис" -->
      <button type="button" class="remove-service">Удалить сервис</button>
    `;
  
    // Добавляем новый блок в контейнер
    serviceContainer.appendChild(newServiceBlock);
  
    // Добавляем обработчик события для удаления блока
    newServiceBlock.querySelector('.remove-service').addEventListener('click', function() {
      serviceContainer.removeChild(newServiceBlock);
    });
  });

// Функция удаления блока "сервис"
serviceBlocksContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-service')) {
        event.target.closest('.service-block').remove();
    }
});

// Функция обработки загрузки фотографий
function addPhotoUploadFunctionality(serviceBlock) {
    const photoUploadInput = serviceBlock.querySelector('.photo-upload');
    const photoPreviewContainer = serviceBlock.querySelector('.photo-preview');

    // Прослушиваем событие изменения в поле загрузки фото
    photoUploadInput.addEventListener('change', function() {
        const files = Array.from(photoUploadInput.files);

        // Проверяем, сколько уже загружено фото
        const existingPhotos = photoPreviewContainer.querySelectorAll('.photo-wrapper').length;

        // Если уже есть 5 фото, запрещаем добавлять новые
        if (existingPhotos + files.length > 5) {
            alert('Вы можете загрузить максимум 5 фото.');
            return;
        }

        // Просматриваем загруженные файлы
        files.forEach(file => {
            const reader = new FileReader();
            reader.onload = function(e) {
                // Создаем контейнер для фото и кнопки
                const photoWrapper = document.createElement('div');
                photoWrapper.classList.add('photo-wrapper');

                const img = document.createElement('img');
                img.src = e.target.result;
                img.classList.add('uploaded-photo'); // Класс для стилей изображения

                // Кнопка удаления фото
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.classList.add('remove-photo');
                removeButton.addEventListener('click', function() {
                    photoWrapper.remove(); // Удаляем фото и кнопку вместе
                });

                // Добавляем фото и кнопку удаления в обертку
                photoWrapper.appendChild(img);
                photoWrapper.appendChild(removeButton);

                // Добавляем обертку в контейнер превью
                photoPreviewContainer.appendChild(photoWrapper);
            };
            reader.readAsDataURL(file);
        });

        // Очищаем поле ввода для загрузки фотографий, чтобы можно было повторно загружать
        photoUploadInput.value = '';
    });
}
// Инициализируем функционал для первого блока "сервис"
addPhotoUploadFunctionality(document.querySelector('.service-block'));
// Получаем элементы формы и контейнер блоков "сервис"
const serviceForm = document.getElementById('serviceForm');
const serviceBlocksContainer = document.getElementById('serviceBlocksContainer');
const addServiceButton = document.getElementById('addService');

// document.getElementById('addService').addEventListener('click', function() {
//     // Создаём новый блок сервиса
//     const serviceContainer = document.getElementById('serviceContainer');
//     const newServiceBlock = document.createElement('div');
//     newServiceBlock.classList.add('service-block');
//     newServiceBlock.classList.add('block');
//     newServiceBlock.innerHTML = `
//       <label for="serviceName">Service Name:</label>
//       <select class="select-list" name="serviceName" required>
//         <option value="" disabled selected>Выберите сервис</option>
//         <option value="11">Engineered Hardwood</option>
//         <option value="12">Laminate</option>
//         <option value="13">Vinyl Laminate</option>
//         <option value="21">Kitchen Tile</option>
//         <option value="22">Shower, Bathroom Tile</option>
//         <option value="23">Floor Tile</option>
//         <option value="24">Wall Tiles</option>
//         <option value="25">Kitchen Tile Backsplash</option>
//       </select>
  
//       <div class="room-size">
//         <label for="length">Length (m):</label>
//         <input type="number" name="length" required placeholder="Length">
  
//         <label for="width">Width (m):</label>
//         <input type="number" name="width" required placeholder="Width">
  
//         <label for="height">Ceiling Height (m):</label>
//         <input type="number" name="height" required placeholder="Height">
//       </div>
  
//       <div class="photo-upload">
//         <label for="photos">Upload Photos (max 5):</label>
//         <input type="file" name="photos[]" accept="image/*" multiple>
//         <div class="preview-photos"></div>
//       </div>
  
//       <textarea name="comments" placeholder="Enter additional details"></textarea>
  
//       <!-- Кнопка удаления блока "Сервис" -->
//       <button type="button" class="remove-service">Удалить сервис</button>
//     `;
  
//     // Добавляем новый блок в контейнер
//     serviceContainer.appendChild(newServiceBlock);
  
//     // Добавляем обработчик события для удаления блока
//     newServiceBlock.querySelector('.remove-service').addEventListener('click', function() {
//       serviceContainer.removeChild(newServiceBlock);
//     });
//   });

// Функция удаления блока "сервис"
// serviceBlocksContainer.addEventListener('click', function(event) {
//     if (event.target.classList.contains('remove-service')) {
//         event.target.closest('.service-block').remove();
//     }
// });

// Инициализируем функционал для первого блока "сервис"
// addPhotoUploadFunctionality(document.querySelector('.service-block'));
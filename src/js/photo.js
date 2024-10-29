let files = []
const filesArr = []


document.addEventListener('DOMContentLoaded', function() {
  const photoInput = document.querySelector('input[name="photos[]"]');
  const previewContainer = document.querySelector('.preview-photos');
  let maxPhotos = 5;
  const fileInputContainer = document.querySelector('.imput_photo');
  const btnDeletePhoto = document.querySelector('.btn_delete_wrap')

  // Контейнер для поля загрузки
  photoInput.addEventListener('change', function(event) {
        files = Array.from(event.target.files);
      if (files.length > (maxPhotos - filesArr.length )) {
          alert(`You can upload a maximum of ${maxPhotos} photos.`);
          photoInput.value = '';
          console.log(filesArr.length + " нет")
           // Сбросить выбор файлов, если превышен лимит
          return;
      } else {
        filesArr.push( ...files)
      }
      if(filesArr.length > 0 ){
        btnDeletePhoto.classList.add('active') 
      }


      files.slice(0, maxPhotos).forEach(file => {
          if (file.type.startsWith('image/')) {
              const reader = new FileReader();
              reader.onload = function(e) {
                  const img = document.createElement('img');
                  img.src = e.target.result;
                  img.classList = 'photo'
                  previewContainer.appendChild(img);
              };
              reader.readAsDataURL(file);
                    // Скрыть кнопку загрузки фото, если достигнут лимит

          } else {
              alert('Only image files are allowed.');
              photoInput.value = '';
               // Сбросить выбор, если файл не изображение
              return;
          }
          if (filesArr.length >= maxPhotos) {
            fileInputContainer.classList.remove('active')
        }
      });
  });
});

// Функция для удаления последнего изображения
function deleteLastPhoto() {
  // Находим блок с фотографиями
  const previewPhotos = document.querySelector('.preview-photos');
  // Находим блок кнопки удаления
  const btnDeleteWrap = document.querySelector('.btn_delete_wrap');

  // Проверяем, есть ли в блоке изображения
  if (previewPhotos && previewPhotos.children.length > 0) {
    // Находим последний элемент img и удаляем его
    const lastPhoto = previewPhotos.querySelector('img:last-child');
    if (lastPhoto) {
      previewPhotos.removeChild(lastPhoto);
    }

    // Если после удаления больше нет изображений
    if (previewPhotos.children.length === 0 && btnDeleteWrap) {
      // Удаляем класс 'active' у блока кнопки удаления
      btnDeleteWrap.classList.remove('active');
    }

    if(previewPhotos.children.length < 5){
      const fileInputContainer = document.querySelector('.imput_photo');
      fileInputContainer.classList.add('active')
      deleteListfiles()
    }


  } else {
    console.log('No photos to delete.');
  }
}

function deleteListfiles (){
        filesArr.pop()
}

// Добавляем событие клика на кнопку удаления
const deleteButton = document.querySelector('.btn_delete');
if (deleteButton) {
  deleteButton.addEventListener('click', deleteLastPhoto);
}
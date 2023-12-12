const uploadFileInput = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadCancel = document.querySelector('#upload-cancel');
const imgUploadForm = document.querySelector('.img-upload__form');
const imgPreview = document.querySelector('.img-upload__preview img');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');

// Функция обработки события изменения значения поля загрузки файла
uploadFileInput.addEventListener('change', () => {
  const file = uploadFileInput.files[0]; // Получаем файл

  // Проверяем, был ли выбран файл
  if (file) {
    imgPreview.src = URL.createObjectURL(file); // Подставляем выбранное изображение в превью
    imgUploadOverlay.classList.remove('hidden'); // Показываем форму редактирования изображения
    document.body.classList.add('modal-open');
  }
});

// Функция закрытия формы редактирования изображения
function closeImgUploadOverlay() {
  imgUploadForm.reset();
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

imgUploadCancel.addEventListener('click', closeImgUploadOverlay);

// Обработчик нажатия клавиши Esc
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    closeImgUploadOverlay();
  }
});

// Обработчики изменения масштаба
scaleControlSmaller.addEventListener('click', () => {
  // Уменьшение масштаба
  // Ваш код для изменения масштаба изображения
});

scaleControlBigger.addEventListener('click', () => {
  // Увеличение масштаба
  // Ваш код для изменения масштаба изображения
});

const effectsList = document.querySelector('.effects__list');
effectsList.addEventListener('change', (evt) => {
  const selectedEffect = evt.target.value;

  // Удаляем все классы эффектов
  imgPreview.className = '';
  imgPreview.classList.add(`effects__preview--${  selectedEffect}`);
});

// Обработчик изменения глубины эффекта
effectLevelSlider.addEventListener('change', () => {
  // Изменение глубины эффекта
  // Ваш код для изменения глубины эффекта
});

// Обработчик отправки формы
imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  // Ваш код для обработки отправки формы
});

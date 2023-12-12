import { generatePhoto } from './data.js';
import createShowBigPicture from './big-picture.js';

const { showBigPicture, closeBigPicture } = createShowBigPicture();

const PhotoGallery = (function () {
  function createPhotoElement(photoData) {
    const template = document.querySelector('#picture');
    const photoElement = template.content.cloneNode(true);
    const imgElem = photoElement.querySelector('.picture__img');
    imgElem.src = photoData.url;
    imgElem.alt = photoData.description;
    const likes = photoElement.querySelector('.picture__likes');
    likes.textContent = photoData.likes;
    const comments = photoElement.querySelector('.picture__comments');
    comments.textContent = photoData.comments.length;
    return photoElement;
  }

  function addEventListeners(photosData) {
    const pictures = document.querySelectorAll('.picture');
    pictures.forEach((picture, index) => {
      picture.addEventListener('click', (evt) => {
        evt.preventDefault();
        showBigPicture(photosData[index]);
      });
    });
    const closeBtn = document.querySelector('.big-picture__cancel');
    closeBtn.removeEventListener('click', closeBigPicture);
    closeBtn.addEventListener('click', closeBigPicture);
    document.addEventListener('keydown', closeOnEscape);
  }

  function closeOnEscape(evt) {
    if (evt.key === 'Escape') {
      closeBigPicture();
    }
  }

  function renderPhotos(photosData) {
    const fragment = document.createDocumentFragment();
    const picturesContainer = document.querySelector('.pictures');
    photosData.forEach((photo) => {
      const photoElement = createPhotoElement(photo);
      fragment.appendChild(photoElement);
    });
    picturesContainer.appendChild(fragment);
    addEventListeners(photosData);
  }

  return {
    renderPhotos,
  };
})();

const photos = Array.from({ length: 25 }, (_, index) => generatePhoto(index + 1));
PhotoGallery.renderPhotos(photos);

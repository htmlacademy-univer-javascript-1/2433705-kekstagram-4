import { getData } from './api.js';
import { showBigPicture, closeBigPicture } from './big-picture.js';

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
    closeBtn.addEventListener('click', closeBigPicture);

    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        closeBigPicture();
      }
    });
  }

  function renderPhotosFromServer() {
    getData()
      .then((photos) => {
        const fragment = document.createDocumentFragment();
        const picturesContainer = document.querySelector('.pictures');

        photos.forEach((photo) => {
          const photoElement = createPhotoElement(photo);
          fragment.appendChild(photoElement);
        });

        picturesContainer.appendChild(fragment);
        addEventListeners(photos);
      });
  }


  return {
    renderPhotosFromServer
  };
})();

PhotoGallery.renderPhotosFromServer();

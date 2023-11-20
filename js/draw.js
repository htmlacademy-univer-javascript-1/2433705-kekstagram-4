

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
  function renderPhotos(photosData) {
    const fragment = document.createDocumentFragment();
    const picturesContainer = document.querySelector('.pictures');
    photosData.forEach((photo) => {
      const photoElement = createPhotoElement(photo);
      fragment.appendChild(photoElement);
    });
    picturesContainer.appendChild(fragment);
  }
  return{
    renderPhotos
  };
})();

export{PhotoGallery};

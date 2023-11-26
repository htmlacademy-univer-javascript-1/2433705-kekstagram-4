function showBigPicture(photoData) {
  const bigPicture = document.querySelector('.big-picture');
  const bigImage = bigPicture.querySelector('.big-picture__img img');
  const likesCount = bigPicture.querySelector('.likes-count');
  const commentsCount = bigPicture.querySelector('.comments-count');
  const socialComments = bigPicture.querySelector('.social__comments');
  const socialCaption = bigPicture.querySelector('.social__caption');

  bigImage.src = photoData.url;
  likesCount.textContent = photoData.likes;
  commentsCount.textContent = photoData.comments.length;
  socialCaption.textContent = photoData.description;

  // Очищаем список комментариев перед заполнением новыми
  socialComments.innerHTML = '';

  photoData.comments.forEach((comment) => {
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');

    const commentImage = document.createElement('img');
    commentImage.classList.add('social__picture');
    commentImage.src = comment.avatar;
    commentImage.alt = comment.name;
    commentImage.width = 35;
    commentImage.height = 35;

    const commentText = document.createElement('p');
    commentText.classList.add('social__text');
    commentText.textContent = comment.message;

    commentElement.appendChild(commentImage);
    commentElement.appendChild(commentText);

    socialComments.appendChild(commentElement);
  });

  // Скрытие блоков .social__comment-count и .comments-loader
  const commentCountBlock = document.querySelector('.social__comment-count');
  const commentsLoaderBlock = document.querySelector('.comments-loader');
  commentCountBlock.classList.add('hidden');
  commentsLoaderBlock.classList.add('hidden');

  // Открытие окна
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

function closeBigPicture() {
  const bigPicture = document.querySelector('.big-picture');
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

export { showBigPicture, closeBigPicture };

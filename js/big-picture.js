function showBigPicture(photoData) {
  const bigPicture = document.querySelector('.big-picture');
  const bigImage = bigPicture.querySelector('.big-picture__img img');
  const likesCount = bigPicture.querySelector('.likes-count');
  const commentsCount = bigPicture.querySelector('.comments-count');
  const socialComments = bigPicture.querySelector('.social__comments');
  const socialCaption = bigPicture.querySelector('.social__caption');
  const commentsCountBlock = document.querySelector('.social__comment-count');
  const commentsLoaderBlock = document.querySelector('.comments-loader');

  bigImage.src = photoData.url;
  likesCount.textContent = photoData.likes;
  commentsCount.textContent = photoData.comments.length;
  socialCaption.textContent = photoData.description;
  // Очищаем список комментариев перед заполнением новыми
  socialComments.innerHTML = '';

  const COMMENTS_TO_SHOW = 5;
  let shownCommentsCount = 0;

  const renderComments=()=>{
    const comments = photoData.comments.slice(shownCommentsCount, shownCommentsCount + COMMENTS_TO_SHOW);

    comments.forEach((comment) => {
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

    shownCommentsCount += comments.length;

    // Обновление числа показанных комментариев
    commentsCountBlock.textContent = `${shownCommentsCount} из ${photoData.comments.length} комментариев`;

    // Если все комментарии показаны, скрываем кнопку "Загрузить ещё"
    if (shownCommentsCount >= photoData.comments.length) {
      commentsLoaderBlock.classList.add('hidden');
    }
  };
  // Показываем первые комментарии (первые 5)
  renderComments();
  // Обработчик события для кнопки "Загрузить ещё"
  commentsLoaderBlock.removeEventListener('click', renderComments);
  commentsLoaderBlock.addEventListener('click', renderComments);
  // Открытие окна
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

function closeBigPicture() {
  const bigPicture = document.querySelector('.big-picture');
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

export{showBigPicture, closeBigPicture};

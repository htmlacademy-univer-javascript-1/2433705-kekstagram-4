
const form = document.querySelector('.img-upload__form');
const uploadInput = form.querySelector('#upload-file');
const overlay = form.querySelector('.img-upload__overlay');
const cancelBtn = form.querySelector('#upload-cancel');
const imgPreview = form.querySelector('.img-upload__preview img');
const hashtags = form.querySelector('.text__hashtags');
const description = form.querySelector('.text__description');
let preventClose = false;
let selectedEffect = 'none';
const MAX_LENGTH = 140;
const MAX_HASHTAG_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const textErrors = {
  INVALID_COUNT: `Максимум ${MAX_HASHTAG_COUNT} хештегов`,
  INVALID_TAG: 'Неправильный хештег',
  REPEATING_TAG: 'Повторяющийся хештег'
};
const pristine = new Pristine(form,{
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

const normalizeTags = (tagString)=> tagString
  .trim().split(' ')
  .filter((tag)=> Boolean(tag.length));

const hasValidCount = (value) => normalizeTags(value).length <= MAX_HASHTAG_COUNT;

const hasValidTags = (value) => normalizeTags(value).every((tag) => VALID_SYMBOLS.test(tag));

function hasRepeatingTags(value) {
  const tags = normalizeTags(value);
  const uniqueTags = new Set(tags);
  return tags.length === uniqueTags.size;
}

uploadInput.addEventListener('change', () => {
  const file = uploadInput.files[0];

  if (file) {
    imgPreview.src = URL.createObjectURL(file);
    overlay.classList.remove('hidden');
    document.body.classList.add('modal-open');
    selectedEffect = 'none';
    applySelectedEffect();
  }
});

function applySelectedEffect() {
  imgPreview.className = '';
  imgPreview.classList.add(`effects__preview--${selectedEffect}`);
}

function handleFocus(element) {
  element.addEventListener('focus', () => {
    preventClose = true;
  });

  element.addEventListener('blur', () => {
    preventClose = false;
  });
}

handleFocus(hashtags);
handleFocus(description);

function closeImgUploadOverlay() {
  form.reset();
  pristine.reset();
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

cancelBtn.addEventListener('click', closeImgUploadOverlay);

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape' && !preventClose){
    closeImgUploadOverlay();
  }
});

const effectsList = document.querySelector('.effects__list');
effectsList.addEventListener('change', (evt) => {
  selectedEffect = evt.target.value;
  applySelectedEffect();
});

function limitInputLength(inputField, maxLen) {
  inputField.addEventListener('input', (event) => {
    const { value } = event.target;

    if (value.length > maxLen) {
      pristine.validate();
      event.target.value = value.slice(0, maxLen);
    }
  });
}

limitInputLength(description, MAX_LENGTH);

pristine.addValidator (
  hashtags,
  hasValidCount,
  textErrors.INVALID_COUNT,
  3,
  true
);

pristine.addValidator (
  hashtags,
  hasValidTags,
  textErrors.INVALID_TAG,
  2,
  true
);

pristine.addValidator (
  hashtags,
  hasRepeatingTags,
  textErrors.REPEATING_TAG,
  1,
  true
);

const scaleControlValue = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
const upScale = document.querySelector('.scale__control--bigger');
const downScale = document.querySelector('.scale__control--smaller');

const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_STEP = 25;
const DEFAULT_SCALE = 100;

function changeImageScale(step) {
  let currentScale = parseInt(scaleControlValue.value, 10);
  currentScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, currentScale + step));
  scaleControlValue.value = `${currentScale}%`;
  const scale = currentScale / 100;
  imgUploadPreview.style.transform = `scale(${scale})`;
}

function setImageScale(scaleValue) {
  scaleControlValue.value = `${scaleValue}%`;
  imgUploadPreview.style.transform = `scale(${scaleValue / 100})`;
}

setImageScale(DEFAULT_SCALE);

function resetImageScale() {
  setImageScale(DEFAULT_SCALE);
}

downScale.addEventListener('click', () => {
  changeImageScale(-SCALE_STEP);
});

upScale.addEventListener('click', () => {
  changeImageScale(SCALE_STEP);
});

export { resetImageScale };

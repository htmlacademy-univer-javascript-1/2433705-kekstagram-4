import { imgPreview } from './form.js';

const EFFECTS = {
  'NONE': {
    min: 0,
    max: 1,
    start: 1,
    step: 0.1,
    effect: '',
    effectUnit: '',
  },
  'CHROME': {
    min: 0,
    max: 1,
    start: 0,
    step: 0.1,
    effect: 'grayscale',
    effectUnit: '',
  },
  'SEPIA': {
    min: 0,
    max: 1,
    start: 0,
    step: 0.1,
    effect: 'sepia',
    effectUnit: '',
  },
  'MARVIN': {
    min: 0,
    max: 100,
    start: 0,
    step: 1,
    effect: 'invert',
    effectUnit: '%',
  },
  'PHOBOS': {
    min: 0,
    max: 3,
    start: 0,
    step: 0.1,
    effect: 'blur',
    effectUnit: 'px',
  },
  'HEAT': {
    min: 1,
    max: 3,
    start: 0,
    step: 0.1,
    effect: 'brightness',
    effectUnit: '',
  },
};

let selectedEffect = 'none';
const effectsList = document.querySelector('.effects__list');
effectsList.addEventListener('change', (evt) => {
  selectedEffect = evt.target.value;
  applySelectedEffect();
});

function applySelectedEffect() {
  imgPreview.className = '';

  if (selectedEffect !== 'none') {
    imgPreview.classList.add(`effects__preview--${selectedEffect}`);
    showSlider();
  } else {
    hideSlider();
  }
}

function showSlider() {
  const slider = document.querySelector('.effect-level');
  slider.style.display = 'block';
}

function hideSlider() {
  const slider = document.querySelector('.effect-level');
  slider.style.display = 'none';
}

function resetSelectedEffect() {
  selectedEffect = 'none';
  applySelectedEffect();
}

const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');

function updateEffectIntensity(effect, value) {
  let style = '';

  switch (effect) {
    case 'CHROME':
      style = `grayscale(${value})`;
      break;
    case 'SEPIA':
      style = `sepia(${value})`;
      break;
    case 'MARVIN':
      style = `invert(${value}%)`;
      break;
    case 'PHOBOS':
      style = `blur(${value}px)`;
      break;
    case 'HEAT':
      style = `brightness(${value})`;
      break;
    default:
      break;
  }

  imgPreview.style.filter = style;
}

function setupSlider(effect) {
  const effectData = EFFECTS[effect];

  noUiSlider.create(effectLevelSlider, {
    start: effectData.start,
    range: {
      min: effectData.min,
      max: effectData.max,
    },
    step: effectData.step,
  });

  effectLevelSlider.noUiSlider.on('update', (values, handle) => {
    const value = values[handle];
    effectLevelValue.value = value;

    updateEffectIntensity(effect, value);
  });

  effectLevelValue.addEventListener('change', (evt) => {
    const value = evt.target.value;
    effectLevelSlider.noUiSlider.set(value);

    updateEffectIntensity(effect, value);
  });

}

effectsList.addEventListener('change', (evt) => {
  selectedEffect = evt.target.value;
  applySelectedEffect();
  if (selectedEffect !== 'none') {
    setupSlider(selectedEffect);
  }
});

export { applySelectedEffect, resetSelectedEffect };

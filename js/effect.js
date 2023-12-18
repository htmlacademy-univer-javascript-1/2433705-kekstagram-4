import { imgPreview } from './form.js';
let selectedEffect = 'none';

const effectsList = document.querySelector('.effects__list');
effectsList.addEventListener('change', (evt) => {
  selectedEffect = evt.target.value;
  applySelectedEffect();
});

function applySelectedEffect() {
  imgPreview.className = '';
  imgPreview.classList.add(`effects__preview--${selectedEffect}`);
}

function resetSelectedEffect() {
  selectedEffect = 'none';
  applySelectedEffect();
}

export{applySelectedEffect, resetSelectedEffect};

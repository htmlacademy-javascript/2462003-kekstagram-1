const effectsContainer = document.querySelector('.effects__list');
const uploadImage = document.querySelector('.img-upload__preview img');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const slider = sliderContainer.querySelector('.effect-level__slider');
const sliderValue = sliderContainer.querySelector('.effect-level__value');

const Effect = {
  NONE: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
};

const effectToFilterName = {
  [Effect.NONE]: 'none',
  [Effect.CHROME]: 'grayscale',
  [Effect.SEPIA]: 'sepia',
  [Effect.MARVIN]: 'invert',
  [Effect.PHOBOS]: 'blur',
  [Effect.HEAT]: 'brightness',
};

const EFFECT_CONFIG = {
  [Effect.NONE]: {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
  },
  [Effect.CHROME]: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
  },
  [Effect.SEPIA]: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
  },
  [Effect.MARVIN]: {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
  },
  [Effect.PHOBOS]: {
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
  },
  [Effect.HEAT]: {
    range: {
      min: 1,
      max: 3,
    },
    start: 3,
    step: 0.1,
  },
};

noUiSlider.create(slider,
  {...EFFECT_CONFIG[Effect.NONE],
    connect: 'lower'});

const setEffect = (effect) => {
  uploadImage.classList.remove(`effects__preview--${uploadImage.dataset.effect}`);
  uploadImage.classList.add(`effects__preview--${effect}`);
  uploadImage.dataset.effect = effect;

  slider.noUiSlider.updateOptions(EFFECT_CONFIG[effect]);
};

const resetEffect = () => {
  setEffect(Effect.NONE);
};

const getEffectUnit = (effect) => {
  switch (effect) {
    case 'marvin':
      return '%';
    case 'phobos':
      return 'px';
    default:
      return '';
  }
};

const setFilterValue = (value) => {
  const effect = uploadImage.dataset.effect;

  if (effect === 'none') {
    uploadImage.style.filter = null;
    sliderContainer.classList.add('hidden');

  } else {
    sliderContainer.classList.remove('hidden');
    uploadImage.style.filter = `${effectToFilterName[effect]}(${value}${getEffectUnit(effect)})`;
  }
};

const onEffectButtonClick = (evt) => {
  if (evt.target.matches('.effects__radio')) {
    const effect = evt.target.value;
    setEffect(effect);
    setFilterValue(EFFECT_CONFIG[effect].start);
  }
};

effectsContainer.addEventListener('click', onEffectButtonClick);

slider.noUiSlider.on('update', () => {
  const value = slider.noUiSlider.get();
  sliderValue.value = value;
  setFilterValue(value);
});

export { resetEffect };

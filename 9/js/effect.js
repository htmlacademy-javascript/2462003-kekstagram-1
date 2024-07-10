const effectsContainer = document.querySelector('.effects__list');
const uploadImageElement = document.querySelector('.img-upload__preview img');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const sliderElement = sliderContainer.querySelector('.effect-level__slider');
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

noUiSlider.create(sliderElement, EFFECT_CONFIG[Effect.NONE]);

const checkSliderVisibility = (effectClass) => {
  if (effectClass !== 'none') {
    sliderContainer.classList.remove('hidden');
  } else {
    sliderContainer.classList.add('hidden');
  }
};

const onEffectButtonClick = (evt) => {
  if (evt.target.matches('.effects__radio')) {
    const effectClass = evt.target.value;
    uploadImageElement.style = '';
    uploadImageElement.classList = '';
    uploadImageElement.classList.add(`effects__preview--${effectClass}`);
    checkSliderVisibility(effectClass);
    sliderElement.noUiSlider.set(100);

    sliderElement.noUiSlider.updateOptions(
      EFFECT_CONFIG[Effect.CHROME]
    );

    if(document.querySelector('#effect-phobos').checked) {
      sliderElement.noUiSlider.updateOptions(EFFECT_CONFIG[Effect.PHOBOS]
      );
    }
    if(document.querySelector('#effect-heat').checked) {
      sliderElement.noUiSlider.updateOptions(EFFECT_CONFIG[Effect.HEAT]);
    }
    if(document.querySelector('#effect-marvin').checked) {
      sliderElement.noUiSlider.updateOptions(EFFECT_CONFIG[Effect.MARVIN]);
    }
  }
};

effectsContainer.addEventListener('click', onEffectButtonClick);

const setFilterValue = (value) => {
  if (document.querySelector('#effect-chrome').checked) {
    uploadImageElement.style = `filter: ${effectToFilterName[Effect.CHROME]}(${value})`;
  }
  if (document.querySelector('#effect-sepia').checked) {
    uploadImageElement.style = `filter: ${effectToFilterName[Effect.SEPIA]}(${value})`;
  }
  if (document.querySelector('#effect-marvin').checked) {
    uploadImageElement.style = `filter: ${effectToFilterName[Effect.MARVIN]}(${value}%)`;
  }
  if (document.querySelector('#effect-phobos').checked) {
    uploadImageElement.style = `filter: ${effectToFilterName[Effect.PHOBOS]}(${value}px)`;
  }
  if (document.querySelector('#effect-heat').checked) {
    uploadImageElement.style = `filter: ${effectToFilterName[Effect.HEAT]}(${value})`;
  }
};

sliderElement.noUiSlider.on('update', () => {
  const valueElement = sliderElement.noUiSlider.get();
  sliderValue.value = `${valueElement}`;
  setFilterValue(sliderValue.value);
});

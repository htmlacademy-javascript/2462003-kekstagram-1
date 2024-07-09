const effectsContainer = document.querySelector('.effects__list');
const scalableImage = document.querySelector('.img-upload__preview img');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const sliderElement = sliderContainer.querySelector('.effect-level__slider');
let sliderValue = sliderContainer.querySelector('.effect-level__value').value;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

const isSliderVisible = (evt) => {
  if (evt.target.value !== 'none') {
    sliderContainer.style = 'display: block';
  } if (evt.target.value === 'none') {
    sliderContainer.style = 'display: none';
  }
};

const onEffectButtonClick = (evt) => {
  if (evt.target.matches('.effects__radio')) {
    const effectClass = evt.target.value;
    scalableImage.className = '';
    scalableImage.style = '';
    scalableImage.classList.add(`effects__preview--${effectClass}`);
    isSliderVisible(evt);
    sliderElement.noUiSlider.set(100);

    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1
    });
    sliderElement.noUiSlider.set(1);

    if(document.querySelector('#effect-phobos').checked) {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3
        },
        start: 3,
        step: 0.1
      });
    }
    if(document.querySelector('#effect-heat').checked) {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3
        },
        start: 3,
        step: 0.1
      });
    } {
      if(document.querySelector('#effect-marvin').checked) {
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 100
          },
          start: 100,
          step: 0.1
        });
      }
    }
  }
};

effectsContainer.addEventListener('click', onEffectButtonClick);

const setFilterValue = (value) => {
  if (document.querySelector('#effect-chrome').checked) {
    scalableImage.style = `filter: grayscale(${value})`;
  }
  if (document.querySelector('#effect-sepia').checked) {
    scalableImage.style = `filter: sepia(${value})`;
  }
  if (document.querySelector('#effect-marvin').checked) {
    scalableImage.style = `filter: invert(${value}%)`;
  }
  if (document.querySelector('#effect-phobos').checked) {
    scalableImage.style = `filter: blur(${value}px)`;
  }
  if (document.querySelector('#effect-heat').checked) {
    scalableImage.style = `filter: brightness(${value})`;
  }
};

sliderElement.noUiSlider.on('update', () => {
  const valueElement = sliderElement.noUiSlider.get();
  sliderValue = `${valueElement}`;
  setFilterValue(sliderValue);
});

const effectsContainer = document.querySelector('.effects__list');
const scalableImage = document.querySelector('.img-upload__preview img');
const effectsList = effectsContainer.querySelectorAll('.effects__item');

effectsList.forEach((item, index) => {
  item.dataset.effect = index;
});

console.log(effectsList)

const effects = {
  0: '',
  1: 'effects__preview--chrome',
  2: 'effects__preview--sepia',
  3: 'effects__preview--marvin',
  4: 'effects__preview--phobos',
  5: 'effects__preview--heat'
};

const addEffectsListener = () => {
  effectsContainer.addEventListener('click', (evt) => {
    const effect = evt.target.closest('.effects__item');
    if (effect) {
      const effectClass = effect.dataset.effect;
      addEffect(effectClass);
    }
  });
};
addEffectsListener(effectsList);

function addEffect(elementIndex) {
  scalableImage.classList.add(effects[elementIndex]);
console.log(effects[elementIndex]);
}
// const onEffectButtonClick = (evt) => {
//   console.log(evt.target)
// };

// effectsContainer.addEventListener('click', onEffectButtonClick);

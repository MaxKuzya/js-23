/**
 * DOM Events
 *
 * - addEventListener
 * - HTMLElement.onclick / .on*
 * - html onclick / on* attribute
 * - removeEventListener
 * - именование
 * - Event обьект
 * - currentTarget
 */

const buttonEl = document.querySelector('.js-button');
const addEl = document.querySelector('.js-add-listener');
const removeEl = document.querySelector('.js-remove-listener');

/**
 * 1. handleClick (handle*)
 * 2. onClick (on*)
 * 3. clickHandler (*Handler)
 */

const handleClick = event => {
  console.log(event);

  console.count('Клик по кнопке! (addEventListener)');
};

buttonEl.addEventListener('click', handleClick);

addEl.addEventListener('click', () => {
  buttonEl.addEventListener('click', handleClick);
});

removeEl.addEventListener('click', () => {
  buttonEl.removeEventListener('click', handleClick);
});

// 2/3-й способ:

// buttonEl.onclick = () => {
//   console.log('Клик по кнопке! (onclick property)');
// };

console.dir(buttonEl);

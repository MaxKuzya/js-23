/**
 * Data аттрибуты:
 *
 * - хранение данных (строка)
 * - выступает в роли селектора (без привязки к оформлению)
 * - не влияют на стандартное поведение элементов
 */

const actionButtons = document.querySelectorAll('[data-action]');

console.log(actionButtons);

actionButtons.forEach(el => {
  el.addEventListener('click', event => {
    const buttonEl = event.currentTarget;

    console.log(buttonEl.dataset.action);
    console.log(buttonEl.getAttribute('data-action'));
  });
});

let controlsRef;

controlsRef = document.getElementById('controls'); // 1
controlsRef = document.querySelector('#controls'); // 2
controlsRef = document.querySelectorAll('#controls')[0]; // 3
controlsRef = window.controls; // 4
controlsRef = window['controls']; // 5
controlsRef = controls; // 6

console.log(controlsRef);

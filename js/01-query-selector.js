/**
 * Находит 1 элемент / null
 *
 * querySelector
 */

const titleEl = document.querySelector('h1'); // Element h1
const nonExistingEl = document.querySelector('.non-existing-element'); // null

// console.log(titleEl);

/**
 * Находит NodeList
 *
 * querySelectorAll
 */

const items = document.querySelectorAll('li');

// debugger;

items.forEach((listEl, index) => {
  //   listEl.textContent = (index + 1) * 100;
  //   debugger;
});

// console.log(items);

/**
 *
 */

const firstListEl = document.querySelector('.first-list');

const firstListItems = firstListEl.querySelectorAll('li');

console.log(firstListItems);

const firstListItems_2 = document.querySelectorAll('.first-list li');

console.log(firstListItems_2);

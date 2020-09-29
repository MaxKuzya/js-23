/**
 * https://picsum.photos/400/100
 */

const imgEl = document.querySelector('img');

const imgEl_2 = document.querySelectorAll('img')[1];

// getAttribute

// console.log('src:', imgEl.getAttribute('src')); // ссылка на картинку
// console.log('hidden:', imgEl.getAttribute('hidden')); // пустая строка
// console.log('No attribute found:', imgEl.getAttribute('test')); // null

// setAttribute

// debugger;

// imgEl_2.setAttribute('src', 'https://picsum.photos/200/200');
// imgEl_2.setAttribute('alt', 'Перезаписанный alt!');
// imgEl_2.setAttribute('hidden', '');

// removeAttribute

// debugger;

imgEl_2.removeAttribute('hidden');

// hasAttribute

// console.log(imgEl.hasAttribute('hidden'));

/**
 * Псевдо lazy loading
 */

imgEl_2.setAttribute('src', imgEl_2.getAttribute('data-src'));

/**
 * dataset
 */

console.log(imgEl.dataset);
console.log(imgEl.dataset.isHidden);
console.log(imgEl_2.dataset.src);

/**
 * style
 */

const title = document.querySelector('h1');

title.style.transition = '2s ease background';

title.style.backgroundColor = 'red';

title.style.padding = '50px 0 100px 20px';

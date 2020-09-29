const apps = [
  {
    id: 1,
    name: 'Gembucket',
    downloads: 61,
  },
  {
    id: 2,
    name: 'Mat Lam Tam',
    downloads: 412,
  },
  {
    id: 3,
    name: 'Biodex',
    downloads: 983,
  },
  {
    id: 4,
    name: 'Transcof',
    downloads: 935,
  },
  {
    id: 5,
    name: 'Stim',
    downloads: 947,
  },
  {
    id: 6,
    name: 'Wrapsafe',
    downloads: 773,
  },
  {
    id: 7,
    name: 'Ronstring',
    downloads: 777,
  },
  {
    id: 8,
    name: 'Alpha',
    downloads: 960,
  },
  {
    id: 9,
    name: 'Opela',
    downloads: 660,
  },
  {
    id: 10,
    name: 'Konklab',
    downloads: 21,
  },
  {
    id: 11,
    name: 'Vagram',
    downloads: 422,
  },
  {
    id: 12,
    name: 'Cardify',
    downloads: 14,
  },
  {
    id: 13,
    name: 'Asoka',
    downloads: 653,
  },
  {
    id: 14,
    name: 'Latlux',
    downloads: 951,
  },
  {
    id: 15,
    name: 'Stim',
    downloads: 328,
  },
  {
    id: 16,
    name: 'Flowdesk',
    downloads: 900,
  },
  {
    id: 17,
    name: 'Kanlam',
    downloads: 896,
  },
  {
    id: 18,
    name: 'Viva',
    downloads: 737,
  },
  {
    id: 19,
    name: 'Cardify',
    downloads: 190,
  },
  {
    id: 20,
    name: 'Prodder',
    downloads: 149,
  },
  {
    id: 21,
    name: 'Span',
    downloads: 173,
  },
  {
    id: 22,
    name: 'Fintone',
    downloads: 119,
  },
  {
    id: 23,
    name: 'Rank',
    downloads: 614,
  },
  {
    id: 24,
    name: 'Regrant',
    downloads: 768,
  },
  {
    id: 25,
    name: 'Bamity',
    downloads: 390,
  },
  {
    id: 26,
    name: 'Asoka',
    downloads: 688,
  },
  {
    id: 27,
    name: 'Biodex',
    downloads: 88,
  },
  {
    id: 28,
    name: 'Solarbreeze',
    downloads: 935,
  },
  {
    id: 29,
    name: 'Viva',
    downloads: 178,
  },
  {
    id: 30,
    name: 'Lotstring',
    downloads: 495,
  },
  {
    id: 31,
    name: 'Fix San',
    downloads: 73,
  },
  {
    id: 32,
    name: 'Andalax',
    downloads: 235,
  },
  {
    id: 33,
    name: 'Alpha',
    downloads: 272,
  },
  {
    id: 34,
    name: 'Span',
    downloads: 331,
  },
  {
    id: 35,
    name: 'Prodder',
    downloads: 562,
  },
  {
    id: 36,
    name: 'Zontrax',
    downloads: 552,
  },
  {
    id: 37,
    name: 'Mat Lam Tam',
    downloads: 937,
  },
  {
    id: 38,
    name: 'Kanlam',
    downloads: 193,
  },
  {
    id: 39,
    name: 'Zontrax',
    downloads: 173,
  },
  {
    id: 40,
    name: 'Job',
    downloads: 801,
  },
  {
    id: 41,
    name: 'Cookley',
    downloads: 82,
  },
  {
    id: 42,
    name: 'Alpha',
    downloads: 957,
  },
  {
    id: 43,
    name: 'Kanlam',
    downloads: 951,
  },
  {
    id: 44,
    name: 'Y-find',
    downloads: 929,
  },
  {
    id: 45,
    name: 'Stim',
    downloads: 251,
  },
  {
    id: 46,
    name: 'Y-Solowarm',
    downloads: 453,
  },
  {
    id: 47,
    name: 'Konklab',
    downloads: 69,
  },
  {
    id: 48,
    name: 'Redhold',
    downloads: 974,
  },
  {
    id: 49,
    name: 'Zamit',
    downloads: 40,
  },
  {
    id: 50,
    name: 'Transcof',
    downloads: 146,
  },
];

const listRef = document.querySelector('.js-apps-list');

/**
 * document.createElement
 */

// const items = apps.map(({ name, downloads }) => {
//   const liRef = document.createElement('li');
//   liRef.textContent = `${name} - ${downloads}`;

//   return liRef;
// });

// console.log(items);

// listRef.append(...items);

/**
 * element.innerHTML
 */

const itemsHTML = apps.reduce((acc, { name, downloads }) => {
  return (acc += `<li class="card">${name} - <span class="downloads">${downloads}</span></li>`);
}, '');

console.log(itemsHTML);

listRef.innerHTML = itemsHTML;

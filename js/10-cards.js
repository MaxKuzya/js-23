/*
 * Работем с коллекцией карточек в trello
 * - Метод splice()
 * - Удалить
 * - Добавить
 * - Обновить
 */

const addCards = function (targetList, ...cardsList) {
  console.log('targetList', targetList);
  console.log('cardsList', cardsList);

  for (const card of cardsList) {
    targetList.push(card);
  }
};

let cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];

addCards(cards, 'Карточка-12', 'Карточка-32', 'Карточка-000');
console.log(cards);

/*
 * Удаление (по индексу), метод indexOf()
 */
// const target = 'Карточка-2';
// const targetIndex = cards.indexOf(target);

// cards.splice(targetIndex, 1);

// console.table(cards);

/*
 * Добавление (по индексу)
 */

// cards.splice(2, 0, 'Карточка-999');

// console.table(cards);

/*
 * Обновление (по индексу)
 */

// cards.splice(2, 1, 'Карточка-999', 'Карточка-812', 'Карточка-101');
// console.table(cards);

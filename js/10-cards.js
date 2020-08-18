/*
 * Работем с коллекцией карточек в trello
 * - Метод splice()
 * - Удалить
 * - Добавить
 * - Обновить
 */

const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];

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

cards.splice(2, 1, 'Карточка-999', 'Карточка-812', 'Карточка-101');
console.table(cards);

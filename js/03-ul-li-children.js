/**
 * TODO:
 *
 * Переделать так, чтобы фильтровало по нескольким стоп-словам
 */

const STOP_WORD = 'REJECT';

const listRef = document.getElementById('list');

const itemsText = Array.from(listRef.children).map(liRef =>
  liRef.textContent.trim(),
);

const filteredItemsText = Array.from(listRef.children).reduce(
  (acc, { textContent }) => {
    if (!textContent.includes(STOP_WORD)) {
      acc.push(textContent.trim());
    }

    return acc;
  },
  [],
);

console.log(filteredItemsText);

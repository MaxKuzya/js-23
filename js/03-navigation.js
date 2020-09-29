const lists = document.querySelectorAll('ul');

// console.log(lists[0].children);
// console.log(lists[1].children);

/**
 * Достать текст из li'шек каждого ul
 */

const result = Array.from(lists).reduce((acc, { children }) => {
  const childrenText = Array.from(children).map(({ textContent }) =>
    textContent.trim(),
  );

  acc.push(...childrenText);

  return acc;
}, []);

console.log(result);

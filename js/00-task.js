const target = [
  { c: [1, 3, 'a'], b: 1 },
  { a: 'enot', c: ["kak dalwe gut' "] },
  { c: [5, 'd'] },
];

console.log(target.reduce((acc, { c }) => [...acc, c], []));

// ====

const array = [55, 10, 13];
const index = 0;

console.log(array[index]); // 55

const user = { name: 'mango' };
const key = 'name';

console.log(user[key]); // "mango"

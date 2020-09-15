/**
 * Array.prototype.forEach
 *
 * - Перебирает массив
 * - Ничего не возвращает
 */

const source = [{ a: 12 }, { a: 233 }, { a: 13 }];

const result = source.forEach((el, i, arr) => {
  console.log(el);

  el.a = el.a * 100;
});

console.log(source);
console.log(result);

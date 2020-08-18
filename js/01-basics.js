/*
 * Знакомство  с массивами
 * - Объявление
 * - Индексация
 * - Длина
 * - Индекс последнего элемента
 * - Переопределение
 *
 * 'Mango', 'Kiwi', 'Poly', 'Ajax'
 */

const array = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
const string = 'Example string';

array[1] = 'Kiwi modified';

// console.log(array[1]);
// console.table(array);

/*
 * Передача по ссылке и по значению
 * - Примитивы и сложные типы
 * - Ссылочное равенство (referential equality)
 */

let a = [1, 2, 3];
let b = a;

// console.log('A:', a, '\nB:', b);

a[0] = 55;

// console.log('A:', a, '\nB:', b);

// console.log( [1, 2, 3] === [1, 2, 3]) // false

/*
 * Перебор (итерация) массива
 * - for - если нужен индекс или нужно изменить элемент массива
 * - for...of - если индекс не нужен и в массиве ничего менять не нужно
 */

const source = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
const lastIndex = source.length - 1;

// for (let i = 0; i < source.length; i += 1) {
//   source[i] += ' MODIFIED!';
// }

// console.table(source);

// for (const element of source) {
//   element = element + ' MODIFIED! 2';
// }

// console.table(source);

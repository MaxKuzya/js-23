/*
 * Парс числа с Number.parseInt() и Number.parseFloat()
 */

let elementExampleProp = '50';
elementExampleProp = Number(elementExampleProp);
// console.log((elementExampleProp - 45) * 9, typeof elementExampleProp);

let elementWidth = '50px';
elementWidth = Number.parseInt(elementWidth);
// console.log(elementWidth, typeof elementWidth);

let elementHeight = 'width: 200.74px';
elementHeight = Number.parseFloat(elementHeight);
// console.log(elementHeight, typeof elementHeight);

/*
 * - Метод число.toFixed(digits)
 * - Матрёшки на примере  console.log(Number(число.toFixed(digits)))
 */
let salary = 1300.1647289124378;
// console.log(salary);
salary = Number(salary.toFixed(2));

// console.log(salary, typeof salary);

/*
 * - Приведение (преобразование) к числу с Number(value)
 * - Значение NaN (Not a Number) и метод Number.isNaN(value)
 */
const quantity = '30';
const value = 'Эту строку невозможно привести к числу';

// console.log('quantity', Number(quantity));
// console.log('value', Number(value));

/*
 * Обьект Math
 * - Возведение в степень
 * - Exponent operator
 */

Math.pow(); // power - англ. возвести в степень

// To Google: VS code function parameters hotkey
// console.log(Math.pow(2, 3));
// console.log(2 ** 3);

/*
 * Напиши скрипт который просит пользователя ввести число и степень,
 * возводит число в эту степень и выводит результат в консоль
 */

/*
 * Генерим псевдослучайные числа
 * - Math.random()
 * - Math.round()
 */
const max = 100;
const min = 50;
const random = Math.random() * (max - min) + min;

console.log(Math.round(random));

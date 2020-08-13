/*
 * - Переменные и типы примитивов:
 * - Number (integer, floating)
 *
 * - const и let
 * - Логирование с методом console.log()
 * - Уникальность идентификатора
 */

// Number
const age = 10; // integer
const temperature = -28; // integer
const totalPrice = 200.74; // floating
const nan = NaN; // Not a number
const infinity = Infinity; // -Infinity

// String
const userName = 'Удачной дороги по пути в отель "Ёж-близнец"';
const message = "Добро пожаловать в кафе 'Мёртвый барсук'";
// backtick - `
const template = `Эта строка - шаблон! Вот доказательство: ${age}`;

// Boolean
const isOpen = true;
const shouldConfirm = false;

// null
// undefined

let example;
//var example; // hoisting (всплытие)

example = 123;
example = example + 10;

console.log(example);

/*
 * * - Оператор typeof
 */

// console.log('age', typeof age);
// console.log('nan', typeof nan);

// console.log('message', typeof message);

// console.log('isOpen', typeof isOpen);

/*
 * - Как window.alert() блокирует интерпретацию
 */

// alert('Моё сообщение');

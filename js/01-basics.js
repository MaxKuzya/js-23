/*
 * Функции
 * - Функциональные выражения
 * - Аргументы и параметры
 * - Возврат значения
 */

// Function declaration
// Обьявление функции без присваивания в переменную
// hoisting
function fnDeclaration() {}

// Function expression
// Когда мы записываем функцию в переменную
// Не может быть вызвана раньшен чем обьявлена (из-за const)
const fnExpression = function (productsArray) {
  console.log('Функция вызвана!');
};

// Параметр - то, что ПРИНИМАЕТ функция (локальная переменная внутри функции)
// Аргумент - то, что ПЕРЕДАЁТСЯ в функцию (само значение)
const calculateTotalPrice = function (productsArray) {
  console.count('Функция вызвана!');
  console.log(productsArray, productsArray === cart2);
  console.log('Функция вычисляет сумму...');

  let total = 0;

  for (const itemValue of productsArray) {
    total += itemValue;
  }

  return total;
};

// console.log('Обьявляем переменные!');

const cart1 = [54, 28, 120, 12, 25, 90];
const cart2 = [92, 17, 120, 13, 65, 91];

// console.log('Результат выполнения:', calculateTotalPrice(cart2));

/*
 * - Стек вызовов
 * - Stack trace и поиск ошибок
 */

const log = console.log;

const fnA = function () {
  log('Выполняется функция A');
  fnB();
};

const fnB = function () {
  log('Выполняется функция B');
  fnC();
};

const fnC = function () {
  log('Выполняется функция C');
};

// console.log('Лог перед вызовом функции A');

fnA();

// console.log('Лог после вызова функции A');

// console.log('Лог перед вызовом функции B');
// fnB();
// console.log('Лог после вызова функции B');

// console.log('Лог перед вызовом функции C');
// fnC();
// console.log('Лог после вызова функции C');

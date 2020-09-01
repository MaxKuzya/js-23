/**
 * Обьяснение примера из конспекта - откуда *test*?
 */

const filter = function (array, test) {
  const filteredElements = [];

  for (const element of array) {
    const passed = test(element);

    if (passed) {
      filteredElements.push(element);
    }
  }

  return filteredElements;
};

const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
];

// const freshFruits = filter(fruits, fruit => fruit.isFresh);
const checkIsFresh = function (fruit) {
  return fruit.isFresh;
};

// Пример сложной функции сравнения (test)
const checkCondition = function (fruit) {
  return (fruit.isFresh && fruit.quantity >= 50) || fruit.name === 'coconut';
};

// checkIsFresh будет передана в функцию как параметр test
const freshFruits = filter(fruits, checkIsFresh);

// console.log(freshFruits); // массив с объектами apples и bananas

const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(fruitsWithAmount); // массив с объектами apples и grapes

/**
 * HOC (High Order Component) - компонент (функция) высшего порядка
 * Callback - функция отложенного вызова
 */

// Принимает функцию как параметр
const myHOC_1 = function (callback) {
  callback();
};

const iWantToBeCallback = function () {
  console.log('Колбек вызван!');
};

// myHOC_1(iWantToBeCallback);

// Возвращает функцию (return) как результат выполнения
const myHOC_2 = function outerFn() {
  // Для outerFn
  return function innerFn() {
    console.log('Вызов внутренней функции');

    // Для innerFn
    return 'Значение из innerFn';
  };
};

// console.log(myHOC_2);
// console.log(myHOC_2());
// console.log(myHOC_2()());

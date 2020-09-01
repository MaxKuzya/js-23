/**
 * Это не замыкание, а мгновенный вызов (IIFE)
 * Immediate Invoked Function Expression
 */
(function () {
  // some code
  const varA = 'Impossible to reach!';

  //   console.log(varA);
})();

/**
 * Пример замыкания
 * Closure (англ.) - замыкание
 */

const createClosure = function (param) {
  const privateVar = 10;

  return function innerFn() {
    console.log(privateVar, param);
  };
};

const myClosure = createClosure('Custom param');
// console.log(createClosure());

// myClosure();

/**
 * Фабрика через замыкание
 * Инкапсуляция свойств
 */

const simpleFactory = function (number) {
  return {
    value: number,
    name: 'Customers counter',
    modify: function () {
      this.value += 1;
      console.log(`Новый клиент ${this.value}! Алоха!`);
    },
  };
};

const closureFactory = function (initialCount) {
  let value = initialCount;
  const name = 'Closure customers counter 2000';

  return {
    modify: function () {
      console.log(name);
      value += 1;
      console.log(`Новый клиент #${value}! Алоха!`);
    },
    getValue: function () {
      return value;
    },
    get value() {
      return value + 100;
    },
    getName: function () {
      return 'Counter name: ' + name;
    },
  };
};

const simpleObj = simpleFactory(543);
simpleObj.value = -100;
// console.log(simpleObj);

// simpleObj.modify();

// console.log('\n\n');

const closureObj = closureFactory(13);
// console.log(closureObj);
// closureObj.modify();
// console.log(closureObj.getValue());
// closureObj.modify();
// closureObj.modify();
// closureObj.modify();

// console.log('Функция:', closureObj.getValue());
// console.log('Геттер:', closureObj.value);

/**
 * Good to know:
 * Getters, setters, descriptor object
 */

/**
 * Пример из конспекта
 */

const printMessage = function (message) {
  console.log(message);
};

const higherOrderFunction = function (callback) {
  const string = 'HOCs are awesome';
  callback(string);
};

higherOrderFunction(printMessage);

/**
 * Ключевое слово this
 */

/**
 * В строгом режиме (use strict) - undefined
 * В нестрогом - window (браузер), global (node js)
 */
function test() {
  // console.log('Context', this);
}

test(); // this === undefined

const genericMethod = function () {
  // console.log('this', this);
  // console.log('this.prop', this.prop);
};

const testObj = {
  prop: 'testObj: Свойство объекта',
  method: genericMethod,
};

const testObj2 = {
  prop: 'testObj2: Другое значение у обьекта',
  method: genericMethod,
};

testObj.method(); // this === testObj
testObj2.method(); // this === testObj2

// console.log(this);

/**
 * Нет контекста - получаем контекст
 */

function speak() {
  // console.log('Важное сообщение от функции speak!');
  // console.log('Context', this);
}

const parentObject = {
  testProperty: 432,
  nestedObject: {
    nestedProperty: 'nested in anoother object',
  },
};

parentObject.speakMethod = speak;
parentObject.nestedObject.nestedMethod = speak;

// console.log(parentObject);

//speak(); // this === undefined
parentObject.speakMethod(); // this === parentObject
parentObject.nestedObject.nestedMethod(); // this === parentObject.nestedObject

/**
 * Есть контекст - теряем контекст
 */

const iAmContext = {
  property: 'Тестовое свойство',
  showThis: function () {
    // console.log('Context', this);
  },
};

const lostContextFunction = iAmContext.showThis;

lostContextFunction();

/**
 * Теряем констекст в колбеке
 * И не теряем
 */

const myCoolObject = {
  title: 'Заголовок обьекта',
  clicksCount: 0,
  handleClick: function () {
    console.log(this);
    this.clicksCount += 1;
    console.log('Кол-во кликов:', this.clicksCount);
  },
};

function fake_addEventListener(type, handler) {
  // ...
  if (type === 'click') {
    handler(); // Lost context
  }
  // ...
}

document.addEventListener('click', myCoolObject.handleClickArrow); // Контекст потерян
// document.addEventListener('click', myCoolObject.handleClick.bind(myCoolObject)); // Контекст потерян

/**
 * Привязываем контекст
 */

const noContext = function (first, second) {
  console.log('first:', first);
  console.log('second:', second);
  console.log('Context', this);
};

// this - определяется в момент обьявления функции, а не вызова
const noContextArrow = (first, second) => {
  console.log('first:', first);
  console.log('second:', second);
  console.log('Context', this);
};

function declarationFn(first, second) {
  console.log('first:', first);
  console.log('second:', second);
  console.log('Context', this);
}

// noContext(); // this === undefined

/**
 * Function.call / Function.apply
 *
 * - Вызывают функцию сразу
 * - Отличаются способом передачи аргументов (через запятую / массив)
 */

// noContext.call(window, 'First param', 'Second param'); // this === window
// noContext.call(iAmContext, 'First param', 'Second param'); // this === iAmContext

// noContext.apply(window, ['First param', 'Second param']); // this === window
// noContext.apply(iAmContext, ['First param', 'Second param']); // this === iAmContext

/**
 * Function.bind
 *
 * - Не вызывает функцию сразу
 * - Просто привязывает контекст
 */

const windowContext = noContext.bind(window);

// windowContext(); // this === window
// noContext(); // this === undefined (по-прежнему)

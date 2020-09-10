/**
 * Что такое прототип?
 *
 * Object, Array, Function, null
 */

Object.toString = function () {
  return '[object Object]';
};

Function.toString = function () {
  return this.__bodyOfTheFn__;
};

// ==================

const obj = { a: 123, b: 111 };

const arr = [];

const fn = function () {
  const a = 'asd';
  console.log(a);
};

// console.log(obj.toString());
// console.dir(fn.toString());

/**
 * Общественный транспорт через прототипы
 *
 * Object.create()
 */

 {} // идентично new Object();

const transportProto = {
  fare: 5,
  collectedCash: 0,
  publicMethod: function () {
    // Do some stuff..
    this._privateMethod(); // Валидный вызов приватного метода
  }
  _privateMethod: function () {
    // Do some stuff...
  },
  cashOut: function () {
    const cashOutAmount = this.collectedCash;
    this.collectedCash = 0;

    return cashOutAmount;
  },
};

transportProto._privateMethod() // ОШИБКА: невозможно вызвать снаружи
transportProto.publicMethod() // Валидный вызов ПУБЛИЧНОГО метода

const tram = Object.create(transportProto);

const trolley = Object.create(transportProto);

const bus = Object.create(transportProto);
bus.fare = 7;

console.log('tram:', tram);
console.log('trolley:', trolley);
console.log('bus:', bus);

/**
 * Что происходит, когда идёт обращение к свойству "fare":
 *
 * 1. Поиск в обьекте bus
 * 2. Если не найдено - поиск в протипе обьекта bus (transportProto)
 * 3. Если не найдено - поиск в прототипе обьекта transportProto (Object)
 * ...
 * N. Вернуть undefined
 */

console.log('Bus fare:', bus.fare); // transportProto.fare

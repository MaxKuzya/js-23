/**
 * ООП
 *
 * Основные понятия:
 * 1. Класс
 * 2. Экземпляр класса
 * 3. Интерфейс
 *
 * Принципы:
 * 1. Наследование (см. также. Композиция, Агрегация)
 * 2. Инкапсуляция
 *    (Скрытие имплементации, напр. Замыкание, см. также Дескриптор)
 * 3. Полиморфизм
 */

/**
 * Функция - если вызвана
 * Функция-конструктор - если вызвана с помощью new
 */

/**
 * Класс SandcastleBucket
 */
const SandcastleBucket = function (width, height) {
  // this = {} - присвоение пустого обьекта в this
  this.width = width;
  this.height = height;

  this.destroy = function () {
    this.width = 0;
    this.height = 0;
  };

  // return this;
};

/**
 * Экземпляр sandcastle1 класса SandcastleBucket
 */
const sandcastle1 = new SandcastleBucket(5, 10);

/**
 * Экземпляр sandcastle2 класса SandcastleBucket
 */
const sandcastle2 = new SandcastleBucket(3, 15);

console.log(sandcastle1);
console.log(sandcastle2);

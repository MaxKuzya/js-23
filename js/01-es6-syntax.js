/**
 * ES5 - старая спецификация
 * ES6 === ES2015
 *
 * Обьявление
 * Конструктор
 * Методы
 * static
 * Геттеры / Сеттеры
 * ***
 * Приватные свойства
 * Публичные свойства
 */

/**
 * ES5-like
 */

const Hero = function (name, xp) {
  this.name = name;
  this.xp = xp;
};

Hero.prototype.gainXp = function (amount) {
  console.log(`${this.name} gained ${amount} experience points`);
  this.xp += amount;
};

/**
 * ES6 / ES2015
 */

/**
 * Обьявление класса - class
 */
class C_Hero {
  static description = 'Обьект для героя';

  static printInfo(obj) {
    console.log(obj.name);
  }

  #secret = 'My small secret!';

  /*
   * Конструктор
   */
  constructor(name, xp) {
    this.name = name;
    this.xp = xp;
    this.born = new Date().toString();

    this.handleEventArrow = event => {
      console.log('Стрелочная функция через публ. свойство');
      console.log(this);
      console.log(this.#secret);
      // Magic happens ...
    };
  }

  console.log(21);

  /*
   * Метод
   */
  gainXp(amount) {
    console.log(`${this.name} gained ${amount} experience points`);
    this.xp += amount;
  }

  /*
   * Потеряем контекст
   */
  handleEvent(event) {
    console.log('Обычный метод');
    console.log(this);
    // Magic happens ...
  }

  //
  handleEventArrow = event => {
    console.log('Стрелочная функция через публ. свойство');
    console.log(this);
    console.log(this.#secret);
    // Magic happens ...
  };

  /*
   * Геттер
   *
   * Computed properties - вычисляемые (в момент вызова) свойства
   */
  get fullInfo() {
    return `${this.name} - ${this.xp}`;
  }

  get xp() {
    return this._xp;
  }

  /**
   * Сеттер
   *
   * Позволяет валидировать записываемые значения
   */
  set xp(amount) {
    if (amount < 0) {
      throw new Error('No negative XP for ' + this.name);
    }

    this._xp = amount;
  }
}

const cHeroInstance = new C_Hero('Superman', 9999);

console.log(cHeroInstance);
console.log(cHeroInstance.fullInfo);

// const cHeroInstance_2 = new C_Hero('Hulk', -1);

setTimeout(() => {
  // console.log('Born:', cHeroInstance.born);
  // console.log('Now:', cHeroInstance.now);
}, 2000);

document.addEventListener(
  'click',
  cHeroInstance.handleEvent.bind(cHeroInstance),
);
document.addEventListener('click', cHeroInstance.handleEventArrow);

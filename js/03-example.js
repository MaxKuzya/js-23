const Hero = function (name, xp) {
  // this = { gainXp: function }
  this.name = name;
  this.xp = xp;

  // return this; // {name: "Superman", xp: 99999}
};

Hero.staticMethod = function () {
  console.log('Статический метод, вызван без экземпляра!');
};

// Hero.CТАТИЧЕСКАЯ_КОНСТАНТА = true;
// Hero.prototype.НОСИТ_ТРУСЫ_ПОВЕРХ_ШТАНОВ = true;

/**
 * Если метод в prototype - он будет у всех экземпляров
 */
Hero.prototype.gainXp = function (amount) {
  console.log(`${this.name} gained ${amount} experience points`);
  this.xp += amount;
};

const superman = new Hero('superman', 99999);
const hulk = new Hero('The Hulk', 1000);

superman.gainXp(100500);
hulk.gainXp(3000);

//superman.name = 'Super-superman';
// console.log(superman);
// console.log(superman.staticMethod()); // Ошибка - статический метод не попал в экземпляр

Hero.staticMethod();

const pseudoArray = document.querySelectorAll('p'); // NodeList, не Array

const from = Array.from;
Array.from(pseudoArray);

Date.now();

[]; // new Array();

/**
 *
 */
const Warrior = function (name, xp, weapon) {
  // this - { gainXp: fucntion, attack: function } : Warrior

  // Вызов конструктора родителького класса
  Hero.call(this, name, xp);

  // Инициализация всего остального
  this.weapon = weapon;
};

// Копируем все методы экземпляров Hero в экземпляры Warrior
Warrior.prototype = Object.create(Hero.prototype);
Warrior.prototype.constructor = Warrior;

Warrior.prototype.attack = function () {
  console.log(`${this.name} attacks with ${this.weapon}`);
};

const poly = new Warrior('Poly', 200, 'sword');

console.log(poly);

const Url = function (url) {
  // Magic happens...

  this.protocol; // "https"
  this.path; // "/search"
  this.domain; // "google.com"
  this.port; // 80
  this.raw = url;
};

new Url('https://google.com/search');

const UrlByParts = function (protocol, domain, path) {
  this.url = protocol + '//:' + domain + '/' + path;
};

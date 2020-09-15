/**
 * extends
 * super()
 */

/**
 * ES5
 */

const Hero = function (name, xp) {
  this.name = name;
  this.xp = xp;
};

Hero.prototype.gainXp = function (amount) {
  console.log(`${this.name} gained ${amount} experience points`);
  this.xp += amount;
};

const Warrior = function (name, xp, weapon) {
  Hero.call(this, name, xp);

  this.weapon = weapon;
};

Warrior.prototype = Object.create(Hero.prototype);
Warrior.prototype.constructor = Warrior;

Warrior.prototype.attack = function () {
  console.log(`${this.name} attacks with ${this.weapon}`);
};

const poly = new Warrior('Poly', 200, 'sword');

/**
 * ES6
 */

class C_Hero {
  constructor(name, xp) {
    this.name = name;
    this.xp = xp;
  }

  gainXp(amount) {
    console.log(`${this.name} gained ${amount} experience points`);
    this.xp += amount;
  }

  get fullInfo() {
    return `${this.name} - ${this.xp}`;
  }
}

class C_Warrior extends C_Hero {
  constructor(name, xp, weapon) {
    const processedParam = name.toUpperCase();
    // this не доступен
    super(processedParam, xp); // super === C_Hero.prototype.constructor
    // this доступен

    this.weapon = weapon;
  }

  gainXp(amount) {
    super.gainXp(amount); // super.gainXp === C_Hero.prototype.gainXp
    console.log('gainXp у класса Warrior!');
  }

  attack() {
    console.log(`${this.name} attacks with ${this.weapon}`);
  }
}

const c_poly = new C_Warrior('Poly', 200, 'sword');

console.log(c_poly);
console.log(c_poly.attack());
console.log(c_poly.fullInfo);

/*
 * Цикл for
 */

// for (инициализация переменных; условие; действия после итерации) {}

// for (let i = 100; i > 0; i -= 10) {
//   console.log(i);
// }

// console.log('The end!');

/*
 * Pre-increment и Post-increment
 */

// let a = '10';
// const b = ++a;

// console.log('A:', a, '  B:', b);

/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */

// const employees = 5;
// const min = 500;
// const max = 5000;
// let totalSalary = 0;

// for (let i = 0; i < employees; i += 1) {
//   let salary = Math.round(Math.random() * (max - min) + min);
//   salary = (salary / 100).toFixed() * 100;
//   console.log(`Зарплата работника #${i + 1}: ${salary}`);

//   totalSalary += salary;
// }

// console.log(totalSalary);

/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */

// const min = 4;
// const max = 10;
// let sum = 0;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }

//   console.log(i);
//   sum += i;
// }

// console.log('Результат:', sum);

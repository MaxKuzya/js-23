/*
 * Напиши скрипт поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 *
 * - Сначала через for
 * - Потом через for...of
 * - Логика break
 * - Метод includes() с тернарным оператором
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = '12312312';
let message = `Пользователь ${loginToFind} не найден.`;

// // 1 Перебрать элементы массива
// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];
//   // 2 Сравнить текущий элемент с искомым
//   const isFound = login === loginToFind;

//   // 3 ЕСЛИ совпадает - задаём сообщение 'Пользователь [логин] найден.'
//   if (isFound) {
//     message = `Пользователь ${loginToFind} найден.`;
//     break;
//   }
//   // 4 ИНАЧЕ - задаём сообщение 'Пользователь [логин] не найден.'
//   else {
//     message = `Пользователь ${loginToFind} не найден.`;
//   }
// }

// // 1 Перебрать элементы массива
// for (const login of logins) {
//   // 2 Сравнить текущий элемент с искомым
//   const isFound = login === loginToFind;
//   // 3 ЕСЛИ совпадает - задаём сообщение 'Пользователь [логин] найден.'
//   if (isFound) {
//     message = `Пользователь ${loginToFind} найден.`;
//     break;
//   }
// }

message = logins.includes(loginToFind)
  ? `Пользователь ${loginToFind} найден.`
  : `Пользователь ${loginToFind} не найден.`;

// 5 Выводим сообщение
console.log(message);

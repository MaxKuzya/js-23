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

const gameLogins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const forumLogins = [
  'mango Doge',
  'kiwi the best',
  'poly is cute',
  'ajax the man',
];

const findLogin = function (loginsArray, loginToFind) {
  let message = loginsArray.includes(loginToFind)
    ? `Пользователь ${loginToFind} найден.`
    : `Пользователь ${loginToFind} не найден.`;

  return message;
};

console.log(findLogin(gameLogins, 'k1widab3st'));
console.log(findLogin(gameLogins, 'kiwi'));

console.log('');

console.log(findLogin(forumLogins, 'kiwiTheBest'));
console.log(findLogin(forumLogins, 'kiwi the best'));

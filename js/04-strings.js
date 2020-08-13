/*
 * Длина строки, свойство length
 */
// const message = 'В этой строке 26 символов.';
// const message = prompt('Введите строку');

// console.log('В вашей строке' + ' ' + message.length + ' символов');

/*
 * Конкатенация строк
 */
const firstName = 'Chelsy';
const lastName = 'Emerald';

// console.log(firstName + ' ' + lastName);

/*
 * Напиши скрипт который выведет строку в формате:
 * «Гость x y поселяется в z номер q»,
 * подставив вместо x y z q значения переменных
 */

const room = 113;
const type = 'Suit';

/*
 * Шаблонные строки (template strings)
 * Возвращаемся к составлению строки поселения в отель
 */

const resultMessage = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`;
// console.log(resultMessage);

const quantity = 150;
const orderMsg = `Вы заказываете ${quantity} холодильников.`;
// console.log(orderMsg);

/*
 * Нормализация с методом toLowerCase()
 */

const query = 'DunLoP';
const dbString = 'dunlop';
// console.log(
//   query.toLowerCase() === dbString.toLowerCase(),
//   query.toLowerCase(),
//   dbString.toLowerCase(),
// );

/*
 * Поиск в строке с методом includes()
 */
const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'распродажа';

const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион!';
const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!';
const string3 = 'Рекламная кампания #fatlivesmatter';

console.log(string1.toLowerCase().includes(blacklistedWord1));

// console.log(
//   '1.',
//   blacklistedWord2,
//   string1.toLowerCase().includes(blacklistedWord2),
// );
// console.log('');
// console.log(
//   '2.',
//   blacklistedWord1,
//   string2.toLowerCase().includes(blacklistedWord1),
// );
// console.log(
//   '2.',
//   blacklistedWord2,
//   string2.toLowerCase().includes(blacklistedWord2),
// );
// console.log('');
// console.log(
//   '3.',
//   blacklistedWord1,
//   string3.toLowerCase().includes(blacklistedWord1),
// );
// console.log(
//   '3.',
//   blacklistedWord2,
//   string3.toLowerCase().includes(blacklistedWord2),
// );

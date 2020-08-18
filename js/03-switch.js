// const count = 100;

// // console.log('If / else if:');
// if (count === 1 || count === 2) {
//   console.log('В переменной значение 2');
// } else if (count === 3) {
//   console.log('В переменной значение 3');
// } else if (count === 4) {
//   console.log('В переменной значение 4');
// } else if (count === 5) {
//   console.log('В переменной значение 5');
// } else {
//   console.log('Недопустимое значение!');
// }

// console.log('Switch:');
// switch (count) {
//   case 1:
//     console.log('В переменной значение 1');
//     break;
//   case 2:
//     console.log('В переменной значение 2');
//     break;
//   case 3:
//     console.log('В переменной значение 3');
//     break;
//   case 4:
//     console.log('В переменной значение 4');
//     break;
//   case 5:
//     console.log('В переменной значение 5');
//     break;
//   default:
//     console.log('Недопустимое значение!');
// }

/*
 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
 *
 * Если в переменной stars что-то кроме чисел 1-5, выведи строку
 * 'Такого кол-ва звезд нет'
 */

// const stars = 2;
// let cost;
// let message;

// switch (stars) {
//   case 1:
//   case 2:
//     cost = 30;
//     message = `${stars}-звёздочный отель будет стоить ${cost}$`;
//     break;
//   case 3:
//     cost = 50;
//     message = `${stars}-звёздочный отель будет стоить ${cost}$`;
//     break;
//   case 4:
//     cost = 70;
//     message = `${stars}-звёздочный отель будет стоить ${cost}$`;
//     break;
//   case 5:
//     cost = 120;
//     message = `${stars}-звёздочный отель будет стоить ${cost}$`;
//     break;
//   default:
//     message = 'Недопустимое значение!';
// }

// console.log(message);

/*
 * Напиши скрипт выбора опции доставки товара.
 * Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта
 *
 * В переменную message записать сообщение в зависимости от опции.
 * - 'Вы сможете забрать товар завтра с 12:00 в нашем офисе'
 * - 'Курьер доставит заказ завтра с 9:00 до 18:00'
 * - 'Посылка будет отправлена сегодня'
 * - 'Вам перезвонит менеджер'
 */

/* 
1 - самовывоз, 
2 - курьер, 
3 - почта,
*/

const MAX_PAGE_SIZE = 90;

const PICK_UP = 1;
const COURIER = 2;
const POST = 3;

// const option = PICK_UP;

// let message;

// switch (option) {
//   case PICK_UP:
//     message = `Вы сможете забрать товар завтра с 12:00 в нашем офисе`;
//     break;
//   case COURIER:
//     message = `Курьер доставит заказ завтра с 9:00 до 18:00`;
//     break;
//   case POST:
//     message = `Посылка будет отправлена сегодня`;
//     break;
//   default:
//     message = 'Вам перезвонит менеджер!';
// }

// console.log(message);

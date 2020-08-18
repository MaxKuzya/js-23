/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
 */

// Должно получиться top-10-benefits-of-react-framework
// https://blog.bitsrc.io/top-10-benefits-of-react-framework

const title = 'Top 10 benefits of React framework';

// console.table(title.toLowerCase().split(' ').join('-'));
// splice, sort, shift, unshift, pop, push

/*
 * Развернуть строчку
 */

const string = 'Top 10 benefits of React framework';

console.table(string.split('').reverse().join(''));

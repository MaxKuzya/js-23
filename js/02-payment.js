/*
 * Посчитать общую сумму покупок в корзине
 */

const calcTotal = function (productsArray) {
  // 1 Объявить переменную для суммы
  let total = 0;

  // 2 Перебираем массив
  for (const itemValue of productsArray) {
    // 3 Цену каждого товара добавляем к общей сумме
    total += itemValue;
  }

  // 4 Возвращаем сумму
  return total;
};

const cart1 = [54, 28, 120, 12, 25, 90];
const cart2 = [92, 17, 120, 13, 65, 91];

const sum1 = calcTotal(cart1);
const sum2 = calcTotal(cart2);

console.log('sum1', sum1);
console.log('sum2', sum2);

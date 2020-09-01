const arr = [11, 32, -663, 24, -5, 0, -999];

console.log(arr);

// for (let i = 0; i < arr.length; i += 1) {
//   console.log(arr[i]);
// }

// for (el of arr) {...}

const customForEach = function (sourceArray, callback) {
  for (let i = 0; i < sourceArray.length; i += 1) {
    callback(sourceArray[i], i, sourceArray);
  }
};

const processElement = function (element, index, array) {
  console.log('Наш массив', array);
  console.log(element, 'лежит под индексом', index);
};

// console.log('Метод массива forEach:');
// arr.forEach(processElement);

// console.log('\n\nСамописный велосипед customForEach:');
// customForEach(arr, processElement);

// Простой пример использования Array.forEach (95% процентов случаев)
arr.forEach(function (el) {
  //   console.log(el);
});

// const filteredArray = arr.filter(function (el) {
//   return el === 11 || el === -5;
// });

const filteredArray = arr.filter(el => el >= 0);

// console.log(filteredArray);

/**
 * Пример предиката для метода Array.sort()
 */

arr.sort(function (a, b) {
  return a - b;
});

console.log(arr);

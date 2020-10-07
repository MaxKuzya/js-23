const getSortedUniqueFruits = array =>
  ['apple', 'pear', 'orange', 'apple']
    .filter((el, index, arr) => arr.indexOf(el) === index) // arr.indexOf('apple') 0 === 3
    .sort();

console.log(getSortedUniqueFruits());

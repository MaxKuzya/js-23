const button = document.querySelector('.counter-button');
const targetNode = document.querySelector('.counter-node');

let counter = 0;

button.addEventListener('keydown', function () {
  counter += 1;
  targetNode.textContent = counter;
});

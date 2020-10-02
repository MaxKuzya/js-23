const items = document.querySelectorAll('.container-item');

let width = 30;

/**
 * style.background-color - НЕПРАВИЛЬНО
 * style.backgroundСolor - ПРАВИЛЬНО
 */

// 1
items.forEach(itemEl => {
  // itemEl.style.width = width;

  width += 10;
});

console.log(items);

// 2
const styleEl = document.createElement('style');
const elementsCount = 15;

let styleString = '';

for (let i = 0; i < elementsCount; i += 1) {
  const stylesTemplate = `
  .container-item:nth-child(${i + 1}) { width: ${30 + i * 10}px } 
  `;

  styleString += stylesTemplate;
}

styleEl.textContent = styleString;

document.body.append(styleEl);

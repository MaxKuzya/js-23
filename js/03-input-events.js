/**
 *  data-action-add -> [dataset] -> actionAdd
 */

/**
 * - input / change
 * - Checkboxes / radio checked
 * - focus / blur
 */

let checkboxValue;
let nameValue;

const nameInputRef = form.elements[0];
const spamCheckboxRef = form.elements[1];
const buttonRef = form.elements[2];

nameInputRef.addEventListener('input', () => {
  nameValue = nameInputRef.value;

  refreshButtonState();
});

spamCheckboxRef.addEventListener('change', () => {
  checkboxValue = spamCheckboxRef.checked;

  refreshButtonState();
});

function refreshButtonState() {
  const isNameValid = nameValue.length >= 2;
  const isCheckboxValid = Boolean(checkboxValue);

  const isButtonDisabled = !isNameValid || !isCheckboxValid;

  buttonRef.disabled = isButtonDisabled;
}

/**
 * Dumb form
 */

let timerId;

nameInputRef.addEventListener('focus', () => {
  console.log('Таймер создан!');

  timerId = setTimeout(() => {
    confirm('Ну и долго тебя ещё ждать?!?!?');
  }, 2000);
});

nameInputRef.addEventListener('blur', () => {
  console.log('Таймер убран!');
  clearTimeout(timerId);
});

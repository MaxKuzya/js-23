/**
 * - submit event
 * - preventDefault()
 * - [HTMLForm].elements
 * - FormData
 */

form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(form);
  const dataByKeys = Object.fromEntries(formData.entries());

  //   console.log(Array.from(formData.keys()));
  //   console.log(Array.from(formData.values()));

  console.log(Object.fromEntries(formData.entries()));

  const nameValue = dataByKeys.name;
  const checkboxValue = dataByKeys['i-want-spam'];

  console.log(checkboxValue);

  if (isNameValid(nameValue)) {
    sendFormData({});
  }
});

function isNameValid(value) {
  return value.length >= 2;
}

function sendFormData(formData) {
  // Magic...
}

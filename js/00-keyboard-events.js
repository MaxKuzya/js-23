/**
 * [code] vs [key]
 */

document.addEventListener('keydown', event => {
  // KeyboardEvent

  console.dir('KEYDOWN:', event);
  console.log(event.code);
});

/**
 * KeyboardEvent.which
 * KeyboardEvent.keyCode
 * ---
 * deprecated
 */

/**
 * keypress vs keydown / keyup
 */

document.addEventListener('keypress', event => {
  console.dir('KEYPRESS:', event);
  console.log(event.code);
});

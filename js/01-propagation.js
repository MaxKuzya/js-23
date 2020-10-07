/**
 * Захват / погружение (capturing)
 *
 * stopPropagation
 */

document.addEventListener(
  'click',
  e => {
    console.log('(CAPTURING) Document click!');

    console.log('(CAPTURING) Document click! - target', e.target);
    console.log('(CAPTURING) Document click! - currentTarget', e.currentTarget);
  },
  { capture: true },
);

containerRef.addEventListener(
  'click',
  e => {
    // e.stopPropagation();
    console.log('(CAPTURING) Container click!');

    console.log('(CAPTURING) Container click! - target', e.target);
    console.log(
      '(CAPTURING) Container click! - currentTarget',
      e.currentTarget,
    );
  },
  true,
);

childRef.addEventListener(
  'click',
  e => {
    console.log('(CAPTURING) Child click!');

    console.log('(CAPTURING) Child click! - target', e.target);
    console.log('(CAPTURING) Child click! - currentTarget', e.currentTarget);
  },
  true,
);

/**
 * Всплытие (bubbling)
 */

document.addEventListener('click', e => {
  console.log('Document click!');

  console.log('Document click! - target', e.target);
  console.log('Document click! - currentTarget', e.currentTarget);
});

containerRef.addEventListener('click', e => {
  // e.stopPropagation();
  console.log('Container click!');

  console.log('Container click! - target', e.target);
  console.log('Container click! - currentTarget', e.currentTarget);
});

childRef.addEventListener('click', e => {
  console.log('Child click!');

  console.log('Child click! - target', e.target);
  console.log('Child click! - currentTarget', e.currentTarget);
});

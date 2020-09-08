const f = function () {
  this.x = 5; // window.x = 5;

  (function () {
    this.x = 3; // window.x = 3;
  })();

  console.log(this.x); // console.log(3);
};

const fCall = function () {
  this.x = 5; // fCall.x = 5;

  (function () {
    this.x = 3; // window.x = 3;
  })();

  console.log(this.x); // console.log(5);
};

const obj = {
  x: 4,
  m: function () {
    console.log(this.x); // console.log(obj.x)
  },
};

/* 1 */
// f(); // 3

/* 2 */
// obj.m(); // 4

/* 3 */
// fCall.call(fCall); // 5

/* 4 */
// obj.m.call(fCall); // 5

// Function.apply( context, paramsArray )
const fn = function (a) {
  return a;
};

// const result = console.log.call.apply(fn, [1, 2, 3]);
// const result = fn.call(1, 2, 3);
const result = fn(2, 3);

// console.log(result); // 2

function init() {
  function test(fn) {
    var testVar = 'test var';
    fn(); // почему this  не init (init это функция. функция это объект)
  }

  var obj = {
    prop1: 'prop1',
    fn: function () {
      console.log('fn=>this:', this);
    },
  };

  test(obj.fn);
}

init();

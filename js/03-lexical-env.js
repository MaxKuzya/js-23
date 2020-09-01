// Lexical env. === Scope === Область видимости

/*
  Global env - создается при исполнении файла скрипта
    Record: {}
    Parent: null
*/

const x = 10;
/*
  Global env
    Record: {x: 10}
    Parent: null
*/

const y = 20;
/*
  Global env
    Record: {x: 10, y: 20}
    Parent: null
*/

/*
  Записывается в момент объявления функции
  [[Environment]] = Global env
*/
const foo = function (z) {
  /*
    Foo env - создается в момент вызова функции
      Record: {z: 30}
      Parent: Global env
  */

  console.log(y); // 20 - из Global env
  console.log(x); // 10 - из Global env

  if (true) {
    const x = 100;
    /*
        IF env - создается в момент вызова функции
        Record: {x: 100}
        Parent: Foo env
    */

    console.log(y); // 20 - из Global env
    console.log(x); // 100 - из IF env

    return x + y + z;
  }
};

/*
  Global env
    Record: {x: 10, y: 20, foo: <function>}
    Parent: null
*/
foo(30); // 150

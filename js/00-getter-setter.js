class Example {
  get prop() {
    console.log('Вызов геттера!');

    return 'Значение из get';
  }

  set prop(value) {
    console.log('В сеттер прилетело значение ===', value);

    const isValid = value.length > 5;

    if (isValid) {
      this._secret_prop = value;
    } else {
      throw new Error('Ужасная ошибка');
    }
  }
}

const obj = new Example();

console.log(obj.prop);

obj.prop = 'У';

//TODO math object(객체) 만들기 //

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  multply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const plus = calculator.plus(7, 7);
const minus = calculator.minus(7, 7);
const multply = calculator.multply(7, 7);
const divide = calculator.divide(7, 7);
const power = calculator.power(7, 7);

console.log(plus, minus, multply, divide, power);

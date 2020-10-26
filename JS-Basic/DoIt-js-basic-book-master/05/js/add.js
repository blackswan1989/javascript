//parseInt()함수는 입력한 값을 정수로 바꾸는 함수이다.
//Number()함수를 사용 할 수도 있다.

const num1 = parseInt(prompt("더해줄 첫번째 숫자는?"));
const num2 = parseInt(prompt("더해줄 두번째 숫자는?"));

function addNumber(a, b) { //a, b는 매개변수(method)로 지정된다.
  let sum = a + b;
  document.write(`<p>입력한 두개의 수를 더한 값은 "${sum}" 입니다.</p>`)
}

addNumber(num1, num2);



//ES6에서는 매개변수가 있는 함수를 선언할 때 매개변수의 기본 값을 지정하는 기능이 생겼다.

function multiple(a, b = 5, c = 10) {
  return a * b + c; // b=10, c=20으로 기본값 지정
}

console.log(multiple(5, 10, 20)); // a=5, b=10, c=20 | 결과: 70
console.log(multiple(10, 20)); // a=10, b=20, c=10(기본값) | 결과: 210
console.log(multiple(30)); // a=30, b=5(기본값), c=10(기본값) | 결과: 160
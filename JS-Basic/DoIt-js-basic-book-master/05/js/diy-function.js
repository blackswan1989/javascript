// p.151 Practice

function add(a, b) {
  let sum = a + b;
  return sum;
}
console.log(add(10, 10));

let num1 = parseInt(prompt());
let num2 = parseInt(prompt());
let result = add(num1, num2);

document.write(`${num1}과 ${num2}를 더한 값은 : ${result}`);

// parseInt()함수 = 문자열 인자를 구문분석하여 특정 진수(수의 진법 체계에 기준이 되는 값)의 정수를 반환해 준다. 따라서 이를 사용해서 prompt에 입력된 값을 number로 인식 되도록 해준다.

// 구문: parseInt(string, radix);

// NOTE 매개변수
// string : 분석할 값. 만약 string이 문자열이 아니면 문자열로 변환(ToString 추상 연산을 사용)합니다. 문자열의 선행 공백은 무시합니다.
// radixOptional : string이 표현하는 정수를 나타내는 2와 36 사이의 진수(수의 진법 체계에 기준이 되는 값). 주의하세요-기본값이 10이 아닙니다!

// NOTE 반환 값
// 주어진 string로부터 분석한 정수. 또는 아래의 경우에는 NaN을 반환합니다
// NaN: radix가 2보다 작거나 36보다 큰 경우
// NaN: 첫번째 non-whitespace 문자가 숫자로 변환되지 않는 경우

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt

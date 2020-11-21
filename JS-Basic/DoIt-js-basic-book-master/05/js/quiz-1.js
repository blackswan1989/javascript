// ? 문제) 매개변수 두 개를 받아 두개의 값이 같다면 두 변수를 곱해주고, 값이 같지 않다면 두 수를 더하는 함수 sumMulti를 작성하여라.

const num1 = parseInt(prompt());
const num2 = parseInt(prompt());
// console.log(num1 + num2);

function sumMulti(num1, num2) {
  if (num1 == num2) {
    sum = num1 * num2;
    return sum;
  } else {
    sum = num1 + num2;
    return sum;
  }
}

let result = sumMulti(num1, num2);

console.log(result);

// 함수 이름을 sumMulti로 지정하고, prompt창으로 값을 입력받으며 그 입력받은 값은 매개변수 num1변수와 num2변수에 저장되도록 하였다.
// 매개변수 두개의 계산결과 값을 sum변수에 저장하고 sum변수를 반환해준다.
// if문을 통해 값이 같은 경우와 다른 경우의 다른 식을 지정해준다.
// num1, num2값을 사용해 sumMulti함수를 호출(실행)하고 결과값은 result에 저장해주며, 콘솔에 result변수값을 표시해주었다.

/* 
아래처럼 콘솔만 사용한다면 prompt없이 간단하게 구현 가능

function sumMulti(x, y) {
  if (x == y) return x * y;
  else return x + y;
}

console.log(sumMulti(5, 10));
console.log(sumMulti(10, 10));
*/

// 즉시 실행 함수 (Immediately-invoked function expression)

// 함수를 정의함과 동시에 실행하는 함수이다.
// 즉시 실행 함수는 주로 아래와 같은 형식을 가지고 있다.

(function () {
  //...
})();

(function () {
  //...
})();

// 즉시 실행 함수는 변수에 할당할 수 있고, 함수에서 반환한 값을 변수에 할당할 수도 있다.

var result1 = (function () {
  return 25 + 25;
})();

document.write(`<h2>result1 : ${result1}</h2>`);

// 매개 변수가 필요한 함수라면 function 예약어 다음의 괄호 안에 매개변수를 넣고 함수를 정의한다. 그리고 함수 끝에 있는 괄호에는 실제 실행할 때 사용할 인수를 넣고 실행한다.

var result2 = (function (a, b) {
  return a + b;
})(50, 50); //인수 추가

document.write(`<h2><br>result2 : ${result2}</h2>`);

// 위 소스는 a와 b 매개변수를 사용해 함수를 정의한 후 마지막에 인수로 10과 20을 넣어 함수를 실행하고, 반환된 결과값을 result2변수에 저장 되어 출력된다.

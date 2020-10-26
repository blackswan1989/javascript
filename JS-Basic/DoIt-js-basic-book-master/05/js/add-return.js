// 함수의 return문

const num1 = parseInt(prompt("첫 번째 숫자 : "));
const num2 = parseInt(prompt("두 번째 숫자 : "));

const result = addNumber(num1, num2);


function addNumber(a, b) {
    let sum = a + b;
    return sum;
    //위처럼 간단한 식은 return a + b로 작성 가능
}

alert(`두 수를 더한 값은 ${result} 입니다.`);

/*

결과를 다른 계산에 적용하거나 콘솔창이 아닌 다른 곳에 표시해야 할 때, 
함수를 실행한 후 그 결과 값을 함수 밖으로 넘기는 것을 "return"(함수 값을 반환한다)이라고 한다. 반환 위치는 함수를 호출한 위치이며, 함수의 결과값을 반환할 때에는 return 예약어 다음에 넘겨줄 값이나 변수 또는 식을 지정한다.

1) prompt로부터 입력받은 num1 변수와 num2 변수에 값을 저장.
2) num1과 num2 값을 가지고 addNumber()함수를 호출한다.
3) 함수 선언부러 넘어와 함수를 실행하는데 num1값은 a변수로, num2값은 b변수로 넘겨진다.
4) a값과 b값을 더해 sum변수에 저장한다.
5) 결과 값 sum을 반환해준다.
6) 반환된 값을 변수 result에 저장한다.
result 변수값을 화면에 alert해준다.
*/
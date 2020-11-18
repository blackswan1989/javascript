/* 

NOTE 변수의 적용 범위

자바스크립트에서 변수를 선언하고 사용할 때 변수가 적용되는 범위를 스코프(Scope)라고 한다. 변수가 어디까지 유효한지 그 범위를 가리키는 영역으로 자바스크립트 함수에서 변수를 사용할 때 이 영역에 주의해야 한다.

* Local Variable : 한 함수 안에서만 사용할 수 있는 지역 변수
* Global Variable : 스크립트 소스 전체에서 사용할 수 있는 전역 변수

주의 : 변수 이름 앞에 var, let, const가 없다면 함수안에 선언해도 전역변수가된다.

*/

var myVar = 100;
document.write("myVar is " + myVar);

function test() {
  myVar = 50;
}

test();

// test함수 내부에 선언한 myVar = 50; 은 지역변수이기 때문에 출력되지않는다.

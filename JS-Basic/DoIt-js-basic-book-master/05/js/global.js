// NOTE 변수의 적용 범위

//* Global Variable : 스크립트 소스 전체에서 사용할 수 있는 전역 변수

var myVar = 100;
test();
document.write("myVar is " + myVar);

function test() {
  myVar = 50;
  // 지역변수 myVar 앞에 var 예약어를 붙이지 않아 전역변수가 되어 50이 출력된다.
}

// NOTE 변수의 적용 범위

// 자바스크립트에서 변수를 선언하고 사용할 때 변수가 적용되는 범위를 스코프(Scope)라고 한다. 변수가 어디까지 유효한지 그 범위를 가리키는 영역으로 자바스크립트 함수에서 변수를 사용할 때 이 영역에 주의해야 한다.

//* Local Variable : 한 함수 안에서만 사용할 수 있는 지역 변수
//주의 : 변수 이름 앞에 var가 없다면 함수안에 선언해도 전역변수가된다.

var myVar = 100;
document.write("myVar is " + myVar);

function test() {
  myVar = 50;
  // test함수 내부에 선언한 myVar = 50; 은 지역변수이기 때문에 출력되지않는다.
}

test();

// NOTE  ES6 이후 "블록 변수(Block Variable)"가 추가되었다.

// 블록 변수는 변수를 선언한 블록(중괄호{}로 묶은 부분)에서만 유효하고 블록을 벗어나면 사용할 수 없는 변수이다. let 예약어를 사용해 변수를 선언하면 블록변수가 된다.

// 예를 들어 아래 소스에 local변수는 함수 안에서 사용할 수 있는 지역변수고 block 변수는 if문 안에서 let예약어를 사용해 선언했기 때문에 if문 블록 안에서만 사용할 수 있다.

add("abc", "123");

function add(a, b) {
  var es5 = a + b;
  console.log(es5);

  if (b != null) {
    let es6 = b + a;
    console.log(es6);
  }
}

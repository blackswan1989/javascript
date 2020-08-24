// TODO # 2.0 ~ javacript Practice //

//? console = object 콘솔은 오브젝트와 같은 의미.
//? 아래처럼 console.log(console)을 입력하면 각종 함수들이 출력된다.
/*
const janeInfo = {
  name: "Jane",
  age: 33,
  gender: "female",
  isCool: true,
};
console.log(console);

console.log(janeInfo, console);
*/

//! fuction : 기능, 함수 등을 의미

// 1)
function sayHello() {
  console.log("Hello!");
}

sayHello("Jane");
console.log("Hi!!");

// output = Hello! | Hi!!
// 첫 함수 작성 완료 ㅊㅋㅊㅋ
// console.log()형태와 비슷한데 console object안에 있는 함수라는 뜻이다.
// console.log는 ("")사이에 넣고싶은 것을 넣으면 함수는 그것을 사용한다.

//! argument , parameter : 인수, 프로그램 상의 변수를 의미
//! 함수에게 외부에 있는 데이터를 주는 방법
// 1)처럼 코드 작성시 sayHello("Jane")을 입력해도 Jane이 출력되지 않는데
// 그 이유는 변수가 있기 때문이다. 따라서 아래 2)처럼 function sayHello()안에 변수 값을 준다.
// potato같은 무관한 단어를 입력해도 상관없다. 함수 안에서 사용하게 될 이름이기 때문이다.

// 2)
function sayHello(potato) {
  console.log("Hello!", potato);
}

sayHello("Jane");
console.log("Hi!!");
// output = Hello! Jane | Hi!!
// 즉 이것이 외부에 있는 데이터를 읽는 함수를 만드는 방법이다.

// 3) potato에 이어 chicken을 추가하자 sayHello("Jane", 15)의 숫자 15까지 출력이 가능해진다.
function sayHello(potato, chicken) {
  console.log("Hello!", potato, "you have", chicken);
}

sayHello("Jane", 25);
// output = Hello! Jane  you have  25  years of age.

// 4) 아무 단어나 사용가능하지만 name과 age로 보기쉽게 작성하였다.
function sayHello(name, age) {
  console.log("Hello!", name, "you have", age, "years of age.");
}

sayHello("Jane", 25);
// output = Hello! Jane  you have  25  years of age.

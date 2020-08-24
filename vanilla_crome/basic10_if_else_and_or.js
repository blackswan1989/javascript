//TODO ======== #2.5 if, else, and, or ========//

//? if()안에는 true을 의미하면 뭐든 넣을 수 있다.
//? true값을 넣지 않으면 true블럭을 건너띄고 else블럭만 실행시키게 된다.
//? block의 자리에는 console.log, alert등 아무거나 입력 가능하다.
/* < if의 기본구조 >
 if (condition) {
  block;
 } else {
  block;
}
*/

//? 1) 조건문
if (10 > 5) {
  console.log("hi");
} else {
  console.log("ho");
}
// console output = hi
// if의 10>5를 보면 10이 더 크기 때문에 true가 되고 hi가 출력되게 된다.

//
//? 2) "==="는 뭔가를 할당 하지 않는다 (변수가 필요 없다.)
if (10 === 5) {
  console.log("hi");
} else {
  console.log("ho");
}
// ===를 사용하면 10과 5가 완전이 같은지 체크하게 된다.
// console output = ho
// ho가 출력되는 이유는 10과 5는 같지 않기 때문이다.
// 5 === 5 라면 true이기 때문에 "hi"가 출력된다.
// 반면 "10" === 10 을 입력하면 ho가 출력된다. 왜냐하면 ""안에 들어가는 것은 모두 string(텍스트)로 인식되기 때문이다.

//
//? 2)-1 "===" 응용
if ("10" === 10) {
  console.log("hi");
} else if ("10" === "10") {
  console.log("lalala");
} else {
  console.log("ho");
}
// console output = lalala
// if값은 틀리지만 else if값은 true이기 때문에 lalala가 출력된다.
// 하지만 else if 값도 틀렸다면 else값인 ho가 출력되었을 것이다.

//
//? 3) 피연산자 : 다른 조건들을 합쳐준다.

//? &&(and)
if (20 > 5 && "Jane" === "Jane") {
  console.log("yes");
} else {
  console.log("no");
}
// console output = yes
// 여기서 &&는 특정 룰을 가지고 있는데, 만약 console.log("yes")를 실행하고 싶으면 20 > 5도 true값이어야 하고 "Jane" === "Jane"도 true값이어야 한다. 하나라도 거짓이면 else block 으로 출력되게 된다.

//? ||(or)
if (20 > 5 || "Jane" === "Jane") {
  console.log("yes");
} else {
  console.log("no");
}
// console output = yes
// 하나 아니면(or) 나머지 것들을 의미.

/* &&(and) 예시 : 하나라도 flase값이면 false가 된다.
true && true = true; 
false && true = false;
true && flase = false;
false && false = false;
*/
/* ||(or) 예시 : 하나라도 true값이면 true가 된다.
true || true = true;
false || true = true;
true || flase = true;
false || false = false;
*/

//
//? 4) prompt (오래된 자바스크립트지만 예시로 사용)
//? prompt는 화면에 alert같이 확인 창이 뜨게 된다.
const age = prompt("How old are you?");

console.log(age);
// console output = 팝업된 창에 숫자를 입력하면, 해당 숫자가 출력된다.

if (age >= 18 && age <= 21) {
  console.log("you can drink but you should not");
} else if (age > 21) {
  console.log("go ahead");
} else {
  console.log("too young");
}
// console output = 18~21을 입력하면 true값이 출력되고, 22 이상은 else if 값이 출력된다. 17이하를 입력하면 else값이 출력되게 된다.

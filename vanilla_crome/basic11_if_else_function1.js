//TODO ======== #2.6 DOM if else function practice 1 ========//

//? 색깔 값이 같은지 체크할 수 있도록 변수 추가.
//1) css의 #34495e 색상값을 없애고 자바스크립트만으로 입력해보았다.
const title = document.querySelector("#title");

const BASE_COLOR = "#34495e";

function handleClick() {
  console.log(title.style.color);
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}
init();

//* funtion init() 어플리케이션을 초기화 하는 함수
// browser result = 타이틀 텍스트 클릭시 rgb(52, 73, 94) 값이 출력 됨.

//
//

//2) 클릭 할 때마다 title text 색상 바꿔주기.
const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}
init();
// browser result = 타이틀 텍스트 클릭시 #7f8c8d 색상으로 변경되었다가, 다시 클릭하면 원래 색상인 rgb(52, 73, 94) 색이 된다. (클릭시 반복 됨.)
// 해석 : 조건문을 통해 클릭 할 때마다 색이 바뀌게 하려면, 처음 title을 클릭 했을때 currentColor는 BASE_COLOR하고 같을 것이다. function init()에서 title.style.color = BASE_COLOR라고 지정 해놓았기 때문이다. 그래서 if 조건문은 처음엔 true가 된다. 그런데 if 조건문 안에 if가 true값이면 title.style.color = OTHER_COLOR가 된다고 설정해놓았기 때문에 true값이면 title은 OTHER_COLOR가 된다. 그리고 나서 다시 title을 클릭하면 creentColor는 더이상 BASE_COLOR와 동일해지지 않게 된다. 이 의미는 이 조건문이 거짓이 된다는 것이다. 그래서 추가로 else{}문을 작성해 줄 필요가 있다. 위 조건이 true가 아니면 그 의미는 currentColor가 OTHER_COLOR라는 것이므로, 현재 currentColor가 OTHER_COLOR 와 같으면 title.style.color = BASE_COLOR로 다시 변수를 줌으로써 해결한다.
// title.addEventListener함수를 초기화 함수(init)에 넣어주는 이유는 큰 프로젝트 등을 진행할 때 변수끼리 충돌하는 것을 방지하고자 객체 안으로 숨긴다고 한다.

//! 주의 할 점은 대상에 rgb값으로 컬러를 주어야 정상적으로 출력이 된다. 처음에 css처럼 BASE_COLOR값을 #34495e로 입력했더니 제대로 실행이 되지 않았다. 확인 한 결과 JS는 rgb color값에서만 작동된다고 한다. (처음 예제 1번의 출력 값이 rgb 였던 건 모두 이유가 있었구나?)

//3) click -> mouseenter로 변경
const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("mouseenter", handleClick);
}
init();

// browser result = 타이틀 텍스트에 마우스를 갖다 대면 #7f8c8d 색상으로 변경되었다가, 또 다시 갖다대면 원래 색상인 rgb(52, 73, 94) 색이 된다.

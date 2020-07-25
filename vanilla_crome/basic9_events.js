//TODO ======== #2.4 DOM Events and event headlers ========//

//? 1)window사이즈(창크기) 변경시 함수 호출하기.
const title = document.querySelector("#title");

function handleResize() {
  console.log("I have been resized");
}

//* window.addEventListener("resize", handleResize());
// window.addEventListener()안의 handleResize가 아닌 handleResize()를 입력하면 지금 바로 호출 하라는 의미이다. 즉 자동으로 호출이 된다.
// console output = I have been resized
// 하지만 우리가 원하는 것은 window 사이즈가 변경될 때 이 함수를 호출하는 것이다.
// 따라서 handleResize()가 아닌, 아래처럼 handleResize로 써주어야 한다.

window.addEventListener("resize", handleResize);

// console output = 창의 크기를 바꾸면 "I have been resized" 출력됨.

//
//
//? 2) ()안에 event를 입력해보자 : event객체 호출하기.

function handleResize(event) {
  console.log(event);
}

// 자바스크립트는 이벤트를 다룰 함수를 만들 때 마다, 자동적으로 함수를 객체에 붙인다. 그래서 sayHello함수를 했던 것과 같이 이것을 다룰 준비가 필요하다.

// console output = 창의 크기를 바꿀때마다 event객체가 호출된다. wow.

//
//
//? 3) click event

function handleClick() {
  title.style.color = "blue";
}

title.addEventListener("click", handleClick);

// browser result = title을 마우스로 click하면 파란색으로 호출된다.
// 또 검사창의 elements에서 경로의 title을 보면 클릭했을 때 style이 새로 생성되는 것을 확인 할 수 있다.
// 결국 event도 argument(인자)와 같은 의미임을 이해하자.

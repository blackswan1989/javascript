// index.html에서 만든 form class들을 가지고 오는 코드.
const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

//2) 1)입력 다음 constant를 지정해주었다. USER_LS(유저 로컬스토리지)=현재 유저
const USER_LS = "currentUser",
  SHOWING_CN = "showing"; //4)-2입력에 이어 css의 Sowing_classList를 지정.

function askForName() {
  form.classList.add(SHOWING_CN);
}

//7) text를 저장하도록 하는 함수.
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

//6) 5에서 정보를 form에 submit(제출하다,보내다)하면 그것을 처리하도록 하는 함수
// event의 preventDefault는 보통 evet가 발생하면 root과 form에서 일어나는데, 이 event는 일종의 bubble같은 것이다. 즉 form에 text를 제출하는 event가 발생하면 event가 document까지 올라가서 다른곳으로 보내버리는 default값인데 이 상태는 텍스트를 입력하고 enter를 쳐도 저장되지않고 새로고침 한 것 처럼 다른곳으로 사라져버린다. 이 기본동작을 막고자 하는 것이다.
function handleSubmit(event) {
  event.preventDefault(); //= form에 text를 입력하고 enter를 쳐도 사라지지 않는다.
  const currentValue = input.value; //text입력시 현재value가 사라지지않고 출력 되게한다.
  paintGreeting(currentValue); //입력된 value를 paintGreeting함수값을 불러내준다. 즉 Jane을 입력하고 엔터를 치면 Hello ${text}가 동작해서 Hello Jane 이 출력되도록 해준다.
  saveName(currentValue); // 입력된 value가 새로고침해도 저장되도록 해준다. 7)과 연동
}

//5) 1)currentUser가 null일 때(없을 때)동작하는 함수로 askForName을 생성.
function askForName() {
  form.classList.add(SHOWING_CN); // null상태일때 "what is your name"을 표시하도록
  form.addEventListener("submit", handleSubmit); //텍스트 입력시 정보를 submit하도록
}

//4) 1)의const currentUser에서 current유저가 null이 아닐 때 paintgreeting을 하고자 함.
// paintgreeting = 입력된 글자를 화면에 출력시킨다(=그린다)는 의미 같음.
function paintGreeting(text) {
  //text라는 하나의 argumnet를 줌.
  form.classList.remove(SHOWING_CN); //3 text를 paint할때 form을 숨겨야한다.
  greeting.classList.add(SHOWING_CN); //2 greeting을 보여준다.
  greeting.innerText = `Hello ${text}`; //1 내가 보낸 text를 ${}에 넣어준다
} // 동작 순서는 3->2->1이 된다.

//1) localstorage에서 저장된 내용을 가져오는 기능을 위해 작성. getItem()은 const의 함수로.
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    // 유저가 없는 경우
    //
    askForName();
  } else {
    //유저가 있는 경우
    //currentUser에서 localstorage에서 가져온 텍스트와 함께 paintGreeting 함수를 부른다.
    paintGreeting(currentUser);
  }
}
//3) index에 <form class="js-form>안에 form을 더 추가해주었고 css에 3)부분 추가.
// index에서 h4부분 추가

function init() {
  loadName();
}
init();

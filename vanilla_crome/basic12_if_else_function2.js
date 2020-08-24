//TODO ====== #2.7 DIM if else function practice 2 ======//

//
//
//* html은 html파일에서, css는 css파일에서, javascript는 로직을 담당하도록 해보자.

//
//
//? 1) className

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  const currentClass = title.className;
  if (currentClass !== CLICKED_CLASS) {
    title.className = CLICKED_CLASS;
  } else {
    title.className = "";
  }
}
function init() {
  title.addEventListener("click", handleClick);
}
init();
// browser result = title text 클릭시 색상 변경 됨.

//function해석 : 만약 currentClass가 CLICKED_CLASS와 값이 같지 않으면, "title.className = CLICKED_CLASS" 이 className을 주고, 값이 같으면 else{title.className = "";}처럼 공백을 주면 정상적으로 작동한다.

//! 하지만 html의 h1에 class="btn" 을 부여하고 css에서 cursor:pointer 속성을 부여했을 경우, 처음 클릭할때만 커서 포인트만 css적용되고 그 이후부터는 적용되지 않는 것을 알 수 있다. 따라서 이런 경우에는 classList가 필요하게 된다. /아마도 class가 겹치기때문에 그런 것 아닐까싶다.

//
//
//? 2) classList - add, remove

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  const currentClass = title.className; //contains로 변경 필요.
  if (currentClass !== CLICKED_CLASS) {
    title.classList.add(CLICKED_CLASS);
  } else {
    title.classList.remove(CLICKED_CLASS);
  }
}
function init() {
  title.addEventListener("click", handleClick);
}
init();
// browser result = title text에 pointer속성이 부여 되지만, 한번 클릭하고나면 더이상 색상이 변하지 않는다.

// 2)같이 입력하면 이제 커서는 CSS가 계속 적용되고 있지만, 다시 클릭해도 색깔이 변하지 않는 상태가 된다. 따라서 contains를 필요로 하게 된다.
//contains = value가 클래스에 존재하는지 확인.

//
//
//? ============= 3) classList - hasClass, contains =============

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  const hasClass = title.classList.contains(CLICKED_CLASS);
  //위처럼 입력시 title.classList가 click을 포함하고 있으면 true가 된다.
  //(hasClass는 element가 CLICKED_CLASS를 갖는지 체크하기 때문이다.)
  //따라서 아래 if 값에는 (!hasClass)만 입력해주면 된다.
  //(처음 작성했던 조건이 "!== 같지 않음"이었으므로 앞에 "!"붙여주는것.)
  if (!hasClass) {
    title.classList.add(CLICKED_CLASS);
  } else {
    title.classList.remove(CLICKED_CLASS);
  }
}
function init() {
  title.addEventListener("click", handleClick);
}
init();
// browser result = pointer속성의 유지와 함께 클릭시 색상변경 작동 잘 됨.
// 만약 !hasClass가 아닌 hasClass로 작성하고 싶다면 add와 remove의 위치를 바꿔주면된다.
//
//
//? ============= 4) classList - toggle ==============
// toggle은 class가 있는지 체크해서 있으면 add, 없으면 remove해준다.

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}
function init() {
  title.addEventListener("click", handleClick);
}
init();
// browser result = 3)처럼 pointer속성의 유지와 함께 클릭시 색상 변경의 작동이 잘 된다. (toggle사용으로 함수가 훨씬 간단해졌다.)

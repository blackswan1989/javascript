// greeting.js의 const form과 겹치므로 const toDoForm 으로 작성

const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

// 1)-2 loadToDos의 상수 설정 및 1)-1의 .getItem()에 상수 TODOS_LS넣어주기
const TODOS_LS = "toDos";

//4) todo를 여러개가 모인 목록으로 저장해야 하기 때문에, toDos를 비어있는 array로 만들어줌
// 그리고 todo를 생성했을 때 이 array에 추가되도록 한다. 즉 3)이 생성될때마다 array에 추가되도록
let toDos = []; // 8)-2의 toDos = cleanToDos작성을 위해 let으로 바꿔주었다.

//8) todo list 지우기
// list를 지우기 위해선 해당 버튼의 부모를 알아야 한다. 그래서 처음엔 console.dir(event.target)으로 콘솔창을 확인하여 parentNode라는 태그를 알아내었고 다시 console.log(event.target.parentNode)를 입력 해 주었다. 그리고 delete child element 을 검색하여 방법을 찾아 낸 후 기존 작성 내용은 참조차 주석처리하고 다시 작성함.
/*
function deleteToDo(event) {
  console.log(event.target.parentNode);
}
*/

//8)-1 "X버튼"을 클릭하면 해당 todo 리스트가 지워지는것을 확인 할 수 있다.
function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  }); // 8)-2 지운것이 저장되지않고 새로고침하면 다시 생겨나게 되는데 이를 지워주는 기능을 넣고자 작성.
  // 그 결과 id가 "1"이라는 string이기때문에 동작하지않아 숫자로변환하기 위해 parseInt를 추가해주었다.
  // console.log(cleanToDos); 숫자로 변환되는 것을 확인 후 console.log는 주석처리함.
  toDos = cleanToDos; // 이를 위해 const toDos = []를 let toDos =[]로 변경해주었다.
  saveToDos(); // 이 함수는 5)의 toDos를 저장한다. 이제 todo를 지우고 새로고침해도 다시 생겨나지 않게 된다.
}

// 5) toDos를 가져와서 로컬에 저장하도록 하게 함.
function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

// JSON.stringify() : 자바스크립트는 local storage에 있는 데이터들을 string으로 저장하려고 한다. 따라서 object 성질로 출력되는 todo를 string으로 되도록 바꿔주기 위해 사용.

//3) todo를 작성 할 수 있게 하는 코드 입력
function paintToDo(text) {
  const li = document.createElement("li"); // li element생성
  const delBtn = document.createElement("button"); // delete 버튼 위한 생성
  const span = document.createElement("span"); // span element 생성
  const newId = toDos.length + 1; // 4)의 비어있는 array에 toDos를 +1씩 더해준다.
  delBtn.innerText = "❌"; // delete 버튼 모양으로 x 삽입해줌
  delBtn.addEventListener("click", deleteToDo); // 8)의 todo list 삭제 위한 이벤트
  span.innerText = text; // text submit으로 부터 온 text를 span으로 만들어줌
  li.appendChild(delBtn); // father element인 li에 delbtn을 추가해주도록 함
  li.appendChild(span); // father element인 li에 span을 추가해주도록 함
  toDoList.appendChild(li); // 마지막으로 toDoList인 ul에 li를 추가해줌.
  li.id = newId;
  const toDoObj = {
    // 4)를 위한 상수로 toDoObj생성
    text: text,
    id: newId,
  };
  toDos.push(toDoObj); // push를 통해 array안에 element를 하나씩 넣어준다.
  saveToDos(); // 5)-1 push를 한 후에 호출되도록 한다. (push전에는 empty상태이기 때문에)
}

//2) greeting의 6번 function handleSubmit(event)와 원리 같음.
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue); // 여기까지 작성시 write a to do에 작성이 가능해짐.
  toDoInput.value = ""; // text를 작성하여 엔터를 치고 submit할 경우 input을 비워줌.
}

// 1)-1 toDos를 가져온 뒤, parsedToDo라인에서는 가져온 것을 자바스크립트 object로 변환해주고,
// 각각에 대해서 paintToDo에서 정의해놓은 function이 실행되도록 한다.
function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    //1)-3 toDos가 null상태가 아니면 실행
    const parsedToDos = JSON.parse(loadedToDos); //6)콘솔확인시 object로 출력됨
    //parse : (컴퓨터 프로그램의 소스 코드를) 분석하다.
    //7) parsedToDos에 있는 각각에 대해서 paintToDo function을 실행하게 해준다.
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
    // forEach : parsedToDos에 들어있는 각자의 text들을 따로 출력해주는 기능.
    // forEach는 처리중인 현재 요소로 첫 번째 인수와 함께 () 안에 넣은 함수를 호출한다.
    // .forEach(function (toDo) : parsedToDos안에 함수를 선언해 준 형태.
    // (toDo) : toDo는 forEach가 처리중인 현재 요소를 나타낸다.
  }
}

// 1) init부터 설정. localstorage에서 뭔가를 load하기 위함.
function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit); //1)-4 greeting의 5) 참조
}
init();

//
//
//
//? JSON : JavaScript Objection Notation
//? 데이터를 전달 할 때 자바스크립트가 그것을 다룰 수 있도록 object로 바꿔주는 기능
//? object에서 string으로, string에서 object로 변환 해 줄 수도 있다.

// ? append기능 참조
// https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append

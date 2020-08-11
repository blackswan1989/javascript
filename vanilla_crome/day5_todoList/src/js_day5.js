//TODO ## day5 Make a to-do list with the following features. ##

const toDoBox = document.querySelector(".todoBox"),
  toDoing = document.querySelector(".todo-list-ing"),
  toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoPenList = document.querySelector(".js-toDoList-pending"),
  toDoFinishList = document.querySelector(".js-toDoList-finished");

const PENTODOS_LS = "pending";
const FINTODOS_LS = "finished";

let pendingArray = [];
let finishedArray = [];

function savePenToDos() {
  localStorage.setItem(PENTODOS_LS, JSON.stringify(pendingArray));
} // JSON.stringify는 자바스크립트의 object<->string을 서로 바꿔준다.

function saveFinToDos() {
  localStorage.setItem(FINTODOS_LS, JSON.stringify(finishedArray));
}

function deletePenToDo(event) {
  const delbtn = event.target;
  const li = delbtn.parentNode;
  toDoPenList.removeChild(li); // serch keyword : "delete child element mdn"
  const cleanPenToDos = pendingArray.filter(function (penEach) {
    return penEach.id !== parseInt(li.id);
  });
  console.log(li.id);
  pendingArray = cleanPenToDos;
  savePenToDos(); // -> 먼저 이것을 바꿔주고 toDos에 저장되도록
  // filter()메서드는 제공된 함수에 의해 구현 된 테스트를 통과하는 모든 요소를 ​​사용하여 새로운 형식의 배열을 만듭니다. TypedArray 는 여기 에서 형식화 된 배열 유형 중 하나입니다 .Array.prototype.filter()
  // parseInt는 string을 숫자로 바꿔준다.
}

function deleteFinishToDo(event) {
  const finbtn = event.target;
  const li = finbtn.parentNode;
  toDoFinishList.removeChild(li);
  /* toDoFinishList.appendChild(li);*/
  const cleanFinToDos = finishedArray.filter(function (finEach) {
    return finEach.id !== parseInt(li.id);
  });
  finishedArray = cleanFinToDos;
  saveFinToDos();
}

/*localstorage.setitem*/

function penToFin(event) {
  deletePenToDo(event);
  const delbtn = event.target;
  const li = delbtn.parentNode;
  const text = li.childNodes[0].innerText;
  paintFinToDo(text);
}

function finToPen(event) {
  deleteFinishToDo(event);
  const finbtn = event.target;
  const li = finbtn.parentNode;
  const text = li.childNodes[0].innerText;
  paintPenToDo(text);
}

function paintFinToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const penBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = finishedArray.length + 1;
  delBtn.innerText = "✗"; // MAC 이모티콘 단축키 커맨드+컨트롤+스페이스
  delBtn.addEventListener("click", deleteFinishToDo); //handler?
  penBtn.innerText = "↩︎";
  penBtn.addEventListener("click", finToPen);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(penBtn);
  li.id = newId;
  toDoFinishList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  finishedArray.push(toDoObj);
  saveFinToDos();
}
function paintPenToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const finBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = pendingArray.length + 1;
  delBtn.innerText = "✗"; // MAC 이모티콘 단축키 커맨드+컨트롤+스페이스
  delBtn.addEventListener("click", deletePenToDo);
  finBtn.innerText = "✔︎";
  finBtn.addEventListener("click", penToFin);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(finBtn);
  li.id = newId;
  toDoPenList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  pendingArray.push(toDoObj);
  savePenToDos(); // push이후 호출 되도록 순서 유의
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintPenToDo(currentValue);
  toDoInput.value = "";
}

// forEach()는 array에 담겨있는 것들에게 함수를 각각 한번씩 실행시켜주는 명령이다. localstorage에 저장된 것을 새로고침해도 사라지지않고 다시 화면에 출력시켜주도록 만들어 준다.
function useforEach(penEach) {
  paintPenToDo(penEach.text);
}
function loadPenToDos() {
  const loadedPenToDos = localStorage.getItem(PENTODOS_LS);
  if (loadedPenToDos !== null) {
    const parsedToDos = JSON.parse(loadedPenToDos);
    parsedToDos.forEach(useforEach); //forEach 사용
  }
}
function finuseforEach(finEach) {
  paintFinToDo(finEach.text);
}
function loadFinToDos() {
  const loadedFinToDos = localStorage.getItem(FINTODOS_LS);
  if (loadedFinToDos !== null) {
    const parsedFinToDos = JSON.parse(loadedFinToDos);
    parsedFinToDos.forEach(finuseforEach); //forEach 사용
  }
}

function init() {
  loadPenToDos();
  loadFinToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();

/* challenge day5 완성 조건
1. Make a To Do list with two boards: Pending, Finished.
  (두 개의 보드로 할 일 목록을 만듭니다 : 보류 중, 완료 됨.)
2. Allow the user to switch between boards.
  (사용자가 보드간에 전환 할 수 있습니다.)
3. Allow the user to delete To Dos.
  (사용자가 할 일을 삭제하도록 허용합니다.)
4. Save everything on localStorage and restore everything on refresh.
  (localStorage에 모든 것을 저장하고 새로 고침시 모든 것을 복원하십시오.)
*/

/* 슬랙 코드 공유
 * const btn = event.target;  // 이벤트가 일어난 타겟(버튼)
 * const li = btn.parentNode;  // 그 버튼의 부모노드 li
 * const text = li.childNodes[0].innerText;  //li의 자식노드의  span에 포함되어있는 텍스트
 * 버튼이 눌렸던 텍스트를 다른 함수에서 가져와 사용하실때 필요한 코드..? 라고 생각해서 공유해드립니다
 * 물론 저와 다른 방법을 사용하신 분들도 계시겠지요!
 */

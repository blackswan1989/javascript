// p. 206
"use strict";

const itemList = [];
// const itemList = new Array()를 사용해서 새로운 배열을 만들 수도 있다.

function showList() {
  let list = "<ul>"; // 목록을 시작하는 ul태그 저장
  for (let i = 0; i < itemList.length; i++) {
    list += `<li> ${itemList[i]} <span class='close' id='${i}'>X</span></li>`; // 배열 요소마다 반복되도록
    // list = list + `<li> ${itemList[i]} </li>`;
  }
  list += "</ul>"; // list = list + "</ul>"
  document.querySelector("#itemList").innerHTML = list; // list의 변수값 표시

  let remove = document.querySelectorAll(".close");
  for (let i = 0; i < remove.length; i++) {
    // remove 배열의 모든 요소 확인
    remove[i].addEventListener("click", removeList); // 요소 클릭시 removeList()실행
  }
}

function addList() {
  const item = document.querySelector("#item").value; // input 텍스트 필드 내용을 가져옴
  const itemInput = document.querySelector("#item");
  if (item != null) {
    itemList.push(item); // itemList 배열 끝에 item 변수값 추가
    itemInput.value = ""; // text가 추가되고나면 item요소를 지워준다.
    itemInput.focus(); // 지워지면 텍스트필드에 focus되도록 한다.
  }
  showList();
}

const addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click", addList); // addBtn을 클릭하면 addList 함수 실행되도록 연결

function removeList() {
  // console.log(this); <span class="close" id="2">X</span>
  //NOTE getAttribute() 함수는 지정한 속성의 값을 가져오는 함수이다.
  let id = this.getAttribute("id");
  itemList.splice(id, 1); // itemList 배열에서 인덱스 값이 id인 요소 1개 삭제
  showList(); // 삭제 후 바뀐 내용을 화면에 보여주기 위해 다시 함수 호출
}

//NOTE 더하기 할당 연산자 (+=)는 오른쪽 피연산자의 값을 변수에 더하고 그 결과를 변수에 할당힌다. 두 피연산자의 유형에 따라 더하기 할당 연산자의 동작이 결정되고 추가 또는 연결이 가능하다.

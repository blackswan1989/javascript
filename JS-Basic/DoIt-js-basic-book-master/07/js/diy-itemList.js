// p. 206
"use strict";

const itemList = [];

function addList() {
  const item = document.querySelector("#item").value;
  const itemInput = document.querySelector("#item");
  if (item == "") {
    itemInput.focus();
  } else if (item.search(/\s/) != -1) {
    itemInput.focus();
  } else if (item == null) {
    itemInput.focus();
  } else {
    itemList.push(item);
    itemInput.value = "";
    itemInput.focus();
  }
  console.log(itemList);
  showList();
}

function showList() {
  let list = "<ul>";
  for (let i = 0; i < itemList.length; i++) {
    list =
      list + `<li>${itemList[i]}<span class="close" id="${i}">X</span></li>`;
  }
  list = list + "</ul>";
  document.querySelector("#itemList").innerHTML = list;

  let remove = document.querySelectorAll(".close");
  for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click", removeList);
  }
}

function removeList() {
  let id = this.getAttribute("id");
  // console.log(this);
  itemList.splice(id, 1); // splice(index값, 삭제할 갯수)
  showList();
}

const btnEvent = document.querySelector("#add");
btnEvent.addEventListener("click", addList);

/* 
REVIEW 여행 준비물 점검 프로그램 p.221

1. 여행에 필요한 준비물을 저장할 빈 배열 만들기
2. 빈 배열에 내용을 추가할 addList()함수 만들기
3. [추가] 버튼의 click 이벤트와 addList()함수를 실행 연결하기
4. itemList 배열의 내용을 화면에 보여줄 showList() 함수 만들기 
4-1. HTML 태그 문자열을 저장할 list 변수 만들기 (ul 태그 사용)
4-2. for문을 사용해 itemList 배열의 요소를 차례로 가져온 후 li 태그로 묶어 list 변수에 저장하기
5. 준비한 항목을 화면에서 삭제하는 removeList()함수 만들기
5-1. showlist() 함수에서 각 항목을 표시하는 소스에 x 버튼을 함께 표시하기 (span class="close") 
5-2. 삭제 버튼의 click 이벤트와 removeList() 함수 실행 연결하기 (querySelectorAll()함수를 사용해서 삭제 버튼을 remove 변수에 저장)
5-3. this.getAttribute(id)를 사용하여 이벤트가 발생한 삭제 버튼의 id 값 알아내기 
5-4. splice()함수를 사용해 해당 id 값이 가리키는 itemList() 배열의 요소 삭제하기(splice(id,1)함수를 사용하여  삭제)
5-5. showList() 함수를 사용해 변경된 배열을 화면에 표시하기
*/

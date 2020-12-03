//P.269 참가 신청 명단 프로그램 만들기 - 1)새 노드 추가하고 표시하기
//p.282 참가 신청 명단 프로그램 만들기 - 2)맨 위에 이름 추가하기
//p.283 참가 신청 명단 프로그램 만들기 - 3)이름 삭제하기

function newRegister() {
  // #userName > p tag > text part

  const newP = document.createElement("p"); // 새로운 p element 생성
  const userName = document.querySelector("#userName"); // input의 텍스트 필드 내용 가져오기
  const newText = document.createTextNode(userName.value); // 가져온 userName 필드의 value 값으로 새로운 택스트 노드 생성
  newP.appendChild(newText); // newText노드를 appendChild()함수를 사용해 부모 element노드(newP)에 서로 연결하기
  console.log(newText);
  // p tag > span btn "X" part
  const delBtn = document.createElement("span"); // 새로운 span btn element 만들기
  const delText = document.createTextNode("X"); // 새로운 text node 만들기
  delBtn.setAttribute("class", "del"); // delBtn에 class속성과 이름 설정하기
  delBtn.appendChild(delText); // text node를 btn요소의 자식 element로 추가하기
  newP.appendChild(delBtn); // del btn을 p element의 자식 요소로 추가

  const nameList = document.querySelector("#nameList"); // 위에서 만든 p태그를 div #nameList부모 태그에 연결해주기
  nameList.appendChild(newP); // appendChild()함수를 사용하면 새로 추가하는 자식 노드가 맨 뒤에 추가 된다.
  nameList.insertBefore(newP, nameList.childNodes[0]); // insertBefore()함수를 사용하면 새로 추가하는 자식 노드위치를 지정할 수 있다.(이 소스는 childNodes[0]으로 지정하여 #nameList 맨 앞에 추가해 준 것. )
  userName.value = ""; // 추가 입력을 위해 텍스트 필드 비워주기

  // "X" btn delete part
  // span X 버튼이 클릭 이벤트를 발동시켰을때 삭제되어야 할 대상은 p tag이다.
  // 하지만 노드 삭제는 부모 노드에서만 가능하기 때문에 x버튼의 부모인 p의 부모, 그리고 p버튼의 부모인 #nameList 노드에서 처리해야 한다.
  const removeBtn = document.querySelectorAll(".del");
  for (let i = 0; i < removeBtn.length; i++) {
    // removeBtn에 있는 element 전체를 반복
    removeBtn[i].addEventListener("click", function () {
      // i번째 버튼을 눌렀을 때 실행할 함수 선언
      if (this.parentNode.parentNode) {
        // 현재 노드(this : X버튼)의 부모 노드의 부모 노드가 있을 경우 실행
        this.parentNode.parentNode.removeChild(this.parentNode); // 현재 노드(this : X버튼) 부모(p)를 삭제하기 위해 p의 부모(#nameList)를 찾고 그 자식인 p노드를 removeChild()로 삭제
      }
    });
  }
  //p.285
}

//? register.html에서 함수 실행 설정 : <button onclick="newRegister();return false;">신청</button>

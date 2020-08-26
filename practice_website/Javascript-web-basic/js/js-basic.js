//TODO DOM script #1 querySelector & querySelectorAll
// querySelectorAll을 사용하여 ilbuni를 모두 지정해 줄 수 있다.
const ilbuniGroup = document.querySelectorAll(".ilbuni");

console.log(ilbuniGroup);
console.log(ilbuniGroup[2]);

//바로 2번째 자식을 선택해준다.
document.querySelector(".ilbuni:nth-child(2)");
console.log(document.querySelector(".ilbuni:nth-child(2)"));

/*
data-로 시작하는 표준 커스텀 속성으로
data-index, data-id, data-role등 data-의 형식으로 시작하면
어떤 속성이든 필요에 따라 임의로 추가 할 수 있다.
*/

//
//TODO DOM script #2 setAttribute & getAttribute
const char = document.querySelector(".characters");

// setAttribute는 속성(attribute)을 setting해주는 것을 의미한다.
// 따라서 "data-id", 123을 해주면 id값으로 123을 설정하는 것이다.

char.setAttribute("data-id", 123);
console.log(char);

// getAttribute는 설정한 값을 가져와주는 것이다.
char.getAttribute("data-id");
console.log(char.getAttribute("data-id"));

//
//
//TODO DOM script #3 appendChild & removeChild
const pElem = document.createElement("p");
console.log(pElem);

pElem.innerHTML = "안녕?";
// p 엘리먼트를 생성하고 innerHTMl을 이용하여 텍스트를 입력해주었다.

// 이를 characters에 붙이고자 한다.
const charactersElem = document.querySelector(".characters");

//charactersElem를 가져온다고 선언해주고 appendChild를 pElem에 설정해주면 화면에 출력되는 것을 확인할 수 있다.
charactersElem.appendChild(pElem);

console.log(charactersElem);

//removeChild를 이용하여 .ilbuni의 b를 제거해주었다.
//charactersElem.removeChild(document.querySelector(".b"));

//
//TODO #4 classList.add & remove & toggle &  className
// querySelectAll이 아닌 그냥 querySelector를 사용하면 첫번째 element를 가져온다.
const ilbuni = document.querySelector(".ilbuni");

//ilbuni에 클래스명인 special을 추가로 붙여준다.
ilbuni.classList.add("special");

//ilbuni의 클래스명 자체를 special로 바꿔준다.
//ilbuni.className = "special";

// ilbuni클래스를 지워줌으로써 width값이 원래대로 돌아오게 된다.
ilbuni.classList.remove("ilbuni");

//toggle 속성은 스위치(on&off)의 기능이다.
ilbuni.classList.toggle("special"); //border off
ilbuni.classList.toggle("special"); //border on
ilbuni.classList.toggle("special"); //border off
ilbuni.classList.toggle("ilbuni");

//TODO ======== #2.2 DOM Functions ========//

//? CSS와 같이 자바스크립트에서도 element를 선택하여 변경할 수 있다.

//? 1)처럼 document를 입력하면 검사-Console창에서도 도큐멘트에 접근할 수 있다. 즉, HTML document는 자바스크립트가 된다.

//1)
console.log(document);
// console output = index.html의 전체 내용 확인 가능

//2)
console.title = document.getElementById("title");

console.log(title);
// console output = <h1 id="title">This works!</h1>

//
//? DOM(Document Object Module)
//? 자바스크립트는 나의 html에 있는 모든 요소를 가져다가 객체로 만든다.
//? 객체는 console.입력시 나오는 것 같이 나오게 된다.
//? 3)처럼 입력하면 index.html의 "This works!"가 출력되는 대신
//? "Hi! From JS"가 화면에 출력되게 된다. 하지만 index.html 상에서의 문구는 변하지 않는다.

//3)
title.innerHTML = "Hi! From JS";

// browser result = Hi! From JS

//
//
//TODO ======== #2.3 Modifying the DOM with JS ========//

//1) console.dir()
console.dir(title);
// console output = h1#title과 관련된 객체들의 확인이 가능하다.

title.style.color = "red";
// browser result = = Hi! From JS(change red color)

//2)
console.dir(document);
// console output = #document과 관련된 객체들의 확인이 가능하다.

document.title = "I own you";
// 1)~)등 같이 확인되는 객체들을 통해 내용을 돌아 볼 수 있다.
// browser title result = I own you (change text)

//? 결론 :
//? 자바스크립트로 HTML을 바꿀 수 있다.
//? 위 내용들로 html을 어떻게 수정하는지 이해 할 수 있다.
//? 그 외에도 class를 추가하고 CSS의 에니메이션을 변경 할 수 있는지,
//? 어떻게 숨기고 보여줄 수 있는지, 어떻게 click을 감지 할 수 있는지 등
//? 자바스크립트로 할 수 있음을 알 수 있게 된다.

//
//
// querySelector는 노드의 첫번째 자식을 반환한다.
// 그 의미는 document로 가서 모든 자식들 중에서 찾으려고 한다는 것으로 즉, id(#)로 선택해 보겠다는 것이다. 여기서 ("title")은 css selector와 비슷하다. 만약에 id로 찾고싶으면 ("#title") 이렇게 작성하고 class로 찾고 싶으면 (".title") 이렇게 작성한다.

//3)
const title = document.querySelector(".title");
title.innerHTML = "Hi! From JS";
title.style.color = "red";
document.title = "I own you now";

// console output = "Cannot set property 'innerHTML' of null". 이라는 문구와 함께 error가 뜬다. title이 null(정의 할 수 없음)과 같은 상태이기 때문이다.

//4)
const title = document.querySelector("#title");
title.innerHTML = "Hi! From JS";
title.style.color = "red";
document.title = "I own you now";
// 따라서 4)처럼 (".title")이 아닌 ("#title")로 써주면 정상적으로 출력된다.

//! 참조 : 위에 기록한 코드들을 함께보면 정상출력 X, 주석처리 또는 개별적으로 봐야 정상적인 확인이 가능. 그리고 index.html상의 js파일 경로를 일치시켜주어야함.

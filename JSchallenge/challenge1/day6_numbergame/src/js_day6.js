//TODO ## Make a number guessing game using Javascript! ##
//https://codesandbox.io/s/empty-blueprint-6bn07?file=/src/index.js:0-80
// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

let generateNumber = document.querySelector(".number-generate");
let setting = document.querySelector(".number-setting");
let sliderNumber = setting.querySelector("input");
let machineRandom = document.querySelector(".machine-chose");

//Generate a number between 0 and 000
sliderNumber.addEventListener("input", function () {
  generateNumber.innerText = `Generate a number between 0 and ${sliderNumber.value}`;
});

function handleSubmit(event) {
  // submit의 제출을 클릭해도 slider의 내용이 사라지지 않게 해 줌.
  event.preventDefault();
}

function getRandom(event) {
  machineRandom.innerText = `The machine Chose : ${Math.floor(
    Math.random() * (200 - 1) + 1
  )}`;
}

function init() {
  setting.addEventListener("submit", handleSubmit, getRandom);
}
init();

// 슬라이더의 숫자 범위 내에서 더 큰 숫자를 제출한 사람이 승리
// 즉 기계는 랜덤으로 하나 제출하고, 사용자는 작성한 숫자로 승패 판단.

//
//
/* DAY6 챌린지 조건
1. Find a random number on a range between 0 and a number defined by the user. (0과 사용자가 정의한 숫자 사이의 범위에서 임의의 숫자를 찾습니다. )
2. Use range input. (범위 입력을 사용하십시오.)
3. Update the range value in real time. (실시간으로 범위 값을 업데이트합니다.)
4. Only play after the user chooses a number. (사용자가 번호를 선택한 후에 만 ​​재생됩니다.)
5. Notify the user if the game is lost or won. (게임이 패배하거나이긴 경우 사용자에게 알립니다.)

6. Don't give up.
*/

/* 참조 사이트
<input 관련>
https://medium.com/@madgb00/input-type-range-1-onchange-oninput-%EB%B9%84%EA%B5%90-664b58b3f6c

https://www.impressivewebs.com/onchange-vs-oninput-for-range-sliders/

https://www.it-swarm.dev/ko/html/type-number%EB%A5%BC-%EC%96%91%EC%88%98%EB%A1%9C%EB%A7%8C-%EB%A7%8C%EB%93%9C%EB%8A%94-%EB%B0%A9%EB%B2%95/1041901479/

<submit관련>
https://m.blog.naver.com/nuberus/221464564413

<math.ramdom 관련>
https://dasima.xyz/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-math-random-%EB%B2%94%EC%9C%84-%EC%9E%90%EB%A6%BF%EC%88%98/
*/

/*
1. 트리거때마다 숫자변경관련: 혹시 저같은분있을까봐 남깁니다. change 이벤트보다 input 이벤트로 하시면 숫자가 계속 이벤트 트리거 될때마다 바뀔거구요.
2. 리프레쉬할때마다 초기value값 초기값으로 세팅은 input에 autocomplete=off하시면 해결됩니다 (edited) 
*/

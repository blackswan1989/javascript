//TODO 창 크기 조절에 따른 배경 색 변화 이벤트 주기

// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const widthOutput = document.querySelector("#width");

// width는 리사이즈 할 때마다 계속 값이 변경되는 변수이기 때문에 resizeHandler()함수 안에서 선언해서 값이 바뀔 때마다 그 조건문에 맞게 작동되도록 해야한다. (전역변수와 지역변수 구별 필요)

function handleResize() {
  const body = document.querySelector(".body");

  const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

  const width = window.innerWidth;

  if (width <= 400) {
    document.body.style.background = colors[1];
  } else if (width > 400 && width <= 550) {
    document.body.style.background = colors[2];
  } else if (width > 550 && width <= 700) {
    document.body.style.background = colors[3];
  } else {
    document.body.style.background = colors[4];
  }
}
function init() {
  document.body.style.background = "#1abc9c";
  window.addEventListener("resize", handleResize);
  window.onresize = textResize;
}
init();

function textResize() {
  widthOutput.textContent = window.innerWidth;
}

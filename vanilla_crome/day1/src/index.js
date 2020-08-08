// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

const title = document.querySelector("h2");

const superEventHandler = {
  handleWindowResize: function handleResize() {
    title.style.color = colors[1];
    title.innerHTML = "you just resized. don't do that!";
  },
  handleMouseIn: function handleHoverIn() {
    title.style.color = colors[0];
    title.innerHTML = "yor mouse is here.";
  },
  handleMouseOut: function handleHoverOut() {
    title.style.color = colors[4];
    title.innerHTML = "yor mouse is gone. Come here!!";
  },
  handleRightClick: function handleWindowClick() {
    title.style.color = colors[2];
    title.innerHTML = "yor was a right click!";
  },
};

function init() {
  window.addEventListener("resize", superEventHandler.handleWindowResize);
  title.addEventListener("mouseenter", superEventHandler.handleMouseIn);
  title.addEventListener("mouseout", superEventHandler.handleMouseOut);
  window.addEventListener("contextmenu", superEventHandler.handleRightClick);
}
init();

/* 조건
1. 마우스가 위에 있으면 제목의 텍스트가 변경되어야합니다.
2. 마우스를 놓으면 제목의 텍스트가 변경되어야합니다.
3. 창의 크기가 조정되면 제목이 변경되어야합니다.
4. 마우스 오른쪽 버튼을 클릭하면 제목도 변경됩니다.
5. 제목의 색상은 색상 배열의 색상에서 가져와야합니다.
6. css 또는 html 파일을 변경하지 마십시오.
7. 모든 함수 핸들러는 "superEventHandler"의 내부에 있어야합니다.
8. 요구 사항 중 하나라도 충족되지 않으면 ❌이 표시됩니다.
*/

const canvas = document.getElementById("jsCanvas");
const context = canvas.getContext("2d");
const colorPick = document.getElementsByClassName("jsColor");
const rangeBar = document.getElementById("jsRange");
const fillMode = document.getElementById("jsMode");
const btnSave = document.getElementById("jsSave");

const INITIAL_COLOR = "#2c2c2c";

//캔버스의 넓이와 높이를 설정해준다.
canvas.width = 700; //html의 canvas에 넣어주어도 동작 된다.
canvas.height = 450;

//아래 코드 두줄은 기본 배경색을 white로 설정해준다
context.fillStyle = "white";
context.fillRect(0, 0, canvas.width, canvas.height);
//
context.strokeStyle = INITIAL_COLOR; //defult값 "#2c2c2c"
context.fillStyle = INITIAL_COLOR; //중복사용으로 INITIAL_COLOR를 만들어줌
context.lineWidth = 2.5; //range로 조절하는 부분

//마우스를 누르고있지 않을때 false상태이다가 그리기 시작하면 onMouseDown에서 true로 만들어준다.
let painting = false;
//7)fillMode -> default값은 false로 설정
let filling = false;

function startPainting() {
  painting = true;
}

//4)with event listener
function stopPainting() {
  painting = false;
}

function onMouseMove(event) {
  //1)-1 캔버스에서 마우스위치가 콘솔로 확인된다.
  //console.log(event); 모든좌표가 확인됨. 여기서 offset값도 확인 가능
  //! 캔버스내의 좌표는 offsetX, offsetY값과 관련있다.
  const x = event.offsetX;
  const y = event.offsetY;
  // console.log(x, y); offset값 출력 확인
  if (!painting) {
    context.beginPath();
    context.moveTo(x, y);
    //console.log(painting); //클릭하지않은 상태일때 움직이면 false값이 뜬다.
    //console.log("create path in ", x, y); //움직일때 좌표값이 확인된다.
  } else {
    context.lineTo(x, y);
    //console.log(painting); //클릭한상태로 움직이면 true값이 확인된다.
    context.stroke();
    //console.log("create line in ", x, y); //그리고있을때 좌표값이 확인 된다.
    //context.closePath(); // 이 속성은 직선을 계속 그리게 한다.
  }
}

/* painting까지 구동 확인되어 삭제(주석)처리
function onMouseDown(event) {
  console.log(event);
  painting = true;
}*/

//5)-1의 함수 생성 | color 선택 및 적용을 위함.
function handleColorClick(event) {
  //console.log(event.target.style); //color array 출력이 확인되며 이 중 backgroundColor속성에 해당 색이 있음을 확인 할 수있다.
  const color = event.target.style.backgroundColor;
  //console.log(color); //해당 색상값이 정상적으로 출력됨을 확인할수있다.
  context.strokeStyle = color; // 이벤트발생시 strokeStyle이 target에 있는 색상으로 만들어준다.
  context.fillStyle = color;
}

//6)-1 함수
function handleRangeChange(event) {
  //console.log(event); //target의 세부 속성을 확인한다. -> value: "1.7"
  //console.log(event.target.value); //rangebar를 움직일때 해당 값을 확인 할 수 있다.(input에 설정된 0.1step씩 움직이는것)
  const size = event.target.value;
  context.lineWidth = size;
}

//7)-1 fillMode & handleFillModeClick event 함수
function handleFillModeClick() {
  if (filling === true) {
    filling = false;
    fillMode.innerText = "Fill";
  } else {
    filling = true;
    fillMode.innerText = "Paint";
  }
}

function onMouseUp(event) {
  //mouseup상태가 아닐때에는 기본값을 false로 만들어준다.
  painting = false;
}

function onMouseLeave(evnet) {
  stopPainting();
}

//8)-1 함수 생성
function handleCanvasClick() {
  if (filling) {
    context.fillRect(0, 0, canvas.width, canvas.height);
  }
}

//9)-1 함수 | 마우스 우클릭을 못하게 막아준다.
function handleContextMenu(event) {
  console.log(event);
  event.preventDefault();
}

function handleBtnSaveClick() {
  const image = canvas.toDataURL();
  //console.log(image); // save를 클릭하면 현재 canvas가 url형태로 저장됨.
  const link = document.createElement("a");
  link.href = image;
  link.download = "PaintJS![🎨]";
  link.click();
}

if (canvas) {
  //1) 먼저 캔버스 위에 마우스가 움직이는것을 감지하도록 해준다.
  canvas.addEventListener("mousemove", onMouseMove);

  //2) 마우스가 캔버스위를 클릭해서 그리기 시작했을때를 감지하도록 해준다.
  //mousedown은 마우스를 떼지않고 클릭하고 있을 때의 event이다.
  canvas.addEventListener("mousedown", startPainting);

  //3)마우스를 클릭하고있을때 X,Y값을 얻으며 painting을 시작하게 해준다.
  canvas.addEventListener("mouseup", stopPainting);

  //4)마우스가 캔버스를 벗어나면 painting을 false로 설정해주기 위한 이벤트
  canvas.addEventListener("mouseleave", stopPainting);

  //8)fill을 위해 캔버스를 클릭하면 가득채워주는 이벤트를 주기 위함.
  canvas.addEventListener("click", handleCanvasClick);

  //9) 마우스 우클릭을 하지 못하도록 막는 이벤트(save로 저장할수있도록)
  canvas.addEventListener("contextmenu", handleContextMenu);
}

//5)-1 color 적용하기
//console.log(Array.from(colors)); //array.from메소드는 object로 부터 array를 만들어 준다.
//Array를 만들어주면, 그 array안에서 forEach로 color를 가져올 수 있다.
//즉, array를 만들고 forEach로 color를 돌려서 addEventListener를 호출해준다.
Array.from(colorPick).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);

//6)rangeBar로 브러쉬 굵기(width)설정해주기
if (rangeBar) {
  rangeBar.addEventListener("input", handleRangeChange);
}

//7)
if (fillMode) {
  fillMode.addEventListener("click", handleFillModeClick);
}

if (btnSave) {
  btnSave.addEventListener("click", handleBtnSaveClick);
}

/* 참조자료
serch : canvas 2d mdn 
? 주요 속성 -> getContext, constext의 "line Width", 
? line 속성 -> beginPath(), moveTo(), lineTo() 
? drawing paths -> fill(), stroke()
? fill속성 -> fillRext(), strokeRext()
? fill & stroke styles ->  fillStyle, strokeStyle
? image save 속성 toDataURL()-> https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL
beginPath는 클릭했을때 시작하는 점을 생성하고 그 시작점 부터 클릭한곳까지 선을 만드는 것을 의미한다.
lineTo는 현재 sub-path의 마지막 점을 특정 좌표와 직선으로 연결해주는 속성이다.
fill은 현재의 fill style로 현재의 sub-path를 채워준다.
stroke는 현재의 stroke style로 현재의 sub-path에 획을 그어준다.

https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

serch : mouseup mdn
https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseup_event
*/

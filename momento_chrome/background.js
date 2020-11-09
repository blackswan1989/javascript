const body = document.querySelector("body");

//2)-1 이미지 갯수 함수선언
const IMG_NUMBER = 6;

//2)-2 이미지 링크를 연결하여 출력시키기 위함.
function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  // +1을 주는 이유는 Math.random()함수가 0을 줄 수도 있기 때문이다.
  image.classList.add("bgImage"); //class name 부여
  body.prepend(image);
}

// 2) math.random을 이용하여 1~6의 이미지들을 랜덤으로 호출시키기 위함.
function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

//1) 랜덤으로 배경 이미지들을 불러내기 위함
function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();

/* 이렇게 작성하면 이미지가 출력됨.
image.src = "/Users/blackswan1989/Documents/javascript/momento_chrome/images/1.jpg";
*/

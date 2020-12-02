const bigImg = document.querySelector("#cup");
const smallImg = document.querySelectorAll(".small");

smallImg[0].onclick = showBig;
smallImg[1].onclick = showBig;
smallImg[2].onclick = showBig;

function showBig() {
  let newImg = this.src; // click 이벤트가 발생한 대상의 src 속성 값 가져옴
  bigImg.setAttribute("src", newImg); // newImg 값을 큰 이미지의 src 속성에 할당
}

/*
setAttribute()함수를 사용하지 않고도 아래처럼 작성하여 속성 사용이 가능하다.

for(i=0; i<smallImg.length; i++) {
  smallImg[i].onclick = function(event) {
    bigImg.src = this.src;
  }
}

*/

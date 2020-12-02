let pic = document.querySelector("#pic");

function changePic() {
  pic.src = "images/boy.png";
}

function originPic() {
  pic.src = "images/girl.png";
}

function drawBorder() {
  pic.style.border = "2px dotted #666";
}

pic.addEventListener("mouseover", changePic);
pic.addEventListener("mouseout", originPic);
pic.addEventListener("click", drawBorder);

// 웹 문서 어디를 누르던지 "안녕?" 알림창이 뜨도록 소스 작성
// document.addEventListener("click", function () {
//   alert("안녕?");
// });

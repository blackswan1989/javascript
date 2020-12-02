let bigPic = document.querySelector("#cup");
let smallPics = document.querySelectorAll(".small");

for (i = 0; i < smallPics.length; i++) {
  smallPics[i].addEventListener("click", function () {
    newPic = this.src;
    bigPic.setAttribute("src", newPic);
  });
}

const viewBtn = document.querySelector("#view");
const showDetail = document.querySelector("#detail");
let isOpen = false; // #detail 엘리먼트는 감춰진 상태임으로 초기값을 false로 지정하여 변수 선언

viewBtn.addEventListener("click", function () {
  // #view 엘리먼트를 클릭했을때 isOpen 변수값을 체크하도록
  if (isOpen == false) {
    // 상세 정보가 감춰져 있을 때 실행할 소스
    viewBtn.innerText = "상세 설명 닫기";
    showDetail.style.display = "block";
    isOpen = true;
  } else {
    // 상세 정보가 표시되어 있을 때 실행할 소스
    viewBtn.innerText = "상세 설명 보기";
    showDetail.style.display = "none";
    isOpen = false;
  }
});

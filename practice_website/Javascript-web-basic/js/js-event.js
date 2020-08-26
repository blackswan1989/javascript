const event = document.querySelector(".ilbuni:nth-child(3)");

// click하면 발생하는 event를 3번째 child에게 설정해주었다.
event.addEventListener("click", function () {
  event.classList.add("special");
});

const ilbuni = document.querySelector(".ilbuni.b");

// b클래스에 toggle을 click이벤트로 설정해주었다.
function clickHandler() {
  ilbuni.classList.toggle("special");
}

ilbuni.addEventListener("click", clickHandler);

// 최신 화살표 함수 작성 방법 예시
const ilbuniFirst = document.querySelector(".ilbuni.a");

const clickFirstHandler = () => {
  ilbuniFirst.classList.toggle("special");
};

ilbuniFirst.addEventListener("click", clickFirstHandler);

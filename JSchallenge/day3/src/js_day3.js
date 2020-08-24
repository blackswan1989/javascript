// import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const clockcontainer = document.querySelector(".clock");
const dDay = clockcontainer.querySelector("h2");

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900").getTime();
  // d-day시간
  let now = new Date(); // 현재시간
  now = now.getTime();

  const timeGap = xmasDay - now;

  const day = Math.floor(timeGap / (1000 * 60 * 60 * 24));
  const hour = Math.floor((timeGap / (1000 * 60 * 60)) % 24);
  const min = Math.floor((timeGap / (1000 * 60)) % 60);
  const sec = Math.floor((timeGap / 1000) % 60);

  dDay.innerText = `${day < 10 ? `0${day}` : day}d ${
    hour < 10 ? `0${hour}` : hour
  }h ${min < 10 ? `0${min}` : min}m ${sec < 10 ? `0${sec}` : sec}s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();

// Math.floor 는 내림해주는 기능이다.
// ex. Math.floor(3.3) = 3
// ex. Math.floor(3.9) = 3
// 반대 기능으로는 Math.ceil()이 있다.

//% 는 나머지를 구하는것인데,
// 30시간을 24로 나누면 (30/24) 1day 가 나오고
// 30시간을 24의 나머지로 구하면 (30%24) 6 hour가 나오게된다.

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

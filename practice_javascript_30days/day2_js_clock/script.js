const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const timeNumber = document.querySelector("h1");

function setData() {
  //console.log("test");
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  //console.log(seconds);

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  timeNumber.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${
    mins < 10 ? `0${mins}` : mins
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

setInterval(setData, 1000);

/* 날짜와 년도도 추가해보자.
function getCurrentDate(){
  var week = new Array('일', '월', '화', '수', '목', '금', '토');
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var day = today.getDate();
  var dayName = week[today.getDay()];
  
  console.log("현재 날짜는 %d-%d-%d %s요일 입니다.", year, month, day, dayName);
}*/

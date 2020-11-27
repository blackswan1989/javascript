const now = new Date();
const firstDay = new Date("2019-12-01");

const toNow = now.getTime(24 * 60 * 60 * 1000);
const toFirst = firstDay.getTime(24 * 60 * 60 * 1000);
const PassedDay = toNow - toFirst;

document.querySelector("#accent").innerText = `${Math.round(
  PassedDay / (24 * 60 * 60 * 1000)
)}일`;

calcDate(730);
calcDate(1000);
calcDate(1500);
calcDate(2000);

function calcDate(days) {
  const future = toFirst + days * (24 * 60 * 60 * 1000);
  const someday = new Date(future);
  const year = someday.getFullYear();
  const month = someday.getMonth() + 1;
  const date = someday.getDate();
  document.querySelector(
    "#date" + days
  ).innerText = `${year}년 ${month}월 ${date}일`;
}

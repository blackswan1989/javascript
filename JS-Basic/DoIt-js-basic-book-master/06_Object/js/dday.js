// 1) 오늘 날짜 정보를 Date 객체의 인스턴트 now 객체로 만든다.
const now = new Date();

// 2) 처음 만난 날짜의 정보를 firstDay 객체로 만들어준다.
const firstDay = new Date("2019-12-04");

// 3) 두 날짜 사이에 흐른 날짜를 계산하기 위해 날짜 정보를 가져오는 getTime()함수를 사용. 즉 오늘 날짜의 값과 처음 만난 날의 값을 계산한 후 둘 사이의 차이값을 구하는 것이다.
const toNow = now.getTime(); // 오늘 날짜를 밀리초로
const toFirst = firstDay.getTime(); // 처음 만난 날을 밀리초로
const passedTime = toNow - toFirst; // 처음 만난 날과 오늘 사이의 시간 차이

// 4) 밀리초를 날짜수로 표시 필요 (1일 = 24시간 * 60분 * 60초 * 1000밀리초)
const passedDay = Math.round(passedTime / (24 * 60 * 60 * 1000)); // 나눈 값이 실수일 수도 있기 때문에 Math객채의 round()함수를 사용해서 결과값을 반올림한 후 passedDay변수에 저장한다.
// const day365 = now.setDate(getData() + 100);
document.querySelector("#accent").innerText = `${passedDay}일`;

// calcDate()함수를 만들고 ()에는 기념일을 계산할 값을 받는 매개변수 days를 입력한다.
function calcDate(days) {
  const future = toFirst + days * (24 * 60 * 60 * 1000); // 원하는 기념일을 밀리초로 변환해서 처음만난날에 더하고 future 변수에 저장해준다.
  const someday = new Date(future); // future 값을 사용해 새로운 Date객체를 만들어 someday변수에 저장시켜 준다.
  const year = someday.getFullYear(); // 연도, 월, 일 값을 가져와 각각의 변수에 저장시켜준다.
  const month = someday.getMonth() + 1; // 프로그래밍에서 1월 = 0이므로 +1을 해주어야 정상적인 month로 보인다.
  const date = someday.getDate();
  document.querySelector(
    "#date" + days
  ).innerText = `${year}년 ${month}월 ${date}일`;
}

calcDate(365); // 매개변수를 사용해 1년의 기념일을 계산해서 표시
calcDate(1000);
calcDate(2000);
calcDate(3000);

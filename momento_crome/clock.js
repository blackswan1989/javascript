const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();

//! 과정
//1)
//시계를 만들기 위해 getTime 함수를 입력하였고, window새로고침시 초 단위가 증가하는 것을 출력 확인.

//2)
//setInterval (fn, 1000)
//두 인자값을 갖는데 첫번째 인자로 실행할 함수를 넣고, 그 함수를 실행하고 싶은 시간 간격을 넣어준다. (다만, 단위는 1millisecond이다. = 1000ms = 1초)
//이 명령어를 통해 매 초마다 시계를 초단위로 업데이트 시켜 줄 수 있다.

//3)
//초 단위에서 1~10까지 구간은 01이 아닌 1,2,3.. 이런식으로 표시되는 것을 원치 않으므로 1~10구간은 앞에 '0'을 붙여주었다.

//* ${seconds < 10 ? `0${seconds}` : seconds}` 구조를 구체적으로 해석하면
//  ${seconds가 10보다 <작으면 ?(?는 if처럼 작동), ``반환해준다. 0을 포함한 ${seconds}를, :그렇지않으면(else처럼 작동), seconds를 그대로 반환}(여기서 반환은 hours부터 전체``지정되어있는것으로)한다.
// "?"는 if처럼 작동하는데 앞의 seconds가 10보다 작으면 ture값이 되므로 `0${seconds}` 값을 반환해 준다. 반면 flase가 되면 그 뒤의 : seconds 를 반환해준다.

/*
! practice
clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
*/

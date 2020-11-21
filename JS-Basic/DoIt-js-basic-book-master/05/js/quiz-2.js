//? prompt창에서 두 숫자를 입력받은 후 그 값을 넘겨주면 두 수자 크기를 비교해 더 큰숫자를 알림창에 표시하는 함수를 작성하고 실행하세요.

const num1 = parseInt(prompt("비교할 첫 번째 숫자 : "));
const num2 = parseInt(prompt("비교할 두 번째 숫자 : "));

function compare() {
  if (num1 == num2) {
    alert(
      `입력한 첫번째 숫자 "${num1}"(와)과 두번째 입력한 숫자 "${num2}" 는 같습니다.`
    );
  } else if (num1 > num2) {
    alert(
      `입력한 첫번째 숫자 "${num1}"(이)가 두번째 입력한 숫자 "${num2}" 보다 "${
        num1 - num2
      }" 만큼 큽니다.`
    );
  } else {
    alert(
      `입력한 첫번째 숫자 "${num2}"(이)가 두번째 입력한 숫자 "${num1}" 보다 "${
        num2 - num1
      }" 만큼 큽니다.`
    );
  }
}

compare();

// prompt창에 입력 받는 숫자를 각각 num1, num2 변수에 저장하고 if문을 통해 num1, num2 크기를 비교하여 alert를 다르게 적어 주었다. 같은 숫자를 입력했을 경우도 추가해주었다.

/*
  * parseInt 함수는 괄호 안의 값을 정수형 숫자로 변환합니다.
  var num1 = parseInt(prompt("비교할 첫 번째 숫자 : "));
  var num2 = parseInt(prompt("비교할 두 번째 숫자 : "));

  compareTwo(num1, num2);

  function compareTwo(x, y) {
    if (x == y) alert(x + "와(과) " + y + "는 같습니다.");
    else if (x > y) alert( x + "(이)가 " + y + "보다 큽니다.");
    else alert(y + "(이)가 " + x + "보다 큽니다.");
  }
*/

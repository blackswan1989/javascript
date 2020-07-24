// TODO # 1.10 ~ javacript 문법 //

// ex. 개인정보를 저장한다고 할 때 아래처럼 입력 후,
// 콘솔로그로 "이름"을 찾으려면 순서를 기억해야하기 때문에 효율적이지 않다.
/* 
  * const janeInfo = ["Jane", "25", true, "Seoul"];

  * console.log(janeInfo[0]);
  ! output = Jane
*/

// 따라서 이런 경우에는 Array대신 Object를 사용해준다. object는 "{}"을 사용한다.
// object는 실제 객체를 만드는 것으로 label을 내가 저장하고 싶은 data에 줄 수 있다.
// array처럼 어떤 값들을 리스트로 나열하는 대신 아래처럼 할 수 있다.
const janeInfo = {
  name: "Jane",
  age: 33,
  gender: "female",
  isCool: true,
};
console.log(janeInfo.gender);

janeInfo.gender = "male";
console.log(janeInfo.gender);

// 위처럼 작성하면 name, age등은 텍스트가 아닌 '함수'가 된다.
// 또 const의 값을 바꿀 수 있게 된다. 처음 작성된 콘솔 값은 female로 출력 되지만
// 그 아래 janeInfo.gender값을 "male"로 주었더니 처음과 달리 gender가 male로 출력된다.
// 하지만 janeInfo 자체를 바꿀수는 없다.

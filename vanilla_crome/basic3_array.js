// TODO # 1.9 ~ javacript 문법 //

// js는 camel case방식(낙타)으로 작성해야한다.
// 변수명을 언제나 소문자로 시작하고, 중간에 스페이스가 필요하면
// 스페이스 대신에 대문자를 써주고 다음 단어를 사용한다.
// ex)loveMyLife
// 다른 기호(. / , *) 등은 사용해서는 안 된다.

//? Array : 여러 string들을 하나로 묶는 함수.

// 아래처럼 일일히 입력하는것은 비효율적이다.

const monday = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";

console.log(monday, tue, wed, thu, fri);
// ! output = Mon Tue Wed Thu Fri

// 따라서 array "[]"를 사용해준다.

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", something];

console.log(daysOfWeek);

// 또 자유롭게 넣고 싶은 것을 넣을 수 있다.
const something = "something";

// array의 규칙 : dayOfWeek옆에 "[2]"를 작성하면 3번째의 요일(Wed)을 알려준다.
// 2를 썼음에도 3번째를 알려주는 이유는 컴퓨터는 0부터 숫자를 세기 때문이다.(첫번째:0, 두번째:1, 세번째:2 ...)
console.log(daysOfWeek[2]);

// ! output = [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'something' ]  Wed

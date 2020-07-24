// TODO # 2.1 ~ javacript Practice //

//
//

//! ========== 백쿼터(` `)의 사용법. 더이상 + 또는 ,를 무분별하게 사용하지 않아도 된다. ==========
//1)
function sayHello(name, age) {
  console.log(`Hello ${name} you are ${age} years old`);
}

sayHello("Jane", 25);
// output = Hello Jane you are 25 years old

//
//
//! ========== return의 사용법 ==========
//2)
function sayHello(name, age) {
  console.log(`Hello ${name} you are ${age} years old`);
}

const greetJane = sayHello("Jane", 25);

console.log(greetJane);
// greetJane은 sayHello 함수의 return값과 같은 것이다.
// 따라서 Hello Jane you are 25 years old로 정상적으로 출력되지만
// console.log(greetJane);의 출력값은 undefined(정의되지 않은 상태)가 된다.
// 따라서 뭔가를 '반환'할 필요가 있다.

//3)
function sayHello(name, age) {
  return `Hello ${name} you are ${age} years old`;
}

const greetJane = sayHello("Jane", 25);

console.log(greetJane);
// function의 console.log대신 return으로 바꿔주면
// output = Hello Jane you are 25 years old 로 출력되며 하나의 console.log를 갖게 된다.
// 왜냐하면 sayHello 함수는 어떤 값을 반환 하지만 console.log시켜주지는 않기 때문이다.(즉 콘솔로그화 시켜주지 X)
// 따라서 console.log(greetJane);값이 없으면 아무것도 출력되지 않는다.

//* console.log 는 객체이다 (객체 : 작용의 대상이 되는 쪽. 동사의 행위가 미치는 대상. 의사나 행위가 미치는 목적물. )

//
//
//! ========= math object(객체) 만들기 ==========
//1)
const calculator = {
  plus: function (a, b) {
    return a + b;
  },
};

//*          console.log(greetJane);
const plus = calculator.plus(5, 5);
console.log(plus);
// output = 10
// console.log(greetJane);과 calculator.plus(5, 5); 구조가 매우 비슷하다는 것을 알 수 있다.
// console과 calculator 두개 모두 객체이자 log()인자를 가지는 함수이고, plus()도 2개의 인자를 가지는 함수이다.

//? 결론 : 함수와 객체를 알고 둘다 섞어 쓸 수 있어야 하며, 인자들을 알아야 한다.

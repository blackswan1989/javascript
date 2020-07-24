// TODO # 1.6 ~ javacript 문법 //

/* 
? 변수를 초기화하거나 생성할 때에는 let을 사용해야 한다. 
? let을 사용하지 않으면 이미 초기화하고 사용하는 것처럼 작동한다.
  * let a = 221;
  * let b = a - 5;
  * a = 4;  // ? 여기서는 let을 써줄필요가 없다. 단지 업데이트 한 것이기 때문이다. //
  * console.log(b, a);
  ! output = 216, 4


? constant는 '상수'로 이것은 변하지 않는다. 즉 let은 a값을 업데이트해주면 원래 값이 변하게되지만 const는 변하지 않는다.
? 그러므로 let을 사용 할 필요가 있을 때 까지 처음 사용자에게는 const를 사용 할 것을 권장한다.
  * const a = 221;
  * const b = a - 5;
  * console.log(b, a);
  ! output = 216, 221

 
? var도 let처럼 값을 변하게 할 수 있다. 다만 var는 const나 let이 없을 때 주로 사용했었던 코드이다.
  * var a = 221;
  * var b = a - 5;
  * a = 4;
  * console.log(b, a);
  ! output = 216, 4

*/

// TODO # 1.10 ~ javacript 문법 //

//? ## Array와 Object 비교 및 데이터 정렬 방법 ##
//?  1)DB에서 가져온 리스트 데이터라면 array를 사용한다.
//?  2)데이터를 합쳐서 만들어야 한다면 object를 사용한다.
//?  3)object안에 array를, 또는 array안에 object를 넣을 수 있다.

const janeInfo = {
  name: "Jane",
  age: 33,
  gender: "female",
  isCool: true,
  favMovies: ["Atomic Blonde", "LOTR", "Oldboy"], //! favMovies Object안에 array사용
  favFood: [
    { name: "Kimchi", fatty: false }, //! favFood object안에 array가 있고 또 그 안에 object가 있다.
    { name: "Cheese Burger", fatty: true },
  ],
};
console.log(janeInfo);
/*
! output =
  name: 'Jane',
  age: 33,
  gender: 'female',
  isCool: true,
  favMovies: [ 'Atomic Blond', 'LOTR', 'Oldboy' ],
  favFood: [
    { name: 'Kimchi', fatty: false },
    { name: 'Cheese Burger', fatty: true }
  ]
} */
console.log(janeInfo.favFood[0].fatty);
//! output = false

console.log(janeInfo.favFood[1].fatty);
//! output = true

console.log(janeInfo.favFood[0].name);
//! output = Kimchi

console.log(janeInfo.favMovies[0]);
//! output = Atomic Blonde

console.log(janeInfo.isCool);
//! output = true

console.log(janeInfo.age);
//! output = 33

//
//* < 자바스크립트 문법 주의점 >
//*  1) ,(콤마)를 빼먹지말고 제대로 쓰자.
//*  2) ""를 string/텍스트 앞뒤에 잘 써주자.
//*  3) ,(콤마)나 ""를 제대로 작성해서 글자색이 제대로 변하는지 확인하는 습관을 들이자.
//*  4) 오류메세지를 읽을 줄 알아야 문제를 해결하기 쉽다.
//*  5) 숫자는 ""없이 사용 가능??

# 7. 배열을 쉽게 다루는 Array 객체

## 07-1 Array 객체란?

### 1) Array 객체로 배열 만들기

```
const my Array = new Array() //Array 객체의 인스턴스 생성

const numbers = ["one", "two", "three", "four", "five"]; // 리터럴을 사용한 배열
const numbers = new Array("one", "two", "three", "four", "five"); // Array 객체를 사용한 배열

> numbers.length
< 5
```

### 2) 배열에서 for문 사용하기

```
> for (let = i; i < numbers.length; i++) {
  console.log(numbers[i])
  }

< "one", "two", "three", "four", "five"

```

## 07-2 Array 객체의 함수 알아보기

### 1) 둘 이상의 배열을 연결하는 concat() 함수

concat() 함수는 기존의 배열에 또 다른 배열이나 값을 합쳐서 새로운 배열을 만드는 함수이다.

```
const number = ["one", "two", "three", "four", "five"];
const english = ["A", "B", "C", "D", "E"];

> number.concat(english); // number배열에 english 배열 연결
< (10) ["one", "two", "three", "four", "five", "A", "B", "C", "D", "E"]
```

- concat() 함수를 사용할때 배열 순서를 바꾸면 연결 순서가 달라진다.
  ex) english.concat(number)

- concat() 함수는 새로운 배열을 만들기 때문에 기존의 배열에는 영향을 주지 않는다.

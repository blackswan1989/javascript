## 1. "Use strict";

- added in ES5.
- use this for Vanilla JS.

## 2. Variable

- var : don't ever use this
- hoisting : move declaration from bottom to top (어디에 선언했는지와 상관없이 항상 제일 위로 선언을 끌어올려주는 것.)
- let : added in ES6 (Appeared to compensate for the shortcomings of var)
- "let" is Mutable type

## 3. Contants

favor immutable data type always for a few reasons :

- security
- thread safety
- reduce human mistakes
- "const" is Immutable type

## 4. Variable types

- Primitive, Single item
  - number (숫자)
  - string (문자열)
  - boolean (true / false)
  - null (empty value)
  - undefiend (선언은 되었지만 할당 된 값은 없는 상태)
  - symbol (create unique identifiers for objects : 객체에 대한 고유 식별자 생성)
- Object, Box container
- Function, First-class function

https://www.youtube.com/watch?v=OCCpGh4ujb8

---

## JSON (JavaScript Object Notation)

1. Object to JSON

   - stringify(obj)
   - let json = JSON.stringify(true);
   - console.log(json); // true
   - json = JSON.stringify(['apple', 'banana']);
   - console.log(json) // ["apple", "banana"];

2. JSON to Object
   - parse(json)

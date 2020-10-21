"use strict";
// Object-oriented programing
// Class: template
// Object: intance of a class
// Javascript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

//NOTE 1.Class declarations 클래스 선언
class Person {
  //constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  //methods
  speak() {
    console.log(`${this.name}(${this.age}): hello!`)
  }
}

const jane = new Person("jane", 30);
console.log(jane.name);
console.log(jane.age);
jane.speak();

//Output = jane(30): hello!




//NOTE 2.Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age; //'age'로만 입력하면 setter를 계속 호출하게되므로 에러가뜬다. 따라서 getter와 setter에 쓰이는 변수를 조금 다르게 기호등을 붙여준다.
  }

  set age(value) {
    // if (value < 0) { throw Error('age can not be negative')};
    this._age = value < 0 ? 0 : value; // 숫자 '0'보다 이하면 0을 출력하고 아니면 value를 출력하도록 함.
  }
}

const user1 = new User("Monica", "Job", -1);
console.log(user1.age);

//Output = 0



//NOTE 3.Fields (public, private)

class Experiment {
  publicField = 2; //외부에서 접근 가능
  #privateField = 0; //클래스 내부에서만 접근 가능
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField)

//Output = 2 , undefined



//NOTE 4.Static properties and methods

class Article {
  static publisher = "Dream Cording";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher()

//Output = Dream Cording, Dream Cording



//NOTE 5.Inheritance 상속 
//a way for one class th extend another class | 한 클래스가 다른 클래스를 확장하는 방법 "extends"

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing "${this.color}" color!`);
  }

  getArea() {
    return this.width * this.height
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  //삼각형만 위(부모)에 정의된 것과 다른 것을 새롭게 정의하여 사용 가능.
  draw() {
    super.draw() //super를 이용하면 부모에 정의된것도 동시에 사용 가능.
    console.log("🔺")
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

//Output = drawing "blue" color!, 400
//Output = drawing "red" color! , 🔺, 200



//NOTE 6.Class checking: instanceOf
//instanceof 왼쪽의 object가 오른쪽의 class의 instance인지 Boolean값으로 출력해준다.
console.log(rectangle instanceof Rectangle); //true
console.log(triangle instanceof Rectangle); //false
console.log(triangle instanceof Triangle); //true
console.log(triangle instanceof Shape); //true
console.log(triangle instanceof Object); //true



//URL | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
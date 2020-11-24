// 객체 Book 정의
function Book(title, author, volume, price) {
  this.title = title;
  this.author = author;
  this.volume = volume;
  this.price = price;
}

// 정의한 Book 객체의 Instance 생성
// Instance를 만들 때에는 객체를 사용한 매게변수에 넣을 값도 함께 지정해야 한다.
const javascript = new Book("JS BASIC", "kate", "430p", "28,000");
document.write(`<h3>title: ${javascript.title}</h3>`);
document.write(`<h3>author: ${javascript.author}</h3>`);
document.write(`<h3>volume: ${javascript.volume}</h3>`);
document.write(`<h3>price: ${javascript.price}</h3>`);
console.log(javascript); // 콘솔도 확인해보기

// 새로운 Instance 추가
const youtube = new Book("youtube inside", "GJ", "368p", "26,000");
const python = new Book("Python Basic", "HJ", "352p", "18,000");

// '배열'을 통해 여러 Instance 책 정보를 한번에 표시하는 소스 작성
const bookList = [javascript, youtube, python];
document.write(`<h2> # for문으로 Book List 한번에 출력하기 # </h2>`);
for (let i = 0; i < bookList.length; i++) {
  document.write(`<p>BookList title: ${bookList[i].title}</p>`);
  document.write(`<p>BookList author: ${bookList[i].author}</p>`);
  document.write(`<p>BookList price: ${bookList[i].price}</p>`);
  document.write(`<br>`);
}
console.log(bookList); // 각각의 instance들의 정보가 출력된다.

// 객체를 사용하면 이렇게 하나의 변수에 여러 정보를 묶어 관리할 수 있고, 원하는 정보만 골라서 활용할 수도 있다.

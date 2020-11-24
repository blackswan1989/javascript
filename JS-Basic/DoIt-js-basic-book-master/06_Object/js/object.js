const toyRobot = {
  // toyRobot 객체를 선언한 후 속성(property)과 함수(method) 정의
  productId: "123-12",
  name: "Robot",
  price: "25,000",
  madeIn: "Korea",
  quantity: 10,
  showStock: function () {
    // showStock() 함수 정의
    document.querySelector(
      "#displayQuantity"
    ).innerHTML = `${this.name} 제품은 ${this.quantity}개 남아있습니다.`;
  },
  showPrice: function () {
    document.querySelector(
      "#displayPrice"
    ).innerHTML = `ID ${this.productId}제품의 가격은 ${this.price}이며 ${this.madeIn} 에서 만들어졌습니다.`;
  },
};

toyRobot.showStock(); // toyRobot 객체의 showStock() method 실행
toyRobot.showPrice();

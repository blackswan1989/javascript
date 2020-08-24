const displayText = document.querySelector(".displayText");

let num = [];
let basket = [];

let plusString = "";
let all = 0;
let firstNum = 0;
let i = 0;
let k = 0;
let j = 1;
let d = 0;

function addNum(value) {
  if (d === 0) {
    if (displayText.value === "0") {
      displayText.value = "";
      displayText.value = displayText.value + value;
      changeInt(value);
      firstNum = all;
    } else {
      displayText.value = displayText.value + value;
      changeInt(value);
      firstNum = all;
    }
  } else {
    displayText.value = value;
    changeInt(value);
  }

  if (basket[2] === firstNum) {
    equals();
  }
}

function changeInt(value) {
  num.push(value);
  plusString = plusString + String(num[i]);
  all = parseInt(plusString);
  i++;
  basket[k] = all;
}

function addRule(value) {
  basket.push(value);
  i = 0;
  num = [];
  plusString = "";
  k = k + 2;
  j = j + 2;
  d = 1;
}

function equals() {
  let prRule = 0;
  let notPrRule = 0;

  for (let n = 0; n < basket.length; n++) {
    if (basket[n] === "*" || basket[n] === "/") {
      prRule++;
    } else if (basket[n] === "+" || basket[n] === "-") {
      notPrRule++;
    }
  }
  for (let m = 0; m < prRule; m++) {
    for (let u = 1; u < basket.length; u += 2) {
      if (basket[u] === "*" || basket[u] === "/") {
        if (basket[u] === "*") {
          basket[u - 1] = basket[u - 1] * basket[u + 1];
          basket[u] = "x";
          basket[u + 1] = "x";
          basket.splice(u, 2);
          k = u - 1;
        } else {
          basket[u - 1] = basket[u - 1] / basket[u + 1];
          basket[u] = "x";
          basket[u + 1] = "x";
          basket.splice(u, 2);
          k = u - 1;
        }
      }
    }
  }

  for (let b = 0; b < notPrRule; b++) {
    for (let u = 1; u < basket.length; u += 2) {
      if (basket[u] === "+" || basket[u] === "-") {
        if (basket[u] === "+") {
          basket[u - 1] = basket[u - 1] + basket[u + 1];
          basket[u] = "x";
          basket[u + 1] = "x";
          basket.splice(u, 2);
          k = u - 1;
        } else {
          basket[u - 1] = basket[u - 1] - basket[u + 1];
          basket[u] = "x";
          basket[u + 1] = "x";
          basket.splice(u, 2);
          k = u - 1;
        }
      }
    }
  }
  j = 1;
  displayText.value = basket[0];
}

function reset() {
  i = 0;
  k = 0;
  j = 1;
  all = 0;
  plusString = "";
  firstNum = 0;
  num = [];
  basket = [];
  displayText.value = "0";
  d = 0;
}

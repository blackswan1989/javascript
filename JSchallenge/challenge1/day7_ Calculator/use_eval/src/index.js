// Selectors
const decimal = document.getElementById("decimal");
const clear = document.getElementById("clear");
// Selects the h1 tag that holds the input and result
const displayValElement = document.getElementById("display__numbers");
// Selects the 10 digits (0-9)
const btnNumbers = document.getElementsByClassName("btn--number");
// Selects the four operators (add/subtract/divide/multiply) and also the equals operator
const btnOperators = document.getElementsByClassName("btn--operator");

// Value that is being shown. The default value is 0. The eval() method will take a string and run it. Our array will hold the buttons we are clicking, and we will later convert it to a string.
var displayVal = "0";
var pendingVal;
var evalStringArray = [];

// Updating the display field. If the value is currently equal to 0, we will reset the value so that our input does not start with a 0.
updateDisplayVal = (e) => {
  var btnText = e.target.innerText;
  if (displayVal === "0") {
    displayVal = "";
  }

  // Append the content of the button we clicked to our displayVal variable and display it
  displayVal += btnText;
  displayValElement.innerText = displayVal;
};

// Perform the mathematical operations
performOperation = (e) => {
  var operator = e.target.innerText;

  switch (operator) {
    case "+":
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("+");
      break;
    case "-":
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("-");
      break;
    case "×":
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("*");
      break;
    case "÷":
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("/");
      break;
    case "=":
      evalStringArray.push(displayVal);
      var evaluation = eval(evalStringArray.join(" "));
      // convert datatype from number to string
      displayVal = evaluation + "";
      console.log(typeof displayVal);
      displayValElement.innerText = displayVal;
      evalStringArray = []; // clear the array
      break;
    default:
      break;
  }
};

// Event listeners for the number and operator buttons
for (let i = 0; i < btnNumbers.length; i++) {
  btnNumbers[i].addEventListener("click", updateDisplayVal);
}

for (let i = 0; i < btnOperators.length; i++) {
  btnOperators[i].addEventListener("click", performOperation);
}

// On clicking the clear button, all values and the display are being reset
clear.onclick = () => {
  displayVal = "0";
  pendingVal = undefined;
  evalStringArray = [];
  displayValElement.innerHTML = displayVal;
};

// Not allowing two decimal points in input
decimal.onclick = () => {
  if (!displayVal.includes(".")) {
    displayVal += ".";
  }
  displayValElement.innerText = displayVal;
};

/* serch | How to code a calculator in javascript without eval

https://stackoverflow.com/questions/32292231/how-to-code-a-calculator-in-javascript-without-eval

eval() MDN
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/eval

JavaScript를 사용하여 계산기를 만드는 방법 (JS 코드 100 줄 이하!)
https://medium.com/@wbl.pauline/how-to-build-a-calculator-using-javascript-no-more-than-100-lines-of-js-code-b9bd087a14e8

자바스크립트로 사칙연산되는 계산기 만들기(eval사용X)
https://chooi9522.tistory.com/m/15?category=834964
*/

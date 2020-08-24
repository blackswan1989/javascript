// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

class Calculator {
  constructor(previousResult, currnetResult) {
    this.previousResult = previousResult;
    this.currnetResult = currnetResult;
    this.clear();
  }
  clear() {
    this.previous = "";
    this.currnet = "";
    this.operation = undefined;
  }
}

const numberBtn = document.querySelectorAll(".js-intBtn");
const operationBtn = document.querySelectorAll(".js-operation");
const clear = document.querySelector(".js-clearAll");
const deleted = document.querySelector(".js-delete");
const equal = document.querySelector(".js-equal");
const previousResult = document.querySelector(".previousResult");
const currnetResult = document.querySelector(".currentResult");

const calculator = new Calculator(previousResult, currnetResult);

function clearAll() {
  currnetResult.innerText = "";
  previousResult.innerText = "";
}

function deletedOne() {
  currnetResult.innerText = currnetResult.innerText.toString().slice(0, -1);
}

function appendNum(number) {
  if (number === "." && currnetResult.innerText.includes(".")) return;
  currnetResult.innerText =
    currnetResult.innerText.toString() + number.toString();
  showResult(currnetResult.innerText);
}

function chooseOperator(operation) {
  if (currnetResult.innerText === "") return;
  if (previousResult.innerText !== "") {
    compute();
  }
  previousResult.innerText = currnetResult.innerText + operation;
  currnetResult.innerText = "";
  calculator.operation = operation;
}

function compute() {
  let computation;
  const prev = parseFloat(previousResult.innerText);
  const curr = parseFloat(currnetResult.innerText);
  if (isNaN(prev) || isNaN(curr)) return;
  switch (calculator.operation) {
    case "+":
      computation = prev + curr;
      break;
    case "-":
      computation = prev - curr;
      break;
    case "×":
      computation = prev * curr;
      break;
    case "÷":
      computation = prev / curr;
      break;
    default:
      return;
  }
  currnetResult.innerText = computation;
  calculator.operation = undefined;
  previousResult.innerText = "";
  showResult(currnetResult.innerText);
}

function showResult(text) {
  currnetResult.innerText = text;
}

function handleClickOperation(event) {
  event.preventDefault();
  const btn = event.target.innerText;
  chooseOperator(btn);
}

function handleClick(event) {
  event.preventDefault();
  const btn = event.target.innerText;
  appendNum(btn);
}

function init() {
  numberBtn.forEach((button) => {
    button.addEventListener("click", handleClick);
  });
  operationBtn.forEach((button) => {
    button.addEventListener("click", handleClickOperation);
  });

  clear.addEventListener("click", clearAll);

  deleted.addEventListener("click", deletedOne);

  equal.addEventListener("click", (button) => {
    compute();
  });
}

init();

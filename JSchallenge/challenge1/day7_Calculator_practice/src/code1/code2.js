(function evaluate(
  require,
  module,
  exports,
  process,
  setImmediate,
  global,
  __dirname,
  __filename,
  $csbImport
) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  var _classCallCheck2 = _interopRequireDefault(
    require("@babel/runtime/helpers/classCallCheck")
  );

  var _createClass2 = _interopRequireDefault(
    require("@babel/runtime/helpers/createClass")
  );

  require("./styles.css");

  // <⚠️ DONT DELETE THIS ⚠️>
  // <⚠️ /DONT DELETE THIS ⚠️>
  var Calculator =
    /*#__PURE__*/
    (function () {
      function Calculator(previousResult, currnetResult) {
        (0, _classCallCheck2["default"])(this, Calculator);
        this.previousResult = previousResult;
        this.currnetResult = currnetResult;
        this.clear();
      }

      (0, _createClass2["default"])(Calculator, [
        {
          key: "clear",
          value: function clear() {
            this.previous = "";
            this.currnet = "";
            this.operation = undefined;
          },
        },
      ]);
      return Calculator;
    })();

  var numberBtn = document.querySelectorAll(".js-intBtn");
  var operationBtn = document.querySelectorAll(".js-operation");
  var clear = document.querySelector(".js-clearAll");
  var deleted = document.querySelector(".js-delete");
  var equal = document.querySelector(".js-equal");
  var previousResult = document.querySelector(".previousResult");
  var currnetResult = document.querySelector(".currentResult");
  var calculator = new Calculator(previousResult, currnetResult);

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
    var computation;
    var prev = parseFloat(previousResult.innerText);
    var curr = parseFloat(currnetResult.innerText);
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
    var btn = event.target.innerText;
    chooseOperator(btn);
  }

  function handleClick(event) {
    event.preventDefault();
    var btn = event.target.innerText;
    appendNum(btn);
  }

  function init() {
    numberBtn.forEach(function (button) {
      button.addEventListener("click", handleClick);
    });
    operationBtn.forEach(function (button) {
      button.addEventListener("click", handleClickOperation);
    });
    clear.addEventListener("click", clearAll);
    deleted.addEventListener("click", deletedOne);
    equal.addEventListener("click", function (button) {
      compute();
    });
  }

  init();
});

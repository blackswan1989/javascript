const formRange = document.querySelector("#js-range"),
  h2 = formRange.querySelector("h2"),
  slider = formRange.querySelector("#slider"),
  getRandom = document.querySelector("#random"),
  submit = getRandom.querySelector("#handle"),
  inputNumber = getRandom.querySelector("#inputNum"),
  result = document.querySelector("#ans");

function handleRandom(event) {
  event.preventDefault();
  let randomNum = Math.random() * 200;
  randomNum = Math.floor(randomNum);
  result.innerHTML = `You Chose : ${inputNumber.value}, The Machine Chose : ${randomNum}`;
  if (parseInt(inputNumber.value) !== randomNum) {
    const point = document.createElement("h4");
    point.innerHTML = "You Lost!";
    result.appendChild(point);
  } else {
    const point = document.createElement("h4");
    point.innerHTML = "You Win!";
    result.appendChild(point);
  }
}

function handleRangebar() {
  h2.innerText = `Generate a number between 0 and ${slider.value}`;
}

function init() {
  slider.addEventListener("input", handleRangebar);
  getRandom.addEventListener("submit", handleRandom);
}
init();

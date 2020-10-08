const widthOutput = document.querySelector("#width")
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
let title = document.querySelector("h1")
let body = document.querySelectorAll("body")

title.style.color = "white"
document.body.style.background = colors[0]


function resizeBgColorHandler() {
  widthOutput.textContent = window.innerWidth;
  const width = window.innerWidth

  if (width <= 700) {
    document.body.style.background = colors[1]
  } else if (width <= 900) {
    document.body.style.background = colors[2]
  } else if (width <= 1100) {
    document.body.style.background = colors[3]
  } else {
    document.body.style.background = colors[4]
  }
}


function init() {
  window.addEventListener("resize", resizeBgColorHandler)
}

init()
const coverImage = document.querySelector("#cover");
coverImage.onclick = function () {
  alert("Click!");
};

const cover2Image = document.querySelector("#cover2");
cover2Image.onmouseover = function () {
  cover2Image.style.border = "5px black solid";
};

cover2Image.onmouseout = function () {
  cover2Image.style.border = "none";
};

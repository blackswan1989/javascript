// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const title = document.querySelector("h2");
// <⚠️ /DONT DELETE THIS ⚠️>

const superEventHandler = {
  mouseEnterHandler: function () {
    title.innerHTML = "The Mouse Is Here 🧲";
    title.style.color = colors[0];
  },
  mouseLeaveHandler: function () {
    title.innerHTML = "The Mouse Is Gone 🧻";
    title.style.color = colors[1];
  },
  mouseRightClickHandler: function () {
    title.innerHTML = "It was a right Click 📌";
    title.style.color = colors[4];
  },
  windowResizeHandler: function () {
    title.innerHTML = "You Just Resized 📲";
    title.style.color = colors[2];
  },
  mouseClickHandler: function () {
    title.innerHTML = "You Just Click on the Title 💡";
    title.style.color = colors[3];
  },
};

title.addEventListener("mouseenter", superEventHandler.mouseEnterHandler);
title.addEventListener("mouseleave", superEventHandler.mouseLeaveHandler);
window.addEventListener(
  "contextmenu",
  superEventHandler.mouseRightClickHandler
);
window.addEventListener("resize", superEventHandler.windowResizeHandler);
title.addEventListener("click", superEventHandler.mouseClickHandler);

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

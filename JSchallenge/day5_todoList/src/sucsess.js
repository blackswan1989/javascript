// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const taskForm = document.querySelector(".js-taskForm");
const taskInput = taskForm.querySelector("input");
const pendingList = document.querySelector(".js-pendingList");
const finishedList = document.querySelector(".js-finishedList");

const PENDING_LS = "pending";
const FINISHED_LS = "finished";

let pendingArray = [];
let finishedArray = [];
function sortPending() {
  let idx = 1;
  pendingArray.forEach(function (task) {
    task.id = idx++;
  });
  idx = 1;
  pendingList.childNodes.forEach(function (node) {
    node.id = idx++;
  });
}
function sortFinished() {
  let idx = 1;
  finishedArray.forEach(function (task) {
    task.id = idx++;
  });
  idx = 1;
  finishedList.childNodes.forEach(function (node) {
    node.id = idx++;
  });
}
function savePending() {
  localStorage.setItem(PENDING_LS, JSON.stringify(pendingArray));
}
function saveFinished() {
  localStorage.setItem(FINISHED_LS, JSON.stringify(finishedArray));
}
function deletePending(event) {
  const li = event.target.parentNode;
  console.log(li);
  pendingList.removeChild(li);
  pendingArray = pendingArray.filter(function (task) {
    return task.id !== parseInt(li.id);
  });
  console.log(pendingArray);
  savePending();
}
function deleteFinished(event) {
  const li = event.target.parentNode;
  finishedList.removeChild(li);
  finishedArray = finishedArray.filter(function (task) {
    return task.id !== parseInt(li.id);
  });
  saveFinished();
}
function deletePendingHandler(event) {
  deletePending(event);
}
function deleteFinishedHandler(event) {
  deleteFinished(event);
}
function penToFin(event) {
  deletePending(event);
  const li = event.target.parentNode;
  const text = li.childNodes[0].innerText;
  paintFinished(text);
}
function finToPen(event) {
  deleteFinished(event);
  const li = event.target.parentNode;
  const text = li.childNodes[0].innerText;
  paintPending(text);
}
function paintFinished(text) {
  sortFinished();
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const penBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = finishedArray.length + 1;
  delBtn.innerHTML = "❌";
  delBtn.addEventListener("click", deleteFinishedHandler);
  penBtn.innerHTML = "⏮";
  penBtn.addEventListener("click", finToPen);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(penBtn);
  li.id = newId;
  finishedList.appendChild(li);
  const taskObj = {
    text: text,
    id: newId,
  };
  finishedArray.push(taskObj);
  saveFinished();
}
function paintPending(text) {
  sortPending();
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const finBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = pendingArray.length + 1;
  delBtn.innerHTML = "❌";
  delBtn.addEventListener("click", deletePendingHandler);
  finBtn.innerHTML = "✅";
  finBtn.addEventListener("click", penToFin);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(finBtn);
  li.id = newId;
  pendingList.appendChild(li);
  const taskObj = {
    text: text,
    id: newId,
  };
  pendingArray.push(taskObj);
  savePending();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = taskInput.value;
  paintPending(currentValue);
  taskInput.value = "";
  //add pendingLIst;
}

function loadFinished() {
  const loadedFinished = localStorage.getItem(FINISHED_LS);
  if (loadedFinished !== null) {
    const parsedFinished = JSON.parse(loadedFinished);
    parsedFinished.forEach(function (task) {
      paintFinished(task.text);
    });
  }
}

function loadPending() {
  const loadedPending = localStorage.getItem(PENDING_LS);
  if (loadedPending !== null) {
    const parsedPending = JSON.parse(loadedPending);
    parsedPending.forEach(function (task) {
      paintPending(task.text);
    });
  }
}
function init() {
  loadPending();
  loadFinished();
  taskForm.addEventListener("submit", handleSubmit);
}

init();

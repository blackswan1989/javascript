function palySound(event) {
  console.log(event.keyCode);
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  //console.log(audio);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (!audio) return; // event대상이 아닌 키는 null값이 생기지 안도록.
  audio.currentTime = 0; // 키를 빠르게 반복해서 눌러도 사운드가 딜레이없이 재생되도록.
  audio.play();
  //console.log(key);
  key.classList.add("playing");
}

function removeTransition(event) {
  if (event.propertyName !== "transform") return; // 만약 transform이 아니면 skip되도록
  //console.log(event)
  //console.log(event.propertyName);
  //console.log(this); //=key
  this.classList.remove("playing"); // scale이벤트가 시작되었던 것이 transform시간이 끝나면 다시 사라지도록
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", palySound);

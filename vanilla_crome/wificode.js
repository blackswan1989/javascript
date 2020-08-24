//TODO #2.6 WIFI EVENT CODE

//? wifi가 켜지거나 꺼질때 콘솔창에 메세지를 띄워준다.

function handleOffline() {
  console.log("Bye Bye WIFI");
}

function handleOnline() {
  console.log("Welcome Back WIFI");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);

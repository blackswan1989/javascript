//TODO ## day4 | Using the boilerplate, make an app that saves my country selection. (상용구를 사용하여 국가 선택을 저장하는 앱을 만듭니다.) ##

// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

/*
아래 예제처럼 정말 강력한 선택자도 사용할 수 있습니다. 예제의 결과는 클래스가 "user-pan.el main"인 <div>(<div class="user-panel main">) 안의, 이름이 "login"인 <input> 중 첫 번째 요소입니다.

* var el = document.querySelector("div.user-panel.main input[name=login]");
*/

/*
var b = document.querySelector("button"); 

b.setAttribute("name", "helloButton");
b.setAttribute("disabled", "");
*/

function selectCountry() {
  const selectElement = document.querySelector(".setting-country");
  selectElement.addEventListener("change", (event) => {
    const result = document.querySelector(".result");
    result.textContent = `You live in ${event.target.value}!`;
    const currentCountry = event.target.value;
    localStorage.setItem("COUNTRY", currentCountry);
  });
  //복잡한 선택자 활용 및 option에 selected 특성을 활용
  const selected = localStorage.getItem("COUNTRY");
  const option = document.querySelector(`option[value="${selected}"]`);
  option.selected = true;
}

function init() {
  selectCountry();
}
init();

/* 힌트
const select = document.querySelector('select')

select.addEventListener('change', (e)=>{
const selected = e.target.value
localStorage.setItem('COUNTRY', selected)
})
*/

//! 힌트2 option[(value = "KOR")].selected = true
// "Load the saved selection on refresh." 힌트는 원하는 option이 selected가 true가 되면 default로 뜨게 된다.
//
//
//
//? ## day4 챌린지 조건 ##
// 1. Save the country selection to localStorage. (국가 선택을 localStorage에 저장하십시오.)
// 2. Load the saved selection on refresh. (새로 고침 할 때 저장된 선택지를 로드합니다.)

//? ## day4 챌린지 단서 ##
// 1. Don't forget to add 'values' to the options. (옵션에 '값'을 추가하는 것을 잊지 마십시오.)

// 2. You need to 'select' the option that has the same value as the localStorage. (localStorage와 동일한 값을 가진 옵션을 '선택'해야합니다.)

// 3. select 참조(https://developer.mozilla.org/ko/docs/Web/API/HTMLElement/change_event)

// 4. option 참조(https://developer.mozilla.org/ko/docs/Web/HTML/Element/option)

// 5. .querySelector() 참조(https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector) Check out the section: 좀 더 복잡한 선택자

/*
? 기타 참조 사이트
? https://dongsub-joung.github.io/2020/02/01/VanillaJS_challenge4.html
? https://im-developer.tistory.com/47
? https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
*/

/* 다음날 다른사람들 공개 코드 참조 
const select = document.querySelector("select");
const options = select.querySelectorAll("option");
const text = document.querySelector(".text");
function getLocalstorage(value) {
  const country = localStorage.getItem("country");
  options.forEach((option) => {
    if (option.value === country) {
      option.setAttribute("selected", "");
    } else {
      option.removeAttribute("selected", "");
    }
  });
  text.textContent = `You Are From ${country}`;
}
function setLocalstorage(changeValue) {
  localStorage.setItem("country", changeValue);
}
function handleOption(ev) {
  const changeValue = ev.target.value;
  setLocalstorage(changeValue);
  getLocalstorage();
}
select.addEventListener("change", handleOption);
function init() {
  getLocalstorage();
}*/

/* 다음날 다른사람들 공개 코드 참조 
const select = document.querySelector("select");
const COUNTRY_NAME = "Country";
function saveCounrty(){
    const changeValue = select.value;
    localStorage.setItem(COUNTRY_NAME , changeValue);
}
function loadCountry(){
    const loadedCountry = localStorage.getItem(COUNTRY_NAME);
    if(!!loadedCountry){
        select.value = loadedCountry;
    }
}
function init() {
    loadCountry();
    select.addEventListener("change", saveCounrty);
}
init();
*/

/*
function init() {
  새로고침해도 로컬스토리지에 저장된 나라를 디폴트 옵션으로서 가져오도록 selected 속성 셋팅
    loadCountry();
  새로 선택된 option을 로컬스토리지에 저장 혹은 기존 값 덮어쓰기
    select.addEventListener("change", changeSelected);
*/

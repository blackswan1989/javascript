const weather = document.querySelector(".js-weather");

// 사이트에서 Weather API 키 가져옴. https://home.openweathermap.org/api_keys
const API_KEY = "f2e9b29b46060b09dba2b412d6277738";

// coords를 선언해주는 이유 =  coords는 string으로 상수(constat) 안에 string을 저장하고 있다. 왜냐하면 이 string을 여러 곳에서 사용 할 것이기 때문에 이 작업을 수행하지 않으면 나중에 'cooords'와 'coords'를 작성하고 코드가 작동하지 않지만, 오류가 표시되지 않게 된다. 따라서 상수(constant) 안에 random string(임의의 문자열)을 넣는 것을 선호해야한다.
const COORDS = "coords"; //좌표 : coordinates

//4) weather API사이트에서 API call : url을 가져오며 함수 선언.
//4)-1 fetch라는 코드에 가져온 `url` 데이터를 백틱안에 넣어준다. (http://도 추가 필요.)
//4)-2 lat, lng는 위도 경도를 의미하며 가져온 url의 {lat}, {lon}, {your api key}부분들을 수정해준다.
//4)-* url = api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}
// 모두 수정해주면 API를 제공하는 쪽에서, 요청자의 API KEY를 통해 무리하게 많이 요청하는지 아닌지 알 수 있게된다. (무료로 제공해주는 만큼 서버에 무리가 갈 만큼 많이 사용하게 해주지는 않기 때문이다.)
// 확인은 검사-network 탭에서 가능하다. -> loadCoords함수에서 else값 입력 필요.
//5)-1 API network추가 후 날씨정보가 화씨로 되어있어 섭씨로 바꿔주기 위해 &units=metric 추가 입력.
//5)-2 fetch()뒤에 .then(function(){}사용 = fetch가 완료되고 데이터가 우리에게 완전히 들어왔을때 함수를 호출해준다.
function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      // console.log(response.json()); // 5)-3 콘솔에 Promise {<pending>} 호출되는데 이는 기다리고 있다는 뜻이다. js에서 뭔가가 끝나기를 기다리는 방법은 then을 한번 더 써주는 것이다.
      return response.json();
    })
    .then(function (json) {
      // console.log(json); // 5)-4 {coord: {…}, weather: Array(1), base: "stations", main: {…}, visibility: 10000, …} 이런 값이 확인 된다.
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature} @ ${place}`;
    });
}

//
//
//3)-3 위도, 경도를 localStorage에 저장되도록 설정해주었다. Application에서 확인 가능.
function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

//3)-2 .getCurrentPosition은 2개의 requirements가 있는데 첫번째는 좌표를 가져오는데 성고했을때를 처리하는 함수이다. navigator가 제대로 동작했을때 콘솔에 출력되는지 확인 후 const를 입력해주었다.
function handleGeoSucces(position) {
  // console.log(position); // output = GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1596087406158} 해당 내용을 상세보기를 클릭하자 위도, 경도 등의 자세한 정보가 확인되었고 이를 const로 작성해주었다.
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = { latitude, longitude };
  // 객체의 변수 이름과 객체의 key 이름을 같게 저장하였다.
  // 원래는 const coordsObj = { latitude : latitude, longitude:longitude }로 작성해야하지만 같으므로 위처럼 작성.
  saveCoords(coordsObj); //3)-3과 연동
  getWeather(latitude, longitude);
}

//3)-1 navigator가 동작하지 않으면 콘솔에 에러가 뜨도록 만들었다.
function handleGeoError() {
  console.log("Cant access Geo location");
}

//3) 날씨 기능을 위해 navigator API사용 (geo, geographic 지리, 지리학)
// navigator.을 입력하면 여러 api들을 볼 수 있다.
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

//
//2)
function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    //local storage에 아무것도없으면(좌표값이 없으면) getWeather함수가 실행되는데, 왜냐하면 askForCoords 함수가 실행되고 이 함수 안에서 정상적으로 위치정보를 가져오게 되면 handleGeoSuccess가 실행되는데 그 안에서 API가 실행되기 때문이다.
    askForCoords();
  } else {
    //5) 이미 좌표값을 가지고 있는 경우에 해당 되는 경우 실행된다.
    const parsedCoords = JSON.parse(loadedCoords);
    // console.log(parsedCoords); // getWeather 함수가 호출되는 것을 확인함.
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
    // 콘솔의 network탭에서 weather?lat=37...파일이 실행되고 있는것을 확인할수있다.
    // 위 파일을 클릭하면 오른쪽에 Headers라는 탭이 있는데 여기서 Request URL주소를 알아 낼 수 있다.
  }
}

//1)
function init() {
  loadCoords();
}
init();




import "./styles.css";

const main = document.querySelector("main");

const btnRecord = main.querySelector("#btn-record");
const iconRecord = btnRecord.querySelector("i");
const spanRecord = btnRecord.querySelector("span");

const recordStatus = main.querySelector("#record-status");

let startRecordTime = undefined;
let intervalCounter = undefined;

let streamObject;
let audioRecorder;

const upCounter = () => {
  const currentTime = new Date();
  const timeSpend = parseInt((currentTime - startRecordTime) / 1000);
  recordStatus.innerText = `Recording for ${timeSpend}`;
};

const handleAudioData = (event) => {
  const { data: audioFile } = event;
  const link = document.createElement("a");
  link.href = URL.createObjectURL(audioFile);
  link.download = "audio.webm";
  document.body.appendChild(link);
  link.click();
};

const handlerStopRecording = () => {
  audioRecorder.stop();

  console.log("Stop Recording");
  main.classList.remove("recoding");
  iconRecord.classList.remove("fa-square");
  iconRecord.classList.add("fa-circle");
  spanRecord.innerText = "start recording";
  btnRecord.removeEventListener("click", handlerStopRecording);
  btnRecord.addEventListener("click", handlerStartRecording);
  clearInterval(intervalCounter);
  startRecordTime = undefined;
  recordStatus.innerText = ``;
};

const startRecording = () => {
  audioRecorder = new MediaRecorder(streamObject, {
    mimeType: "audio/webm;codecs=opus"
  });
  audioRecorder.start();
  audioRecorder.addEventListener("dataavailable", handleAudioData);
  btnRecord.addEventListener("click", handlerStopRecording);

  console.log("Start Recording");
  main.classList.add("recoding");
  iconRecord.classList.remove("fa-circle");
  iconRecord.classList.add("fa-square");
  spanRecord.innerText = "stop recording";
  btnRecord.removeEventListener("click", handlerStartRecording);
  btnRecord.addEventListener("click", handlerStopRecording);
  startRecordTime = new Date();
  intervalCounter = setInterval(upCounter, 1000);
};

const handlerStartRecording = () => {
  try {
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: false
      })
      .then(
        (stream) => {
          streamObject = stream;
          startRecording();
        },
        (err) => console.log(err)
      );
  } catch (error) {
    console.log(error);
    btnRecord.innerText = "Can't record";
  } finally {
    btnRecord.removeEventListener("click", handlerStartRecording);
  }
};

const init = () => {
  btnRecord.addEventListener("click", handlerStartRecording);
};

init();

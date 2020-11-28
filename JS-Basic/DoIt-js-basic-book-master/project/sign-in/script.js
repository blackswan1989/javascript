"use strict";

const submit = document.querySelector(".submit__input");

const form = function () {
  const userName = document.querySelector("#userName").value;
  const userId = document.querySelector("#userId").value;
  const userPassword = document.querySelector("#userPassword").value;
  const userPasswordConfirm = document.querySelector("#userPassword2").value;
  const userBirth = document.querySelector("#userBirth").value;

  console.log(userName);
  console.log(userId);
  console.log(userPassword);
  console.log(userPasswordConfirm);
  console.log(userBirth);

  const checkSpecial = /[`~!@#$%^&*|\\\'\";:\/?]/gi;

  const nameCheck = function () {
    if (userName == null || userName == "") {
      document.querySelector(".messageName").innerHTML = "이름을 입력해주세요.";
      document.querySelector("#userName").focus();
    } else if (userName.search(/\s/) != -1) {
      document.querySelector(".messageName").innerHTML =
        "이름은 빈칸을 포함할 수 없습니다.";
      document.querySelector("#userName").focus();
    } else if (userName.length < 3 || userName.length > 20) {
      document.querySelector(".messageName").innerHTML =
        "이름은 3글자 이상 20글자 이하로 작성해주세요.";
      document.querySelector("#userName").focus();
    } else if (checkSpecial.test(userName)) {
      document.querySelector(".messageName").innerHTML =
        "이름에 특수문자는 사용할 수 없습니다.";
      document.querySelector("#userName").focus();
    } else {
      document.querySelector(".messageName").innerHTML = "";
    }
  };

  const idCheck = function () {
    if (userId == null || userId == "") {
      document.querySelector(".messageId").innerHTML = "아이디를 입력해주세요.";
      document.querySelector("#userId").focus();
    } else if (userId.search(/\s/) != -1) {
      document.querySelector(".messageId").innerHTML =
        "아이디는 빈칸을 포함할 수 없습니다.";
      document.querySelector("#userId").focus();
    } else if (userId.length < 5 || userId.length > 18) {
      document.querySelector(".messageId").innerHTML =
        "아이디는 5글자 이상 18글자 이하로 작성해주세요.";
      document.querySelector("#userId").focus();
    } else if (checkSpecial.test(userId)) {
      document.querySelector(".messageId").innerHTML =
        "이름에 특수문자는 사용할 수 없습니다.";
      document.querySelector("#userId").focus();
    } else {
      document.querySelector(".messageId").innerHTML = "";
    }
  };

  const passwordCheck = function () {
    if (userPassword == null || userPassword == "") {
      document.querySelector(".messagePassword1").innerHTML =
        "비밀번호를 입력해주세요.";
      document.querySelector("#userPassword").focus();
    } else if (userPassword.search(/\s/) != -1) {
      document.querySelector(".messagePassword1").innerHTML =
        "비밀번호는 빈칸을 포함할 수 없습니다.";
      document.querySelector("#userPassword").focus();
    } else if (userPassword.length < 6 || userPassword.length > 20) {
      document.querySelector(".messagePassword1").innerHTML =
        "비밀번호는 6글자 이상 20글자 이하로 작성해주세요.";
      document.querySelector("#userPassword").focus();
    } else {
      document.querySelector(".messagePassword1").innerHTML = "";
    }
  };

  const passwordConfirmCheck = function () {
    if (userPasswordConfirm == null || userPasswordConfirm == "") {
      document.querySelector(".messagePassword2").innerHTML =
        "비밀번호를 입력해주세요.";
      document.querySelector("#userPassword2").focus();
    } else if (userPasswordConfirm.search(/\s/) != -1) {
      document.querySelector(".messagePassword2").innerHTML =
        "비밀번호는 빈칸을 포함할 수 없습니다.";
      document.querySelector("#userPassword2").focus();
    } else if (
      userPasswordConfirm.length < 6 ||
      userPasswordConfirm.length > 20
    ) {
      document.querySelector(".messagePassword2").innerHTML =
        "비밀번호는 6글자 이상 20글자 이하로 작성해주세요.";
      document.querySelector("#userPassword2").focus();
    } else {
      document.querySelector(".messagePassword2").innerHTML = "";
    }
  };

  function passwordMatchCheck() {
    if (userPassword !== userPasswordConfirm) {
      document.querySelector(".messagePassword1").innerHTML =
        "비밀번호가 서로 일치하지 않습니다.";
      document.querySelector("#userPassword").value = "";
      document.querySelector(".messagePassword2").innerHTML =
        "비밀번호가 서로 일치하지 않습니다.";
      document.querySelector("#userPassword2").value = "";
      document.querySelector("#userPassword").focus();
    }
  }

  function agreeCheck() {
    var chkbox = document.querySelector("#agree");

    if (chkbox.checked) {
      document.querySelector(".messageCheckBox").innerHTML =
        "✅ 모든 약관에 동의하였습니다.";
    } else {
      document.querySelector(".messageCheckBox").innerHTML =
        "⛔️ 전체 약관에 동의해주세요.";
    }
  }

  function init() {
    nameCheck();
    idCheck();
    passwordCheck();
    passwordConfirmCheck();
    passwordMatchCheck();
    agreeCheck();
  }
  init();
};

submit.addEventListener("click", form);

//NOTE 참조한 사이트
//https://grace-go.tistory.com/66
//https://backstreet-programmer.tistory.com/53
//https://bookk.tistory.com/65 이름에 한글,영문,숫자만 허용되도록

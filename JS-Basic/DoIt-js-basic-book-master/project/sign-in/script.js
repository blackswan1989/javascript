"use strict";

$(document).ready(function () {
  //window.alert("jquery ready");
});

const submit = document.querySelector(".submit__input");
const agreeCheckBox = document.querySelector("#agree");

const form = function () {
  const userName = document.querySelector("#userName").value;
  const userId = document.querySelector("#userId").value;
  const userPassword = document.querySelector("#userPassword").value;
  const userPasswordConfirm = document.querySelector("#userPassword2").value;
  const userBirth = document.querySelector("#userBirth").value;

  const checkSpecial = /[`~!@#$%^&*|\\\'\";:\/?]/gi;

  const nameCheck = function () {
    const messageName = document.querySelector(".messageName");
    const userNameFucus = document.querySelector("#userName");
    if (userName == null || userName == "") {
      messageName.innerHTML = "이름을 입력해주세요.";
      userNameFucus.focus();
      return false; // false 값을 리턴해서 submit되지 않도록 ( true & false로 모든 제어 필요 )
    } else if (userName.search(/\s/) != -1) {
      messageName.innerHTML = "이름은 빈칸을 포함할 수 없습니다.";
      userNameFucus.focus();
      return false;
    } else if (userName.length < 3 || userName.length > 20) {
      messageName.innerHTML = "이름은 3글자 이상 20글자 이하로 작성해주세요.";
      userNameFucus.focus();
      return false;
    } else if (checkSpecial.test(userName)) {
      messageName.innerHTML = "이름에 특수문자는 사용할 수 없습니다.";
      userNameFucus.focus();
      return false;
    } else {
      messageName.innerHTML = "";
      return true; // true 값을 리턴해서 submit되도록
    }
  };

  const idCheck = function () {
    const messageId = document.querySelector(".messageId");
    const userIdFocus = document.querySelector("#userId");
    if (userId == null || userId == "") {
      messageId.innerHTML = "아이디를 입력해주세요.";
      userIdFocus.focus();
    } else if (userId.search(/\s/) != -1) {
      messageId.innerHTML = "아이디는 빈칸을 포함할 수 없습니다.";
      userIdFocus.focus();
    } else if (userId.length < 5 || userId.length > 18) {
      messageId.innerHTML = "아이디는 5글자 이상 18글자 이하로 작성해주세요.";
      userIdFocus.focus();
    } else if (checkSpecial.test(userId)) {
      messageId.innerHTML = "이름에 특수문자는 사용할 수 없습니다.";
      userIdFocus.focus();
    } else {
      messageId.innerHTML = "";
      return true;
    }
  };

  const messagePassword1 = document.querySelector(".messagePassword1");
  const messagePassword2 = document.querySelector(".messagePassword2");
  const userPasswordFocus = document.querySelector("#userPassword");
  const userPasswordFocus2 = document.querySelector("#userPassword2");

  const passwordCheck = function () {
    if (userPassword == null || userPassword == "") {
      messagePassword1.innerHTML = "비밀번호를 입력해주세요.";
      userPasswordFocus.focus();
      userPasswordFocus.classList.add("input_error");
      return false;
    } else if (userPassword.search(/\s/) != -1) {
      messagePassword1.innerHTML = "비밀번호는 빈칸을 포함할 수 없습니다.";
      userPasswordFocus.focus();
      userPasswordFocus.classList.add("input_error");
      return false;
    } else if (userPassword.length < 6 || userPassword.length > 20) {
      messagePassword1.innerHTML =
        "비밀번호는 6글자 이상 20글자 이하로 작성해주세요.";
      userPasswordFocus.focus();
      userPasswordFocus.classList.add("input_error");
      return false;
    } else {
      messagePassword1.innerHTML = "";
      userPasswordFocus.classList.remove("input_error");
      return true;
    }
  };

  const passwordConfirmCheck = function () {
    if (userPasswordConfirm == null || userPasswordConfirm == "") {
      messagePassword2.innerHTML = "비밀번호를 입력해주세요.";
      userPasswordFocus2.focus();
      return false;
    } else if (userPasswordConfirm.search(/\s/) != -1) {
      messagePassword2.innerHTML = "비밀번호는 빈칸을 포함할 수 없습니다.";
      userPasswordFocus2.focus();
      return false;
    } else if (
      userPasswordConfirm.length < 6 ||
      userPasswordConfirm.length > 20
    ) {
      messagePassword2.innerHTML =
        "비밀번호는 6글자 이상 20글자 이하로 작성해주세요.";
      userPasswordFocus2.focus();
      return false;
    } else if (userPassword !== userPasswordConfirm) {
      messagePassword1.innerHTML = "비밀번호가 서로 일치하지 않습니다.";
      userPasswordFocus.value = "";
      messagePassword2.innerHTML = "비밀번호가 서로 일치하지 않습니다.";
      userPasswordFocus2.value = "";
      userPasswordFocus.focus();
      return false;
    } else {
      messagePassword2.innerHTML = "";
      return true;
    }
  };

  const birthCheck = function () {
    if (userBirth == "") {
      document.querySelector(".messageBirth").innerHTML =
        "달력에서 생년월일을 선택해주세요.";
      return false;
    } else {
      document.querySelector(".messageBirth").innerHTML = "";
      return true;
    }
  };

  const agreeCheck = function () {
    if (agreeCheckBox.checked) {
      document.querySelector(".messageCheckBox").innerHTML =
        "✅ 모든 약관에 동의하였습니다.";
      return true;
    } else {
      document.querySelector(".messageCheckBox").innerHTML =
        "⛔️ 전체 약관에 동의해주세요.";
      return false;
    }
  };

  function init() {
    nameCheck();
    idCheck();
    passwordCheck();
    passwordConfirmCheck();
    birthCheck();
    agreeCheck();
  }
  init();
};

agreeCheckBox.addEventListener("click", () => {
  if (agreeCheckBox.checked) {
    document.querySelector(".messageCheckBox").innerHTML =
      "✅ 모든 약관에 동의하였습니다.";
    return false;
  } else {
    document.querySelector(".messageCheckBox").innerHTML =
      "⛔️ 전체 약관에 동의해주세요.";
    return false;
  }
});

const genderCheck = function () {
  const genderMan = document.querySelector("#userGenderMan");
  const genderWoman = document.querySelector("#userGenderWoman");

  genderMan.addEventListener("click", () => {
    if (genderMan.checked) {
      document.querySelector(".messageGender").innerHTML =
        "🚹 '남자'를 선택하였습니다.";
      return false;
    }
  });

  genderWoman.addEventListener("click", () => {
    if (genderWoman.checked) {
      document.querySelector(".messageGender").innerHTML =
        "🚺 '여자'를 선택하였습니다.";
      return false;
    }
  });
};
genderCheck();

submit.addEventListener("click", form);

//NOTE 참조한 사이트
//유효성 검사 | https://grace-go.tistory.com/66
//https://backstreet-programmer.tistory.com/53
//https://bookk.tistory.com/65 이름에 한글,영문,숫자만 허용되도록
//HTML5 폼 검증 | https://jeonghwan-kim.github.io/dev/2020/06/08/html5-form-validation.html
// 자동 submit 방지 | https://fruitdev.tistory.com/151

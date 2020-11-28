"use strict";

const submit = document.querySelector(".submit__input");

const form = function () {
  const userName = document.querySelector("#userName").value;
  const userId = document.querySelector("#userId");
  const userPassword = document.querySelector("#userPassword");
  const userPassword2 = document.querySelector("#userPassword2");
  const userBirth = document.querySelector("#userBirth");

  console.log(userName);
  // console.log(userId);
  // console.log(userPassword);
  // console.log(userPassword2);
  // console.log(userBirth);

  // alert(" 정상적으로 가입되었습니다. 다시 로그인해주세요. ");

  const checkSpecial = /[`~!@#$%^&*|\\\'\";:\/?]/gi;

  if (userName == null || userName == "") {
    document.querySelector(".messageName").innerHTML = "이름을 입력해주세요.";
    document.querySelector("#userName").focus();
    return;
  } else if (userName.search(/\s/) != -1) {
    document.querySelector(".messageName").innerHTML =
      "이름은 빈칸을 포함할 수 없습니다.";
    document.querySelector("#userName").focus();
    return;
  } else if (userName.length < 3 || userName.length > 20) {
    document.querySelector(".messageName").innerHTML =
      "이름은 3글자 이상 20글자 이하로 작성해주세요.";
    document.querySelector("#userName").focus();
    return;
  } else if (checkSpecial.test(userName)) {
    document.querySelector(".messageName").innerHTML =
      "이름에 특수문자는 사용할 수 없습니다.";
    document.querySelector("#userName").focus();
    return;
  } else {
    document.querySelector(".messageName").innerHTML = "";
  }
};

submit.addEventListener("click", form);

//https://backstreet-programmer.tistory.com/53
//https://bookk.tistory.com/65 이름에 한글,영문,숫자만 허용되도록

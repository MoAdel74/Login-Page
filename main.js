let pass = document.querySelector(".pass input");
let reqOne = document.querySelector(".reqOne i");
let reqTwo = document.querySelector(".reqTwo i");
let reqThree = document.querySelector(".reqThree i");

pass.onblur = function () {
  let passVal = pass.value;
  if (passVal.length >= 8) {
    reqOne.classList.add("fa-solid", "fa-check");
  }else {
    reqOne.classList.add("fa-solid", "fa-xmark");
  }
  if (passVal.match(/[0-9]/)) {
    reqTwo.classList.add("fa-solid", "fa-check");
  }else {
    reqTwo.classList.add("fa-solid", "fa-xmark");
  }
  if (passVal.match(/[A-Z]/)) {
    reqThree.classList.add("fa-solid", "fa-check");
  }else {
    reqThree.classList.add("fa-solid", "fa-xmark");
  }
};

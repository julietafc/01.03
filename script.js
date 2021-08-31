"use strict";

window.addEventListener("load", start);

let result;

const operatorSign = document.querySelector("#operator");
const firstNumber = document.querySelector("#firstnumber");
const secondNumber = document.querySelector("#secondnumber");
const checkBox = document.querySelector("#doround");

function start() {
  console.log("start");
  document.getElementById("calculate").addEventListener("click", showResult);
  document.getElementById("clear").addEventListener("click", clearResults);
}

function showResult() {
  console.log("showResult");

  if (operator == "add") {
    console.log("This is a sum");
    result = firstNumber + secondNumber;
    roundResult();
  } else if (operator == "sub") {
    console.log("This is a rest");
    result = firstNumber - secondNumber;
    roundResult();
  } else if (operator == "mul") {
    console.log("This is a multiplication");
    result = firstNumber * secondNumber;
    roundResult();
  } else {
    console.log("This is a divition");
    result = firstNumber / secondNumber;
    roundResult();
  }

  console.log(result);
}

function clearResults() {
  console.log("clearResults");
  document.querySelectorAll("#results li").forEach((li) => {
    li.remove();
  });
}

function roundResult() {
  if (checkBox.checked) {
    let numberDecimals = document.querySelector("#decimals").value;
    result = result.toFixed(numberDecimals);
  }
  logResult();
}
//-------------------------------------
function logResult() {
  firstNumber.value = result;
  let x = document.createElement("LI");
  let t = document.createTextNode(result);
  x.appendChild(t);
  document.querySelector("#results").appendChild(x);
  scrollList();
}
//--------------------------------------
function scrollList() {
  let lastLi = document.querySelector("#results li:last-child");
  lastLi.scrollIntoView(true);
}

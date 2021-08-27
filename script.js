"use strict";

const operator = ["+", "-", "*", "/"];
const round = ["1", "2", "3", "4", "5", "6", "7", "8"];

start();

function start() {
  console.log("start");
  //read first number
  let firstNumber = document.getElementById("firstnumber").value;
  //read second number
  let secondNumber = document.getElementById("secondnumber").value;
  //read operator
  let result = document.getElementById("results").value;
  if (operator == "+") {
    console.log("This is a sum");
    result = firstNumber + secondNumber;
  } else if (operator == "-") {
    console.log("This is a rest");
    result = firstNumber - secondNumber;
  } else if (operator == "*") {
    console.log("This is a multiplication");
    result = irstNumber * secondNumber;
  } else {
    console.log("This is a divition");
    result = firstNumber / secondNumber;
  }
  document.getElementById("calculate").addEventListener("click", showResult);
}

function showResult() {
  console.log("showResult");
  //   result = Math.floor * round;
  document.getElementById("clear").addEventListener("click", clearResults);
}

function clearResults() {
  console.log("clearResults");
  document.getElementById("results").reset();
  start();
}

"use strict";

let firstNumber;
let secondNumber;
let result;

const round = ["1", "2", "3", "4", "5", "6", "7", "8"];

start();

function start() {
  console.log("start");

  //read operator
  document.getElementById("calculate").addEventListener("click", showResult);
}

function showResult() {
  console.log("showResult");
  document.getElementById("clear").addEventListener("click", clearResults);
  let operator = document.getElementById("operator").value;

  //read first number
  firstNumber = document.getElementById("firstnumber").value;
  //read second number
  secondNumber = document.getElementById("secondnumber").value;

  if (operator == "add") {
    console.log("This is a sum");
    result = firstNumber + secondNumber;
  } else if (operator == "sub") {
    console.log("This is a rest");
    result = firstNumber - secondNumber;
  } else if (operator == "mul") {
    console.log("This is a multiplication");
    result = firstNumber * secondNumber;
  } else {
    console.log("This is a divition");
    result = firstNumber / secondNumber;
  }

  console.log("the result is "); // round up number if needed

  // append result in list
}

function clearResults() {
  console.log("clearResults");
  document.getElementById("results").reset();
  start();
}

// let first_numberInput = document.querySelector("#one");
// let second_numberInput = document.querySelector("#two");
// let add_button = document.querySelector("#btn1");
// let sub_button = document.querySelector("#btn2");
// let mul = document.querySelector("#btn3");
// let div = document.querySelector("#btn4");
// let output = document.querySelector(".output");

// function addition() {
//   var firstnumber = Number(first_numberInput.value);
//   var secondnumber = Number(second_numberInput.value);
//   var sum = firstnumber + secondnumber;
//   var mult = firstnumber * secondnumber;
//   //   console.log(sum);
//   output.innerHTML = "Answer is : " + sum;
// }

// add_button.addEventListener("click", addition);

let first = document.querySelector("#one");
let second = document.querySelector("#two");
let operators = document.querySelector("#operators");
let btn2 = document.querySelector("#btn1");
let sc = document.querySelector(".output");

function calc() {
  let a = Number(first.value);
  let b = Number(second.value);
  let sca = Number(sc.value);
  let op = operators.value;

  let sum;

  if (op === "+") {
    sum = a + b;
    document.querySelector(".output").innerHTML = sum;
  } else if (op === "-") {
    sum = a - b;
    document.querySelector(".output").innerHTML = sum;
  } else if (op === "*") {
    sum = a * b;
    document.querySelector(".output").innerHTML = sum;
  } else if (op === "/") {
    sum = a / b;
    document.querySelector(".output").innerHTML = sum;
  }
}
btn2.addEventListener("click", calc);

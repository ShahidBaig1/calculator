let first_numberInput = document.querySelector("#one");
let second_numberInput = document.querySelector("#two");
let add_button = document.querySelector("#btn1");
let output = document.querySelector(".output");

function addition() {
  var firstnumber = Number(first_numberInput.value);
  var secondnumber = Number(second_numberInput.value);
  var sum = firstnumber + secondnumber;
  //   console.log(sum);
  output.innerHTML = "Answer is : " + sum;
}

add_button.addEventListener("click", addition);

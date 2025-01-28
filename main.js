function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}

let num1 = 0;
let num2 = 0;
let operator = "";

const displayText = document.querySelector(".display-text");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonText = e.target.innerText;
    console.log(buttonText);

    if (buttonText === "C") {
      displayText.value = "0";
      num1 = 0;
      num2 = 0;
      operator = "";
    } else if (
      buttonText === "+" ||
      buttonText === "-" ||
      buttonText === "*" ||
      buttonText === "/"
    ) {
      num1 = parseFloat(displayText.value);
      operator = buttonText;
      displayText.value = "0";
    } else if (buttonText === "=" && operator !== "") {
      num2 = parseFloat(displayText.value);
      displayText.value = operate(operator, num1, num2);
    } else if (displayText.value === "0") {
      displayText.value = buttonText;
    } else if (
      buttonText !== "=" &&
      buttonText !== "+" &&
      buttonText !== "-" &&
      buttonText !== "*" &&
      buttonText !== "/" &&
      buttonText !== "+/-" &&
      buttonText !== "%"
    ) {
      displayText.value += buttonText;
    } else if (buttonText === "+/-" && displayText.value !== "0") {
      displayText.value = -displayText.value;
    } else {
      return;
    }
  });
});

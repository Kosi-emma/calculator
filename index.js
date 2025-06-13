// Attaching value to the display
function attachValue(value) {
  let display = document.getElementById("display-screen");
  display.value += value;
}

// Clear function implementation
function clearDisplay() {
  document.getElementById("display-screen").value = " ";
}

// Backspace implementation
function backSpace() {
  const display = document.getElementById("display-screen");
  display.value = display.value.slice(0, -1);
}
// KeyBoard input implementations

document.addEventListener("keydown", function (event) {
  const keys = "1234567890-+/*.";
  if (keys.includes(event.key)) {
    attachValue(event.key);
  } else if (event.key === "Escape") {
    clearDisplay();
  } else if (event.key === "Backspace") {
    backSpace();
  } else if (event.key === "Enter") {
    evalExpression();
  }
});

//Calculating the expression using the javascript eval method.
function evalExpression() {
  const display = document.getElementById("display-screen");
  const expToEvaluate = display.value;
  const resultOfEvaluation = eval(expToEvaluate);
  display.value = resultOfEvaluation;
}

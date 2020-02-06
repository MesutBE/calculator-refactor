function calculateHandler(event) {
  // read & process user input from event

  // pass user input through core logic

  // render output to DOM for user

  // log user action for developers

  // return true for the browser
  return true;
}

function calc() {
  var a = parseInt(document.querySelector("#value1").Value);
  var b = parseInt(document.querySelector("#value2").Value);
  var op = document.querySelector("#operator").Value;
  var calculate;

  if (op == "add"){
    calculate = a + b;
  } else if (op == "min"){
    calculate = a - b;
  } else if (op == "div"){
    calculate = a / b;
  } else if (op == "mul"){
    calculate = a * b;
  }

  
}
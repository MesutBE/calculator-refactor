function calculateHandler(event) {
  // read & process user input from event
  let op = document.querySelector('#operator').value;
  let a = parseInt(document.querySelector('#value1').value);
  let b = parseInt(document.querySelector('#value2').value);
  
  // pass user input through core logic
  let calculate;
  calculate = doMath(op, a, b);

  // render output to DOM for user
  document.querySelector('#result').innerHTML = calculate;

  // log user action for developers
  console.log(calculate);

  // return true for the browser
  return true;
}
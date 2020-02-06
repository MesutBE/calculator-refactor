document.getElementById('btnCalc').addEventListener('click', calc);

function calc() {

    var a = parseInt(document.querySelector('#value1').value);
    var b = parseInt(document.querySelector('#value2').value);
    var op = document.querySelector('#operator').value;
  
    calculateHandler(a, b, op);
    
  }
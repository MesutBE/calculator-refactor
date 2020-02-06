// test cases for your doMath function
// these are all correct, you don't need to change them
const doMathTests = [
  { name: 'add - 1', args: ['add', 0, 0], expected: 0 },
  { name: 'add - 2', args: ['add', -4, 3], expected: -1 },
  { name: 'add - 3', args: ['add', -5, -1], expected: -6 },
  { name: 'min - 1', args: ['min', 1, 0], expected: 1 },
  { name: 'min - 2', args: ['min', 2, 1], expected: 1 },
  { name: 'min - 3', args: ['min', -5, -1], expected: -4 },
  { name: 'div - 1', args: ['div', 4, 2], expected: 2 },
  { name: 'div - 2', args: ['div', 3, 2], expected: 1.5 },
  { name: 'div - 3', args: ['div', 1, 4], expected: .25 },
  { name: 'mul - 1', args: ['mul', 3, 2], expected: 6 },
  { name: 'mul - 2', args: ['mul', 8, 0], expected: 0 },
  { name: 'mul - 3', args: ['mul', -1, -1], expected: 1 },
  { name: 'invalid - 1', args: ['tree', 0, 0], expected: 'invalid operation' },
  { name: 'invalid - 2', args: ['book', 0, 0], expected: 'invalid operation' },
  { name: 'invalid - 3', args: ['minus', 0, 0], expected: 'invalid operation' },
  // write 7 more test cases for doMath
  { name: 'add - 4', args: ['add', 1, 1], expected: 2 },
  { name: 'add - 5', args: ['add', 7, -3], expected: 4 },
  { name: 'min - 4', args: ['min', 4, 5], expected: -1 },
  { name: 'min - 5', args: ['min', 4, 4], expected: 0 },
  { name: 'div - 4', args: ['div', 7, 7], expected: 1 },
  { name: 'div - 5', args: ['div', 18, 2], expected: 9 },
  { name: 'mul - 4', args: ['mul', 5, 5], expected: 25 },
];

// refactor the logic from the calculator tutorial into this function
function doMath(op, a, b) {
  // these if statements make sure all arguments are the correct type
  // they will throw errors if your handler passes the wrong type arguments
  if (typeof op !== 'string') {
    throw new Error('operation should be a string');
  }
  if (typeof a !== 'number') {
    throw new Error('a should be a number');
  }
  if (typeof b !== 'number') {
    throw new Error('b should be a number');
  }
  // write your code below this comment:
  var calculate;

  if (op == 'add'){
    calculate = a + b;
  } else if (op == 'min'){
    calculate = a - b;
  } else if (op == 'div'){
    calculate = a / b;
  } else if (op == 'mul'){
    calculate = a * b;
  }
  console.log(calculate);
  return calculate;

}


testing(doMath, doMathTests);

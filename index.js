function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function squ(a) {
  return a * a;
}


function testAdd() {
  console.log(add(1, 1) === 2);
}

function testSubtact() {
  console.log(subtract(2, 1) === 1);
}

function testMultiply() {
  console.log(multiply(3, 3) === 9);
}

function testDiv() {
  console.log(div(6, 2) === 3);
}

function testSqu() {
  console.log(squ(5) === 25);
}

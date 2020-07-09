//Arrow functions
//Function with default parameters and return value
const subNumbers = (a = 90, b = 10) => {
  return a - b;
};

const displaySum = () => {
  var sum = subNumbers();
  alert("Sum of the two numbers is: " + sum);
};

const singleLine = () =>
  alert("hi, I am single line script without braces and return key word");

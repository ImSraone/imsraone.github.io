
// arithmetic
var x: number = 10;
var y: number = 5;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

// assignments

var num1: number = 10;
var num2: number = 2;
var num3: number = num2;

num3 += num1;

console.log(num3);

// Comparision

var a: number = 40;
var b: number = 50;

console.log(a === 30);
console.log(a !== 30);
console.log(a < b);
console.log(a > b);

// Logical

console.log((10 > 20) && (20 > 5));
console.log((10 > 20) || (20 > 5));
console.log((10 > 20) || (4 > 5));
console.log(!((10 > 20) || (20 > 5)));

// Ternary

var t1: number = 8;
var t2: number = 10;

console.log((t1 > t2) ? "t1 is greater than t2" : "t2 is greater than t1");

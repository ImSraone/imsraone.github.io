// If and Else

var x: number = 10;
var y: number = 20;
var z: number = 30;

if (x > y && x > z) {
    console.log("X is greater");
} else if (y > x && y > z) {
    console.log("Y is greater");
} else if (z > x && z > y) {
    console.log("Z is greater");
} else {
    console.log("Numbers are equal");
}

// Switch

var x: number = 3;

switch (x) {
    case 1:
    case 2:
        console.log("Common Logic");
        break;
    case 3:
        console.log("Case 3");
        break;
    default:
        console.log("Default");
}

// While

var n: number = 10;
var i = 1;

while (i <= n) {
    console.log(i++);
}

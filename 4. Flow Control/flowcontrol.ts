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

var num: number = 10;
var i = 1;

while (i <= num) {
    console.log(i++);
}


// For in and For of

let list = [4, 5, 6];

for (let i in list) {
    console.log(i); // "0", "1", "2",
}

for (let i of list) {
    console.log(i); // "4", "5", "6"
}

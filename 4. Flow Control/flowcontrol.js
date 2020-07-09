// If and Else
var x = 10;
var y = 20;
var z = 30;
if (x > y && x > z) {
    console.log("X is greater");
}
else if (y > x && y > z) {
    console.log("Y is greater");
}
else if (z > x && z > y) {
    console.log("Z is greater");
}
else {
    console.log("Numbers are equal");
}
// Switch
var x = 3;
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
var num = 10;
var i = 1;
while (i <= num) {
    console.log(i++);
}
// For in and For of
var list = [4, 5, 6];
for (var i_1 in list) {
    console.log(i_1); // "0", "1", "2",
}
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var i_2 = list_1[_i];
    console.log(i_2); // "4", "5", "6"
}

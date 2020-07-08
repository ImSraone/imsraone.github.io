// Same variable name in diffrent blocks
var num = 1;
var vnum = 1;
function demo() {
    var num = 2;
    var vnum = 2;
    if (true) {
        var num_1 = 3;
        var vnum = 3;
        console.log(num_1, vnum); //Output: 3,3
    }
    console.log(num, vnum); //Output: 2,3
}
demo();
console.log(num, vnum); //Output: 1,3
// ES3 issue
function myFun() {
    for (var letDemo = 0; letDemo < 10; letDemo++) {
        if (letDemo == 1)
            var varDemo = 99;
        console.log(letDemo);
    }
    console.log(varDemo);
}
myFun();

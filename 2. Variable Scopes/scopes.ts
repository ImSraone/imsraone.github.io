// Same variable name in diffrent blocks

let num: number = 1;
var vnum: number = 1;

function demo() {
    let num: number = 2;
    var vnum: number = 2;

    if (true) {
        let num: number = 3;
        var vnum: number = 3;
        console.log(num, vnum); //Output: 3,3
    }

    console.log(num, vnum);//Output: 2,3
}
demo();
console.log(num, vnum); //Output: 1,3

// ES3 issue

function myFun(): void {


    for (let letDemo = 0; letDemo < 10; letDemo++) {
        if (letDemo == 1) var varDemo = 99;
        console.log(letDemo);
    }
    console.log(varDemo);
}

myFun();


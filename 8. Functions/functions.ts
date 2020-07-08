// ------------------------------------------   Functions


var hello = function (name: string): string {
    return "Hello " + name;
}

function add(num1: number, num2: number): number {
    return num1 + num2;
}

function calculator(): any {
    function subtract(num1: number, num2: number): number {
        return num1 - num2;
    }
    return subtract;
}

function display(id: number, name: string, role: string = "Normal") {
    console.log("Id", id);
    console.log("Name", name);
    //if(role!=undefined){
    console.log("Role", role);
    // }
}

console.log(hello("Bharath"));

//console.log(hello("Bharath"));
//console.log("Sum is: "+add(10,20));
//display(1,"Bharath","Admin");

//console.log(calculator()(20,5));


// ------------------------------------------  Function Overloading

function doubleMe(x: number);
function doubleMe(x: string);
function doubleMe(x: any) {
    if (x && typeof x === "number") {
        console.log(x * 2);
    } else if (x && typeof x === "string") {
        console.log(x + " " + x);
    }
}
doubleMe("John");
//doubleMe([1, 2, 3]);


// ------------------------------------------   Arrow Functions

var hello = (name: string): string => {
    return "Hello " + name;
};

var multiply = (num1: number, num2: number): number => {
    return num1 * num2;
}

var myarray: Array<any> = [];

for (var i = 0; i < 10; i++) {
    myarray.push((): number => { return i });
}

for (var i = 0; i < 10; i++) {
    console.log(myarray[i]());
}

//console.log(hello("Bharath"));
console.log("Product is", multiply(5, 8));


// ------------------------------------------   Var Args


var product = function (x: number, y: number, ...nums: number[]) {

    var result = 1;

    for (var i = 0; i < nums.length; i++) {
        console.log(nums[i]);
        result *= nums[i];
    }
    return result;

}

console.log(product(2, 3, 4, 5));


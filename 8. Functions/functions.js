// ------------------------------------------   Functions
console.log("------------------------------------------   Functions");
var hello = function (name) {
    return "Hello " + name;
};
function add(num1, num2) {
    return num1 + num2;
}
function calculator() {
    function subtract(num1, num2) {
        return num1 - num2;
    }
    return subtract;
}
function display(id, name, role) {
    if (role === void 0) { role = "Normal"; }
    console.log("Id", id);
    console.log("Name", name);
    if (role != undefined) {
        console.log("Role", role);
    }
}
console.log(hello("Sravan"));
console.log("Sum is: " + add(10, 20));
display(1, "Sravan", "Admin");
console.log(calculator()(20, 5));
// ------------------------------------------  Function Overloading
console.log("------------------------------------------   Functions Overloading");
function doubleMe(x) {
    if (x && typeof x === "number") {
        console.log(x * 2);
    }
    else if (x && typeof x === "string") {
        console.log(x + " " + x);
    }
}
doubleMe("Sravan");
doubleMe(99);
// ------------------------------------------   Arrow Functions
console.log("------------------------------------------  Arrow Functions");
var hello = function (name) {
    return "Hello " + name;
};
var multiply = function (num1, num2) {
    return num1 * num2;
};
console.log(hello("Sravan"));
console.log("Product is", multiply(5, 8));
// ------------------------------------------   Rest Params
console.log("------------------------------------------  Rest Params");
var product = function (x, y) {
    var nums = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        nums[_i - 2] = arguments[_i];
    }
    var result = 1;
    for (var i = 0; i < nums.length; i++) {
        console.log(nums[i]);
        result *= nums[i];
    }
    return result;
};
console.log(product(2, 3, 4, 5));

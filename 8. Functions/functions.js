// ------------------------------------------   Functions
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
    //if(role!=undefined){
    console.log("Role", role);
    // }
}
console.log(hello("Bharath"));
function doubleMe(x) {
    if (x && typeof x === "number") {
        console.log(x * 2);
    }
    else if (x && typeof x === "string") {
        console.log(x + " " + x);
    }
}
doubleMe("John");
doubleMe([1, 2, 3]);
// ------------------------------------------   Arrow Functions
var hello = function (name) {
    return "Hello " + name;
};
var multiply = function (num1, num2) {
    return num1 * num2;
};
var myarray = [];
for (var i = 0; i < 10; i++) {
    myarray.push(function () { return i; });
}
for (var i = 0; i < 10; i++) {
    console.log(myarray[i]());
}
//console.log(hello("Bharath"));
console.log("Product is", multiply(5, 8));
// ------------------------------------------   Var Args
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

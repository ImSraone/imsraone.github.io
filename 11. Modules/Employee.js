define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    //Named export
    exports.age = 20;
    //Default export
    var Employee = /** @class */ (function () {
        function Employee(name, code) {
            this.empName = name;
            this.empCode = code;
        }
        Employee.prototype.displayEmployee = function () {
            alert("Employee Code: " + this.empCode + ", Employee Name: " + this.empName);
            document.getElementById("diplayEmpDetails").innerHTML =
                "Employee Code: " + this.empCode + "    Name:" + this.empName;
        };
        return Employee;
    }());
    exports["default"] = Employee;
    exports.displayAlert = function () {
        alert("Hi I am a function");
    };
});

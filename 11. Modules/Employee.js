define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.age = 20;
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
    exports.Employee = Employee;
    var companyName = "XYZ";
});

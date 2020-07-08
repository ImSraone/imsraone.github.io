"use strict";
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.DisplayEmployeeDetails = function (employee) {
        document.getElementById("diplayEmpDetails").innerHTML =
            "Employee Name: " +
                employee.EmployeeName +
                "    Location:" +
                employee.Location;
    };
    return Employee;
}());
exports["default"] = Employee;

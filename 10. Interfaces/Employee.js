"use strict";
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee(empId, Name, Location, Salary) {
        this.EmployeeId = empId;
        this.EmployeeName = Name;
        this.Location = Location;
        this.Salary = Salary;
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
var emp = new Employee(10, "Karuanakr", "Bangalore");
console.log(emp.EmployeeName);

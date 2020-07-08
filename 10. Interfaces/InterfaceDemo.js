var DisplayEmployeeDetails = function (employee) {
    document.getElementById("diplayEmpDetails").innerHTML =
        "Employee Name: " +
            employee.EmployeeName +
            "    Location:" +
            employee.Location;
};

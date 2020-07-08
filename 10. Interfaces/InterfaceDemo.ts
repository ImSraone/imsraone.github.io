interface IEmployee {
  EmployeeId: number;
  EmployeeName: string;
  Location: string;
  DisplayEmployeeDetails(employee: IEmployee);
}

const DisplayEmployeeDetails = (employee: IEmployee) => {
  document.getElementById("diplayEmpDetails").innerHTML =
    "Employee Name: " +
    employee.EmployeeName +
    "    Location:" +
    employee.Location;
};

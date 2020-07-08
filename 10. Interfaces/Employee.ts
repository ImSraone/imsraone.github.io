interface IEmployee {
  EmployeeId: number;
  EmployeeName: string;
  Location: string;
  DisplayEmployeeDetails(employee: IEmployee);
}

class Employee implements IEmployee {
  EmployeeId: number;
  EmployeeName: string;
  Location: string;
  Salary: number;

  DisplayEmployeeDetails(employee: IEmployee) {
    document.getElementById("diplayEmpDetails").innerHTML =
      "Employee Name: " +
      employee.EmployeeName +
      "    Location:" +
      employee.Location;
  }
}

export default Employee;

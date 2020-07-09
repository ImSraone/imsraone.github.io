interface IEmployee {
  EmployeeId: number;
  EmployeeName: string;
  Location: string;
  DisplayEmployeeDetails(employee: IEmployee);
}

class Employee implements IEmployee {
  constructor(empId: number, Name: string, Location: string, Salary?: number) {
    this.EmployeeId = empId;
    this.EmployeeName = Name;
    this.Location = Location;
    this.Salary = Salary;
  }
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

const emp = new Employee(10, "Karuanakr", "Bangalore");
console.log(emp.EmployeeName);

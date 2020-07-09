//Named export
export let age: number = 20;

//Default export
export default class Employee {
  empCode: number;
  empName: string;
  constructor(name: string, code: number) {
    this.empName = name;
    this.empCode = code;
  }
  displayEmployee() {
    alert(
      "Employee Code: " + this.empCode + ", Employee Name: " + this.empName
    );

    document.getElementById("diplayEmpDetails").innerHTML =
      "Employee Code: " + this.empCode + "    Name:" + this.empName;
  }
}

export const displayAlert = () => {
  alert("Hi I am a function");
};

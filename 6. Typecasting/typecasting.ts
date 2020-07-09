// Number

let x: number = parseInt("20");
console.log(x + 3);


const clueless: any = "1";
const clueNum: number = <number>clueless;

let s2: string = "Hi";

let u: unknown = 1;

s2 = <string>u;

// String 
let courses = ["Angular", "React", "Express"];

console.log(courses.toString());

let mybool = false;
let s: string = mybool.toString();
console.log(s);

// Object

interface Employee {
    id: number;
}

let e1: Employee;

let e2 = { id: 123, name: "John" };

e1 = e2;

e2 = e1;
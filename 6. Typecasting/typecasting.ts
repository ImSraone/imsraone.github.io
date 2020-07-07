// Number

let x: number = parseInt("20");
console.log(x + 3);


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
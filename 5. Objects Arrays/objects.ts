// Objects

var student = {
    firstName: "John",
    lastName: "Bailey",
    score: 90
};

console.log(student.firstName);
console.log(student.score);

for (var item in student) {
    console.log(item);
    console.log(student[item])
}

var { firstName, lastName } = student;
console.log(firstName + " " + lastName);

// Arrays

var courses: any = ["Angular", "React", "ES6", "JMS"];
courses.push("Spring Security");
courses.push(20);

for (var i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}

var x = courses[0];
var y = courses[1];

var [a, b, c] = courses;
console.log(a);
console.log(b);
console.log(c);


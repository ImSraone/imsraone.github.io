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

var x: number = courses[0];
var y: number = courses[1];

var [a, b, c] = courses;
console.log(a);
console.log(b);
console.log(c);


// Object Destructuring

var rect = { x: 0, y: 10, width: 15, height: 20 };

var { x, y, width, height } = rect;
console.log(x, y, width, height); // 0,10,15,20


// Array Destructuring

var [x, y, ...remaining] = [1, 2, 3, 4];
console.log(x, y, remaining); // 1, 2, [3,4]

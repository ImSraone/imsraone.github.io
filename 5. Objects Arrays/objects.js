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
    console.log(student[item]);
}
var firstName = student.firstName, lastName = student.lastName;
console.log(firstName + " " + lastName);
// Arrays
var courses = ["Angular", "React", "ES6", "JMS"];
courses.push("Spring Security");
courses.push(20);
for (var i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}
var x = courses[0];
var y = courses[1];
var a = courses[0], b = courses[1], c = courses[2];
console.log(a);
console.log(b);
console.log(c);
// Object Destructuring
var rect = { x: 0, y: 10, width: 15, height: 20 };
var x = rect.x, y = rect.y, width = rect.width, height = rect.height;
console.log(x, y, width, height); // 0,10,15,20
// Array Destructuring
var _a = [1, 2, 3, 4], x = _a[0], y = _a[1], remaining = _a.slice(2);
console.log(x, y, remaining); // 1, 2, [3,4]

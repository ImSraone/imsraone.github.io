class Customer {
  fullName: string;
}

let customer = new Customer();
customer.fullName = "Bob Smith";

if (customer.fullName) {
  console.log(customer.fullName);
}

class Person {
  constructor(public fullName: string) {}
}

let person = new Person("Karunakar");
person.fullName = "Bob Smith";
if (person.fullName) {
  console.log(person.fullName);
}

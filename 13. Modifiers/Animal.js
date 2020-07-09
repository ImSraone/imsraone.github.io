var Animal = /** @class */ (function () {
    function Animal(theName, location) {
        this.name = theName;
        this.location = location;
    }
    Animal.prototype.move = function (distanceInMeters) {
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var animal = new Animal("Dog", "Blr");
console.log(animal.name);

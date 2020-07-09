class Animal {
  public name: string;
  private location: string;

  public constructor(theName: string, location: string) {
    this.name = theName;
    this.location = location;
  }
  public move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

const animal = new Animal("Dog", "Blr");
console.log(animal.name);

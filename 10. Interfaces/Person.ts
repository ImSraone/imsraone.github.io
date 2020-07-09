interface IPerson {
  Id: number;
  Name: string;
  Location: string;
  DisplayLocation();
}

class Customer implements IPerson {
  Id: number;
  Name: string;
  Location: string;
  DisplayLocation() {}
}

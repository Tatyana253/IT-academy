/*
6.	Игровая комната. Подготовить игровую комнату для детей разных возрастных групп.
Игрушек должно быть фиксированное количество в пределах выделенной суммы денег.
Должны встречаться игрушки родственных групп, например: маленькие, 
средние и большие машины, куклы, мячи, кубики. Провести сортировку игрушек в 
комнате по одному из параметров. Найти игрушки в комнате, соответствующие заданному
диапазону параметров.
*/
class Toys {
  constructor(name, price, ageGroup) {
    this.name = name;
    this.price = price;
    this.ageGroup = ageGroup;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }

  getAgeGroup() {
    return this.ageGroup;
  }
}

class Ball extends Toys {
  constructor(name, price, ageRange, diameter) {
    super(name, price, ageRange);
    this.diameter = diameter;
  }
}

const ball1 = new Ball("Football ball", 5, "SchoolChild", 20);
const ball2 = new Ball("Child Football ball", 10, "Toddler", 10);
const ball3 = new Ball("Child Beach ball", 10, "Toddler", 10);
const ball4 = new Ball("Beach ball", 10, "SchoolChild", 20);

class Car extends Toys {
  constructor(name, price, ageGroup, size) {
    super(name, price, ageGroup);
    this.size = size;
  }
}
const car1 = new Car("MonsterTruck", 10, "Toddler", "Medium");
const car2 = new Car("Toyota", 20, "SchoolChild", "Medium");
const car3 = new Car("Lexus", 20, "SchoolChild", "Medium");
const car4 = new Ball("Truck", 20, "Toddler", "Big");
const car5 = new Ball("Truck", 20, "Toddler", "Small");
const car6 = new Ball("Truck", 20, "Toddler", "Medium");
const car7 = new Car("Tesla", 20, "SchoolChild", "Medium");

class Doll extends Toys {
  constructor(name, price, ageGroup, hairColor) {
    super(name, price, ageGroup);
    this.hairColor = hairColor;
  }
}
const doll1 = new Doll("Barbie", 50, "SchoolChild", "brunet");
const doll2 = new Doll("Barbie", 50, "SchoolChild", "blonde");
const doll3 = new Doll("Barbie", 50, "SchoolChild", "red");
const doll4 = new Doll("Baby", 100, "Toddler", "brunet");
const doll5 = new Doll("Baby", 100, "Toddler", "blonde");
const doll6 = new Doll("Baby", 50, "Toddler", "hairless");
const doll7 = new Doll("Baby", 50, "Toddler", "hairless");

class Lego extends Toys {
  constructor(name, price, ageGroup, numberOfBlocks) {
    super(name, price, ageGroup);
    this.numberOfBlocks = numberOfBlocks;
  }
}
const lego1 = new Lego("LegoClassic", 120, "SchoolChild", 800);
const lego2 = new Lego("LegoDuplo", 100, "Toddler", 20);
const lego3 = new Lego("LegoDuploBig", 100, "Toddler", 100);
const lego4 = new Lego("LegoCity", 300, "SchoolChild", 2000);
const lego5 = new Lego("LegoCity", 200, "Toddler", 300);
const lego6 = new Lego("LegoCity", 150, "Toddler", 100);
const lego7 = new Lego("LegoCreator", 300, "SchoolChild", 1000);

//0-6 years ageGroup 'Toddler'

//6-18 years ageGroup 'SchollChild'

class GameRoom {
  constructor(budget, toys) {
    this.budget = budget;
    this.toys = toys;
  }
  getToysInPriceRange(minPrice, maxPrice) {
    return this.toys.filter(
      (toy) => toy.price >= minPrice && toy.price <= maxPrice
    );
  }
  sortByPrice() {
    this.toys.sort((a, b) => a.price - b.price);
  }
  sortToysBy(param) {
    return this.toys.sort((a, b) => a[param] - b[param]);
  }
  addToy(newToy) {
    this.toys.push(newToy);
    return this.toys;
  }
  findByAgeGroup(ageGroup) {
    return this.toys.filter((toy) => toy.ageGroup === ageGroup);
  }
  findByAgeGroupAndName(ageGroup, name) {
    return this.toys.filter(
      (toy) => toy.ageGroup === ageGroup && toy.name === name
    );
  }
}

const toys = [
  ball1,
  ball2,
  ball3,
  ball4,
  car1,
  car2,
  car3,
  car4,
  car5,
  car6,
  car7,
  doll1,
  doll2,
  doll3,
  doll4,
  doll5,
  doll6,
  doll7,
  lego1,
  lego2,
  lego3,
  lego4,
  lego5,
  lego6,
  lego7,
];
const gameRoom = new GameRoom(1000, toys);

console.log(gameRoom.getToysInPriceRange(5, 20));
console.log(gameRoom.sortToysBy("price"));

const newToy = new Lego("LegoNinjago", 200, "SchoolChild", 500);
gameRoom.addToy(newToy);
console.log(toys);

console.log(gameRoom.findByAgeGroup("Toddler"));

console.log(gameRoom.findByAgeGroupAndName("Toddler", "Baby"));

//СТВОРЕННЯ НОВОГО ОБ'ЄКТУ З ФУНКЦІЄЮ 
const teslaX = {
  make: 'Tesla',
  model: 'X',
  price: 90000,
  drive: function () {
    console.log(this.make + ' ' + this.model + ' goes zoom zoom!');
  }
};
// ЇЇ ВИКЛИК
teslaX.drive();


// СТВОРЕННЯ ШАБЛОНУ(КЛАСУ) ДЛЯ СТВОРЕННЯ ОБ'ЄКТІВ)
// class Car {
//   constructor(make, model, price) {
 // /* тут конструктор створює порожній об'єкт this = {}*/
//     this.make = make;
//     this.model = model;
//     this.price = price;
//  /* тут додає до обєкта функцію this.drive = fn...*/
 // /* тут повертає значення обєкту return this;*/
//   }
//   drive() {
//     console.log(this.make + ' ' + this.model + ' goes zoom zoom!');
//   }
// }


// СТВОРЕННЯ ФУНКЦІЇ-КОНСТРУКТОРА, ЯКА БУДЕ СТВОРЮВАТИ ОБ'ЄКТИ ЗІ СТВОРЕННЯМ МЕТОДУ ДЛЯ ОБ'ЄКТІВ СТВОРЕНИХ ЦИМ СПОСОБОМ 
function Car(make, model, price) {
  this.make = make;
  this.model = model;
  this.price = price;
}
Car.prototype.drive = function() {
  console.log(this.make + ' ' + this.model + ' goes zoom zoom!');
}
//СТВОРЕННЯ ОБ'ЄКТУ ПО ШАБЛОНУ
const nissanPathfinder = new Car('Nissan',
  'Pathfinder', 50000);
// ВИКЛИК МЕТОДУ ДЛЯ СТВОРЕНОГО ОБ'ЄКТУ ЗА ДОПОМОГОЮ КОНСТРУКТОРА
nissanPathfinder.drive();



// СТВОРЮЄМО НОВИЙ КОНСТРУКТОР, ЩО НАСЛІДУЄ УСІ ВЛАСТИВОСТІ КЛАСУ CAR
class SuperCar extends Car {
  constructor(make, model, price, topSpeed) {
    super(make, model, price); //ВИКОРИСТОВУЄ ЦІ ВСЛАСТИВОСТІ
    this.topSpeed = topSpeed;  // ДОДАЄМО НОВУ ВЛАСТИВІСТЬ
  }
  // ПРИЗНАЧАЄМО ЗНАЧЕННЯ ФУНКЦІ
  drive() {
    console.log(this.make + ' ' + this.model + ' drives quickly!');
  }
}
// СТВОРЕННЯ ОБ'ЄКТУ ПО ДРУГОМУ КОНСТРУКТОРУ
const ferrariLaFerrari = new SuperCar('Ferrari', 'LaFerrari', 3000000, 400);
ferrariLaFerrari.drive();



// ЗМІННА, ЩО БУДЕ ВМІЩУВАТИ json ФАЙЛИ 
const json = `
{
   "make":"Tesla",
   "model":"Y",
   "price":90000
}`;

const teslaY = JSON.parse(json); //ДОПОМАГАЄ ВИКОРИСТОВУВАТИ JSON ФАЙЛ
teslaY.drive = function() {
   console.log(this.make + ' ' + this.model + ' goes zoom zoom!');
}
console.log(nissanPathfinder);
teslaY.drive();

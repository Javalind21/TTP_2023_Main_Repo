let num = 21;
console.log(num);

// toFixed() - format a number with a fixed number of decimal places
let num2 = 1234.8947;
console.log(num.toFixed(2)) // 1234.89

// toPrecision() -  format a number to a specified length
let myNum = 1468.5678;
console.log("myNum.toPrecision(4)", myNum.toPrecision(4)) // 1469

// toString() - converts Number variables to String
let myNum2 = 24;
myNum2 = myNum2.toString();
console.log("myNum2", myNum2);
console.log("typeof mynum2", typeof myNum2);

// 2d Arrays
let myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
console.log("myArray[0][2]", myArray[0][2]) //3
console.log("myArray[2][1]", myArray[2][1]) //8

// 2d Arrays (nested)
let myArray2 = [
  [
    ["a", "b", "c"]
  ],
  [4, 5, 6],
  [7, 8, 9]
]
console.log("myArray2[0][0][0]", myArray2[0][0][0]) // a

// Objects - objects are a collection of key-value pairs, where each key is a unique identifier and each value can be of any data type, including other objects
let person = new Object(); // empty object
person.name = "John";
person.age = 23;
person.city = "NY";
console.log("person", person)
console.log("person.age", person.age); // 23

let person2 = {
  name: "Mary",
  age: 21,
  city: "CA"
}
console.log("person2.name", person2.name);
person2.sport = "soccer";
console.log("person2", person2);
console.log("person2.sport", person2.sport);

delete person2.sport; // delete property inside of person2
console.log("person2", person2);

let person3 = {
  name: "Bob", // key:value
  age: 25, // key:value
  city: "NJ" // key:value
}

for (let a in person3) {
  console.log("property", a); // name // age // city
  console.log("person3[property]", person3[a])
}

for (let [a, b] of Object.entries(person3)) {
  console.log("key", a, "value", b); // name
  // console.log("value",b); // "Bob"
}

let keys = Object.keys(person3);
console.log("all keys", keys);

let values = Object.values(person3);
console.log("all values", values);

let student = {
  name: "Johne Joe",
  age: 20,
  grade: "A",
  address: {
    street: "123 Main street",
    city: "NEW YORK",
    country: "USA"
  }
}

console.log("student.address.city", student.address.city);

let company = {
  name: "ABC Corp",
  location: "NY",
  departments: {
    sales: {
      manager: "John Smith",
      employees: {
        employee: {
          name: "Alice",
          position: "Sales Rep"
        }
      }
    }
  }
}
console.log("company.departments.sales.employees.employee.name", company.departments.sales.employees.employee.name);

let person4 = {
  name: "John",
  age: 30,
  sayHello: function(name) {
    console.log(`Hello my name is ${name}`);
  }
}
person4.sayHello("John Doe");

let calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  }
}
console.log("calculator.add(5,3)", calculator.add(5, 3)); // 8
console.log("calculator.subtract(10,5)", calculator.subtract(10, 5)); // 5

let car = {
  brand: "Tesla",
  model: "Model 3",
  startEngine: function() {
    console.log("Starting the " + this.brand + " " + this.model + " engine");
  }
}

car.startEngine();

// "" - doouble
// ' - single
// ` - backtick

let car2 = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  displayDetails() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
  }
}

car2.displayDetails();

let car3 = {
  brand: "Tesla",
  dislayInfo: function() {
    console.log(`Brand: ${this.brand}`);
  },
  engine: {
    type: "Electric",
    start: function() {
      console.log(`Type: ${this.type}`);
    }
  }
}
car3.dislayInfo();
car3.engine.start();

// Object Constructors
function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}

let person01 = new Person("John", 30, "NY");
let person02 = new Person("Mary", 34, "NJ");
console.log("person01", person01);
console.log("person02", person02);
console.log("person01.name", person01.name); // John

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getInfo = function() {
    return `${this.title} by ${this.author}, ${this.year}`;
  }

}

let book1 = new Book("The Great Gatsby", "F. Scott", 1925);
let book2 = new Book("To kill a mockingbird", "Harper L", 1960);
console.log("book1", book1);
console.log("book2", book2);
console.log("book1.getInfo()", book1.getInfo());
console.log("book2.getInf0", book2.getInfo());

function Book2(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getInfo = function() {
    return `${this.title} by ${this.author}, ${this.year}`;
  }
}


Book2.prototype.getAge = function() {
  const currentYear = new Date().getFullYear(); // 2023
  const age = currentYear - this.year;
  return age;
}

let book4 = new Book2("Spiderman", "IDK", 1990);
console.log("book4.getAge()", book4.getAge()); // 

const person20 = {
  name: "John",
  age: 30,
}

console.log(person20.hasOwnProperty("name")); //True
// console.log(person20.hasOwnProperty("car")); // False

const person10 = {
  greet() {
    console.log("Hello!");
  }
}

console.log("person10", person10);

const john = Object.create(person10); // john inherits all properties of person10 object
person10.greet();
john.greet();

const vehicle3 = {
  type: "car",
  startEngine() {
    console.log("Engine started");
  }
}

vehicle3.type = "truck"
const tesla3 = Object.create(vehicle3);
tesla3.model = "model 3";
// tesla3.type = "truck";

console.log(vehicle3.hasOwnProperty("type")); // True
tesla3.model = "model 3";
console.log(tesla3.hasOwnProperty("model")) // true - since the key "model" is originally from tesla3 object
console.log(tesla3.hasOwnProperty("type")); // False
// even though we inherited all properties from vehicle3 (for tesla3) - the hasOwnProperty() checks if the key ("type") from tesla3 is originally from the tesla3 object. Since the key("type") was inherited (not originally from) it returns False.

//object Practice
/*function createMovie(id, name, director, year){
    let movie = object.create(createMovie);
    movie.id = id;
    movie.name = name;
    movie.director = director;
    movie.year = year;

    return movie;
}

createMovie.getInfo = function(){
    return `${this.director}, ${this.year}`
}

let movieCreate = new createMovie(1, "Spider-Man", "IDK", 2023);
console.log("movieCreate.getInfo", movieCreate.getInfo());
*/
//Primitive type - Boolean
let bool1 = true;
let bool2 = bool1;

bool2 = false;
console.log("bool1", bool1);
console.log("bool2", bool2);




//Callback Functions - a function that is passed as an argument to another function and is invoked (called) at a speific point
function greet(name, callback){
    console.log("Hello " + name + " 1");
    callback();
}

function sayGoodBye(){
    console.log("Goodbye");
}

greet("John", sayGoodBye);

//callBack Function example
function calculate(num1, num2, operator, call){
    let result;
    if (operator == "add"){
        result = num1 + num2;
    }
    else if(operator == "subtract"){
        result = num1 - num2;
    }

    call(result);
}

function handleResult(result){
    console.log("Result:", result);
}

calculate(5,3,"add",handleResult);

calculate(10, 5, "subtract", handleResult);
//High Order Function

//forEach()
let numbers4 = [1, 2, 3, 4, 5];

numbers4.forEach(function(num){
        console.log(num * 2);
})

//map - High Order Function (built in)
let numbers10 = [1, 2, 3, 4, 5];
let double2 = numbers10.map(function(num){
    return num * 2;
})
console.log("numbers10", double2);

//Filter - High Order Function (built in)
let numbers11 = [1, 2, 3, 4, 5];
let evenNumbers = numbers11.filter(function(num){
        return num % 2 == 0
})

console.log("evenNumbers",evenNumbers);

//Reduce - - High Order Function (built in)
let numbers12 = [1,2,3,4,5];
let sum = numbers12.reduce(function(accumulator,num) {
    accumulator += num;
    return accumulator;
}, 0);

console.log("sum",sum);
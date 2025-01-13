// Define Object
// key : value
const student = {
  firstName: "Ahmed", //properties
  lastName: "Mansour",
  age: 10,
  grade: 4,
  fromHome: false,
  attendance: 0.9,
  fullNameFn: function () {
    return this.firstName + " " + this.lastName
  },  // Method
  fullName: () => this.firstName + " " + this.lastName, // Method will return undefined
  activities: ["swimming", "reading"],
  uniform: {
    color: "orange",
    size: 6,
  },
};
// Object property display
let firstName = student.firstName;
let lastName = student["lastName"];
// Nested Object
let uniformColor = student.uniform.color;

// Object Method use
const fullName = student.fullName();

const car = { type: "Fiat", model: "500", color: "white", distance: 500 };

car.type = "BYD" // Edit method

// delete car.model // delete

car.doors = 4 // add property or method

car["distanceCalc"] = function (n){
  return this.distance + n
}

// reading keys
let carKeys = Object.keys(car) // array of keys [type, model, ...]

// reading values
let carValues = Object.values(car) // array of values 

// reading keys & values
let carEntries = Object.entries(car) // array of arrays of key and value 
// [
//   [ 'type', 'BYD' ],
//   [ 'model', '500' ],
//   [ 'color', 'white' ],
//   [ 'distance', 500 ],
//   [ 'doors', 4 ],
//   [ 'distanceCalc', [Function (anonymous)] ]
// ]


// create Object using "new"
const language = new Object() 
language.name = "JavaScript"
language.firstRelease = "1995"

// create Object using constructor function
function User(first, last, role) {
  this.firstName = first;
  this.lastName = last;
  this.fullName = function(){
    return `${this.firstName} ${this.lastName}`
  } 
  this.role = role
}

let abdelrahman = new User("Abdelrahman", "Elhussiny", "admin")
let mina = new User ("Mina", "Majed", "user")

let userKeys = ""
for(let key in abdelrahman){
  userKeys = userKeys + key + ": " + abdelrahman[key] + "\n"
}

console.log(student.fullName()) // undefined undefined
console.log(student.fullNameFn()) // Ahmed Mansour


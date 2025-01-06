// Global = in browser = Window
  var num = 5

function calculateAge(age) {
  // Function scope
  let name = "Ahmed"
  if(age > 13){
    let personName = "Mina"
    let x = `${personName} is adult`
  }
  console.log('personName', personName)
}

// calculateAge(15)

//ES6 = Current JavaScript
//Block Scope any {} less than Function

// can be redeclare
var x // declaration
x = 5 // assignation

// Why don't use var
// !!!! Var can be re-declare
var carType = "Toyota" //declare then assign
carType = "Honda" // re-assign
var carType = ["Toyota", "Honda", "BYD"] // re-declare

// !!! Var can't be constant
var bi = 3.14

// !!! Hoisting : declarations first
console.log(myCar)
var myCar = "MG"

// !!! can't be Block scope (function or global)


// let can be re-assign but can't be redeclared
let carType2 = "Toyota" //declare then assign
carType2 = "Honda" // re-assign
// let carType2 = ["Toyota", "Honda", "BYD"] // re-declare (error)

// const
const biConst = 3.14
biConst = 5 //not allowed



//////
// Role => Don't use Var => use let or const
//////



let person_name // Snake case => can be used for variables or Fn
let personName // camelCase => can be used for variables or Fn => most Popular in JS
let PersonName // PascalCase => can be used for variables but Mandatory for React Components

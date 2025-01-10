// // Function Declaration

// function fnName (input) {
//   // code
//   return output
// }

// Arrow
// const fnName = (input) => output



// // Function Execution 
// fnName(input)


// Convert Day to String




let today = new Date().getDay()

function dayToStringConvert(day){
  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "it is not a valid day value"
  }
}

console.log(dayToStringConvert(today))

// Pure function input => return output with no side effects out function scope
// function to Convert Fahrenheit to Celsius:
// (5/9) * (fahrenheit-32);
function toCelsius(fahrenheit){
  return (5/9) * (fahrenheit-32)
}

// let celsius = toCelsius(77)


// self invoked function
(
  function (){
    console.log('this is from Self Invoked Function')
  }
)()

// function Parameters (any data type, any number of parameters) => arguments
// I can add default value for the argument to not be undefined
function sum (a, b){
  return a + b
}

function greeting(user){
  return "Hello " + user + "!"
}

function userAge(userName, age){
  if(age < 13){
    return `${userName} is a child`
  }else{
    return `${userName} is an adult`
  }
}


/// Higher Order Function 
/// argument fn => callback function
/// function declared in another function scope

function calculateFn(a,b,fn){
  let result = fn(a,b)
  console.log('result', result) //side effect
}

calculateFn(1,2,sum)
function sum (a,b){
  return a + b
}

function substFn (a,b){
  return a - b
}

function divFn (a,b){
  return a / b
}

console.log(sum(1))

// calculateFn(1,2,sum) // 1 + 2 = 3
// calculateFn(5,3,substFn) // 5-3 = 2
// calculateFn(6,3,divFn) // 5/ 3 = 2

// setTimeout(fn, 1000); // excute fn after 1 sec


setTimeout(() => {
  console.log('it is after 5sec')
}, 0);

// const myInterval = setInterval(() => {
//     console.log('from Interval', new Date().getSeconds())
//     clearInterval()
// }, 1000);



// arrow function
const sumArrow = (a, b) => a + b
console.log(sumArrow(1,2))

// function sum (a,b){
//   return a + b
// }


// let count = 0
// function add (){
//   count ++ // side Effect
// }

// add()
// add()
// add()
// console.log('count', count)


function fnMultiReturn () {
  let x = 20
  let myName = "a"
  function fnName () {
    console.log('from funcion')
  }
  return fnName()
  // return {
  //   x, myName, fnName
  // }
}

fnMultiReturn()




// Declare function (function or arrow)
// function name(params) {}
// () => {}

// Execution (call) 
// fnName()

// arguments can be any data type , can take default value
// HOF 
// function take another function (callback) as argument 
// function (closer) declared inside another function (HOF)

// Pure Function => take input and return output without any side effects
// we can return any data types
// every function has one return 


const leapYearCalc = (year) => (
  year %4 === 0 && (year % 100 !==0 || year % 400 ===0) 
  ? "Leap year" 
  : year
)


console.log('leapYearCalc', leapYearCalc(1900))

function leapYear(year) {
  if(year %4 === 0 && (year % 100 !==0 || year % 400 ===0)){
    console.log(`${year} is a leap year`)
  }else{
    console.log(`${year} isn't a leap year`)
  }
}
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


function dayToStringConvert(day){
  let dayString
  switch (day) {
    case 0:
      dayString = "Sunday";
      break;
    case 1:
      dayString = "Monday";
      break;
    case 2:
      dayString = "Tuesday";
      break;
    case 3:
      dayString = "Wednesday";
      break;
    case 4:
      dayString = "Thursday";
      break;
    case 5:
      dayString = "Friday";
      break;
    case 6:
      dayString = "Saturday";
      break;
    default:
      dayString = "it is not a valid day value"
      break;
  }
  console.log( dayString)
}

let today = new Date().getDay()
// dayToStringConvert(today)

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




// console.log() to print in terminal or browser console => for debugging

// if (condition = true) do something

// create password => at least 6 char,
let password = "password";
if (password.length >= 6) {
  // submit()
  // console.log('Valid password',  password.length)
} else {
  // error message
  // console.log('Password should be at least 6 char.',  password.length)
}

// A program that determines whether a given number is positive or negative.
// input to get user age
let userAge = -10;

if (userAge >= 0) {
  // console.log(`${userAge} is valid (Positive)`)
} else {
  // console.log(`${userAge} is not valid (Negative)`)
}

// checks if a number is even or odd
let num = 5;
// % Modulus the rest of division
// check if the number has no rest of division on 2

if (num % 2 === 0) {
  // console.log(`${num} is even`)
} else {
  // console.log(`${num} is odd`)
}

// calculates the ticket price based on age with the following conditions:
// age below 12 pay a ticket price of 5,
// age below 18 pay a ticket price of 10,
// age below 60 pay a ticket price of 20,
// age over 60 play a ticket price of 15.

let age = 60;

if (age < 12) {
  // console.log('ticket price = 5')
} else if (age < 18) {
  // console.log('ticket price = 10')
} else if (age < 60) {
  // console.log('ticket price = 25')
} else if (age >= 60) {
  // or just use else
  // console.log('ticket price = 15')
}

// assigns a letter grade based on a numerical grade.
// 85 => A 80 => B 70 => C 60 => D or else
let score = 90;
let grade;
if (score >= 85) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}

// console.log('grade', grade)

// Time of Day Greeting
// check current hour
// before 12 PM => Good morning
// 12 PM => 16 => Good Afternoon
// after 15 to 24 => Good evening
let currentHour = new Date().getHours()
let greeting = "Hello!"

if(currentHour < 12){
  greeting = "Good Morning"
} else if (currentHour < 16){
  greeting = "Good Afternoon"
} else if(currentHour >= 16 && currentHour <= 24) {
  greeting = "Good Evening"
}

console.log(greeting)

// Convert Day to String
// 0 sun  7 Sat
let today = new Date().getDay();
let todayString;

switch (today) {
  case 0:
    todayString = "Sunday";
    break;
  case 1:
    todayString = "Monday";
    break;
  case 2:
    todayString = "Tuesday";
    break;
  case 3:
    todayString = "Wednesday";
    break;
  case 4:
    todayString = "Thursday";
    break;
  case 5:
    todayString = "Friday";
    break;
  case 6:
    todayString = "Saturday";
    break;
  default:
    console.log('this is not a day value', today)
    break;
}
console.log("today", todayString);

//  Determine Leap Year

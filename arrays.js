// Array is a special type of Object, its keys Index
const cars = ["Fiat", "Lada", "Volvo", "BMW"]
const carsObj = {
  0: "Fiat",
  1: "Lada",
  2: "Volvo",
  3: "BMW"
}

// get element by Index
let car0 = cars[0]
let car1 = cars[1]
let car2 = cars.at(2)

// get array length
let carsLength = cars.length

// get last item from array
let lastCar = cars[carsLength - 1]

// Array can contain different data types
const mixedArr = ["car", 5, {name: "Volvo", color: "white"}]

// create array by new
const fruits = new Array("apple", "grabs", "banana")

// Array to String
let fruitsString = fruits.toString() //apple,grabs,banana
let fruitsString2 = fruits.join(" - ") //apple-grabs-banana

// add at the end of array
fruits.push("mango")


// add at the begging of array
fruits.unshift("tomato")

// delete element or more by index
// fruits.splice(2,1) //['Tomato', 'apple','banana','Mango']

// splice (index of start, length of delete, strings to add)

// add element or more by index
fruits.splice(2,0, "lemon", "orange") // ['Tomato', 'apple','Lemon', 'Orange','grabs',  'banana','Mango']
const newFruitsArr = fruits.slice(2,4) //  [ 'Lemon', 'Orange' ]

//sort alphabetic 
fruits.sort()
fruits.reverse()


// copyWithin
//fruits.copyWithin(2,0,2) //["Tomato", "apple", "Tomato", "apple", "Mango"]


//remove Element from the end
fruits.pop()

//remove element from the beginning
fruits.shift()

// remove element by index
// delete fruits[1] // delete grabs

const arr1 = [1,2,3,4]
const arr2 = [5,6,7,8]
const fullArr = arr1.concat(arr2) // [1,2,3,4,5,6,7,8]

const nestedArr = [[1,2,3], [3,4], [0,5,6]]
const flatArr = nestedArr.flat()// [ 1, 2, 3, 3, 4, 0, 5, 6]

let classNumber = [15, 30, 25, 80, 100, 35, 84]
/// sort numbers
classNumber.sort((a,b) => a - b) // [15, 25,  30, 35, 80, 84, 100]
classNumber.sort((a,b) => b - a) //  [ 100, 84, 80, 35, 30, 25, 15]

// loop on array
  // loop by index
    // classic for loop
for (let i = 0; i < fruits.length; i++ ){
  // console.log('classic', fruits[i])
}
    // modern loop
for (let fruitI in fruits){
  // console.log('in', fruits[fruitI])
}

// loop by values
for (let fruit of fruits){
  // console.log('fruit', fruit)
}

// if or switch O(n) 
// below solution O(1)

function dayToStringConvert(day){
  const daysArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  return daysArr[day] || "not valid day"
}


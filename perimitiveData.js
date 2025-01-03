//Numbers
let numberVariable = 5; // Number up to 15 digits
let bigNumber = BigInt(4646545666546546546546546565) // more than 15 digits
let decNumber = 3.14 //decimal
let numberE = 32e5 //3200000 e = 10^
let numberMinusE = 32e-5 //0.00032
let sum = 5 * 3 + 2 - 1 //16
let nan = 5 * "string" //NaN not a number => NaN type is number


// String
let stringName = "Ahmed" || 'Mina' || `Eman` //string

// Add string to string
let personName = "Taha"
let say = 'Ahmed said "Hello!"' // "Ahmed said \"Hello!\""

let greeting1 = 'Hello' + ' ' + personName + "! \n" // \n to start new line
let greeting2 = `Hello ${personName}` //easier way to add variables in text
let numberPlusString = 5 + " Hello" //"5 Hello" =>convert number if added to string

// get string length
let eYouth = "Hello in Frontend Deplume in session 3"
let eYouthLength = eYouth.length
let eYouthCharAt = eYouth.charAt(0) //H charAt(+) = at(+ -)
let eYouthSlice = eYouth.slice(5,8) // slice
let eYouthSub = eYouth.substring(5,8) // substring
let eYouthSplit = eYouth.split(" ") //split the text to array of strings
let eYouthJoin = eYouthSplit.join("-") //eYouth.split(" ").join("-")

let ignoreSpace = eYouth.trim() || eYouth.trimEnd() || eYouth.trimStart() //remove spaces before and after the text

//search in text
let frontEndIndex = eYouth.indexOf("Frontend") // index > 0 so the text exist
let inIndex = eYouth.lastIndexOf("in") // get last text index // = -1 so the text not exist

let searchIn = eYouth.search("in") //like indexOf get the first index
let matchIn = eYouth.match("in") // details about search
let matchAllIn = eYouth.matchAll("in"); // all In in the text

let capitalize = eYouth.toLocaleUpperCase()
let lowerCase = eYouth.toLocaleLowerCase()






let booleanVariable = true || false // boolean
let variable // undefined 



// stored in js stack
// assigned by value
let newNumber = numberVariable //assigned numberVariable value to new number
// console.log("newNumber before", newNumber)
newNumber = 6
// console.log("newNumber after", newNumber)
// console.log("numberVariable", numberVariable)
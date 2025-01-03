//Object key and Value data type => values can be any data type
// assign by reference
let person = {
  name: "Ahmed",
  age: 22,
  tech: true
}

let Abdo = person //assign by reference which not accepted

//assign by value
let newObj = {
  name: person.name,
  age: person.age,
  tech: person.tech
}
newObj.name= "Taha"
newObj.age = 25



//Array indexed data type 
let langArr = ["JavaScript", "C++", "Java"]
// let newLang = langArr // assign by reference
let newLangArr = [].concat(langArr) //assign by values
newLangArr.push("C#")

console.log('langArr', langArr)
console.log('newLangArr', newLangArr)
/** Array is a special case of Object which keys = index
 * {
 *  0: "JavaScript",
 *  1: "C++"
 * }
 */

let personsArr = [
  {
    name: "Ahmed",
    age: 22,
    tech: true
  },
  {
    name: "Mahmoud",
    age: 25,
    tech: true
  }
]

let arr = [
  [1, 2, 3],
  [4, 5, 6]
]


/// Date and Time


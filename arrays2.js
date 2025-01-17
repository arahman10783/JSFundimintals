const programmingLanguages = [
  {
    name: "JavaScript",
    firstPublishDate: "1995",
    lastAddition: "2021"
  },
  {
    name: "Python",
    firstPublishDate: "1991",
    lastAddition: "2021"
  },
  {
    name: "Java",
    firstPublishDate: "1995",
    lastAddition: "2021"
  },
  {
    name: "C++",
    firstPublishDate: "1985",
    lastAddition: "2020"
  },
  {
    name: "Ruby",
    firstPublishDate: "1995",
    lastAddition: "2020"
  },
  {
    name: "PHP",
    firstPublishDate: "1995",
    lastAddition: "2021"
  },
  {
    name: "Swift",
    firstPublishDate: "2014",
    lastAddition: "2021"
  },
  {
    name: "Go",
    firstPublishDate: "2009",
    lastAddition: "2021"
  }
];

// sorted array
let sortedArray = programmingLanguages.toSorted((a,b) => a.firstPublishDate - b.firstPublishDate )

// new Array contain languages names that published before 2000
// let length = programmingLanguages.length
// let newArr = []
// for(let i = 0; i< length; i++){
//   if (programmingLanguages[i].firstPublishDate < 2000){
//     newArr.push(programmingLanguages[i].name)
//   }
// }

let before2000Langs = []
for(let lang of programmingLanguages){
  // if (lang.firstPublishDate < 2000){
  //   before2000Langs.push(lang.name)
  // }
  // lang.firstPublishDate < 2000 ? before2000Langs.push(lang.name) : false
  lang.firstPublishDate < 2000 && before2000Langs.push(lang.name)
}

// copy from the array
// spread operator [...array] {...obj}
let arrayCopy = [...programmingLanguages]
// for(let lang of programmingLanguages){
//   arrayCopy.push(lang)
// }

// Destructing
// new Array where firstPublishDate > 1990
let langsAfter1990 = []
// for (let {name, firstPublishDate} of programmingLanguages){
//   firstPublishDate > 1990 &&  langsAfter1990.push(name)
// }

programmingLanguages.forEach(({name, firstPublishDate}) => firstPublishDate > 1990 &&  langsAfter1990.push(name))


//Array Iterators 
// Arr.func(func) Arr.func((el, index) => el)

//forEach
let numbersPlusFive = []
let numbers = [45,30,8,9,25]
// function addFiveFn(num) {
//   numbersPlusFive(num + 5)
// }
// numbers.forEach(addFiveFn)
numbers.forEach((element) => numbersPlusFive.push(element + 5)) // return new array

//.map => return new array
function mapCallBack(el) {
  return el //el.name
}
// const newLangsArr = programmingLanguages.map(mapCallBack)

const newLangsArr = programmingLanguages.map((lang) => lang)
// value from object
const newLangNamesArr = programmingLanguages.map((lang) => lang.name) 
//or destructing
const newLangNamesArrDestruct = programmingLanguages.map(({name}) => name) 
//Array of objects without lastVersion
const newLangArrNoLastAdd = programmingLanguages.map(({name, firstPublishDate}) => {
  //replace {return {}} with ({})
  return {
    name, // name: name
    firstPublishDate // firstPublishDate : firstPublishDate
  }
})

// .filter return new array with condition filter(fn)
// new array of langs published after 2000

//  function filterByPublishedDate (lang){
//   if(lang.firstPublishDate > 2000){
//     return lang
//   }
//  }

// const filterByPublishedDateArrow = (lang) => lang.firstPublishDate > 2000 && lang
// const filteredLangs2000 = programmingLanguages.filter(filterByPublishedDate)

// const filteredLangs2000 = programmingLanguages.filter((lang) => lang.firstPublishDate > 2000 && lang.name)
const filterBy2000 = (lang => lang.firstPublishDate > 2000)

const filteredLangs2000 = programmingLanguages.filter(filterBy2000)


// Find return one element of array
const selectGoObj = programmingLanguages.find((lang) => lang.name === 'Go')


//Reduce 2 arguments, callback fn & default value
const foods = [
  {food: "Meat", calory: 800},
  {food: "Fruits", calory: 200},
  {food: "Vegetables", calory: 100},
  {food: "Fries", calory: 300},
  {food: "Ice Kream", calory: 700}
  ];
  
  let caloriesSum = 0
  for (let food of foods){
    caloriesSum += food.calory  //caloriesSum = caloriesSum + food.calory
  }

  const caloriesSumReduce = foods.reduce((sumCalories, food) => {
    return sumCalories += food.calory
  }, 0)

  const caloriesSumReduceD = foods.reduce((sumCalories, {calory}) => {
    return sumCalories += calory
  }, 0)


  const cars = ['Mercedes', 'Jeep', 'Ferrari', 'Lamborghini', 'Mercedes', 'BMW', 'Ferrari']
  let carsObj = {}
  for(let car of cars){
    car in carsObj ? carsObj[car] += 1 : carsObj[car] = 1
    // if(car in carsObj){
    //   carsObj[car] += 1
    // }else{
    //   carsObj[car] = 1
    // }
  }

  let carsObjReduce = cars.reduce((carsObj, car) => {
    car in carsObj ? carsObj[car] += 1 : carsObj[car] = 1
    return carsObj
  },{})



  // {javascript : "1995", "Java": "1995"}
let languagesFirstPublished = programmingLanguages.reduce((obj, lang) => {
  obj[lang.name] = lang.firstPublishDate
  return obj
}, {})
console.log('languagesFirstPublished', languagesFirstPublished)


const langObj = {
  JavaScript: '1995',
  'C++': '1985',
}

console.log( langObj.JavaScript)
console.log( langObj["C++"])
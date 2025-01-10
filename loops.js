// for loop
// check condition before loop
// i = the round number
// i <5 => condition to stop loop
// i++ => to increase 1 plus i

// i++ = i + 1
// i-- = i - 1

// console.log(`This is my first loop, round 1`)
// console.log(`This is my first loop, round 2`)
// console.log(`This is my first loop, round 3`)


for(let i = 0; i <5; i++){
  // console.log(`This is my first loop, round ${i}`)
}

// *
// **
// ***
// ****

for (let i = 1; i < 5; i++){
  // console.log('*'.repeat(i))
}


// 1-20  %3 => D3 %5 => D5  3 & 5 D

// for(let i = 1; i <= 20; i++){
//   if(i %3 === 0 && i %5 === 0){
//     console.log('i', "D3%=&5")
//   } else if (i %5 === 0){
//     console.log('i', "D5")
//   } else if(i %3 === 0 ) {
//     console.log('i', "D3")
//   }else {
//     console.log('i', i)
//   }
// }

// let i = 1
// while(i < 5){
//   console.log(i)
//   i++
// }

// do {
// console.log('i', i)
// i++
// } while(i > 5)

//break
for(let i = 1; i < 8; i++){
  if(i %4 === 0) break; // if(i %4 === 0){break}
  console.log('ii', i)
}
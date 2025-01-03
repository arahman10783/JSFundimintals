let now = new Date()
let firstSession = new Date("Mar 25 2024")
let fullYear = now.getFullYear()
let UTCtime = now.getTimezoneOffset()

let stringDate = now.toDateString() //Fri Jan 03 2025
let localDate = now.toLocaleDateString() //1/3/2025
let localTime = now.toLocaleTimeString() //9:50:30 PM
let localString = now.toLocaleString() //1/3/2025, 9:51:53 PM
let dateString = now.toDateString()



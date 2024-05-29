// Date Object Date(year, month, day, hour, minuts, secondes, ms)
const date = new Date();
console.log(date);

const date1 = new Date(2024, 0, 1, 2, 3, 4, 5);
console.log(date1); 

const date2 = new Date("2024-01-02T12:00:00Z");
console.log(date2);

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconde = date.getSeconds();
const dayOfWeek = date.getDay();
console.log(dayOfWeek);

const date3 = new Date("2023-12-31");
const date4 = new Date("2024-01-01");
if (date4 > date3){
    console.log("HAPPY NEW YEAR!")
}
else {
    console.log("Not yet new year.")
}

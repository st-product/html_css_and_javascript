// Callback

//.forEach()
let numbres = [1, 2, 3, 4, 5];

numbres.forEach(square);
numbres.forEach(display);

function display(element){
    console.log(element);
}
function double(element, index, array){
    array[index] = element * 2;
}

function square(element, index, array){
    array[index] = Math.pow(element, 2);
}

let fruits = ["apple", "orange", "banan"];
fruits.forEach(upperCase);
fruits.forEach(display);

function upperCase(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

// .map()
const nums = [1, 2, 3, 4, 5, 6, 7];
const numsDouble = nums.map(double);
const numsCube = nums.map(cube);
console.log(numsDouble);
console.log(numsCube);

function double(element) {
    return element * 2;
}

function cube(element) {
    return Math.pow(element, 3);
}

const names = ["Spongebob", "Patrick", "Sandy"];
const namesUpper = names.map(upperCase);
console.log(namesUpper);

function upperCase(element){
    return element.toUpperCase();
}

const dates = ["2024-1-10", "2025-2-20"];
const formattedDate = dates.map(formatDate);
console.log(formattedDate);

function formatDate(element){
    let parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

// .filter()
const neWnums = [1, 2, 3, 4, 5, 6, 7];
const newEvenNums = neWnums.filter(isEven);
console.log(newEvenNums);

function isEven(element){
    return element % 2 === 0;
} 

const ages = [16, 17, 18, 18, 19, 20, 26];
const adults = ages.filter(isAdult);
console.log(adults);

function isAdult(element){
    return element >= 18;
}

// .reduce
const lastnums = [1, 2, 3, 4, 5, 6];
const total = lastnums.reduce(totals);
const max = lastnums.reduce(maxNum);
console.log(total);
console.log(max);

function totals(accumulator, element){
    return accumulator + element;
}

function maxNum(accumulator, element){
    return Math.max(accumulator, element);
}

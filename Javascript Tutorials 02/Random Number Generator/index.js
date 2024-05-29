// Math functions
/*
console.log(Math.PI);
console.log(Math.round(2.1));
console.log(Math.floor(2.99));
console.log(Math.ceil(3.0));
console.log(Math.trunc(4.999));
console.log(Math.pow(4,3));
console.log(Math.sqrt(16));
console.log(Math.log(10));
console.log(Math.sin(0));
console.log(Math.abs(-23.7));
console.log(Math.sign(-400));
console.log(Math.max(1,2,3));
console.log(Math.min(5,-4,-9)); */


//Generate a random number

let x = Math.floor(Math.random() * 6) + 1;
console.log(x);

// number from 50 t0 100
let min = 50;
let max = 100;
let y = Math.floor(Math.random() * ( max - min )) + min;
console.log(y);

// html page

const mySubmit = document.getElementById("mySubmit");
const myP = document.getElementById("myP");
let dice;
count = 0
mySubmit.onclick = function (){
    dice = Math.floor( Math.random()* 6) + 1;
    
    count ++;
    //myP.textContent = `Number or rolls is ${count}, and dice number is: ${dice}`;
    myP.textContent = `Dice number: ${dice}`;
}



// function expression

const hello = function(){
    console.log("Hello");
}
hello();
setTimeout(function(){
    console.log("Hello 2");
}, 3000);

let n = [1, 2, 3];
let sq = n.map(function(element){
    return Math.pow(element, 2);
});
console.log(sq);
const sqaure = function(element){
    return Math.pow(element, 2);
}


// Arrow Function
const greetings = ()=>{
    console.log("Hello 3");
}

greetings();

const numbers = [1, 2, 3, 4, 5, 6];
const squarenumbers = numbers.map((element)=> Math.pow(element, 2));
console.log(squarenumbers);
const evenNumbers = numbers.filter((element)=> element % 2 ===0);
console.log(evenNumbers);
const total = numbers.reduce((accumulator, element)=> accumulator + element);
console.log(total);








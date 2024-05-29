// Numbers

const myNumber=42;
console.log(myNumber);

const myFloat=42.01;
console.log(myFloat);

//const myString="42.1";
//const myString="42.123abc";
//console.log(Number.parseFloat(myString));
const myString="42abc";
console.log(myString);

console.log(myNumber === myString);
console.log(myString+3);
// Number is used to convert Strings to Numbers
console.log(Number(myString));

//Number Methods
console.log(Number.isInteger(myFloat));
console.log(Number.parseFloat(myString));
console.log(myFloat.toFixed(1)); //return a string data
console.log(Number.parseFloat(myFloat.toFixed(2)));
console.log(Number.parseInt(myString)); 
console.log(myFloat.toString());

console.log(Number.isNaN("Steve"));
//console.log(Number.isNaN(12));
console.log(isNaN("Steve"));



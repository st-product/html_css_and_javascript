// Wrtite a program that will return a random letter from your name

const myName="Steve";
const i=Math.floor(Math.random()*5);
console.log(i);
console.log(myName.charAt(i));

//Correction
console.log("Steve".charAt(Math.floor(Math.random()*5)));

console.log("Steve".charAt(Math.floor(Math.random()*"Steve".length)));

// final
const anyName="ATIOFACK";
console.log(anyName.charAt(Math.floor(Math.random()*anyName.length)));


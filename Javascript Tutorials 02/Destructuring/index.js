// Destructuring
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(b);

const colors = ["red", "green", "blue", "white"];
[colors[0], colors[3]] = [colors[3], colors[0]];
console.log(colors);

const [firstColor, secondColor, ...extraColors] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(extraColors);

const person1 = {
    firstName: "Patrick",
    lastName: "Sandy",
    age: 30,
    job: "Fry Cook",
}
const person2 = {
    firstName: "pongebob",
    lastName: "Bro",
    age: 34,
}
const {firstName, lastName, age, job = "unemployed"} = person1;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

function displayPerson({firstName, lastName, age, job = "unemployed"}){
    console.log(firstName);
    console.log(lastName);
    console.log(age);
    console.log(job);
}

displayPerson(person2);

const names = `["Songebob", "Patric", "Paul"]`;
const person = `{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Eat", "Sleep", "Code"]
}`;
const people = `[
    {
        "name": "Spongebob",
        "age": 30,
        "isEmployed": true
    },
    {
        "name": "Patiric",
        "age": 27,
        "isEmployed": false
    },
    {
        "name": "John",
        "age": 35,
        "isEmployed": true
    }
]`;

/*
const jsonNames = JSON.stringify(names);
const jsonPerson = JSON.stringify(person);
const jsonPeople = JSON.stringify(people); */

const jsonNames = JSON.parse(names);
const jsonPerson = JSON.parse(person);
const jsonPeople = JSON.parse(people);
console.log(jsonNames);
console.log(jsonPerson);
console.log(jsonPeople);

fetch("names.json")
    .then(response => response.json())
    .then(value => console.log(value));

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach((value) =>{
        console.log(value);
    }));

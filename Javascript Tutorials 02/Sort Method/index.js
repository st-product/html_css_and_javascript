// Sort Method
let fruits = ["orange", "pineapple", "banana", "apples"];
fruits.sort();
console.log(fruits);

let numbers = [20, 2, 1, 9, 4, 7, 0];
numbers.sort((a, b) => a - b);
console.log(numbers);

const people = [{name: "John", age: 27, gpa: 2.0}, 
                {name: "Patrick", age: 17, gpa: 2.4}, 
                {name: "Sandy", age: 30, gpa: 3.5}, 
                {name: "Peter", age: 34, gpa: 4.0}];

people.sort((a, b) => a.age - b.age);
console.log(people);

people.sort((a, b) => b.gpa - a.gpa);
console.log(people);

people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);

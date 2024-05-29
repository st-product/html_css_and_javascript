// Nexted Objects
class Person {
    constructor(firstName, lastName, age, hobbies, ...address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.hobbies = new Array(...hobbies);
        this.address = new Address(...address);
    }
}

class Address {
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const address1 = new Address("street1", "city1", "country1");
const person1 = new Person("Johnson", "Patrick", 20, ["red", "green", "blue"], address1.street, address1.city, address1.country);  
console.log(person1);
console.log(person1.hobbies[2]);
console.log(person1.address);
console.log(person1.address.city);

// Arrays of Objects
const fruits = [{name: "apple", color: "red", calories: 95}, 
                {name: "orange", color: "orange", calories: 45}, 
                {name: "banana", color: "yellow", calories: 105}, 
                {name: "coconut", color: "white", calories: 159}, 
                {name: "pineapple", color: "yellow", calories: 37}];

console.log(fruits);
fruits.push({name: "apple", color: "red", calories: 95});
fruits.pop();
//fruits.splice(1,2);
console.log(fruits);

fruits.forEach(fruit => console.log(fruit));

const fruitsNames = fruits.map(fruit => fruit.name);
console.log(fruitsNames);
const fruitsColors = fruits.map(fruit => fruit.color);
console.log(fruitsColors);

const yelloFruits = fruits.filter(fruit => fruit.color === "yellow");
console.log(yelloFruits);
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
console.log(lowCalFruits);

const maxFruit = fruits.reduce((max, fruit) => max.calories > fruit.calories? max : fruit);
console.log(maxFruit);  

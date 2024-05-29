// Objcts

const person1 = {
    firstName: "Steve",
    lastName: "St",
    greet : function(){
        console.log("Hello here! ");
    },
    isEmployed: true,
    eat: ()=> console.log(" I am eating"),
}

person1.greet();
console.log(person1.firstName);
person1.eat();

const person2 = {
    firstName: "Patrick",
    age: 19,
    greet: function(){
        console.log(`${this.firstName} is ${this.age} year old.`);
    }
}

person2.greet();

//Constructor
function Names(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.drive = function(){
        console.log(`Your name is ${this.firstName}`);
    }
}

const person3 = new Names("Sandy", "Patrick");
console.log(person3.firstName + " " +person3.lastName);
person3.drive();

// Class

class Person {
    constructor(firstName, age){
        this.firstName = firstName;
        this.age = age;
    }

    display(){
        console.log(`Hello ${this.firstName} you are ${this.age} years old`);
    }
     answer(value){
        return value;
     }
}

const person4 = new Person("Sandy", 18);
const answer = person4.answer(true);
console.log(person4.firstName);
person4.display();
console.log(`are you a male? ans: ${answer}`);

// Static
class Student {
    static name = "John";
    static count = 0;
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        Student.count ++;
    }
    static hello(){
        console.log(`Hello mr. ${this.name}`);
    }

}

Student.hello();
console.log(Student.name);
const students1 = new Student("Paul", "Peter", 16);
const students2 = new Student("Paulio", "Peterson", 26);
console.log(Student.count);

console.log(students1.firstName);

class MathUtil1 {
    static PI = 3.14159;
    raduis(diameter){
        return diameter / 2;
    }
    static area(diameter){
        const area = this.PI * diameter * diameter;
        return `The area is ${area} cm2`;
    }
}

const raduis = new MathUtil1();
let r = raduis.raduis(10);
console.log(MathUtil1.area(r))
console.log(r);

class MathUtil{
    static PI = 3.14159;
    static getDiameter(raduis){
        return raduis * 2;
    } 
    static getCircumference(radius){
        return 2 * this.PI * radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));

class Students {
    static count = 0;
    constructor(firstName, age){
        this.firstName = firstName;
        this.age = age;
        Students.count++;
    }
    static online(){
        console.log(`There are ${this.count} students online`);
    }
}

const st1 = new Students("John", 3);
const st2 = new Students("John", 3);
Students.online();

// Inheritance
class Animal{
    alive = true;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    run(speed){
        console.log(`This ${this.name} is running at ${speed} mph.`);
    }
}

class Rabbit extends Animal {
    constructor(name, age, speed){
        super(name, age);
        this.speed = speed;
    }
    
    move(){
        super.run(this.speed);
    }

}

const rabbit1 = new Rabbit("rabbit", 4, 11);
rabbit1.move();
console.log(rabbit1.alive);

// Getters and Setters
class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(neWidth){
        if(neWidth > 0){
            this._width = neWidth;
        }
        else{
            console.error("Width must be a positive number");
        }
    }
    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Hieght must be a positive number");
        }
    }

    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }
    get area(){
        return this._width * this._height;
    }

}

const rectangle = new Rectangle( 10, 20);
console.log(rectangle.area);

class User{
    constructor(userName, userAge){
        this.userName = userName;
        this.userAge = userAge;
    }

    set userName(newUserName){
        if(typeof newUserName === "string" && newUserName.length > 0){
            this._userName = newUserName;
        }
        else{
            console.log("User name cannot be an empty string.");
        }
    }
    set userAge(newUserAge){
        if(typeof newUserAge === "number" && newUserAge > 0){
            this._userAge = newUserAge;
        }
        else{
            console.log("User age must be a number greater than zero.");
        }
    }

    get userName(){
        return this._userName;
    }
    get userAge(){
        return this._userAge;
    }
    get fullNameInfo(){
        return `NameInfo: ${this._userName}, AgeInfo: ${this._userAge}`;
    }
}

const user1 = new User ("Songebob", 20);
console.log(user1.fullNameInfo);
// Objects
/* 
const obj = {
    name: "Steve"
};

console.log(obj.name);

const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ["Sleep", "Eat", "Drink"],
    beverages: {
        morning: "Coffee",
        afternoon: "Iced Tea"
    },
    action: function () {
        return `Time for ${this.beverages.morning} !`;
    }
};

console.log(anotherObj["alive"]);
console.log(anotherObj.action()); */
/* 
const vehicle = {
    wheels: 4,
    engine: function () {
        return "Vrooom!";
    }
};

console.log(vehicle.engine);

const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck.engine); 

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () { return "Woshhhhh!"; }
console.log(car.engine());

const tesla = Object.create(car);
tesla.engine = function () { return "Shhhhh!"; }
console.log(tesla.engine()); */


const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};

/* delete band.drums;
console.log(Object.hasOwnProperty("drum"));
console.log(Object.hasOwnProperty("bass"));
console.log(Object.keys(band));
console.log(Object.values(band));

for (let job in band) {
    // console.log(`On ${job}, it's ${band[job]}`);
    console.log(band[job]);
} */

//destructuring objects

const {vocals: myVaraible, bass: myGuitar} = band;
console.log(myGuitar);

function sings ({vocals}) {
    return `${vocals} sings!`;
}

console.log(sings(band));

class Pizza {
    constructor (pizzaType) {
        this.size="medium";
        this.crust="original";
        this.type=pizzaType;
    }
    bake () {
        console.log(`${this.type} Baking a ${this.size} ${this.crust} crust pizza`);
    }
    getpizzaCrust(){
        return this.crust;
    }
    setpizzaCrust(){
        this.crust=pizzaCrust;
    }
}
const myPizza=new Pizza("pepperoni");
const myPizza1 = new Pizza ();
myPizza1.bake();
myPizza.pizzaCrust=sauage;

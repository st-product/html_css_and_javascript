// Javascript Classes
class Pizza {
    constructor(pizzaType, pizzaSize){
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = "original";
        this.toppings = [];
    }
    /* get pizzaCrust(){
        return this.crust;
    }
    set pizzaCrust(pizzaCrust){
        this.crust=pizzaCrust;
    } */
    getCrust(){
        return this.crust;
    }
    setCrust(pizzaCrust){
        this.crust=pizzaCrust;
    }
    getToppings(){
        return this.toppings;
    }
    setToppings(topping){
        this.toppings.push(topping);
    }
    bake(){
        console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza`);
    }
}

const myPizza = new Pizza("pepperoni", "small");
myPizza.bake();
myPizza.type = "supreme";
console.log(myPizza.type);
//myPizza.pizzaCrust = "sausage";
myPizza.setCrust("sausage");
//console.log(myPizza.pizzaCrust);
console.log(myPizza.getCrust());
myPizza.bake();
myPizza.setToppings("Sausages");
myPizza.setToppings("Olives");
console.log(myPizza.getToppings());


class Piza{
    constructor(pizaSize){
        this.size = pizaSize;
        this.crust = "original";
    }
    getCrust(){
        return this.crust;
    }
    setCrust(pizaCrust){
        this.crust = pizaCrust;
    }
}

class SpecialtyPiza extends Piza {
    constructor(pizaSize){
        super(pizaSize);
        this.type = "The Works";
    }
    slice(){
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
    }
}

const mySpecialty = new SpecialtyPiza("meduim");
mySpecialty.slice();

class Pizas {
    crust = "original";
    #sauce = "traditional";
    #size;
    constructor(pizasSize){
        this.#size = pizasSize;
    }
    getCrust(){
        return this.crust;
    }
    setCrust(pizasCrust){
        this.crust = pizasCrust;
    }
    hereYouGo(){
        console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza`);
    }
}

const myPizas = new Pizas("large");
myPizas.hereYouGo();
console.log(myPizas.crust)
console.log(myPizas.getCrust())
//console.log(myPizas.#sauce)
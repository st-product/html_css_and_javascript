//Error
"use strict";
const variable = "Dave";
//Object..create();
/* const makeError = () => {
    try{
        const name = "Dave";
        name = "Joe";
    } catch (err){
        console.log(err);
        //logTheError(err.stack);
    }
};

makeError(); */

const makeError = () => {
    try{
        throw new /* custom */Error("This is a custome Error!");
    } catch (err){
        console.log(err.name);
        console.log(err.message);
        console.log(err.stack);
        
    }
};

makeError();
/* function customError(message){
    this.message = message;
    this.name = "CustomError";
    this.stack = `${this.name}: ${this.message}`;
} */

const makeAError = () =>{
    let i=1;
    while(i<=5){
        try{
            if(i % 2 !== 0){
                throw new Error("Odd number!");
            }
            console.log("Even number!");
        } catch(err) {
            console.log(err.stack);
        } finally{
            console.log("...finally");
            i++;
        }
    }
};

makeAError();

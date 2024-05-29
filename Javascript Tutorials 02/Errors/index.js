// Errors
/* try{
    console.log(x);
}
catch(error){
    console.error(error);
}
finally{
    console.log("this always executes.");
} */

try{
    const dividend = Number(window.prompt("Enter the dividend: "));
    const divisor = Number(window.prompt("Enter the divisor: "));

    if(divisor == 0){
        throw new Error("You can't divided by zero");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be numbers");
    }
    const result = dividend / divisor;
    console.log(result);
}
catch(error){
    console.error(error);
}

console.log("You have reached the end");
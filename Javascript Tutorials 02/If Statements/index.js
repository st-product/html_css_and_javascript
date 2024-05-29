// If statement

let age; 
if(age >= 100){
    console.log("You are a BOOMER!");
}

else if(age >= 18) {
    console.log("You have access to the site");
}
else if(age > 0) {
    console.log("You don not have access to the site");
}
else if(age === 0){
    console.log("You are just born");
}
else if(age < 0){
    console.log("Your age cannot be less than 0");
}
else{
    console.log("You entered a wrong data");
}


const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const myP = document.getElementById("myP");

let myAge;

mySubmit.onclick = function(){
    myAge = Number(myText.value);
    if(myAge >= 100){
        myP.textContent = "You are a BOOMER!";
    }
    
    else if(myAge >= 18) {
        myP.textContent = "You have access to the site";
    }
    else if(myAge > 0) {
        myP.textContent = "You don not have access to the site";
    }
    else if(myAge === 0){
        myP.textContent = "You are just born";
    }
    else if(myAge < 0){
        myP.textContent ="Your age cannot be less than 0";
    }
    else{
        myP.textContent = "You entered a wrong data";
    }
}




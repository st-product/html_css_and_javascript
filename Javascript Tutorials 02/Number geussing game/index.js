// Number geussing game

let number = Math.floor(Math.random() * 100 ) + 1;
let numberguest;
let i = 0;
let trying = true;
while(trying) {
    i++;
    numberguest = Number(window.prompt("Enter a number from 0 - 100, or enter -1 to exist the game."));
    if(numberguest === -1){ 
        window.alert("You have quit the game.");
        trying = false;
    }
    else if(number < numberguest){
        window.alert("You are above the number");   
    }
    else if ( number > numberguest){
        window.alert("You are below the number");
    }
    else{
        window.alert(`You had the right numberr ${number} with ${i} attempts`);
        trying = false;
    }
} //while ( number == numberguest);
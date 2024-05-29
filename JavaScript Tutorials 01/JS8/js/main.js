// Switch Statements

switch (Math.floor(Math.random()*2 + 1)) {
    case 1: 
        console.log(1);
        break;
    case 2: 
        console.log(2);
        break;
    default: 
        console.log("No match!");
}

// Rock, Papper, Scissor
let player="papper";
let computer="scissor";

switch (player) {
    case computer:
        console.log("Tie game!");
        break;
    case ("rock"):
        if (computer === "papper"){
            console.log("Computer Wins!");
        } else {
            console.log("Player Wins!");
        }
        break;
    case ("papper"):
        if (computer === "scissor"){
            console.log("Computer Wins!");
        } else {
            console.log("Player Wins!");
        }
        break;
    case ("scissor"):
        if (computer === "rock"){
            console.log("Computer Wins!");
        } else {
            console.log("Player Wins!");
        }
        break;
    default:
        console.log("Wrong Match!");
}
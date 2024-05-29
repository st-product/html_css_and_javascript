// Tenary Condition

let soup="Chicken noodle soup";
let isCustomerBand=false;
let response= isCustomerBand
    ? "Customer is band!"
    : soup
    ? "There's some soup today"
    : "We don't have soup today.";
console.log(response);

let testScore = 78;
let grade =
    testScore > 79
    ? "A"
    : testScore > 69
    ? "B"
    : testScore > 59
    ? "C"
    : testScore > 49
    ? "D"
    : "F";

console.log(grade);

// Rock, Papper, Scissor
let player = "papper";
let computer = "scissor";
/* player === computer
    ? console.log("Tie game")
    : player === "rock"
        ? computer === "papper"
          console.log("Computer Wins!")
        : console.log("Player Wins!")
    ? player === "papper"
        ? computer === "scissor" 
        ? console.log("Computer Wins!")
        : console.log("Player Wins!")
    ? player === "scissor"
        ? computer === "rock" 
        ? console.log("Computer Wins!")
        : console.log("Player Wins!")
    : console.log("Wrong Match!"); */

player === computer 
    ? console.log("Tie Game!")
    : player === "rock" && computer === "scissor"
    ? console.log("Player Wins!")
    : player === "papper" && computer === "rock"
    ? console.log("Player Wins!")
    : player === "scissor" && computer === "papper"
    ? console.log("Player Wins!")
    : console.log("Computer Wins!");
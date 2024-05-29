// Refactor the game part 1
let game = confirm("Shall we play rock, papper or scissor?");
if (game) {
        while(game){
        const playerOne = prompt("Please enter rock, papper or scissor.");
        if (playerOne || playerOne === "") {
            const playerChoice = playerOne.trim().toLowerCase();
            if (playerChoice === "rock" ||
            playerChoice === "scissor" ||
            playerChoice === "papper"
            ) {
            const computerChoice = Math.floor(Math.random() * 3);
            const rpsArray = ["rock", "papper", "scissor"];
            const computer = rpsArray[computerChoice];
                playerChoice === computer 
                    ? alert(`Player: ${playerChoice}\nComputer: ${computer}\nTie Game!`)
                    : playerChoice === "rock" && computer === "scissor"
                    ? alert(`Player: ${playerChoice}\nComputer: ${computer}\nPlayer Wins!`)
                    : playerChoice === "papper" && computer === "rock"
                    ? alert(`Player: ${playerChoice}\nComputer: ${computer}\nPlayer Wins!`)
                    : playerChoice === "scissor" && computer === "papper"
                    ? alert(`Player: ${playerChoice}\nComputer: ${computer}\nPlayer Wins!`)
                    : alert(`Player: ${playerChoice}\nComputer: ${computer}\nComputer Wins!`);
                    game = confirm("Do you want to play again?"); 
                    if (!game) alert("Ok Thanks for playing!");
                    continue;
            }
            else {
            alert(`You didn't enter 'rock', 'papper', or 'scissor'\nInstead: ${playerChoice}.`);
                continue;
            }
        } else {
            alert("I guest you change your mind!");
            break;
        }
    }
} else {
    alert("Ok maybe next time!");
}


// My first game
let game = confirm("Shall we play a game?");
if (game) {
    let player = confirm("let's play rock, papper or scissor.");
    if (player) {
        let playerOne = prompt("Enter: 'rock', 'papper' or 'scissor'.");
        playerChoice = playerOne.trim().toLowerCase();
        if (playerChoice === "rock" ||
            playerChoice === "scissor" ||
            playerChoice === "papper"
            ) {
                let computer = Math.floor() * 3 + 1;
                    computer === 1 
                    ? computer = "rock"
                    : computer === 2
                    ? computer = "scissor"
                    : computer = "papper";

                    playerChoice === computer 
                        ? alert(`Player: ${playerChoice}\nComputer: ${computer}\nTie Game!`)
                        : playerChoice === "rock" && computer === "scissor"
                        ? alert(`Player: ${playerChoice}\nComputer: ${computer}\nPlayer Wins!`)
                        : playerChoice === "papper" && computer === "rock"
                        ? alert(`Player: ${playerChoice}\nComputer: ${computer}\nPlayer Wins!`)
                        : playerChoice === "scissor" && computer === "papper"
                        ? alert(`Player: ${playerChoice}\nComputer: ${computer}\nPlayer Wins!`)
                        : alert(`Player: ${playerChoice}\nComputer: ${computer}\nComputer Wins!`);
                    let playAgain=confirm("Do you want to play again?");
                    playAgain 
                        ? location.reload()
                        : alert("Ok Thanks for playing");
            }
        else {
            alert(`You didn't enter 'rock', 'scissor', or 'papper'\nInstead: ${playerChoice}.`);
        }
    }
    else {
        alert("I guest you change your mind!");
    }
} else {
    alert("Ok maybe next time!");
}
// Refactor the game part 2

const intiGame = () => {
    const startGame = confirm("Shall we play rock, papper or scissor?");
    startGame ? playGame() : alert("OK, may be next time.");
};

// Game flow function
const playGame = () => {
    while (true) {
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice);
        if (playerChoice === "") {
            invalideChoice();
            continue;
        }
        if (!playerChoice) {
            decidedNotToPlay();
            break;
        }
        playerChoice = evaluatePlayerChoice(playerChoice);
        if (!playerChoice) {
            invalideChoice();
            continue;
        }
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
        //displayResult(result);
        if (askToPlayAgain()) {
            continue;
        } else {
            thanksForPlaying();
            break;
        }
    }
};

const getPlayerChoice = () => {
    return prompt("Please enter rock, papper or scissor");
};

const formatPlayerChoice = (playerChoice) => {
    if (playerChoice || playerChoice === "") {
        return playerChoice.trim().toLowerCase();
    } else {
        return false;
    }
};

const decidedNotToPlay = () => {
    alert("I guess you change your mind. may be next time.");
};

const evaluatePlayerChoice = (playerChoice) => {
    if (
        playerChoice === "rock" ||
        playerChoice === "papper" ||
        playerChoice === "scissor"
    ) {
        return playerChoice;
    } else {
        return false;
    }
};

const invalideChoice = () => {
    alert("You didn't enter 'rock', 'papper' or 'scissor'.");
}

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    const rpsArray = ["rock", "papper", "scissor"];
    return rpsArray[randomNumber];
};

const determineWinner = (player, computer) => {
    const winner =
        player === computer 
            ? alert(`Player: ${player}\nComputer: ${computer}\nTie Game!`)
            : player === "rock" && computer === "scissor"
            ? alert(`Player: ${player}\nComputer: ${computer}\nPlayer Wins!`)
            : player === "papper" && computer === "rock"
            ? alert(`Player: ${player}\nComputer: ${computer}\nPlayer Wins!`)
            : player === "scissor" && computer === "papper"
            ? alert(`Player: ${player}\nComputer: ${computer}\nPlayer Wins!`)
            : alert(`Player: ${player}\nComputer: ${computer}\nComputer Wins!`);

    return winner;
};

const displayResult = (result) => {
    alert(result);
};

const askToPlayAgain = () => {
    return confirm("Play Again?");
};

const thanksForPlaying = () => {
    alert("Ok. Thanks for playing.");
};

intiGame();

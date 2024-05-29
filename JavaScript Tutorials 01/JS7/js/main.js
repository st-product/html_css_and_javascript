// IF statements
let customerBand=false;
let cracker=true;
let soup="Chiken noodle soup";
if (customerBand){
    reply=`No soup for you`;
}else if (soup && cracker) {
    reply=`Here's is your order of ${soup} & crackers.`;
}
else if (soup) {
    reply=`Here's is your order of ${soup}.`;
} else {
    reply=`We're out of soup`;
}
console.log(reply);

//Conditions
let collegeStudent=true;
let testScore=69;
let grade;
if (testScore>=90){
    grade="A";
} else if (testScore>=80){
    grade="B";
}else if (testScore>=70){
    grade="C";
}else if (testScore>=60){
    grade="D";
} else {
    if(collegeStudent){
        grade="U";
    }else {
        grade="F";
    }
}

console.log(grade);

// Rock, Papper, Scissor game
let player="papper";
let computer="papper";
if (player === computer){
    console.log("Tie game!");
} else if ( player === "rock"){
    if (computer == "papper"){
        console.log(`computer wins with ${computer} over ${player}`);
    } else {
        console.log(`Player wins with ${player} over ${computer}`);
    }
} else if ( player === "scissor"){
    if (computer == "rock"){
        console.log(`computer wins with ${computer} over ${player}`);
    } else {
        console.log(`Player wins with ${player} over ${computer}`);
    }
} else if ( player === "paper"){
    if (computer == "scissor"){
        console.log(`computer wins with ${computer} over ${player}`);
    } else {
        console.log(`Player wins with ${player} over ${computer}`);
    }
}





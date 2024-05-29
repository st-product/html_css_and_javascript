// Switch Statement

let day = 6;

switch(day){
    case 1: 
        console.log("Monday");
        break;
    case 2: 
        console.log("Tuesday");
        break;
    case 3: 
        console.log("Wednesday");
        break;
    case 4: 
        console.log("Thursday");
        break;
    case 5: 
        console.log("Friday");
        break;
    case 6: 
        console.log("Saturday");
        break;
    case 7: 
        console.log("Sunday");
        break;
    default:
        console.log(`${day} is not a day!`);
}

let result =75;
let grade;
switch(true){
    case result>=90:
        grade="A";
        break;
    case result>=80:
        grade="B";
        break;
    case result>=70:
        grade="C";
        break;
    case result>=60:
        grade="D";
        break;
    default:
        grade="F";
}

console.log(grade);
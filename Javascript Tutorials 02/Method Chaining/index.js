// Method Chaining

//let username = window.prompt("Enter your username: ");
let username = "           BROCODE        ";
username = username.trim();
let firstLetter = username.charAt(0);
firstLetter = firstLetter.toUpperCase();
let secondLetter = username.slice(1);
secondLetter = secondLetter.toLowerCase();
console.log(firstLetter + secondLetter);

let newUser = "   STRINGPRODUCTION    ";
newUser = newUser.trim();
console.log(newUser.charAt(0).toUpperCase() + newUser.slice(1).toLowerCase());

//username = username.toUpperCase(username.charAt(0)) + username.toLowerCase(username.slice(1));
//console.log(username);
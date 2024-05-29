// While Loop

//let username ="";
let username;
do{
    username = window.prompt("Enter your username: ");
} while(username === "" || username === null)

console.log(`Hello ${username}`);

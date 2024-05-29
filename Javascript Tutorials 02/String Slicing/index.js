// String Slicing

const userName = "Bro Code";
console.log(userName.slice(0, 3));
console.log(userName.slice(4));
console.log(userName.slice(0, 1));
console.log(userName.slice(7));
console.log(userName.slice(-1));
console.log(userName.slice(-2));

const newUser = "Broseph Code";
console.log(newUser.slice(0, newUser.indexOf(" ")));
console.log(newUser.slice(newUser.indexOf(" ") + 1));

const email = "bro@gmail.com";
console.log(email.slice(0, email.indexOf("@")));
console.log(email.slice(email.indexOf("@")+1));
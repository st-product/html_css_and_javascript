// Inputs
/* alert("Hello word!");
let confir=confirm("OK===1 AND false==0");
console.log(confir); */
let user=prompt("Enter your name");
if (user) {
    console.log(user.length);
    console.log(user.trim().length);
    console.log(user.trim());
} else{
    console.log("You didn't enter a name");   
}
console.log(typeof(user));

/* let user=prompt("Enter your name");
user ? console.log(user) : console.log("You didn't enter a name"); */
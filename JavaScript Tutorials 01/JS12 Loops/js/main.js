// Loops
let counter = 0;
console.log("The while loop");
while (true) {
    counter++;
    if (counter === 6) break
    console.log(counter);
    
}
console.log("The do while loop");
do {
    console.log(counter);
    counter+=2;
} while (counter < 21);
console.log("The for loop")
let user="Steve";
for(let i = 0; i < user.length; i++) {
    if (i === 1) continue;
    console.log(user[i]);
}
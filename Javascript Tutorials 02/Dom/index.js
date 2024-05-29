// Dom
console.log(document);
console.dir(document);
document.title = "My website";
document.body.style.backgroundColor = "hsl(0, 0%, 15%)";
const username = "";
const welcomeMessage = document.getElementById("welcome-msg");
welcomeMessage.textContent += username === "" ? " Geust" : username;
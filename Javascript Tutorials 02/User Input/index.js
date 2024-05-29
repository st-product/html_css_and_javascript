// User Input

// let username = window.prompt("Ener your username:");
// console.log(username);

let username;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
}

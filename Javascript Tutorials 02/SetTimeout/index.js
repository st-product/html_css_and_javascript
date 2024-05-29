// SetTimeout

function sayHello(){
    window.alert("Hello");
}

//setTimeout(sayHello, 3000);
//setTimeout(()=> window.alert("Hello"), 3000);
/* setTimeout(function sayHello(){
    window.alert("Hello");
}, 3000); */

let timeoutId;

function startTimer(){
    timeoutId = setTimeout(() => window.alert("Hello"), 3000);
    console.log("Started");
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("Cleared");
}

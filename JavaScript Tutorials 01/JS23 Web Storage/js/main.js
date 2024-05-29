// Web Storage API
// Not part of the DOM, refers to the window API
// Available to JS via the global variable
/* 
alert("OK!");
window.alert("ok!");
alert(location);
window.alert(window.location); */

/* const myObject = {
    name: "Dave",
    logName: function (){
        console.log(this.name);
    }
};

const myArray = ["eat", "sleep", "code"];

sessionStorage.setItem("mySessionStore", myArray);
const mySessionData = sessionStorage.getItem("mySessionStore");
console.log(mySessionData); */

const myObject = {
    name: "Dave",
    hobbies: ["eat", "sleep", "code"],
    logName: function (){
        console.log(this.name);
    }
};

const myArray = ["eat", "sleep", "code"];

sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData);

/* localStorage.setItem("myLocalStorage", JSON.stringify(myArray));
const myLocalData = JSON.parse(localStorage.getItem("myLocalStorage"));
console.log(myLocalData); */

localStorage.setItem("myLocalStorage", JSON.stringify(myArray));
//localStorage.removeItem("myLocalStorage");
//localStorage.clear();
const key = localStorage.key(0);
const storeLength = localStorage.length;
const myLocalData = JSON.parse(localStorage.getItem("myLocalStorage"));
console.log(storeLength);

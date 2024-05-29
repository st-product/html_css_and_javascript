//

const element1 = document.getElementById("fruits");
const firstChild = element1.firstElementChild;
firstChild.style.backgroundColor = "yellow";

const element2 = document.getElementById("fruits")
const lastChild = element2.lastElementChild;
lastChild.style.backgroundColor = "yellow";

/* const element3 = document.getElementById("vegetables");
const nextSibling = element3.nextElementSibling;
nextSibling.style.backgroundColor = "yellow"; */

const element4 = document.getElementById("deserts");
const prevSibling = element4.previousElementSibling;
prevSibling.style.backgroundColor = "green";

const element5 = document.getElementById("apple");
const parent = element5.parentElement;
parent.style.backgroundColor = "green";

const element6 = document.getElementById("deserts");
const children = element6.children;
//console.log(children)

Array.from(children).forEach(child =>{
    child.style.backgroundColor = "yellow";
})

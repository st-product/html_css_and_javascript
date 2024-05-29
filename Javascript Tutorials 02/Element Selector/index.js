// Element Selector

const myH1 = document.getElementById("myH1");
myH1.style.backgroundColor = "yellow";
myH1.style.textAlign = "center";

const fruits = document.getElementsByClassName("fruit");
/* fruits[0].style.backgroundColor = "yellow";
for (let fruit of fruits){
    fruit.style.backgroundColor = "yellow";
} */

Array.from(fruits).forEach(fruit =>{
    fruit.style.backgroundColor = "yellow";
})

const h4Elements = document.getElementsByTagName("h4");
for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "blue";
} 

const element = document.querySelector(".fruit");
element.style.backgroundColor = "green"

const uls = document.querySelectorAll("ul");
uls.forEach(ul =>{
    ul.style.backgroundColor = "green";
})


// Modify html with js

// Step1 create element
const newH1 = document.createElement("h1");

//step2 add attributes/ properties
newH1.textContent = "I like Pizza";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// step3 append to Dom
//document.body.append(newH1);
//document.body.prepend(newH1);
//document.getElementById("box1").append(newH1);
//const box2 = document.getElementById("box2");
//document.body.insertBefore(newH1, box2);
//const boxes = document.querySelectorAll(".box");
//document.body.insertBefore(newH1, boxes[1]);
document.getElementById("box1").append(newH1);

//step4 remove element
//document.body.removeChild(newH1);
document.getElementById("box1").removeChild(newH1);

//step 1
const newListItem = document.createElement("li");

// step 2
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.backgroundColor = "lightgreen";
newListItem.style.fontWeight = "bold";

// ste 3
//document.body.append(newListItem);
const orange = document.getElementById("orange");
document.getElementById("fruit").insertBefore(newListItem, orange);

// step 4
//document.getElementById("fruit").removeChild(newListItem);



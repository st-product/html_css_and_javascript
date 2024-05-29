
let buttons = document.querySelectorAll(".myButton");

// Add html
buttons.forEach(button =>{
    button.style.backgroundColor = "green";
    button.textContent += "😁";
})

// Add EventListener
buttons.forEach(button =>{
    button.addEventListener("click", event =>{
        event.target.style.backgroundColor = "tomato";
    })
})

// mouseover nad mouseout
buttons.forEach(button =>{
    button.addEventListener("mouseover", event =>{
        event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
    })
})

buttons.forEach(button =>{
    button.addEventListener("mouseout", event =>{
        event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
    })
})

//Add new element
const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "myButton";
document.body.appendChild(newButton);

buttons = document.querySelectorAll(".myButton");

//remove Element
buttons.forEach(button =>{
    button.addEventListener("click", event =>{
        event.target.remove();
        buttons = document.querySelectorAll(".myButton");
        //console.log(buttons);
    })
})

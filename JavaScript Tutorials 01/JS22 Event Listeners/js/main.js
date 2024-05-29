//Events Listeners

// Syntax: addEventListener(event, function, useCaption)

/* const doSomething = () => {
    alert("Doing something");
};

h2.addEventListener("click", doSomething, false);
h2.removeEventListener("click", doSomething, false);

h2.addEventListener("click", (event) =>{
    console.log(event.target);
    event.target.textContent = "Clicked";
}); */

document.addEventListener("readystatechange", (event)=>{
    if(event.target.readyState==="complete"){
        console.log("readyState:complete");
        initApp();
    }
});

/* const initApp = () =>{
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event)=>{
        event.stopPropagation();
        view.style.backgroundColor="purple";
    }, true);
    div.addEventListener("click", (event)=>{
        div.style.backgroundColor="blue";
    }, true);
    h2.addEventListener("click", (event)=>{
        event.target.textContent="Clicked";
    }, true);
};
 */
const initApp = () =>{
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    /* view.addEventListener("click", (event)=>{
        
        view.style.backgroundColor="purple";
        // event.target.style.backgroundColor="purple"; 
    }, false);
    div.addEventListener("click", (event)=>{
        // event.stopPropagation(); 
        div.style.backgroundColor="blue";
        // event.target.style.backgroundColor="blue"; 
    }, false);
    h2.addEventListener("click", (event)=>{
        
        event.target.textContent="Clicked";
    }, false); */

    view.addEventListener("click", (event)=>{
        view.classList.toggle("purple");
        view.classList.toggle("darkblue");
    }, false);
    div.addEventListener("click", (event)=>{
        div.classList.toggle("blue");
        div.classList.toggle("black");
    }, false);
    h2.addEventListener("click", (event)=>{
        const myText = event.target.textContent;
        myText === "My 2nd View"
        ? (event.target.textContent="Clicked")
        :(event.target.textContent="My 2nd View");
    }, false);

    const nav = document.querySelector("nav");
    nav.addEventListener("mouseover", (event) => {
        event.target.classList.toggle("height100");
    });
    nav.addEventListener("mouseout", (event)=>{
        event.target.classList.remove("height100");
    });

    const view3 = document.querySelector("#view3");
    const myForm = view3.querySelector("#form");
    myForm.addEventListener("submit", (event)=>{
        event.preventDefault();
        console.log("submit event");
    });
};
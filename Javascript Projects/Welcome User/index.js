const myH1 = document.getElementById("myH1");

const mySubmit = document.getElementById("mySubmit");
//mySubmit();
/*
function mySubmit(){
    document.addEventListener("onclick",(event)=>{
        let textValue = `Hello ${myInput}.`;
        myH1.textContent = textValue;
        console.log(textValue);         
    } );    
} */

mySubmit.addEventListener("click", (event)=>{
    const myInput = document.getElementById("myInput").value;
    myH1.textContent = `Hello ${myInput}.`;
})
/*
function mySubmit () {
    let text =myInput;
    myH1.textContent = `Hello ${text}.`;
}*/
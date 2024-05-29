
const myTextBox = document.getElementById("myTextBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcuis = document.getElementById("toCelcuis");
const result = document.getElementById("result");

let temp;

function convert() {
    if(toFahrenheit.checked){
        temp = Number(myTextBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if (toCelcuis.checked) {
        temp = Number(myTextBox.value);
        temp = (temp - 32 ) * (5 / 9);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else {
        result.textContent= "Select a unit";
    }
}
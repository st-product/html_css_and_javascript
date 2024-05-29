// Checked Box

let myCheckBox = document.getElementById("myCheckBox");
let VisaBtn = document.getElementById("VisaBtn");
let MasterCardBtn = document.getElementById("MasterCardBtn");
let paypalBtn = document.getElementById("paypalBtn");
let mySubmit = document.getElementById("mySubmit");
let subscribeResult = document.getElementById("subscribeResult");
let paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subscribeResult.textContent = `You are subscribed!`;
    }
    else {
        subscribeResult.textContent = `You are not subscribed!`;
    }

    if(VisaBtn.checked){
        paymentResult.textContent = `You are paying with Visa`;
    }
    else if(MasterCardBtn.checked){
        paymentResult.textContent = `You are paying with Master Card`;
    }
    else if(paypalBtn.checked){
        paymentResult.textContent = `You are paying with Paypal`;
    }
    else {
        paymentResult.textContent = `You have not selected a payment method`;
    }
}
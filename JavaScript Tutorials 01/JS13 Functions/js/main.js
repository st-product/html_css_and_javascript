// Functions
function getUserNameFromEmail (email) {
    return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("atiofackst@getUserNameFromEmail.com"));

function sum(num1, num2){
    return num1+num2;
}
console.log(sum(3,5));

/* const difference = function (num1, num2){
    return num1 - num2;
} */
const difference = ( num1, num2) => {
    return num1 - num2;
}
console.log(difference(3,5));

const toProperCase = (userName) => {
    return userName.charAt(0).toUpperCase() + userName.slice(1,).toLowerCase();
}
console.log(toProperCase("STpRODuction"));


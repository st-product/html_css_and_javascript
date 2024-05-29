// String Methods

let userName = "Br oCode  ";

console.log(userName.charAt(3));
console.log(userName.indexOf("r"));
console.log(userName.lastIndexOf("o"));
console.log(userName.length);
userName = userName.trim();
console.log(userName.trim());
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.repeat(5));
console.log(userName.startsWith("B"));
console.log(userName.endsWith(" "));
console.log(userName.includes(" "));

let phoneNum = "123-456-7890";
console.log(phoneNum.replaceAll("-", "/"));
console.log(phoneNum.padStart(15, "0"));
console.log(phoneNum.padEnd(15, "$"))


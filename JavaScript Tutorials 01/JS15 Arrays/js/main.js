/* const myArray=[];
myArray[0]="Steve";
myArray[1]=1001;

console.log(myArray);
console.log(myArray.length);
console.log(myArray[myArray.length - 1]);
console.log(myArray[0]);
myArray.push(true);
console.log(myArray);
const lastItem=myArray.pop();
console.log(myArray);
console.log(lastItem);
myArray.unshift(42);
console.log(myArray);
const firstItem=myArray.shift();
console.log(myArray);
console.log(firstItem); */

/* const array1=["A", "B", "C", 'D', 'E', 'F'];
const array2= array1.slice(2, 5);
console.log(array1); */

/* delete(array1[1]); */
/* delete array2[1]; */

/* console.log(array2);
array1.reverse();
console.log(array1);
const array3=array1.join();
console.log(array3);
const array4=array3.split(",");
console.log(array4); */

/* Slice method */
/* const array1=["A", "B", "C", 'D', 'E', 'F'];
array1.splice(1,1);
console.log(array1);
array1.splice(1,1,42);
console.log(array1);
array1.splice(1,0,42);
console.log(array1); */
/* 
const myArrayA = ['A', 'B', 'C', 'D'];
const myArrayB = ['E', 'F', 'G', 'H'];
console.log(myArrayA.concat(myArrayB));
console.log([...myArrayB,...myArrayA]); */

const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tenis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hodies"];

console.log(equipShelfA[1]);
console.log(clothesShelfB[0]);

const equipDepart = [equipShelfA, equipShelfB];
const clothDepart = [clothesShelfA, clothesShelfB];

console.log(equipDepart);
console.log(clothDepart);

console.log(equipDepart[0][1]);
console.log(clothDepart[1][0]);

const sportStore = [equipDepart, clothDepart];

console.log(sportStore);
console.log(sportStore[0][0][1]);
console.log(sportStore[1][1][0]);
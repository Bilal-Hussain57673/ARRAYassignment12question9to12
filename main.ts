                      //   ASSIGNMENT 12 QUESTIONS AND ANSWERS  //

 // Q#01:Create an array named fruits that contains the following string elements: "apple", "banana", "mango", "orange".
let fruits:string[]=["mango","apple","banana","orange"];
console.log(fruits);

// Q#02: Declare an array named numbers that can contain only number elements and initialize it with the values 10, 20, 30, and 40.
let numberarray:number[]=[10,20,30,40];
console.log(numberarray);

// Q#03:Access the third element of the fruits array and assign it to a variable named thirdFruit.
let thirdFruit:string[]=["grapes","waterMelon","strawBurry","pineApple"];
console.log(thirdFruit[2]);

// Q#04: Change the second element of the numbers array to 25.
 const Numberarray=[5,15,35,45];
Numberarray.splice(1,1, 25);
console.log(Numberarray);

//Q#05: Add the element "grape" to the end of the fruits array using the method.
const fruit:string[]=["apples","mangoes","bananas"];
fruit.push("grape");
console.log(fruit);

//Q#06: Remove the last element from the fruits array using the method and assign it to a variable named lastFruit.

const lastFruit=["APPLE","MANGO","BANANA","ORANGE"];
lastFruit.pop();
console.log(lastFruit)

//Q#07:Remove the first element from the fruits array using the method and assign it to a variable named firstFruit.

const firstFruit=["APPLE","MANGO","BANANA","ORANGE"];
firstFruit.shift();
console.log(firstFruit);

//Q#08:Add the element "kiwi" to the beginning of the fruits array using the method.

const fruito=["grape","apple","mango"];
fruito.unshift("kiwi");
console.log(fruito);

//Q#09:Remove 2 elements from the fruits array starting from index 1 using the method.

const fruiti=["apple","mango","grapes","orange"];
fruiti.splice(1,2);
console.log(fruiti);

//Q#10:Insert the elements "pineapple" and "pear" at index 2 of the fruits array using the method.

const fruitu=["peach","dragonFruits"];
fruitu.splice(1,0,"pear","pineApple");
console.log(fruitu);

//Q#11:Create a new array named citrusFruits that contains the first two elements of the fruits array using the method.

const fruitss=["mango","apple","banana","orange"];
const citrusFruits=fruitss.slice(0,2);
console.log(citrusFruits);

//Q#12:Create a new array named lastTwoFruits that contains the last two elements of the fruits array using the method.

const fruitii=["orange","lemon","kiwi","watermelon"];
const lastTwoFruits = fruitii.slice(-2);
console.log(lastTwoFruits);

////// 12 QUESTIONS ASSIGNMENT COMPLETE //////
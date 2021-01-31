// Arrays - variables that hold multiple values
 
//Using an array constructor - less used
const numbers = new Array(1,2,3,4,5); //'new' is a constructor

console.log(numbers);

//For the most part this is the standard way to do it:
const fruits = ['Apple','Banana','Orange'];

console.log(fruits);

//in javascript I can use multiple data types in a single array
//const fruits =['Apple','Banana','Orange', 10, true];

console.log(fruits[1]); //Print 2nd value in array -Zero indexed in javascript

fruits[3] = 'Grapes';

console.log(fruits[3]);

/* Note: Array was initialized with const but we can still change/add values, use methodes on it, ect
What we cant do is reassign the array like this:
fruits = [];
*/

// Also thats how you do multi line comments ^

// With the fruits[3] example what if you didnt know how long the array was?
// Instead use the push method

fruits.push('Mangos'); // adds value to the end
fruits.unshift("Strawberries"); // adds to beggining
console.log(fruits);

//Removing the last value
fruits.pop();
console.log(fruits[2]); //pops mangos off

console.log(Array.isArray(fruits));

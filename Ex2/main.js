// Variables Introduction
// var, let, const
// var is not reccomended because it is globally scoped - could cause conflicts

let score = 0;
const p = 3.1415926535;

score = 1607;
score = 1702;

console.log(score);
console.log(p);

//Data Types
// Strings, Numbers, Boolean, null, Symbol

const username = 'Keiran';
const age = 25;
const rating = 4.9;
const isCool = true;
const x = null;
const y = undefined; // explicitly undefined.
let z; // Also undefined but not explicitly. Need to initalize with let.

console.log(typeof username); //returns string  
console.log(typeof age);      //returns number
console.log(typeof rating);   //returns number
console.log(typeof isCool);   //returns boolean
console.log(typeof x);        //returns object - boogus it is actually null 
console.log(typeof y);        //returns undefined
console.log(typeof z);        //returns undefined

//Concatenation (Old way)
console.log('My name is ' + username + ' and I am ' + age + ' years old.');

//Better way -  Template String. Use backticks instead of single quotes
console.log(`My name is ${username} and I am ${age} years old!`)

const intro = `My name is ${username}`;

console.log(intro);

const s = 'Hello Everyone!!';

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5)); // pull first 5 characters
console.log(s.substring(0,7).toUpperCase()); // you can chain them together
console.log(s.split('')); //Splits a sting into an array. '' splits each character.
// ["H","l","l","o"," ",....]
console.log(s.split('e')); //'e' splits string at each 'e' character.
// ["H","llo Ev","ryon","!!"]

//maybe not super useful here but could be useful for something like:

const t = 'technology, computers, it, code';
console.log(t.split(', '));

console.log(fruits.indexOf('oranges'));
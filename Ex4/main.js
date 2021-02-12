const person = { //Object
    firstName: 'Keiran',
    lastName: 'Sawatzky',
    age: 25,
    hobbies: ['Rock Climbing', 'Music', 'Coding'],
    address: { // Embedded Object
        number: 3054,
        street: 'Prentiss Road',
        city: 'Mississauga',
        province: 'Ontario'
    }
}

//alert(person); --> Just prints "object Object" to the alert. Not very useful

console.log(person);
console.log(person.firstName);
console.log(person.hobbies[0]);
console.log(person.address.street);

// What if I wanted to create variables out of this information?
const {firstName, lastName} = person;
console.log(firstName);

//for embedded object:
const {address: {city}} = person;
console.log(city);

//Add to object
person.email = 'keiransawatzky@gmail.com';
console.log(person);

//Arrays of objects
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist Appointment',
        isCompleted: false
    }
];

console.log(todos);
console.log(todos[1].text);

//Converting to JSON format

const todoJSON =JSON.stringify(todos);
console.log(todoJSON);


//LOOPS
//For Loops

for(let i = 0; i < 10; i++){
    console.log(`For Loop Number: ${i}`); //Remember back ticks for template string
}

// While Loops

let i  = 0;
while(i<10){
    console.log(`While Loop Number: ${i}`);
    i++;
}

// Looping through arrays
//Using a For loop (Not really the best way for this specific example

for(let i = 0; i < todos.length; i++){
    console.log(todos[i]); 
}

//Using For of Loop

for(let todo of todos){
    console.log(todo);
}

for(let todo of todos){
    console.log(todo.text);
}

//High Order Array Methods
//forEach, map, and filter

//forEach
todos.forEach(function(todo){
    console.log(todo.id);
});

//map
const todoText = todos.map(function(todo){ //returns an array
    return todo.text;
});
console.log(todoText);

//Filter
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
});
console.log(todoCompleted);

//Chaining Array Methods
const todoChain = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});
console.log(todoChain);




// # primitive data types

// 7 types of primtive
//string
// number
// boolearn
// null
// undefined
// symbol
// bigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol ('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 325516184641624n

// Referance (Non Primitive)

//array
// objects
// functions

const heros = ["shaktiman", "sanidual", "narendramodi"];
let myObj = {
    name: "Rajan",
    age : 24,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof anotherId);
console.log(typeof id);
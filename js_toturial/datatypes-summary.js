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

// console.log(id === anotherId);

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

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof scoreValue);
// console.log(typeof myFunction);
// console.log(typeof heros);
// console.log(typeof anotherId);
// console.log(typeof id);


//+++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) copyvalue, Heap (Non- primitive) refrence value or original value

let myYoutubename = "rajantiwari.com"


let anothername = myYoutubename
anothername = "balcakpubg"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "hellotiwari94@gmail.com",
    upi: "rajan@ybl"
}

let userTwo = userOne

console.log(userOne); // This console value is  declier value in let user one
console.log(userTwo); // this console value is equal user one value

userTwo.email = "rajan@gmail.com"

console.log(userOne.email); // This console value is change the email id
console.log(userTwo.email);
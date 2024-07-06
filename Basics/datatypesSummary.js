//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


/*

Type and typeof return value
number - number
string -  String
boolean - boolean
symbol - symbol
bigint - bigint
undefined - undefined
null - object
array - object
object - object
function - function
*/


// ***************************************************


// Stack (Primitive) ,  Heap (Non Primitive)
let myname = "Akshay Jha"
let anotherName = myname
anotherName = "Shubham"

// console.log(myname);
// console.log(anotherName);

let user = {
    email:"a@gmail.com",
    upi:"user@ybl"
}

let userTwo = user
userTwo.email = "ak@gmail.com"

console.log(user.email)
console.log(userTwo.email)
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

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

//-------------------------MEMORY ALLOCATION------------------------

/*
Stack -> primitive, Heap -> Non-primitive

let a = 6
b = a
console.log(b)
console.log(a)// a and b will be different
since they get defined in stack, when we write b=a it takes the copy of a not actual a

now,
let userOne = {
    email: "user@gmail.com",
    upiId: "sk@oksbi"
}

let userTwo = userOne; // here these userOne and two will be stored in heap and 
they are referencing to the same object 
if,
userTwo.email = "state@gmail.com" # it will get changed in both the places as they are referencing to same object or memory space

in short, Stack --> copy banata h
Heap --> Reference deta h















*/
// 🔸 Primitive Data Types
// Immutable hote hain, direct value store hoti hai (Stack memory)

const score = 100;                    // Number
const scoreValue = 100.3;            // Number (float bhi number hi hota hai)
const isLoggedIn = false;            // Boolean
const outsideTemp = null;            // null → special value, type "object" (JS ka bug)
let userEmail;                       // undefined → value assigned hi nahi
const id = Symbol('123');            // Symbol → unique value create karta hai
const anotherId = Symbol('123');

console.log(id === anotherId);       // false → Symbol hamesha unique hota hai

// const bigNumber = 12345678901234567890n; // BigInt → bade number ke liye (end me n)

// 🔸 Primitive Data Types: Total 7
// String, Number, Boolean, null, undefined, Symbol, BigInt

// ✅ Primitive → Stack memory me store hote hain (copy hoti hai value)


// 🔹 Non-Primitive (Reference) Data Types
// Array, Object, Function

const heros = ["shaktiman", "naagraj", "doga"]; // Array
let myObj = {
    name: "hitesh",
    age: 22
};                                              // Object

const myFunction = function(){
    console.log("Hello world");
};                                              // Function

// ✅ Reference types → Heap memory me store hote hain (reference pass hota hai)

console.log(typeof heros);       // object
console.log(typeof myObj);       // object
console.log(typeof myFunction);  // function (but technically object function)

console.log(typeof anotherId);   // symbol

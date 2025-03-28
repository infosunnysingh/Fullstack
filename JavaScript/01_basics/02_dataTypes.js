"use strict"; // treat all JS code as newer version

// ✅ Primitive Data Types (Stack Memory 🏗️)
let num = 10;         // number
let str = "Sunny";    // string
let isTrue = false;   // boolean
let notDefined;       // undefined
let empty = null;     // null
let id = Symbol("id");// symbol
let bigNum = 123n;    // bigint

// ✅ Non-Primitive (Reference) Data Types (Heap Memory 🏢)
let obj = { name: "Sunny", age: 25 }; // object
let arr = ["Apple", "Mango", "Banana"]; // array
function greet() { return "Hello"; } // function

console.log(typeof num, num); // number, 10
console.log(typeof obj, obj); // object, { name: "Sunny", age: 25 }


// ✅ Memory Allocation
// - Primitive types directly Stack me store hote hain
// - Non-Primitive types ka reference Stack me hota hai, actual value Heap me store hoti hai

//------------------------------ Var (Function Scope)------------------------

console.log(a); // undefined (Hoisting hua)
var a = 10;
console.log(a); // 10

if (true) {
    var x = 20;
}
a =30;
console.log(x); // 20 (Block ke bahar bhi accessible hai)

console.log([a*10,x+10])


// 🟢 var → Function Scope + Stack Memory

function test() {
    var x = 10;
    if (true) {
      var x = 20; // ✅ Same variable dubara declare ho gaya
      console.log(x); // Output: 20
    }
    console.log(x); // Output: 20
  }
  test();


//------------------ --------------Let (Block Scope)-------------------------

console.log(b); // ❌ Error: Cannot access 'b' before initialization
let b = 10;
console.log(b); // 10

if (true) {
    let y = 20;

    console.log(y); // 20
}
console.log(y); // ❌ Error (Block ke bahar access nahi hoga)


// 🔵 let → Block Scope + Stack Memory

function test() {
    let x = 10;
    if (true) {
      let x = 20; // ✅ Alag scope me alag variable
      console.log(x); // Output: 20
    }
    console.log(x); // Output: 10
  }
  test();



//---------------------------------Const (Block Scope)-----------------------

const c = 3.14;
console.log(c); // 3.14

c = 10; // ❌ Error: Assignment to constant variable



const x = 10;
x = 20; // ❌ Error: Yeh change nahi ho sakta



const person = { name: "Sunny" };
person.name = "Kumar";  // ✅ Allowed (Property change ho sakti hai)
console.log(person.name); // Output: Kumar

person = {}; // ❌ Error: Reference change nahi ho sakta



const numbers = [1, 2, 3];
numbers.push(4);  // ✅ Allowed
console.log(numbers); // [1, 2, 3, 4]

numbers = [5, 6, 7]; // ❌ Error: Reference change nahi ho sakta

// 🔴 const → Block Scope + Stack Memory (Fixed Reference)

function test() {
    const x = 10;
    x = 20; // ❌ Error: Assignment to constant variable
  }
  test();


const person = Object.freeze({ name: "Sunny" });

person.name = "Kumar";  // ❌ Change nahi hoga
console.log(person.name); // Output: Sunny

//---------------------------Notes for Const------------------------------------------


// Primitive values (number, string, boolean) → Stack Memory → ❌ Change nahi ho sakta

// Objects & Arrays (reference types) → Heap Memory → ✅ Properties change ho sakti hain, but reference fix rahega

// Agar object bilkul lock karna ho → 🔒 Object.freeze(obj) → ❌ Ab properties bhi change nahi hongi


// 💡 Hoisting Ka Scene (var vs let vs const)

console.log(a); // ✅ Output: undefined
var a = 10;

console.log(b); // ❌ Error: Cannot access 'b' before initialization
let b = 20;

console.log(c); // ❌ Error: Cannot access 'c' before initialization
const c = 30;



//---------------------------------------------------Error---------------------------------------------

// ❌ TypeError - Galat type ka variable use kiya (undefined function call)
let num;
num(); // TypeError: num is not a function

// ❌ SyntaxError - Galat syntax likha
let a = ; // SyntaxError: Unexpected token ';'

// ❌ RangeError - Value limit cross ho gayi (infinite recursion)
function recurse() { recurse(); }
recurse(); // RangeError: Maximum call stack size exceeded

// ❌ ReferenceError - Variable exist nahi karta ya accessible nahi hai
console.log(x); // ReferenceError: x is not defined

// ❌ EvalError - eval() ka galat use
eval("let x = "); // EvalError: Unexpected end of input

// ❌ Unhandled Promise Rejection - Promise reject hua, par .catch() nahi lagaya
new Promise((_, reject) => reject("Error!")); 
// Uncaught (in promise) Error!

// ❌ async/await SyntaxError - await ka use async function ke bahar kiya
function fetchData() {
  let data = await fetch("https://api.example.com"); 
  return data;
}
// SyntaxError: await is only valid in async function





  



  




// 🔸 1. Number + Number
let a = 10 + 5;
console.log(a); // 15 → dono number hain, add ho gaye

// 🔸 2. Number + String
let b = 10 + "5";
console.log(b); // "105" → number + string = string concatenation hota hai

// 🔸 3. String + String
let c = "10" + "5";
console.log(c); // "105" → dono strings hain to jodne ka kaam hua

// 🔸 4. Boolean + Number
let d = true + 2;
console.log(d); // 3 → true = 1, to 1 + 2 = 3

let e = false + 5;
console.log(e); // 5 → false = 0

// 🔸 5. Boolean + String
let f = true + "hi";
console.log(f); // "truehi" → true string ban gaya, concat hua

// 🔸 6. undefined + Number
let g = undefined + 10;
console.log(g); // NaN → undefined ko number me convert nahi kar sakte

// 🔸 7. null + Number
let h = null + 5;
console.log(h); // 5 → null ka numeric value 0 hota hai

// 🔸 8. NaN + Number
let i = NaN + 10;
console.log(i); // NaN → NaN kisi bhi number ke sath bhi NaN hi deta hai

// 🔸 9. Array + Number
let j = [1, 2] + 3;
console.log(j); // "1,23" → array string me convert hota hai, then concatenate

// 🔸 10. Object + String
let k = { name: "Sunny" } + " Singh";
console.log(k); // "[object Object] Singh" → object string me convert hota hai

// 🔸 11. typeof ke use se hum data type check kar sakte hain
console.log(typeof 123);         // number
console.log(typeof "hello");     // string
console.log(typeof true);        // boolean
console.log(typeof undefined);   // undefined
console.log(typeof null);        // object (⚠️ JS ka bug)
console.log(typeof {});          // object
console.log(typeof []);          // object
console.log(typeof function(){}); // function


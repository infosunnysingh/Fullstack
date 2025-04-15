// 🔹 Number ➡️ String
let a = 100;

let str1 = String(a);
console.log(str1, typeof str1);      // "100" string → String constructor ne number ko string me convert kar diya

let str2 = a.toString();
console.log(str2, typeof str2);      // "100" string → toString() number ka method hai, return string

let str3 = a + "";
console.log(str3, typeof str3);      // "100" string → "" se add karne se JS ne number ko string bana diya


// 🔹 String ➡️ Number
let s = "50";

let num1 = Number(s);
console.log(num1, typeof num1);      // 50 number → String ko number me convert kiya using Number()

let num2 = +s;
console.log(num2, typeof num2);      // 50 number → + operator ne string ko number me change kar diya

let num3 = parseInt("45.67");
console.log(num3, typeof num3);      // 45 number → parseInt sirf integer part leta hai

let num4 = parseFloat("45.67");
console.log(num4, typeof num4);      // 45.67 number → parseFloat decimal ke saath convert karta hai


// 🔹 Boolean ➡️ Number
console.log(Number(true));           // 1 → true ka number value 1 hota hai
console.log(Number(false));          // 0 → false ka number value 0 hota hai
console.log(+true);                  // 1 → + laga ke boolean ko number bana diya


// 🔹 Number ➡️ Boolean
console.log(Boolean(0));             // false → 0 ek falsy value hai
console.log(Boolean(1));             // true → 1 ek truthy value hai
console.log(!!10);                   // true → !! se Boolean conversion hota hai, 10 truthy hota hai


// 🔹 String ➡️ Boolean
console.log(Boolean(""));            // false → empty string falsy hoti hai
console.log(Boolean("hello"));       // true → koi bhi non-empty string truthy hoti hai


// ⚠️ Falsy Values (convert hote hi false ban jate hain)
console.log(Boolean(0));             // false
console.log(Boolean(""));            // false
console.log(Boolean(null));          // false
console.log(Boolean(undefined));     // false
console.log(Boolean(NaN));           // false
console.log(Boolean(false));         // false


// ✅ Truthy Values
console.log(Boolean("0"));           // true → string "0" empty nahi hai, isliye truthy
console.log(Boolean("false"));       // true → non-empty string truthy hoti hai
console.log(Boolean([]));            // true → empty array bhi truthy hota hai
console.log(Boolean({}));            // true → empty object bhi truthy hota hai
console.log(Boolean("any text"));    // true → non-empty string


// 🤯 Special Cases
console.log(Number(""));             // 0 → empty string number banegi to 0 hoti hai
console.log(Number("abc"));          // NaN → string me number nahi hai to NaN aata hai
console.log(Boolean("0"));           // true → "0" ek string hai, empty nahi, isliye truthy
console.log(Boolean("false"));       // true → string "false" bhi non-empty hai

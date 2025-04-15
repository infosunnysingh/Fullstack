// 🔹 Basic Number Comparisons
console.log(2 > 1);      // true   → 2 is greater than 1
console.log(2 >= 1);     // true   → 2 is greater or equal to 1
console.log(2 < 1);      // false  → 2 is not less than 1
console.log(2 == 1);     // false  → 2 is not equal to 1
console.log(2 != 1);     // true   → 2 is not equal to 1

// 🔹 String & Number Comparison
console.log("2" > 1);    // true   → "2" converted to number → 2 > 1
console.log("02" > 1);   // true   → "02" converted to 2 → 2 > 1

// 🔹 Special Case: null
console.log(null > 0);   // false  → null becomes 0, 0 > 0 is false
console.log(null == 0);  // false  → null == 0 is false, no conversion
console.log(null >= 0);  // true   → null becomes 0 → 0 >= 0 is true

// 🔹 Special Case: undefined
console.log(undefined == 0); // false → undefined never equals 0
console.log(undefined > 0);  // false → undefined becomes NaN, always false
console.log(undefined < 0);  // false → undefined becomes NaN, always false

// 🔹 Strict Equality
console.log("2" === 2);      // false → string !== number, no type conversion

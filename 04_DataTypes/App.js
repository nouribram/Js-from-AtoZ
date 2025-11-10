/*
  Topic:  Data Types 
  JavaScript has 7 primitive data types. These are simple, immutable values that represent the most basic data.
*/

// String — Text data enclosed in quotes
let name = "nour";
let greeting = 'Hello';
let message = `Hi, ${name}!`; // Template literal
console.log(typeof name, message); // string, "Hi, Alice!"

// Number — Numeric data (integer or float)
let age = 25;
let price = 19.99;
let infinityValue = Infinity;
let notANumber = NaN;
console.log(typeof age, price, infinityValue, notANumber); // number

// Boolean — True or false values
let isOnline = true;
let isComplete = false;
console.log(typeof isOnline, isComplete); // boolean

// Null — Intentional absence of value
let user = null;
console.log(typeof user); // object (this is a JavaScript quirk)

// Undefined — Declared but not assigned
let address;
console.log(typeof address); // undefined

// Symbol — Unique and immutable identifier (used as object keys)
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2); // false (each symbol is unique)
console.log(typeof id1); // symbol

// BigInt — Used for very large integers beyond normal number limits
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber); // bigint

/*
  Summary:
  - String → "Hello"
  - Number → 42, 3.14
  - Boolean → true / false
  - Null → null
  - Undefined → variable declared but not assigned
  - Symbol → Symbol("id")
  - BigInt → 123n

  Notes:
  - Use typeof to check a variable’s data type.
  - BigInt is useful for very large calculations.
  - Null represents "no value", Undefined means "not assigned".
*/

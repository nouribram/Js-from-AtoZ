/*
 JavaScript Variables (var, let, const)
  Variables are used to store data values in JavaScript.
  There are three main ways to declare variables: var, let, and const.
*/

/*
  VAR
  - Function-scoped or globally scoped.
  - Can be redeclared and updated.
  - Should be avoided in modern JavaScript due to scope issues.
*/
var name = "nnamee";
console.log("var name:", name);

var name = "namee"; // Redeclaration allowed
console.log("Redeclared var name:", name);

name = "nname"; // Updating allowed
console.log("Updated var name:", name);

/*
  LET
  - Block-scoped (limited to the nearest {} block).
  - Cannot be redeclared in the same scope.
  - Can be updated.
*/
let age = 20;
console.log("let age:", age);

age = 27; // Updating allowed
console.log("Updated let age:", age);

// ❌ Redeclaring in the same scope causes an error
// let age = 25;

/*
  CONST
  - Block-scoped like let.
  - Cannot be updated or redeclared.
  - Must be initialized at the time of declaration.
*/
const country = "Ru";
console.log("const country:", country);

// ❌ Not allowed:
// country = "E";   // Error: Assignment to constant variable
// const country = "E"; // Error: Identifier 'country' has already been declared

/*
  SCOPE DEMONSTRATION
  Shows how var, let, and const behave differently inside blocks.
*/
if (true) {
    var city = "Saint";  // Function-scoped, accessible outside block
    let car = "BMW";     // Block-scoped
    const color = "black"; // Block-scoped

    console.log("Inside block -> city:", city);
    console.log("Inside block -> car:", car);
    console.log("Inside block -> color:", color);
}

console.log("Outside block -> city:", city); // ✅ Accessible
// console.log("Outside block -> car:", car);   // ❌ Error
// console.log("Outside block -> color:", color); // ❌ Error

/*
  SUMMARY:
  - Use const by default.
  - Use let when you need to reassign a variable.
  - Avoid var in modern JavaScript.
*/


// =============================================
// Assignment 5: Type Aliases
// =============================================

// Questions:
// 1. Create reusable aliases for union and intersection types.
// 2. Refactor earlier assignments to use these aliases.
// 3. Create a type alias for string | number.
// 4. Use it in two variables.
// 5. How does this improve readability?

// Answer:

type ID = string | number;

let userIdentifier: ID = 101;
let orderIdentifier: ID = "ORD-202";

console.log(userIdentifier, orderIdentifier);

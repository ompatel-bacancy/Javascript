
// =============================================
// Assignment 8: Typed Functions & Optional Parameters
// =============================================

// Questions:
// 1. Write a function with required and optional parameters.
// 2. Define return types explicitly.
// 3. Call it with and without optional argument.
// 4. How does TypeScript enforce correctness?

// Answer:

function greetUser(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting} ${name}`;
    }
    return `Hello ${name}`;
}

console.log(greetUser("Om"));
console.log(greetUser("Om", "Welcome"));


// =============================================
// Assignment 2: any vs unknown
// =============================================

// Questions:
// 1. Create a function that accepts any and performs operations without checks.
// 2. Create the same function using unknown and add proper type guards.
// 3. Compare the compiler behavior and runtime safety.
// 4. Create one variable using any.
// 5. Create another variable using unknown.
// 6. Try calling methods directly on both.
// 7. Which one forces you to write safer code?

// Answer:

function handleAny(value: any): void {
    console.log(value.toUpperCase()); // No compile-time error
}

function handleUnknown(value: unknown): void {
    if (typeof value === "string") {
        console.log(value.toUpperCase()); // Safe
    } else {
        console.log("Value is not a string");
    }
}

let randomData: any = "hello";
let safeData: unknown = "world";

handleAny(randomData);
handleUnknown(safeData);

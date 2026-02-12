
// =============================================
// Assignment 1: Type Inference
// =============================================

// Questions:
// 1. Declare variables using let and const with initial values and observe inferred types.
// 2. Try reassigning incompatible values and note the compiler errors.
// 3. Write a function without a return type and inspect what TypeScript infers.

// Answer:

let totalStudents = 50; // inferred as number
const instituteTitle = "TypeScript Academy"; // inferred as string

// totalStudents = "fifty"; //  Error: Type 'string' is not assignable to type 'number'

function calculateTotalMarks(mathMarks: number, scienceMarks: number) {
    return mathMarks + scienceMarks; // inferred return type: number
}

const totalMarks = calculateTotalMarks(80, 85);
console.log("Total Marks:", totalMarks);

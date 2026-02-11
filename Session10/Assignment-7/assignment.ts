
// =============================================
// Assignment 7: Enums
// =============================================

// Questions:
// 1. Create an enum for payment states.
// 2. Write a function that accepts only this enum.
// 3. Try passing invalid value.
// 4. Why enums are better than magic strings?

// Answer:

enum PaymentState {
    INITIATED = "INITIATED",
    SUCCESS = "SUCCESS",
    FAILED = "FAILED"
}

function updatePayment(state: PaymentState): void {
    console.log("Payment State:", state);
}

updatePayment(PaymentState.SUCCESS);

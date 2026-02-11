
// =============================================
// Assignment 3: Union Types
// =============================================

// Questions:
// 1. Add one more role (Guest) to the User union.
// 2. Write a function that accepts User.
// 3. Use the role field to safely narrow the type.
// 4. Observe how TypeScript prevents invalid property access.
// 5. Create a union type for two different user roles using type.
// 6. Create another union using two interfaces.
// 7. Write a function that accepts the union and narrows the type safely.

// Answer:

type Admin = {
    role: "admin";
    permissions: string[];
};

type Customer = {
    role: "customer";
    purchaseHistory: number[];
};

type Guest = {
    role: "guest";
    accessLevel: string;
};

type User = Admin | Customer | Guest;

function printUser(user: User): void {
    if (user.role === "admin") {
        console.log(user.permissions);
    } else if (user.role === "customer") {
        console.log(user.purchaseHistory);
    } else {
        console.log(user.accessLevel);
    }
}

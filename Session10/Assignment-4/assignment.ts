
// =============================================
// Assignment 4: Intersection Types
// =============================================

// Questions:
// 1. Create an Order using intersection (&).
// 2. Create the same model using interfaces and extends.
// 3. Remove one required property and observe the compiler error.
// 4. Identify when intersection is better than union.

// Answer:

type OrderBase = {
    orderId: number;
    amount: number;
};

type Auditable = {
    createdAt: Date;
    createdBy: string;
};

type Order = OrderBase & Auditable;

const orderDetails: Order = {
    orderId: 101,
    amount: 5000,
    createdAt: new Date(),
    createdBy: "AdminUser"
};

interface BaseOrder {
    orderId: number;
    amount: number;
}

interface AuditedOrder extends BaseOrder {
    createdAt: Date;
    createdBy: string;
}

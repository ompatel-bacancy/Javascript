
// =============================================
// Assignment 6: Interfaces
// =============================================

// Questions:
// 1. Create Admin and Customer interfaces using a common base.
// 2. Extend the base interface.
// 3. Write a function that accepts BaseUser.
// 4. Pass both Admin and Customer objects.
// 5. Design an interface for an API response.
// 6. Create a function that accepts this interface.
// 7. Extend the interface and reuse it.
// 8. Create an interface for Product.
// 9. Create a variable that follows this interface.

// Answer:

interface BaseUser {
    id: number;
    email: string;
}

interface Admin extends BaseUser {
    role: "admin";
    permissions: string[];
}

interface Customer extends BaseUser {
    role: "customer";
    purchaseHistory: number[];
}

function displayUser(user: BaseUser): void {
    console.log(user.id, user.email);
}

interface ApiResponse {
    success: boolean;
    message: string;
}

function handleApiResponse(response: ApiResponse): void {
    console.log(response.message);
}

interface ExtendedApiResponse extends ApiResponse {
    data: object;
}

interface Product {
    id: number;
    name: string;
    price: number;
}

const laptop: Product = {
    id: 1,
    name: "Laptop",
    price: 75000
};

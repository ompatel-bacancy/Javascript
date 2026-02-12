
// =============================================
// Assignment 9: Access Modifiers
// =============================================

// Questions:
// 1. Create a service class exposing only required public methods.
// 2. Keep internal data private.
// 3. Create public, private, protected members.
// 4. Try accessing them outside class.
// 5. Which members should be exposed and why?

// Answer:

class UserService {

    public serviceName: string;
    private secretKey: string;
    protected authToken: string;

    constructor(name: string) {
        this.serviceName = name;
        this.secretKey = "hidden";
        this.authToken = "abc123";
    }

    public getServiceName(): string {
        return this.serviceName;
    }
}

const serviceInstance = new UserService("Main Service");
console.log(serviceInstance.getServiceName());

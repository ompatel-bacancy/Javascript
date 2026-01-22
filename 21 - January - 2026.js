// Assignment
// 1. Predict the output and explain the memory state.
const registry = {
  active: [{ id: 1, name: "Alpha" }],
  archived: []
};

function cloneAndModify(data) {
  // Goal: Create a copy so the original registry isn't changed
  const copy = { ...data };
  
  copy.active.push({ id: 2, name: "Beta" });
  copy.active[0].name = "Gamma";
  copy.version = 2.0;  
  return copy;
}

const newRegistry = cloneAndModify(registry);

console.log(registry.active.length); // 2
console.log(registry.active[0].name); // Gamma
console.log(registry.version);      // undefined
console.log(copy.version);       // undefined

// here in 1st  console.log(registry.active.length); the registry is the set which is having 2 arrays {active,archived} here in active array it has 1 object id: 1, name: "Alpha" }
// memory states
// Stack memory                 Heap Memory
// active : reference1          reference1:{....}
// archived : reference 2       reference2:{....}
// After this we are creating an object as a function named cloneAndModify aspecting one parameters as a data and in this we are creating the copy of the registry set
// So that we can perform the lexical operations and can be able to monitor the changes occured in the respected memory posiitions like lexical change can be observed
// between differenet memory states {stack,heap}
// in the newly created object we are supposed to pass the new object to the existing list of registry which was active, then we are going to update the 1 element of the
// list with name Alpha -> Gamma
//  then after we are trying to reshape the existing object onto the copy like creating a new id {version : 2.0} but this would only affect the copy not the registry.
// so the output of the 1  console.log(registry.active.length)  would be 2 registry: [{ id: 1, name: "Alpha" }, {id: 2, name:"Beta"}] -> copy: [{ id: 1, name: "Alpha" }, {id: 2, name:"Beta"}] 
// (registry.active[0].name) this statement will points out the 1 element of the list [{ id: 1, name: "Alpha" } -> 1st element, {id: 2, name:"Beta"} -> 2nd element] thus
// the result of the console.log(registry.active[0].name) => Gama
// registry.version is not defined in registry set but it was defined in the copy made in a function and assigned the data of registry using newRegistry thus the registry set so registry does not have any kind of direct access onto it thus it will return undefined



// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2. Identify why the following code throws an error and fix it without using the class keyword.

// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.eat = function() {
//   console.log(`${this.name} is eating.`);
// };

// function Dog(name, breed) {
//   Animal.call(this, name);
//   this.breed = breed;
// }

// // Intent: Dog should inherit from Animal
// Dog.prototype = Animal.prototype; 

// Dog.prototype.bark = function() {
//   console.log("Woof!");
// };

// const myDog = new Dog("Buddy", "Golden");
// const genericAnimal = new Animal("Generic");

// genericAnimal.bark(); // Why does this happen?
// console.log(myDog.constructor.name); // Why is this 'Animal' and not 'Dog'?


// The code has mainly 2 errors :
    //  Prototype Mutation
    // Constructor Reference

    // Shared Prototype: The line Dog.prototype = Animal.prototype;  makes the constructor of both to point same object.
    // When you add genericAnimal.bark() to it will work instead of throwing the error on TypeError
    
    // Overwritten Constructor: Assigning the prototype directly to the original Dog.prototype.constructor (pointed -> Dog) is lost, now it will only points to the Animal.prototype

// Fixed Code
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log(`${this.name} is eating.`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// FIX 1: Create a new object that inherits from Animal.prototype
// This prevents changes to Dog from affecting Animal
Dog.prototype = Object.create(Animal.prototype);

// FIX 2: Restore the constructor property which was lost in the step above
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log("Woof!");
};

const myDog = new Dog("Buddy", "Golden");
const genericAnimal = new Animal("Generic");
genericAnimal.bark(); // Throws an Error now of Uncaught TypeError: genericAnimal.bark is not a function
console.log(myDog.constructor.name); // it will return the constructor name :-> Dog


// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3. Predict the result of the following execution.
function SmartPhone(brand) {
  this.brand = brand;
  
  return {
    brand: "Generic",
    os: "Android"
  };
}

SmartPhone.prototype.getBrand = function() {
  return this.brand;
};

const myPhone = new SmartPhone("Apple");

console.log(myPhone.brand);    // Generic
console.log(myPhone.getBrand); // undefined because this variable is not defined 



// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 4. Write a function called masterClone(obj) that performs a deep copy without using JSON.stringify or structuredClone.
// Requirements:
// It must handle nested objects.
// It must handle nested arrays.
// It must not copy functions by reference (they can remain shared, but the object structure must be unique).


function masterClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
// Arrays
  if (Array.isArray(obj)) {
    const arrCopy = [];
    for (let i = 0; i < obj.length; i++) {
      arrCopy[i] = masterClone(obj[i]);
    }
    return arrCopy;
  }

  // Objects
  const objCopy = {};
  for (const key in obj) {
    // Ensure we only copy properties belonging to the object itself, not the prototype
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      objCopy[key] = masterClone(obj[key]);
    }
  }

  return objCopy;
}


const original = {
  name: "Deep",
  details: { age: 25, tags: ["js", "recursion"] },
  greet: function() { console.log("Hello"); }
};

const clone = masterClone(original);

clone.details.tags.push("cloned"); 
console.log(original.details.tags); // ["js", "recursion"] - Original remains untouched
console.log(clone.greet === original.greet); // true - Functions remain shared




// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 5. Trace the execution of this class logic.

class Counter {
  static count = 0;
  count = 10;

  constructor() {
    Counter.count++;
  }

  getCount() {
    return this.count;
  }

  static getStaticCount() {
    return this.count;
  }
}

const c1 = new Counter();
const c2 = new Counter();

console.log(c1.getCount());        // 10 -> remains as it is because 
console.log(Counter.getStaticCount()); // 2 -> Because the static kind of functions and constructors have only access to the variables which were defined as static
console.log(c1.getStaticCount());  // Error because object cannot directly initiate the call to the static functions and is not a function



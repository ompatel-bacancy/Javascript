// Lab Assignment


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------
//Exercise 1: The URL Slug Builder
// Scenario: You have a blog post title, and you need to generate a URL-friendly "slug" (lowercase, hyphen-separated).
// Input: "JavaScript For Beginners"
// Task:
// Convert the string to lowercase.
// Split the string into words.
// Join the words back together using hyphens (-).
// Expected Output: "javascript-for-beginners"

let varStrInput = "Javascript for Beginners";
let lowerVarStr = varStrInput.toLowerCase();
console.log(`The given string ${lowerVarStr} is in lower case`);
let splitVarStrWords = lowerVarStr.split(" ");
console.log(`String in splitted form: ${splitVarStrWords}`);
let joinvarStrWords = splitVarStrWords.join("-");
console.log(`Joined String ${joinvarStrWords}`);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Exercise 2: Pagination Logic
// Scenario: You have a list of 10 items. You need to simulate "Page 2" of a table, displaying only items 4, 5, and 6.
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Task: Use .slice() to extract the items at indices 3, 4, and 5.
// Expected Output: [4, 5, 6]

let varInputNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`The array is : ${varInputNumArray}`);
let varSlicedArray = varInputNumArray.slice(3,6);
console.log(`The Sliced Array is : ${varSlicedArray}`);


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Part 2: Map & Filter 
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Exercise 3: The Price Formatter
// Scenario: You have a list of raw number prices. You need to format them for the UI.
// Input: [10, 20, 30]
// Task: Use .map() to add a "$" sign to the front of every number.
// Expected Output: ["$10", "$20", "$30"]

let inputPriceArray = [10,20,30];
console.log(`The inputed Array : ${inputPriceArray}`);
let currency = "$";
let mapCurrencyPriceArray = inputPriceArray.map((price)=> currency.concat(price));
console.log(`Output Array: ${mapCurrencyPriceArray}`);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Exercise 4: The Clean-Up Crew
// Scenario: You have a list of user ages. Some data is corrupted (negative numbers or zero).
// Input: [25, -5, 18, 0, 40]
// Task: Use .filter() to keep only valid ages (positive numbers > 0).
// Expected Output: [25, 18, 40]

let inputNumArray = [25, -5, 18, 0, 40];
console.log(`Input Array: ${inputNumArray}`);
let outputArrayWithoutOutliners = inputNumArray.filter((data)=> data > 0);
console.log(`Output Array: ${outputArrayWithoutOutliners}`);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Exercise 5: The "One-Liner" Chain
// Scenario: Combine both methods.
// Input: [-10, 20, 50, -5]
// Task:
// Filter out negative numbers.
// Map the remaining numbers to double them (x * 2).
// Expected Output: [40, 100]

let inputNumArray = [-10, 20, 50, -5];
console.log(`Input: ${inputNumArray}`);
let outputArray = inputNumArray.filter((data) => data>0).map((value) => value * 2);
console.log(`Output: ${outputArray}`);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Part 3: Reduce
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Exercise 6: The Shopping Cart
// Scenario: Calculate the total cost of the items in a cart.
// Input: [100, 200, 50]
// Task: Use .reduce() to sum the values starting from 0.
// Expected Output: 350

let inputItemsShopingCartCost =  [100, 200, 50];
console.log(`Input : ${inputItemsShopingCartCost}`);
let outputTotalCostCart = inputItemsShopingCartCost.reduce((ass,value)=> value += ass);
console.log(`Output: ${outputTotalCostCart}`);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Part 4: Objects & References
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Goal: Understanding this and Immutability.
// Exercise 7: The "this" Detective
// Scenario: The code below is broken (it logs undefined).
// Explain why it fails. : This keyword is only used to refer to the elements which are present inside the scope of the lexical parent of the element 
// Here we either are not using any kind of scope based or any kind of the object instead we are using the dictionary or JSON. 
// Fix it so it logs "Hello, Alex". In order to fix this just use the variable name instead of the this keyword.
// JavaScript
// const user = {
//     name: "Alex",
//     greet: () => {
//         console.log("Hello, " + this.name);
//     }
// };
// user.greet();

const user = {
    name: "Alex",
    greet: () => {
        console.log("Hello, " + user.name);
    }
};
user.greet();

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Exercise 8: The Safe Update
// Scenario: You need to update a user's theme setting without mutating the original object.
// Input:
// JavaScript
// const settings = { theme: "light", notifications: true };


// Task:
// Create a new variable newSettings.
// Use the Spread Operator (...) to copy the properties from settings.
// Overwrite the theme to "dark" inside the new object.
// Verify settings.theme is still "light" (Immutable Check).

let user = {
  "name" : "Joe",
  "email" : "joe@mail.com",
  "settings" : {
    "theme" : 'light'
  },
  printInfo : function() {
    console.log(`User ${this.name} uses ${this.settings.theme} theme`);
  },
}

let updatedUser = {...user,name : "Doe"};
user.printInfo()
updatedUser.printInfo()

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Exercise 9
// Combine everything you learned into one function.
// Scenario: You have an inventory list.
// Filter out items that are out of stock (stock: 0).
// Map the remaining items to calculate their total value (price * stock).
// Reduce to find the total value of the entire inventory.
// Data:
// JavaScript
// const inventory = [
//     { name: "Laptop", price: 1000, stock: 5 },
//     { name: "Phone", price: 500, stock: 0 },
//     { name: "Mouse", price: 50, stock: 10 }
// ];
// Expected Output: 5500

const inventory = [
    { name: "Laptop", price: 1000, stock: 5 },
    { name: "Phone", price: 500, stock: 0 },
    { name: "Mouse", price: 50, stock: 10 }
];

let filteredInventory = inventory.filter((data)=> data.stock >0);
console.log(`Filetered Inventory : ${filteredInventory}`);

let mapInventoryPriceQuantity = filteredInventory.map((data) =>data.price*data.stock);
console.log(`Map Data : ${mapInventoryPriceQuantity}`);

let reduceInventoryValue = mapInventoryPriceQuantity.reduce((acc,value) => value += acc);
console.log(`Reduce Data : ${reduceInventoryValue}`);


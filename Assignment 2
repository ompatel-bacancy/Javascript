// Assignment 1: Number Check
// Write a program to check whether a number is:
// Positive
// Negative
// Zero
var checkNumber = [-5,0,5];
var resultOfChecks = [];
for (const key in checkNumber) {
    if (!Object.hasOwn(checkNumber, key)) continue;
    const element = checkNumber[key];
    
    if(element < 0)
    {
        resultOfChecks.push("Negative");
    }else if(element == 0)
    {
        resultOfChecks.push("Zero");
    }else{
        resultOfChecks.push("Positive");
    }
}
console.log({resultOfChecks});
// resultOfChecks: 
// Array(3) 0 :  "Negative"
//          1 :  "Zero"
//          2 :  "Positive"
// length : 3

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Assignment 2: Even/Odd in Range
// Print numbers from 1 to 20 and show whether each is Even or Odd.
// Expected format:
// 1 -> Odd
// 2 -> Even
// 3 -> Odd
for(let startRange = 1,endRange=20;startRange<=endRange;startRange++)
{
    let oddOrEven = (startRange) =>{
        if(startRange%2==0)
        {
            return "Even Number";
        }else{
            return "Odd Number";
        }
    }
    console.log(`${startRange}  ->  ${ oddOrEven(startRange) }`);
}
// 1  ->  Odd Number
// 2  ->  Even Number
// 3  ->  Odd Number
// 4  ->  Even Number
// 5  ->  Odd Number
// 6  ->  Even Number
// 7  ->  Odd Number
// 8  ->  Even Number
// 9  ->  Odd Number
// 10  ->  Even Number
// 11  ->  Odd Number
// 12  ->  Even Number
// 13  ->  Odd Number
// 14  ->  Even Number
// 15  ->  Odd Number
// 16  ->  Even Number
// 17  ->  Odd Number
// 18  ->  Even Number
// 19  ->  Odd Number
// 20  ->  Even Number

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Assignment 3: Role Access using switch-case
// Create a variable role with values like:
// "ADMIN"
// "USER"
// "MANAGER"
// Print:
// ADMIN → Full access
// USER → Limited access
// MANAGER → Moderate access
// default → Invalid role

var objOfRoles = {
    "ADMIN" : "Full Access",
    "USER" : "Limited Access",
    "MANAGER" : "Moderate Access",
    "default" : "Invalid Role",
}
for (const key in objOfRoles) {
    if (!Object.hasOwn(objOfRoles, key)) continue;
    
    const element = objOfRoles[key];
    console.log(`${key} -> ${element}`);
}
// ADMIN -> Full Access
// USER -> Limited Access
// MANAGER -> Moderate Access
// default -> Invalid Role

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Assignment 4: Total Price Function
// Create a function:
// calculateTotalPrice(price, quantity)
// Return total.
// Example:
// console.log(calculateTotalPrice(150, 4)); // 600
function calculateTotalPrice(numOfPrice,numOfQuantity)
{
    return numOfPrice * numOfQuantity;
}
console.log(calculateTotalPrice(150,4));
// 600

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Assignment 5: Coupon Discount Function
// Create a function:
// applyCoupon(amount, couponCode)
// Rules:
// "SAVE10" → 10% discount
// "SAVE20" → 20% discount
// "NONE" → no discount
// Example:
// console.log(applyCoupon(1000, "SAVE10")); // 900
// console.log(applyCoupon(2000, "SAVE20")); // 1600
// console.log(applyCoupon(500, "NONE"));    // 500
var discountCoupons = {
    "SAVE10": 10,
    "SAVE20": 20,
    "SAVE30": 30
};
function applyCoupon(amount, couponCode) {
    couponCode = couponCode.toUpperCase();
    var discountPercent = discountCoupons[couponCode] || 0;
    var discountAmount = amount * (discountPercent / 100);
    var finalAmount = amount - discountAmount;
    return finalAmount;
}
console.log(applyCoupon(1000, "SAVE10"));
console.log(applyCoupon(2000, "SAVE20"));
console.log(applyCoupon(500, "NONE"));
console.log(applyCoupon(999.99, "save30"));
console.log(applyCoupon(1200, "UNKNOWN_CODE"));
// 900
// 1600
// 500
// 699.9929999999999
// 1200

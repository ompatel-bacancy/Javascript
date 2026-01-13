console.log("Hello World")
// 1. Global Scope Scope Variable
var globalScopeVariable =10;
function f1()
{
    var globalScopeVariable =0;
    console.log(globalScopeVariable);
}
console.log(globalScopeVariable);

f1();
//Output Hello World, { 10 -> outside loop , 0 -> inside loop}

// 2. Local Scope Variable
function f1()
{
    var localScopeVariable =0;
    console.log(localScopeVariable);
}
console.log(localScopeVariable);

f1();
// Output Uncaught ReferenceError: localScopeVariable is not defined 
// The limitation of the above code is the GLobal scope variable redeclared inside any objects are considered as new variable and any certain changes made on these variables wil not affect the other environment.
// This is in short considered to be as the concept of Shadowing.


//3. Var type variable declaration
var variableOfVarType =10;
while(variableOfVarType <= 20)
{
    console.log(variableOfVarType);
    variableOfVarType = variableOfVarType +2;
}
console.log(variableOfVarType);
// The output will be proper irrespective the variable is of Global scope because here it is redefine/reassigned not redeclare so,
//  output will be appropriate of while loop using var keyword.


//4. LET type variable declaration
let variableOfLetType =10;
while(variableOfLetType <= 20)
{
    console.log(variableOfLetType);
    variableOfLetType = variableOfLetType +2;
}
console.log(variableOfLetType);
// Same output as var


//5. Constant type variable declaration
const variableOfConstType =10;
while(variableOfConstType <= 20)
{
    console.log(variableOfConstType);
    variableOfConstType = variableOfConstType +2;
}
console.log(variableOfConstType);
// second day.js:7 Uncaught TypeError: Assignment to constant variable.


//if statement
var ageOfVoter = 19;
if(ageOfVoter>=18)
{
    console.log("Eligible to caste their vote");
}
else{
    console.log("Not Eligible to case their vote");
}
//Output: Eligible to caste their vote


//nested if statement
var ageOfVoter = 19;
var nationalityOfVoter = "Indian";
if(ageOfVoter>=18)
{
    if(nationalityOfVoter == "Indian")
    {
        console.log("Eligible to caste their vote in India");
    }else{
        console.log("Eligible to caste their vote accross globe as according to their nationality");
    }
}
else{
    console.log("Not Eligible to case their vote");
}
//Output: Eligible to caste their vote in India


//else if statement
var nationalityOfVoter = "Indian";
if(nationalityOfVoter == 'Indian')
{
    console.log("Eligible to caste their vote in India")
}
else if(nationalityOfVoter == "Russia"){
    console.log("Eligible to caste their vote in Russia")
}
else if(nationalityOfVoter == "Israel"){
    console.log("Eligible to caste their vote in Israel")
}
else if(nationalityOfVoter == "USA"){
    console.log("Eligible to caste their vote in USA")
}
else if(nationalityOfVoter == "Portuguese"){
    console.log("Eligible to caste their vote in Portuguese")
}
else{
    console.log("Not Eligible to case their vote");
}
//Output: Eligible to caste their vote in India

//switch statement
var nationalityOfVoter = "Indian";
switch(true)
{
    case "Indian":
        console.log("The person is a citizen of India");
        break;
    case "Russia":
        console.log("The person is a citizen of Russia");
        break;
    case "China":
        console.log("The person is a citizen of China");
        break;
    case "USA":
        console.log("The person is a citizen of USA");
        break;
    default:
        console.log("The person is of a minor age");
}
//Output: The person is a citizen of India

//for statement fibonnaci series of first 5
function fibonacciSeries(n) {
    let series = [0, 1];
    for (let i = 2; i < n; i++) {
        series[i] = series[i - 1] + series[i - 2];
    }
    return series.slice(0, n);
}
let n = 10; 
console.log(`Fibonacci series up to ${n} terms:`, fibonacciSeries(n));
// Fibonacci series up to 10 terms: (10) [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

//while statement fibonnaci series of first 5
function fibonacciSeries(n) {
    let series = [0, 1];
    let i=2;
    while(i<n){
        series[i] = series[i - 1] + series[i - 2];
        i = i + 1;
    }
    return series.slice(0, n);
}
let n = 10; 
console.log(`Fibonacci series up to ${n} terms:`, fibonacciSeries(n));
// Fibonacci series up to 10 terms: (10) [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

//for each to display the number of items in a list
var listOfProducts = ['Milk','Bread','Grocery','Vegetables','Cheese','Butter']
listOfProducts.forEach(i =>{
    console.log(i);
});
//Milk
//Bread
//Grocery
//Vegetables
//Cheese
//Butter


//for in to display the number of items in a list
var listOfProducts = {
    "groceries":["Milk","Butter","Bread"],
    "grains" : ["wheat","rice","millet"],
    "cash-crops" : ["sugarcane","cotton"],
}
for (const key in listOfProducts) {
    if (!Object.hasOwn(listOfProducts, key)) continue;
    
    const element = listOfProducts[key];
    console.log(element);
}
//  No of Items    Items
// (3) ['Milk', 'Butter', 'Bread']
// (3) ['wheat', 'rice', 'millet']
// (2) ['sugarcane', 'cotton']


//for of to display the number of items in a list
var listOfProducts = ["Milk","Butter","Bread"];
for (const element of listOfProducts) {
    console.log(element);
}
// Milk
// Butter
// Bread



// Q1. Simple Object Context
const laptop = {
    brand: "Dell",
    getBrand: function() {
        return this.brand;
    }
};
const myBrand = laptop.getBrand();
console.log(myBrand); // output : Dell
// Explanation because the function is wrapped onto the object and can refer to the member variables using (.) operator and 
// second reason is that if we use here instead of the normal function the arrow function the new funciton introduced in ES6
//  than it will throw the error as undefined because it treat it as a variable so it will find the this object which is referring to the parent node


// Q2. Basic Promise Flow
console.log(1);
Promise.resolve().then(() => {
    console.log(2);
});
console.log(3);
// Output: = 1,3,2
//     Call Stack           Call Back Queue         Micro Task Queue        Macro Task Queue        Output
//      1 -> pop                      -                       -                       -                 1
//      2  -- -- -- - - - - - -- - - - - - - - -- - - - >  2
//      3-> push                                                                                        3
//  After the execution of all the items into the call stack the micro task queue will started to begin the execution
//  and at last it will resolve the promise

// Q3. The Broken Chain

Promise.reject("Error Occurred")
    .then(() => console.log("Success"))
    .catch((err) => console.log(err));
// Output 
//  It will execute it normally without any desclaimer as an error onto the console it will just print the message as a simple
//  It will not break the flow of the execution context if we need to break the flow of the execution context than we require
//  to write reject(Error("Error Occured")) instead of reject("Error Occurred");

// Q4. Global vs. Local Scope

var status = "Offline";

const server = {
    status: "Online",
    getStatus: function() {
        return this.status;
    }
};

console.log(server.getStatus()); // Result : Online
//  Irrespective of the global scope it will fetch the local scope of the object of server thus it will return the result
//  as Online



// Q5. Math in Promises

Promise.resolve(10)
    .then((num) => num * 2)
    .then((result) => console.log(result));

//  Output : 20 Because it will treat it as the data and we can perform any kind of Data Transformation onto it



// Q6. The "Lost" Context

const user = {
    name: "Alex",
    printName() {
        console.log(this.name);
    }
};

const print = user.printName;
print();  // undefined instead of Alex
//  Whenever we do this Javascript will copy the entire function and assign it a new reference and it will find the name onto
//  the global scope and it will not find the variable declared as the name onto the global scope


// Q7. Event Loop Basic Race

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

//  Call Stack          Call Back Queue             Micro Task Queue        Macro Task Queue        EventLoop           output
//      Start                                                                                                           Start
//      Timeout ----------------------------------------------------------->    Timeout
//      Promise ----------------------------------->    Promise
//      End                                                                                                               End
//      Promise  <----------------------------------    Promise                                        <ac>             Promise
//      Timeout  <-------------------------------------------------------------- Timeout                <ac>            Timeout
//  Thus the output will be Start, End, Promise, Timeout


// Q8. Arrow Function Pitfall

const group = {
    title: "Developers",
    getTitle: () => {
        console.log(this.title);
    }
};

group.getTitle(); // Output :  undefined
//  Here the arrow function will not be treated as a function but it will be treated as the variable and a variable will find
//  title variable in the Global Scope it will not able to fetch it and returns undefined



// Q9. Chaining Returns

Promise.resolve(5)
    .then((val) => {
        console.log(val);
        return val + 5;
    })
    .then((val) => console.log(val));
// Output : 5   10
//  At first the value of val will be 5 as passed from the promise as a argument and it will return the value using the call back
//  and changes the value to 10 wrf return val + 5 => 10 and thus it will print 10 onto the console


// Q10. Catch and Continue

Promise.reject("Fail")
    .catch((err) => {
        console.log(err);
        return "Recovered";
    })
    .then((res) => console.log(res));
//  Fail   Recovered  will be the output as catch is changing the value returned from the reject() method as Fail -> Recovered


// Q11. The Nested Timeout

console.log('A');

setTimeout(() => {
    console.log('B');
}, 0);

Promise.resolve().then(() => {
    console.log('C');
    Promise.resolve().then(() => console.log('D'));
});

console.log('E');
//  Output: A, E, C, D, B
//  Call Stack          Call Back Queue             Micro Task Queue        Macro Task Queue        EventLoop           output
//       A                                                                                                                  A
//      B ----------------------------------------------------------------->    B
//      C  ------------------------------------------>     C
//      D  -------------------------------------------->   D
//      E                                                                                                                   E
//      C     <------------------------------------------  C                                                                C                                          
//      D     <------------------------------------------  D                                                                D
//      B     <------------------------------------------------------------>    B                                           B

                                                                                                                      


// Q12. Explicit Binding (Call/Apply)

const agent = {
    id: 101
};

function showId() {
    console.log(this.id);
}

showId.call(agent);   // 101
showId.apply(null);    // undefined

// Execution context this pointer
//                  Call(agent)                                                    Apply(null)
//      set the parameter to this referencing                           will also do the same but whenever using null in apply
//      the particular id variable in local scope                           or in call will invoke a special function and will
//          of object agent                                                     target to the global context.

// Q13. Promise.all Failure

Promise.all([
    Promise.resolve("Success 1"),
    Promise.reject("Error 1"),
    Promise.resolve("Success 2")
])
.then(res => console.log("Result:", res))
.catch(err => console.log("Caught:", err));  //Output Caught Error 1
// Error will be return because it will require all the Promises to be resolved and none of the promise can be rejected


// Q14. The "Callback" Context Trap

const player = {
    score: 50,
    updateScore() {
        setTimeout(function() {
            console.log(this.score);
        }, 100);
    }
};


player.updateScore(); // Output : undefined
// Whenever using function inside the settimeout it will target to the global scope -> window, it will not target to the local
//  scope which is 50 thus in the global context the score variable is not present so it will return undefined 

// Q15. Throwing Inside a Chain

Promise.resolve(1)
    .then(x => {
        throw new Error("Invalid");
    })
    .catch(err => {
        console.log("Caught Error");
        return 10;
    })
    .then(x => console.log(x));  // Caught Error       10
    //  It will throw new Error and the flow of the execution of the program will goes inside the catch block and the catch
    // block gets executed thus Caught Error and 10 will be printed onto the console




// Q16. Async Function Order

async function foo() {
    console.log("A");
    await Promise.resolve();
    console.log("B");
}

console.log("C");
foo();
console.log("D");
// Output :   C   A  D   B
// Explanation: C will be executed because the async function is just declared and not called yet so C will be executed
//  after this async function foo is called and inside that A is there so it will be executed. 
//  Now promise is there with await so untill the promise is not resolved the function stops the execution and the next line 
//  on the context will be executed 
//  And D will be executed and after that at last after all the items onto the call stack is empty the micro task queue is executed
// by event loop and B will be executed



// Q17. The "Finally" Gotcha

Promise.resolve("Done")
    .finally(() => {
        console.log("Cleanup");
        return "Modified?";
    })
    .then(res => console.log(res)); // Output : Cleanup  Done
    //  finally block will be executed irrespective of the condition and error and will print Cleanup and finally block doesnt
    //  have the privilliges to modify the value of the Promise it so Modified will not be printed and in the output the promise
    //  remains as it is and Done will be printed onto the terminal


// Q18. Variable Hoisting & Promises

console.log(a);
var a = 5;

Promise.resolve().then(() => {
    console.log(a);
});

a = 10;
//  console.log(a) → Prints undefined.
//  a becomes 5.
//  a becomes 10.
//  Microtask runs console.log(a) → Prints 10.




// Q19. Microtask vs Macrotask Interleaving

setTimeout(() => console.log("T1"), 0);

Promise.resolve().then(() => {
    console.log("P1");
    setTimeout(() => console.log("T2"), 0);
});

Promise.resolve().then(() => console.log("P2"));

console.log("End");

// Output : End P1 P2 T1 T2
//  Call Stack          Call Back Queue             Micro Task Queue        Macro Task Queue        EventLoop           output
//   T1 -------------------------------------------------------------------->   T1
//   P1 ------------------------------------------>     P1
//   T2 --------------------------------------------------------------------->  T2
//   P2 ----------------------------------------------------------------------> P2
//   End                                                                                                                   End
//   P1   <-----------------------------------------     P1                                             <ac>                P1
//   P2 < --------------------------------------------------------------------  P2                      <ac>                P2
//   T1 < ------------------------------------------------------------------   T1                       <ac>                T1
//   T2 <  --------------------------------------------------------------------  T2                     <ac>                T2

// Q20. Object Method Assigned to Class

class Manager {
    constructor(name) {
        this.name = name;
    }

    print = () => {
        console.log(this.name);
    }
}

const m = new Manager("Sarah");
const p = m.print;
p();
// Output: Sarah
//  Reason why Arrow function retains the name using this because arrow function doesnt have the lexical bind with this
//  We require to explicitly define in this question the constructor will initialized at the time of object creation at this 
//  moment arrow function will target and lock this to the particular class and returns the value as Sarah


/**
 * 1) Create an HTML file with a paragraph <p id="secret-message">Initial Text</p> and a button.
 * On button click, select the paragraph using getElementById and change its text to "You found the secret message!".
 */
function task1() {
  const p = document.getElementById('secret-message');
  if (p) p.textContent = "You found the secret message!";
}

/**
 * 2) Create three <div> elements with the class box.
 * Select all boxes using querySelectorAll and change the background color of each box to lightblue using forEach.
 */
function task2() {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
    box.style.backgroundColor = 'lightblue';
  });
}

/**
 * 3) Create a button with text "Clicks: 0".
 * Initialize a variable count = 0.
 * On each button click, increment count and update the button text accordingly.
 */
let count = 0;
function task3(buttonElement) {
  count++;
  buttonElement.textContent = `Clicks: ${count}`;
}

/**
 * 4) Create a <div> with a black border and white background.
 * Define a CSS class .active that changes the background to green and text color to white.
 * On click, toggle the .active class using classList.toggle().
 */
function task4(element) {
  element.classList.toggle('active');
}

/**
 * 5) Write a function downloadFile(url, callback) that simulates a 3-second delay using setTimeout.
 * After the delay, log "Download complete: [url]" and execute the callback function.
 */
function downloadFile(url, callback) {
  setTimeout(() => {
    console.log(`Download complete: ${url}`);
    callback();
  }, 3000);
}

/**
 * 6) Create three functions step1, step2, and step3, each accepting a callback and completing after 1 second using setTimeout.
 * Call them in sequence using nested callbacks.
 * Log "All steps finished" only after step3 completes.
 */
const step1 = (cb) => setTimeout(() => { console.log("Step 1 done"); cb(); }, 1000);
const step2 = (cb) => setTimeout(() => { console.log("Step 2 done"); cb(); }, 1000);
const step3 = (cb) => setTimeout(() => { console.log("Step 3 done"); cb(); }, 1000);

function runSteps() {
  step1(() => {
    step2(() => {
      step3(() => {
        console.log("All steps finished");
      });
    });
  });
}

/**
 * 7) Create a function tossCoin() that returns a Promise.
 * Resolve with "Heads" if a random number is greater than 0.5, otherwise reject with "Tails".
 * Consume the promise using .then() and .catch().
 */
function tossCoin() {
  return new Promise((resolve, reject) => {
    const result = Math.random() > 0.5;
    result ? resolve("Heads") : reject("Tails");
  });
}

// Consuming Task 7:
// tossCoin().then(res => console.log(res)).catch(err => console.error(err));

/**
 * 8) Create a Promise that resolves with the number 5.
 * Chain .then() to double the number, then another .then() to add 20, and finally log the result.
 */
function runChain() {
  Promise.resolve(5)
    .then(num => num * 2)
    .then(num => num + 20)
    .then(result => console.log("Task 8 Result:", result));
}

/**
 * 9) Create a function wait(ms) that returns a Promise and resolves after ms milliseconds using setTimeout.
 * Use it to log "2 seconds passed" after 2000 ms.
 */
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Consuming Task 9:
// wait(2000).then(() => console.log("2 seconds passed"));


/**
 * 10) Create a function simulateTask(name, delay) that returns a Promise resolving after delay ms.
 * Part A: Run three tasks sequentially using async/await.
 ).
 */
const simulateTask = (name, delay) => new Promise(resolve => {
  setTimeout(() => {
    console.log(`${name} finished`);
    resolve(name);
  }, delay);
});

// Part A: Sequential
async function partA() {
  console.time("Part A (Sequential)");
  await simulateTask("A1", 1000);
  await simulateTask("A2", 1000);
  await simulateTask("A3", 1000);
  console.timeEnd("Part A (Sequential)"); // Should be ~3s
}

// Part B: Simultaneous
async function partB() {
  console.time("Part B (Simultaneous)");
  await Promise.all([
    simulateTask("B1", 1000),
    simulateTask("B2", 1000),
    simulateTask("B3", 1000)
  ]);
  console.timeEnd("Part B (Simultaneous)"); // Should be ~1s
}

// install and  import "readline-sync" npm package before you do exercises
const readlineSync = require("readline-sync");
/**
 * Exercise 1
 *
 * ask user for a name and assign a response to variable {name}
 */
//let name = readlineSync.question('May I have your name? ');

//===== DO NOT TOUCH THIS BLOCK =====
//console.log(`Hi ${name}!`);
console.log("=====================");
console.log(`Let me do math for you!`);
console.log("=====================");
//===================================

/**
 * Exercise 2
 *
 * offer user to do some math, ask to provide a math symbol and
 * offer a few options: +, -, * or /
 * Save response to {selectedSymbol} variable.
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get correct symbol
 */
const symbols = ["+", "-", "*", "/"];

let selectedSymbol = readlineSync.keyIn(
  `Which symbol? ${symbols.join(", ")} `
);
console.log(selectedSymbol);

const collectResponse = () => {
  console.log("Oops! you chose wrong symbol. " + '"' + selectedSymbol + '"');
  console.log("Please choose the symbol from the options!");

  selectedSymbol = readlineSync.keyIn(
    `Which symbol? ${symbols.join(", ")} `
  );
};

while (!symbols.includes(selectedSymbol)) {
  collectResponse();
}
/**
 * Exercise 3
 *
 * ask user for the first number and assign response to a variable {number1}
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get a number
 */
let number1 = readlineSync.keyIn("Please enter the first number: ");

let isInteger = Number.isInteger(parseInt(number1)); //(number1 != parseInt(number1)

while (!isInteger) {
  console.log("Please enter a valid number");
  number1 = readlineSync.keyIn("Please enter the first number: ");
}

/**
 * Exercise 4
 *
 * ask user for the second number and assign response to a variable {number2}
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get a number
 */
let number2 = readlineSync.keyIn("Please enter the second number: ");
isInteger = Number.isInteger(parseInt(number2)); //(number2 != parseInt(number2)

while (!isInteger) {
  console.log("Please enter a valid number");
  number2 = readlineSync.keyIn("Please enter the second number: ");
}

/**
 * Exercise 5
 *
 * take numbers that user provided to you and do math based on user
 * selected symbol.
 *
 * show the result to the user
 */
const result = eval(number1 + selectedSymbol + number2);

console.log("=====================");
console.log(`Here you go, the result is ${result}`);
console.log("=====================");

const myName = "John"; // SET YOUR NAME

const visitors = ["Alex", "Mike", "Sam"]; // Add at least 5 names

/**
 * Exercise 1
 *
 * create a function {greetVisitors} and inside it write for loop which
 * will greet all people from "visitors" for each person you should
 * console.log "Hi {name}, my name is {myName}!"
 */
function greetVisitors() {
    for(let index = 0; index < visitors.length; index ++) {
        console.log(`Hi ${visitors[index]}, my name is ${myName}!`)
    }
}

// ========================
const numbers = [2, 123, 13, 1, 6, 84, 23, 12, 45]; // DON'T TOUCH THIS LINE :)

/**
 * Exercise 2
 * Create a function {getElementIndex} that uses a for loop to find the index of a
 * given item in {numbers}.
 * If the item is not present, return a string "Item not found"
 */
function getElementIndex(num) {
   
    for(let index = 0; index < numbers.length; index++) {
        if(numbers[index] === num) {
            return index
        }    
    }
   
    return "Item not found"
}

// ========================

/**
 * Exercise 3
 * Create a function {total} that will return sum of all numbers
 * from {numbers} array
 */
function total() {
    let total = 0;
    for(let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }    
    return total;
}

// ========================

const numbersForIndexes = [6, 2, 16, 23, 84, 21, 9, 3]; // DON'T TOUCH THIS LINE :)

/**
 * Exercise 4
 * Create a function {addIndex} that takes {numbersForIndexes} array,
 * and returns a new array which includes each number + it's index
 */
function addIndex() {
    let addindex = [];
    for(let i = 0; i < numbersForIndexes.length; i++) {
        plusindex = i + numbersForIndexes[i];
        addindex.push(plusindex);
        
        plusindex = 0;
    }  
    return addIndex;
}
addIndex()

const forLowestNumber = [5, 234, 96, 34, -34, 0, 23]; // DON'T TOUCH THIS LINE :)
/**
 * Exercise 5
 *  create function {lowestNumber} which will return the lowest integer
 * from {forLowestNumber}
 */
function lowestNumber() {
    let lowestnumindex = 0; 
    for(let i = 0; i < forLowestNumber.length; i++) {

        if(forLowestNumber[i] < forLowestNumber[i+1]) {
            lowestnumindex = i;
        }
            i++;  
    }
    return forLowestNumber[lowestnumindex];
}
lowestNumber()
/* ===================================== */
/* For these exercises use "for of" loop */
/* ===================================== */

/**
 * Exercise 1
 *
 * create a function {getIntegersOnly} which takes an array
 * as a param, get all integers from this array and return
 * a new array with these integers. If there is no integers it should return
 * empty array.
 */
function getIntegersOnly(mixArr) {
    let integerArr = [];
    for(let item of mixArr) {
        if(typeof(item) === "number") {
            integerArr.push(item);
        }
    }
    return integerArr;
}
/**
 * Exercise 2
 * create a function {getEvenNumbers}, which takes an array of integers
 * and returns a new array with even numbers only, if there is no even
 * integers it should return an empty array
 */
function getEvenNumbers(mixArr) {
    let evenArr = [];
    for(let item of mixArr) {
        if(item != 0) {
            if(item % 2 == 0) {
                evenArr.push(item);
            }
        } 
    }
    console.log('Even:',evenArr)
    return evenArr;
}

/**
 * Exercise 3
 *
 * create a function {getEvenNumbersFromMixedArray},
 * which takes an array of values with different types and returns
 * a new array with even numbers only, if there is no even integers it
 * should return an empty array
 */
function getEvenNumbersFromMixedArray(mixArr) {
    let evenArr = [];
    for(let item of mixArr) {
        if(item != 0 && typeof(item) == 'number' ) {
            if(item % 2 == 0) {
                evenArr.push(item);
            }
        } 
    }
    return evenArr;
}

/**
 * Exercise 4
 * create a function {getOddNumbers}, which takes an array of integers
 * and returns a new array with odd numbers only, if there is no odd
 * integers it should return an empty array
 */
function getOddNumbers(Arr) {
    let oddArr = [];
    for(let item of Arr) {
       
        if(item % 2 == 1) {
            oddArr.push(item);
        }
        
    }
    console.log('Odd: ',oddArr)
    return oddArr;
}

/**
 * Exercise 5
 * create a function {evenOddTransform} which takes
 * array of integers as a param. Take each integer
 * and if it's odd add 1, if it's even subtract 1
 *
 * If your param is [1,2,3,4,5] the result should be
 * [2,1,4,3,6]
 */
function evenOddTransform(integerArr) {
    let Arr = [];
    for(let item of integerArr) {
        if(item % 2 == 0) {
            item = item - 1;
            Arr.push(item);
        }
        else if(item % 2 == 1) {
            item = item + 1;
            Arr.push(item);
        }
    }
    return Arr;
}
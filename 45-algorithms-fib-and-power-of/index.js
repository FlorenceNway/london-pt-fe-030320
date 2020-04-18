/**
 * Exercise 1
 *
 * create a function {generateFibonacci} which will take a parameter
 * that represents a length of an array that needs to be generated
 *
 * The array must be a Fibonacci sequence:
 *
 * The next number is found by adding up the two numbers before it,
 * always starting with 0 and 1.
 *
 * Ex: generateFibonacci(5) // return [0, 1, 1, 2, 3];
 */
const generateFibonacci = (lenghtOfArray) => {
  const result = [];
  for (let i = 0; i < lenghtOfArray; i++) {
    i < 2 ? result.push(i) : result.push(result[i - 2] + result[i - 1]);
  }

  return result;
};

/**
 * Exercise 2
 *
 * create a function {isPowerOf} which takes 2 arguments:
 *
 * number – a number
 * primeNumber – a number (a prime number)
 *
 * return a Boolean if your number is a power of primeNumber
 *
 * Ex: isPowerOf(27, 3) // return true;
 */

const isPowerOf = (number, primeNumber) => {
  let multiply = 1;

  for (let i = 0; i < primeNumber; i++) {
    multiply *= primeNumber;
  }

  return multiply == number ? true : false;
};

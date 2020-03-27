/* =================== */
/*   ARROW FUNCTIONS   */
/* =================== */

/**
 * Exercise 1
 *
 * create an arrow function {isEqual} which takes 2 numbers as params
 * and return true if they are equal or false if not
 */
isEqual = (num1 , num2) => {
    if(num1 === num2) {
        return true
    }
    return false
}

/**
 * Exercise 2
 *
 * create an arrow function {isLessOrEqual0} which takes number as a param
 * and return true if it equals or less than 0 or false if not
 */
isLessOrEqual0 = (num) => {
    if(num <= 0) {
        return true
    }
    return false
}

/**
 * Exercise 3
 *
 * create an arrow function {timeToSeconds} that takes
 * 2 params. First - hours, second - minutes, and as a result
 * return amount of seconds.
 *
 * Don't forget to set default values for your params, 0 and 0
 * so you will not break your function if you forget to pass params
 */
timeToSeconds = (hours = 0, minutes = 0) => {
    let seconds = (hours * 60 * 60) + (minutes * 60)
    return seconds
}

/**
 * Exercise 4
 *
 * create an arrow function {isGameWorthTheCandle} which
 * takes 3 params. probability, prize and
 * pay. If probability * prize is more than
 * pay then return true otherwise return false
 */
isGameWorthTheCandle = (probability, prize, pay) => {
    if ((probability * prize) > pay) {
        return true
    }
    return false
}

/**
 * Exercise 5
 *
 * create an arrow function {longerString} that takes two strings
 * as parameters and returns the string which is longest. If the strings are
 * equal in length return the string "Equal!"
 */
longerString = (str1, str2) => {
    if (str1.length > str2.length) {
        return str1
    }else if (str2.length > str1.length) {
        return str2
    }else {
        return "Equal!"
    }
}
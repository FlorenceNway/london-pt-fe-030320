/**
 * Exercise 1
 *
 * create an object "user", which has
 * properties "firstName", "lastName" and "age"
 *
 * PS: use console.log() to see the result
 */
const user = {firstName:'Flo', lastName:'Nway', age:25}

/**
 * Exercise 2
 *
 * create an object "allTypes" with a property of types:
 * string, number, array, object, function, boolean
 *
 * PS: use console.log() to see the result
 */
const allTypes = {
    Name: 'flo', 
    Number: 5, 
    food: ['burger', 'fried seafood rice' ], 
    favourite:{animal:'cat', exercise:'yoga'},
    funct : function () {
        console.log('this is function')
    },
    lazy: false,
}

/**
 * Exercise 3
 *
 * create a function "createMovieObject" which takes
 * name, rating and ticketPrice and returns a movie object
 * with these properties
 *
 * PS: use console.log() to see the result
 */

 function createMovieObject(name, rating, ticketPrice) {
     const movieObj = {};
     movieObj['name'] = name;
     movieObj['rating'] = rating;
     movieObj['ticketPrice'] = ticketPrice;
    return movieObj;
 }
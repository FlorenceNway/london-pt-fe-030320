/**
 * Exercise #1
 *
 * forEach(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is
 * passed each element and the index.
 *
 */
const forEach = (array,callback) => {
    for(let item of array) {
        callback(item, array.indexOf(item))
    }
}

/**
 * Exercise #2
 *
 * map(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. A new
 * array is returned which contains
 * whatever was returned from each
 * time the callback was invoked.
 *
 */
const map = (array, callback) => {
    const newArray = []
    for(let element of array) {
        let result = callback(element, array.indexOf(element))
        newArray.push(result)
    }
    return newArray
}

/**
 * Exercise #3
 *
 * filter(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. A new
 * array is returned which contains
 * _only_ the elements for which the
 * callback returned a truthy value.
 *
 */
const filter = (array, callback) => {
    const newArray = []
    for(let element of array) {
        let result = callback(element, array.indexOf(element))
        if(result) {
            newArray.push(element)
        }   
    }
    return newArray
}

/**
 * Exercise #4
 *
 * find(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns the _first element_
 * for which the callback returns a
 * truthy value.
 *
 */
const find = (array, callback) => {
    let firstElment;
    for(let element of array) {
        let result = callback(element, array.indexOf(element))
        if(result) {
           firstElment = element
           break;
        }   
    }
    return firstElment
}

/**
 * Exercise #5
 *
 * findIndex(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns the _index of
 * the first element_ for which the
 * callback returns a truthy value.
 *
 */
const findIndex = (array, callback) => {
    let firstElmentIndex;
    for(let element of array) {
        let result = callback(element, array.indexOf(element))
        if(result) {
           firstElmentIndex = array.indexOf(element)
           break;
        }   
    }
    return firstElmentIndex
}


/**
 * Exercise #6
 *
 * every(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns a boolean value
 * representing if every time the
 * callback was invoked it returned
 * a truthy value.
 *
 */
const every = (array, callback) => {
    let allTruthy = true;
    for(let element of array) {
        let result = callback(element, array.indexOf(element))
        if(!result) {
            allTruthy = false
            break;
        }
    }
    return allTruthy
}

/**
 * Exercise #7
 *
 * some(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns a boolean value
 * representing if _any_ time the
 * callback was invoked it returned
 * a truthy value.
 *
 */
const some = (array, callback) => {
    let someTruthy = false;
    for(let element of array) {
        let result = callback(element, array.indexOf(element))
        if(result) {
            someTruthy = true
            break;
        }
    }
    return someTruthy
}

/**
 * Exercise #8
 *
 * reduce(array, callback, initialValue)
 *
 * Reduce is often used for combining
 * values together.
 *
 * `reduce` should take 3 arguments:
 * `array`, `callback` and `initialValue`.
 *
 * The callback is invoked for every
 * element in the array and is passed
 * **the current cumulative value**,
 * each element and the index. Whatever
 * the callback returns is the new
 * cumulative value. The function
 * should return the final cumulative
 * value.
 *
 */
const reduce = (array, callback, initialValue = 0) => {
    let accumulator = initialValue;
    
    for(let element of array) {
        accumulator = callback(accumulator, element, array.indexOf(element))   
    }
    return accumulator
}

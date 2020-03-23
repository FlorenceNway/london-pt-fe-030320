/**
 * Exercise 1
 * create a function {logProperties} which will
 * take object as a param and console log each property in a format
 * "Property name: {propertyName}"
 */
function logProperties(obj) {
    for(let key in obj) {
        //console.log(`${key}: ${obj[key]}`)
        console.log(key)
    }
}

/**
 * Exercise 2
 * Create a function {getAllValues} that takes an object
 * and returns an array of all values.
 */
function getAllValues(obj) {
    const values = [];
    for(let key in obj) {
        values.push(obj[key])
    }
    return values;
}

/**
 * Exercise 3
 * Create a function {getAllValuesAsString} that takes an object
 * and returns all values as one string with space separation.
 */
function getAllValuesAsString(obj) {
    const values = [];
    for(let key in obj) {
        values.push(obj[key])
    }
    
    return values.join(' ');
}

/**
 * Exercise 4
 * Create a function {propertyValueString} that takes object as a param
 * and log property and values as string in a next format:
 * 'PROPERTY: VALUE'
 */
function propertyValueString(obj) {
    
    for(let key in obj) {
        let string = `${key}: ${obj[key]}`
        console.log(string)
    }
}
/**
 * create an array "carBrands"
 * and assign to it ["Mercedes", "Volvo", "BMW", "Reno", "Vauxhall"]
 */
const carBrands = ["Mercedes", "Volvo", "BMW", "Reno", "Vauxhall"]
/**
 * Exercise 1
 *
 * remove the last element from the carBrands array
 *
 * * PS: console.log() the result to see the difference
 */
carBrands.pop()
/**
 * Exercise 2
 *
 * remove the first element from the carBrands array
 *
 * * PS: console.log() the result to see the difference
 */
carBrands.shift()
/**
 * Exercise 3
 *
 * from "carBrands" remove "Vauxhall"
 *
 * * PS: console.log() the result to see the difference
 */

function findVaux(car) {
    return car == 'Vauxhall'
}
const index = carBrands.findIndex(findVaux)
delete carBrands[index]
/**
 * Exercise 4
 *
 * in "carBrands" replace Citroen with Rolls-Royce
 *
 * * PS: console.log() the result to see the difference
 */
carBrands.push('Citroen')
console.log(carBrands)
const citroenIndex = carBrands.indexOf('Citroen')
carBrands[citroenIndex] = 'Rolls-Royce'
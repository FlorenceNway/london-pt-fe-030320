
// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
//   }


const factorial = (n) => {
    if(n == 0) {
        return 1;
    }else {
        let total = n;
        while(n > 1) {
            
            total *= n - 1
            n--

        }
        return total
    }
}

const fact = factorial(5)
console.log(fact)

//========================

const isPalindrome = (str) => {
    str = str.split(' ').join('')
    let result;
    for(let i = 0; i < (str.length)/2; i++){
        if(str[i] == str[str.length - (i + 1)]) {
            result = true
        }else {
            result = false
        }
    }
    return result
       
}
const result = isPalindrome("race car")
console.log(result)


module.exports = {
    factorial: factorial,
    isPalindrome: isPalindrome

}
const target = 15;
const userValue = "15";

const password = "JSisKool888";
const passwordConfirmation = "JSisCool888";

let passwordMatchesConfirmation;
let passwordMessage;

const sortOrder = "ALPHABETICAL";
let fruits;


// ADD YOUR CODE BELOW

const targetMatchesCoercedUserValue = target == userValue;
const targetMatchesUserValue = target === userValue;

passwordMatchesConfirmation = targetMatchesUserValue;

if(passwordMatchesConfirmation == false) {
    passwordMessage = "Oops, your password and confirmation do not match!"
}

if(sortOrder == "ALPHABETICAL") {
    fruits = "banana, cherry, watermelon"
}


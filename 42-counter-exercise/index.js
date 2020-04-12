let step = 0;
let counter = 0;

const step_value = document.querySelector('.step_value')
/**
 * Exercise 1
 *
 * create a function {action} which will take a {symbol} param: "+" or "-".
 * increment {counter} by {step} if you pass "+", or
 * decrement {counter} by {step} if you pass "-"
 *
 * NOTE: ".counter_value" should always represent the current value of {counter}
 */
const action = (symbol) => {
    if(symbol == '+') {
        counter = counter + step;
    }else {
        counter = counter - step;
    }
    const counter_value = document.querySelector('.counter_value')
    counter_value.innerText = counter;
}
/**
 * Exercise 2
 *
 * When the user clicks on "Set step" button, you need to:
 * 1. set {step} to the current value of input.
 * 2. reset value of input field to 1
 * 3. update value of ".step_value" to value of {step}
 *
 * NOTE: {step} should be an integer
 *
 */
const handleSetStep = () => {
    const form = document.querySelector('.step_form')
    const input = document.querySelector('#step');
    step = parseInt(input.value)

//    input.addEventListener('change',(e) => {
//         if(Number.isInteger(e.target.value)){
//             step = e.target.value
//         }
//     })
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        step = Number(input.value);
        step_value.innerText = step;
        input.value = 1;
    })
}
    

/**
 * Exercise 3
 *
 * handle click on "#decrement" button and
 * decrement counter by {step}
 *
 * NOTE: remember to use your {action} function
 */
const decrementBtn = document.querySelector('#decrement')
    decrementBtn.addEventListener('click',(e) => {
        action('-')
    })

/**
 * Exercise 4
 *
 * handle click on "#increment" button and
 * increment counter by {step}
 *
 * NOTE: remember to use your {action} function
 */
const incrementBtn = document.querySelector('#increment')
    incrementBtn.addEventListener('click',(e) => {
        action("+")
    })


/**
 * Exercise 5
 *
 * when the user clicks on "#auto_decrement",
 * {counter} should be decremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */
let id;
const autoDecrementBtn = document.querySelector('#auto_decrement')

function auto_dec() {
    action("-")
}

autoDecrementBtn.addEventListener('click', (e) => {
    clearInterval(id)
    id = setInterval(auto_dec, 1000)
})

/**
 * Exercise 6
 *
 * when the user clicks on "#auto_increment",
 * {counter} should be incremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */
const autoIncrementBtn = document.querySelector('#auto_increment')

function auto_inc() {
    action("+")
}

autoIncrementBtn.addEventListener('click', (e) => {
    clearInterval(id)
    id = setInterval(auto_inc, 1000)
})


/**
 * Exercise 7
 *
 * when the user clicks on "#stop_auto",
 * the auto counter should stop
 */
const autoStopBtn = document.querySelector('#stop_auto')
autoStopBtn.addEventListener('click', (e) => {
    clearInterval(id)
})

handleSetStep();
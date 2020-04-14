const addCounterEl = document.querySelector("#new_timer");
const timersContainerEl = document.querySelector(".timers");

// USE THIS VARIABLE TO COUNT TIMERS
let timersCount = 0;

const createDOMElement = (tagname) => {
    return document.createElement(tagname)
}

/**
 * Exercise 1
 *
 * create a function {createTimerEl} which takes a number
 * and creates a div which matches the HTML structure you can find
 * in the README
 *
 * NOTE: each timer should have additional class with unique number(as you
 * can see in example - timer_$)
 */

const createTimerEl = (id) => {
    const timer_div = createDOMElement('div')
    timer_div.classList.add ('timer')
    timer_div.classList.add (`timer_${id}`)

    timersContainerEl.appendChild(timer_div)

    const remove = createDOMElement('div')
    remove.id = `remove_${id}`
    remove.className = 'remove'
    

    const h3 = createDOMElement('h3')
    h3.className = `h3_${id}`
    h3.innerHTML = 0 +' '
    const span = createDOMElement('span')
    span.innerHTML = 0
    h3.appendChild(span)
    

    timer_div.append(remove)
    timer_div.append(h3)

    const btn_div = createDOMElement('div')
    btn_div.className = 'btn'

    const resetBtn = createDOMElement('button')
    resetBtn.className = 'reset'
    resetBtn.id = `resetBtn_${id}`
    resetBtn.innerText = 'Reset'
    btn_div.append(resetBtn)

    const stopBtn = createDOMElement('button')
    stopBtn.className = 'stop'
    stopBtn.id = `stopBtn_${id}`
    stopBtn.innerText = 'Stop'
    btn_div.append(stopBtn)

    timer_div.append(btn_div)

    return timer_div
   
}

let timerid;
addCounterEl.addEventListener('click', (e) => {
    const totalTimers = document.querySelectorAll('.timer')
    if(totalTimers.length < 5) {
        timersCount = timersCount + 1;
        createTimerEl(timersCount) 
        
        timerid = setInterval(startTimer,10,timersCount)
    }

})


let counter = 0;

const startTimer = (id) => {  
    counter = counter + 1; 

    const milisec = counter % 100
    const sec = Math.floor(counter / 100)

    const h3 = document.querySelector(`.h3_${id}`)
    h3.innerHTML = `${sec} <span>${milisec}</span>`

    const stopButton = document.querySelector(`#stopBtn_${id}`)
    stopButton.addEventListener('click', (e) => {
        stop()
    })

    const resetButton = document.querySelector(`#resetBtn_${id}`)
    resetButton.addEventListener('click', (e) => {
        reset(id)
    })

    const timerDiv = document.querySelector(`.timer_${id}`)
    const removeBtn = document.querySelector(`#remove_${id}`)
    removeBtn.addEventListener('click',() => {
        timerDiv.remove()
    })
}


const stop = () => { 
    clearInterval(timerid) 
}


const reset = (id) => {
    clearInterval(timerid)
    counter = 0;
    timerid = setInterval(startTimer, 10, id)
}


// const remove = (parentEl, childdiv) => {
//     clearInterval(timerid)
//     parentEl.removeChild(childdiv)
// }






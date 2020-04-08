// OPEN index.html IN YOUR BROWSER
// CALL YOUR FUNCTIONS IN DEV TOOLS TO SEE CHANGES
const body = document.querySelector('body')
/**
 * Exercise 1
 *
 * create a function {createDOMElement} which takes a tag name
 * as an argument and returns a new DOM element.
 *
 * NOTE: we will use this function for other exercises.
 */
const createDOMElement = (tagname) => {
    return document.createElement(tagname)
}

/**
 * Exercise 2
 *
 * create a function {addPTag} which takes some text as an argument,
 * create a "p" tag which displays the text and appends it to
 * the body of the document
 */
const addPTag = (text) => {
    const pTag = createDOMElement('p')
    pTag.innerText = text
    body.append(pTag)
}


/**
 * Exercise 3
 *
 * create a function {addElementWithClass} which takes tag name,
 * text and class name as arguments. It should create an element
 * which displays the text and has the class and appends
 * the element to the body
 */
const addElementWithClass = (tagname, text, classname) => {
    const newtag = createDOMElement(tagname)
    newtag.innerText = text
    newtag.className = classname
    body.append(newtag)
}

/**
 * Exercise 4
 *
 * create a function {addElementWithMultipleClasses} which takes tag name,
 * text and an array of classes. Create an element which displays the
 * text, has the array of classes and append it to the body
 */
const addElementWithMultipleClasses = (tagname, text, classArr) => {
    const newtag = createDOMElement(tagname)
    newtag.innerText = text
    classArr.forEach(className => {
        newtag.classList.add(className)
    })
    body.append(newtag)
}

/**
 * Exercise 5
 *
 * create a function {buildAList} which takes a few arguments
 * 1 - list type ("ul" or "ol")
 * 2 - a class for the list element
 * 3 - a number of li elements that need to be created
 *
 * Each li should have the text "Item $" (where $ is it's position)
 * Add the list element to the body
 */
const buildAList = (listType, classname, quantity) => {
    const ul = createDOMElement(listType)
    ul.className = classname;
    
    let i = 0
    while(i < quantity) {
        const li = createDOMElement('li')
        li.innerText = `Item ${i}`
        ul.appendChild(li)
        i++
    }
    body.appendChild(ul)
    
}
/**
 * Exercise 6
 * !!! to test this function in your browser, first run {buildAList} !!!
 *
 * create a function {prependLiToList} which takes some text and
 * a class as arguments.
 *
 * Create a new li element which displays the text and has the class.
 *
 * Add that li to the list in your page, but the new li must be the
 * FIRST item in the list.
 *
 */
const prependLiToList = (text, classname) => {
    const li = createDOMElement('li')
    li.className = classname
    li.innerText = text
    const ul = document.querySelector('ul')
    ul.insertBefore(li, ul.childNodes[0]);
}

/**
 * Exercise 7
 * !!! to test this function in your browser, first run {buildAList} !!!
 *
 * create a function {pushToSelectedPosition} which takes some text,
 * a class and a position (index).
 *
 * Create an li with the text and class.
 *
 * Add the li into the list at the position passed to this function.
 *
 */
const pushToSelectedPosition = (text, classname, index) => {
    const li = createDOMElement('li')
        li.className = classname
        li.innerText = text;
    
    const ul = document.querySelector('ul')
    ul.insertBefore(li, ul.childNodes[index]);
}


/**
 * Exercise 8
 *
 * create a function {deleteSelectedElements} which takes
 * a parent selector and an element selector
 *
 * Find the parent element, then remove any ancestors of that
 * element which match the element selector
 *
 */


 const deleteSelectedElements = (parentEl, element) => {
   const parent = document.querySelector(parentEl);
   const childNodes = document.querySelectorAll(element);
   childNodes.forEach((child) => {
    parent.removeChild(child);
   });
 };
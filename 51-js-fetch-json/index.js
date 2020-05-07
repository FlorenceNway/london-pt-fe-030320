const button = document.querySelector("button");
const result = document.querySelector(".result");
const input = document.querySelector("input");
// ================================

// URL: https://cat-fact.herokuapp.com/facts

// BEFORE YOU START:
// run `npm install -g serve`
// then run `serve` in this directory

/**
 * Exercise 1
 *
 * create a function {fetchData} which takes
 * a URL as an argument and sends a GET request.
 * When you get a response, return an array of facts.
 */
const url = 'https://cat-fact.herokuapp.com/facts'

// const fetchData = (url) => {
// 	fetch(url)
// 	.then((response) => response.json())
// 	.then((bookData) => {
//     bookData.items.forEach((book) => {
//       console.log(book.volumeInfo.title);
//     });
//   });

// }

const fetchData = async(url) => {
	const data = await fetch(url)
	.then((response) => response.json())

	return data;
}


/**
 * Description of the application:
 *
 * As a user I should be able to:
 * 1. click on a button "Get random facts"
 * 2. view 3 random facts in ".result" element
 */

const render_fact = (text, authorFirstName, authorLastName) => {

	const eachFact = 
	`<li>
		<p class="fact">${text}</p>
		<p class="author">${authorFirstName} ${authorLastName}</p>
	</li>`

	result.innerHTML += eachFact
}

button.addEventListener('click',async() => {
	result.innerHTML = ''
	const random3Facts = []

	let facts = await fetchData(url)
	facts = facts.all

	for(let i = 1; i < 4; i++) {
		let randomfact = facts[Math.floor(Math.random() * facts.length)]
		random3Facts.push(randomfact)
	}
	
	random3Facts.forEach(fact => {
		render_fact(fact.text,fact.user.name.first, fact.user.name.last)
	})
})
// install and  import "readline-sync" npm package before you do exercises
const readlineSync = require("readline-sync");

let selectedItems = {
	book: "",
	movie: "",
	nextTrip: ""
};

const movies = [
	"The Invisible Man",
	"Never Rarely Sometimes Always",
	"Gretel & Hansel",
	"No time to die",
	"Bloodshot",
	"Onward",
	"Sonic"
];

const books = [
	"My Dark Vanessa",
	"Uncanny Valley",
	"Weather",
	"The night watchman",
	"All adults here",
	"Dear Edward",
	"Grown ups"
];

const countries = [
	"Italy",
	"France",
	"Germany",
	"Spain",
	"Portugal",
	"Denmark",
	"Netherland"
];
//---------------------------------------------
const user = {}
const mainmenu = ['Books', 'Movies', 'Next Destination']

mainMenu()


function selectedCategories(category, key) {
	for(let index = 0; index < category.length; index++) {
		if (index == user[key]) {
			selectedItems[key] = category[index]
		}
	}
}
//=============================================
/**
 * Exercise 1
 *
 * create a sub menu "Books" where you need to render a list of {books}.
 * User should be able to select one. On selection store the response
 * to {user.book}.
 *
 * NOTE: You need to add option to go back, to main menu
 */
function Books() {
	user['book'] = readlineSync.keyInSelect(books,`Pick a book you want to read ?`,{cancel: 'Go to main menu'})
	
	if(user['book'] === -1) {
		mainMenu()
	} else {
		selectedCategories(books, 'book')
	}
}



/**
 * Exercise 2
 *
 * create a sub menu "Movies" where you need to render a list of {movies}.
 * User should be able to select one. On selection store the response
 * to {user.movie}.
 *
 * NOTE: You need to add option to "go back", to main menu
 */
function Movies() {
	user['movie'] = readlineSync.keyInSelect(movies,`Pick a movie you want to watch ?`,{cancel: 'Go to main menu'})
	
	if(user['movie'] === -1) {
		mainMenu()

	} else {
		selectedCategories(movies, 'movie')
	}
}

/**
 * Exercise 3
 *
 * create a sub menu "Next destination" where you need to render a list
 * of {countries}. User should be able to select one. On selection store
 * the response to {user.nextTrip}.
 *
 * NOTE: You need to add option to go back, to main menu
 */

function Destinations() {
	user['nextTrip'] = readlineSync.keyInSelect(countries,`Pick a country you want to travel ?`,{cancel: 'Go to main menu'})
	
	if(user['nextTrip'] === -1) {
		mainMenu()

	} else {
		selectedCategories(countries, 'nextTrip')
	}
}
/**
 * Exercise 4
 *
 * create a top menu with categories: "Books", "Movies", "Next destination"
 * so user can pick one. User also should have the option "Exit".
 * When the user pick "Exit", log selected items.
 */

function mainMenu() {
	let menu = readlineSync.keyInSelect(mainmenu,`Pick a category`, {cancel: 'Exit'})
	if(menu == -1) {
		exit();

	}else {
		switch(menu) {
			case 0 : Books()
			case 1 : Movies()
			case 2 : Destinations()
			default: exit()
		}
	}
}

function exit() {
	console.log('Your choices are as follow: ')

	for(key in selectedItems) {
		if(selectedItems.hasOwnProperty(key)){
			console.log(key ,': ',selectedItems[key])
		}
	}
}


	
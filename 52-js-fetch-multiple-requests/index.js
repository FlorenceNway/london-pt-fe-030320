const resultEl = document.querySelector(".result");
const searchEl = document.querySelector("input");
const houseURL = "https://anapioficeandfire.com/api/houses/378";

// STORE YOUR SWORN MEMBERS IN {members}
let members = [];
// =============================

/*
 * 
 * REQUIREMENTS:
 * 
 * 1. I should be able to see all {swornMembers}
 * after the page has loaded.
 * 2. When I type a query inside the input it should only
 * display members whose name includes the query
 */

 /** 
  * HTML for each member: 
  * <li>
  *     <p class="name">Bilbo Baggins</p>
  *     <p class="life">1777 – 1888</p>
  *     <p class="gender"><strong>Gender: </strong>Male</p>
  *     <p class="culture"><strong>Culture: </strong>Hobbit</p>
  * </li>
 */
const fetchdata = async (url) => {
	const data = await fetch(url).then(response => response.json())
	return data;
}

const members_urls = async () => {
	const data = await fetchdata(houseURL)
	return data.swornMembers;
}

const getMembersData = async () => {
	const membersUrl = await members_urls();
	const member =  membersUrl.map(async url => await fetchdata(url));
	
	members = await Promise.all(member);
	return members;
};

const render_member = (name,born,died,gender,culture) => {
	const member = `<li>
	     <p class="name">${name}</p>
	     <p class="life">${born} – ${died}</p>
	     <p class="gender"><strong>Gender: </strong>${gender}</p>
	     <p class="culture"><strong>Culture: </strong>${culture}</p>
	 </li>`
	 resultEl.innerHTML += member
}

const render_allmembers = async() => {
	const members = await getMembersData()
	members.forEach(member => {
		render_member(member.name,member.born,member.died,member.gender,member.culture)
	})
}

const loadPage = async () => {
	render_allmembers()
}

const searchMembers = (members, input) => {
	const result = members.filter(member => member.name.toLowerCase().indexOf(input.toLowerCase()) !== -1)
	return result;
}
	

searchEl.addEventListener("keyup", (e) => {
	resultEl.innerHTML = ''
	const inputVal = e.target.value.toUpperCase();
	const searchedMembers = searchMembers(members, inputVal);
	console.log(searchedMembers)

	searchedMembers.forEach(member => {
		render_member(member.name,member.born,member.died,member.gender,member.culture)
	})
	
});	


loadPage()
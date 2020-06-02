import React, { useState, useEffect } from "react";
import "./App.css";

/**
 * 
 * Exercise:
 * 1. fetch data from the server(json-server)only if you don't
 * have contacts in state
 * 2. create input which will filter contacts on view based in user query(input value)
 * 3. render contacts
 * 
 * Contact HTML structure
 * =======================
 *	<li>
		<p>{name}</p>
		<p className={"company"}>{company}</p>
	</li>
 */

const App = () => {

	const [contacts, setContacts] = useState([])
	const [selectedContact, setSelectedContact] = useState("All");

	fetch("http://localhost:3001/contacts").then((response) => response.json()).then(res => setContacts(res));

	const contactsToRender =
		selectedContact === "All"
			? contacts
			: contacts.filter((contact) => contact.company.match(selectedContact));

	const handleChange = (e) => {
		setSelectedContact((e.target.value).toLowerCase())
	}

	return (
		<div className="App">
			<input type='text' onChange={handleChange} placeholder="Type the company name to search..."/>
			<ul>
				{contactsToRender.map((contact) => (
						<li>
							<p>{contact.name}</p>
							<p className={"company"}>{contact.company}</p>
						</li>
				))}	
			</ul>
		</div>
	);
};

export default App;

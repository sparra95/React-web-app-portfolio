import React, {useState, useEffect} from "react"
import "./Navbar.css"

export default function Navbar() {
	const [activeTab, setActiveTab] = useState("Resume")

	function handleClick(event) {
		// Remove the .active class from current active tab
		const activeTabElement = document.getElementById( activeTab );
		if ( activeTabElement !== null )
			activeTabElement.classList.remove( "activeTab" );

		// Add .active class to triggering element and set as new current activeTab
		event.target.classList.add("activeTab")
		setActiveTab( event.target.id )
	}

	// Component Did Mount
	useEffect(() => {
		if ( document.getElementById( activeTab ) !== null )
			document.getElementById( activeTab ).classList.add( "activeTab" );
	}, [])



	return (
		<nav>
			<button id="Resume" onClick={handleClick}>
				Resum&eacute;
			</button>
			<button id="DataVisuals" onClick={handleClick}>
				Data Visuals
			</button>
			<button id="TicTacToe" onClick={handleClick}>
				Tic Tac Toe
			</button>
			<button id="ProjectDocs" onClick={handleClick}>
				Project Documentation
			</button>
		</nav>
	)
}

// NOTES:
// Keep all your comment notes! This way you can talk about how you built this app
// (structure and design choices) and what optimizations you made over time! You're build version
// will not have the comments in the build version. :D

// - Possible optimization?: Consider an array booleans to keep track of each button's
// id (array index) and .activeTab status instead of accessing "document.getElementById()"

// - Possible optimization?: Convert <button>'s into <Tab /> Components and use with React.memo to
// prevent re-rendering of tabs that didn't have their .activeTab status changed

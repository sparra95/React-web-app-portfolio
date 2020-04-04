import React from "react"
import "./Navbar.css"

export default function Navbar(props) {
	const tabElements = props.tabs && props.tabs.map((name, i) => {
		const indexString = i.toString()
		const activeClass = props.activeTab === indexString? "activeTab": ""
		return <button
						key={i}
						id={indexString}
						className={activeClass}
						onClick={() => { props.changeTab(indexString) }}
					 >
						{ name }
					 </button>
	})

	return ( <nav>{ tabElements }</nav> )
}


// NOTES:
// Keep all your comment notes! This way you can talk about how you built this app
// (structure and design choices) and what optimizations you made over time! You're build version
// will not have the comments in the build version. :D

// - Possible optimization?: Consider an array booleans to keep track of each button's
// id (array index) and .activeTab status instead of accessing "document.getElementById()"

// - Possible optimization?: Convert <button>'s into <Tab /> Components and use with React.memo to
// prevent re-rendering of tabs that didn't have their .activeTab status changed

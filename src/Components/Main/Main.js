import React from "react"
import "./Main.css"

export default function Main(props) {
	return (
		<h1 className="Main">
			{props.content}
		</h1>
	)
}

// NOTES:
// -Consider changing the name of this tab.. it feels a bit vague
// - Think about how to transfer information between this
// component and Navbar (which will know which tab is active)
// - Perhaps, the 'active' component will bubble up to Main then
// trickle down to Content (this)

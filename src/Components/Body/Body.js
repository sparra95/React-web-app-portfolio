import React, {useState} from "react"
import Navbar from "../Navbar/Navbar.js"
import Main from "../Main/Main.js"
import "./Body.css"
import DataVisuals from "../DataVisuals.js"

export default function Body() {
	const [display, setDisplay] = useState("1")
	const tabs = [
		"Resumé",
		"Data Visuals",
		"Tic Tac Toe",
		"Project Documentation"
	]

	function changeDisplay(id) {
		if (id !== display) setDisplay( id )
	}

  return (
    <div className="Body">
      <Navbar tabs={tabs} activeTab={display} changeTab={changeDisplay} />

			{display === "0"? <Main content={tabs[0]} /> : null}
			{display === "1"? <DataVisuals content={tabs[1]} /> : null}
			{display === "2"? <Main content={tabs[2]} /> : null}
			{display === "3"? <Main content={tabs[3]} /> : null}
    </div>
  )
}

// NOTES:
// - Track which tab is active and display the corresponding Component
// (ex: if Resume tab is active then render on the <Resume> Component)
// aka the Content Component is not needed as container

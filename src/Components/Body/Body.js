import React, {useState} from "react"
import Navbar from "../Navbar/Navbar.js"
import "./Body.css"
import DVC from "../DataVisualization/DataVisualizationContainer.js"
import Games from "../Games/GamesContainer.js"
import Resume from "../Resume/ResumeContainer.js"

export default function Body() {
	const [display, setDisplay] = useState("0")
	const tabs = [
		"Resumé",
		"Data Visualization",
		"Games"
	]

	function changeDisplay(id) {
		if (id !== display) setDisplay( id )
	}

  return (
    <div className="Body">
      <Navbar tabs={tabs} activeTab={display} changeTab={changeDisplay} />

			{/* Consider using href() or something to save tab display elements
					after they are activated and loaded the first time. Essentially saving their state
					and preventing unnecessary re-rendering of previously active tabs*/}

			{display === "0"? <Resume /> : null}
			{display === "1"? <DVC /> : null}
			{display === "2"? <Games /> : null}

    </div>
  )
}

// NOTES:


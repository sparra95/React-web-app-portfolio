import React, {useState} from "react"
import Navbar from "../Navbar/Navbar.js"
//import Main from "../Main/Main.js"
import "./Body.css"

export default function Body() {
	const [display, setDisplay] = useState("0")
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

			<h1 style={{"display": display==="0"? "block":"none"}}>Resume</h1>
			<h1 style={{"display": display==="1"? "block":"none"}}>Data Visuals</h1>
			<h1 style={{"display": display==="2"? "block":"none"}}>Tic Tac Toe</h1>
			<h1 style={{"display": display==="3"? "block":"none"}}>Documentation</h1>
    </div>
  )
}

// NOTES:
// - Track which tab is active and display the corresponding Component
// (ex: if Resume tab is active then render on the <Resume> Component)
// aka the Content Component is not needed as container

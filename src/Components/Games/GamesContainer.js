import React from "react"
import TicTacToe from "./TicTacToe/Main.js"

const containerStyles = {
	padding: "20px",
	maxWidth: "100%"
}

export default function GamesContainer() {
	return(
		<div style={containerStyles}>
			<h1 style={{margin: "0 0 10px 0"}}>Games</h1>
			<p style={{color: "dimgray", fontSize:"14px",margin: "0"}}> A fun way to demonstrate skills in CSS animation and knowledge of algorithms</p>
			<TicTacToe />
		</div>
	)
}

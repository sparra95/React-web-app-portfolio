import React from "react"
import MonthlyFinances from "./MonthlyFinances.js"

const containerStyles = {
	padding: "20px",
	maxWidth: "100%"
}

export default React.memo(function() {
	console.log("DVC rendered")
	return (
		<div style={containerStyles}>
			<h1>Data Visualization</h1>
			<MonthlyFinances />
		</div>
	)
})

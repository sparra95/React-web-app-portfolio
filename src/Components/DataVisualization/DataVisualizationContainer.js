import React from "react"
import MonthlyFinances from "./MonthlyFinances.js"

export default React.memo(function() {
	return (
		<div style={{maxWidth: "100%"}}>
			<h1>Data Visualization</h1>
			<MonthlyFinances />
		</div>
	)
})

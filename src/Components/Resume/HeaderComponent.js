import React from "react"

export default function HeaderComponent({title}) {
	if (!title) return null
	
	return (
		<div className="header-component">
			<h1>{title}</h1>
			<hr />
		</div>
	)
}
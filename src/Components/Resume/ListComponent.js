import React from "react"

export default function ListComponent({list}) {
	if (!list || list.length === 0) return null
	
	const listItems = !list || list.map((str, i) => <li key={i+str.slice(0,1)}>{str}</li>)
	
	return (
		<div className="list-component">
			<ul>
				{listItems}
			</ul>
		</div>
	)
}
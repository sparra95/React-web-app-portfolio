import React from "react"
import GridComponent from "./GridComponent.js"
import ListComponent from "./ListComponent.js"

export default function SectionComponent({primaryText, secondaryText, date, tech, description}) {
	return (
		<div className="section-component">
			<h2>{primaryText}</h2>
			<p><small>{secondaryText} <span className="date">{date}</span></small></p>
			<GridComponent tech={tech} />
			<ListComponent list={description} />
		</div>
	)
}

SectionComponent.defaultProps = {
	primaryText: "",
	secondaryText: "",
	date: null,
	tech: [],
	description: []
}
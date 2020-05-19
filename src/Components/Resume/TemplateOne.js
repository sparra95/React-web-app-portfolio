import React from "react"
import "./TemplateOne.css"
import HeaderComponent from "./HeaderComponent.js"
import ListComponent from "./ListComponent.js"
import GridComponent from "./GridComponent.js"
import BarGraphComponent from "./BarGraphComponent.js"
import CounterComponent from "./CounterComponent.js"
import SectionComponent from "./SectionComponent.js"
import {profile, barGraphData, relevantTech, jobs, portfolio, education} from "./resumeData.js"

export default function TemplateOne() {
	return (
		<div className="template-container">
			<div className="section-1">
				<HeaderComponent title="Profile" />
				<ListComponent list={profile} />
				
				<HeaderComponent title="Technical Skills" />
				<CounterComponent number={7} text={"years of experience"} />
				<BarGraphComponent labels={barGraphData.labels} data={barGraphData.data} colors={barGraphData.colors} />
				
				<HeaderComponent title="Relevant Tech" />
				
				<GridComponent tech={relevantTech} />
			</div>
			<div className="section-2">
				<HeaderComponent title="Experience" />
				{jobs.map((obj, i) =>
					<SectionComponent
						key={obj.title+i}
						primaryText={obj.title}
						secondaryText={obj.company}
						date={obj.time_employed}
						tech={obj.skill_text}
						description={obj.highlights}
						styleList={true}
					/>
				)}
				
				
				<HeaderComponent title="Portfolio" />
				{portfolio.map((obj, i) =>
					<SectionComponent
						key={obj.name+i}
						primaryText={obj.name}
						secondaryText={obj.description}
						date={obj.date}
						tech={obj.tech}
						description={obj.achievements}
					/>
				)}
				
				<HeaderComponent title="Education" />
				<SectionComponent 
					primaryText={education.institution}
					secondaryText={education.degree}
					date={education.date}
					tech={education.tech}
					description={education.achievements}
					styleList={false}
				/>
			</div>
		</div>
	)
}

// TODO:
// - Add links to portfolio titles!
// - Counter, add kerning to text
// 
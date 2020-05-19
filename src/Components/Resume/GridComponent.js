import React, {useState, useRef} from "react"
import * as IconComponents from "@icons-pack/react-simple-icons"


function GridComponent({tech}) {
	const iconGrid = useRef(null)
	const isMobile = window.innerWidth <= 320
	const [expandGrid, setExpandGrid] = useState(false)
	const iconList = tech.map((name, index) =>
				<span key={name+index} className={!isMobile && expandGrid?"big":"small"}>
					{
						(IconComponents[name] && React.createElement(IconComponents[name], {size: 30}))
						|| <h2>{name.slice(0,2)}</h2>
					}
					<p className={!isMobile && expandGrid?"big":"small"}>{name}</p>
				</span>
			)

	return (
		<div
			ref={iconGrid}
			className="grid-component"
			onClick={() => { if (!isMobile) setExpandGrid(!expandGrid) }}
		>
			{iconList}
		</div>
	)
}

export default GridComponent
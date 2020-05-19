import React, {useState, useEffect} from "react"

export default function CounterComponent({number, text}) {
	if (!number) return null
	
	const COUNT_SPEED = (number>10? (number>100? 1 : 10) : 100)
	const [counter, setCounter] = useState(0)
	
	useEffect(() => {
		if (counter < number) {
			setTimeout(function() {
				setCounter(counter+1)
			}, COUNT_SPEED)
		}
	},[counter])
	
	return (
		<div className="counter-component">
			<h1>{counter}</h1>
			<p>{text}</p>
		</div>
	)
}

CounterComponent.defaultProps = {
	number: null,
	text: ""
}

// TODO:
// - Goal: stack words (and kern?)
// - try separating words by space, create as html elements and "display:flex" container
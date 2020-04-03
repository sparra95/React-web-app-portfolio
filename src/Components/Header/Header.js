import React, {useState, useEffect} from "react"
import "./Header.css"

export default function Header() {
	// Think of something better than "array"
	const [text1, setText1] = useState("")
	const [text2, setText2] = useState("")
	const [text3, setText3] = useState("")
	const array = [
		"3 years professional experience",
		"Good Communication Skills",
		"Bilingual (Conversational Spanish)",
		"Adaptative",
		"Creative",
		"Disciplined"
	]

	// Run when Component mounts
	useEffect(() => {
		setText1( array[0] );
		setText2( array[1] );
		setText3( array[2] );

		let i = 0
		let arrayLength = array.length
		const timerId = setInterval(() => {
			i = ( i+3 ) % arrayLength;
			setText1( array[(i+0)%arrayLength] );
			setText2( array[(i+1)%arrayLength] );
			setText3( array[(i+2)%arrayLength] );
		}, 12000)

		// Clean up before Component unmounts
		return (() => {clearInterval( timerId )})
	}, [])

  return (
    <header>
      <div id="titleContainer">
				<h1>Steven <strong>Parra</strong></h1>
				<p>Front End Developer</p>
			</div>
			<div id="contactContainer">
				<p id="text1" className="textSlideAnimation1">{ text1 }</p>
				<p id="text2" className="textSlideAnimation2">{ text2 }</p>
				<p id="text3" className="textSlideAnimation3">{ text3 }</p>
			</div>
    </header>
  )
}

// Notes:
// - Optimization: Memoize this entire component with React.memo!

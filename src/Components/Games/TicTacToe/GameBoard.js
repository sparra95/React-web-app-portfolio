import React from "react";
//import "Main.css"

/******************/
/*** Game Board ***/
/******************/

export default function TicTacToe_GameBoard({board, onClick, win}) {

	const squares = board.map((sq, i) => {
		return (
			<button
				key={i}
				onClick={() => onClick(i)}
				className={(win && win.includes(i)) ? "winning-square": "square"}
				>
					{sq}
				</button>
		)
	})

	return (
		<div className="game-board">
			{ squares }
		</div>
	)
}

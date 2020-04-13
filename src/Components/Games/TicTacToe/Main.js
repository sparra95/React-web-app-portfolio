import React, {useState, useEffect} from "react";
import GameBoard from "./GameBoard.js";
import "./Main.css"

/******************/
/*** Game Logic ***/
/******************/

export default function TicTacToe_Main() {

	const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext, setXisNext] = useState(true)
	const [winner, winningLine] = calculateWinner(board)
	const [message, setMessage] = useState("Welcome! X is first")
	const [btnClass, setBtnClass] = useState("reset-btn")
	const [titleClass, setTitleClass] = useState("title")
	
	function calculateWinner(board) {
		const winningCombos = [
    	[0, 1, 2],
    	[3, 4, 5],
    	[6, 7, 8],
    	[0, 3, 6],
    	[1, 4, 7],
    	[2, 5, 8],
    	[0, 4, 8],
    	[2, 4, 6]
  	];

		for (let i=0; i<winningCombos.length; i++) {
			const [a, b, c] = winningCombos[i]

			if (board[a] && board[a] === board[b] && board[a] === board[c]) {
				return [board[a], winningCombos[i]]
			}
		}

		return [null, [null, null, null]]
	}


	function handleClick(i) {
		const boardCopy = board.slice() // ES6 way: [...board]

		if (winner || boardCopy[i] ) return

		// If space is empty, fill it, and switch players
		if ( boardCopy[i] === null ) {
			boardCopy[i] = xIsNext ? "X" : "O"
			setBoard( boardCopy )
			setXisNext( !xIsNext )
			setMessage( (!xIsNext? "X":"O")+" is next" )
		}
	}


	useEffect(() => {
		if ( winner ) {
			setMessage((winner)+" wins!")
			setTitleClass("title title-winner")
			setTimeout(()=>{setBtnClass("reset-btn reset-btn-game-over")}, 200)
			return
		}

		let isGameBoardFull = true
		for (let i=0; i<board.length; i++) {
			if (board[i] === null) isGameBoardFull = false
		}

		if ( isGameBoardFull ) {
			setMessage("Tie!")
			setTitleClass("title title-tie-game")
			setTimeout(()=>{setBtnClass("reset-btn reset-btn-game-over")}, 200)
			return
		}
	},[board])

	function resetGame() {
		setBoard( Array(9).fill(null) )
		setXisNext( "X" )
		setMessage("Welcome! X is first")
		setTitleClass("title")
		setBtnClass("reset-btn")
	}



 	return (
 		<div className="game-container">
			<h5 className={titleClass}>{ message }</h5>
 			<GameBoard board={board} onClick={handleClick} win={winningLine} />
			<button className={btnClass} onClick={resetGame}>Reset Game</button>
 		</div>
	)
}

// TODO:
// - Add title: <h1> "Tic tac Toe" with styling
// - if Tie, make all button text gray
// - on square hover, show gray 'X' or 'O' depending on who's turn it is

import { useState } from 'react'
export default function GameBoard({ activePlayer, togglePlayer, addPlayerMove }) {
    const [board, setBoard] = useState(createSquareArray(3))

    function handleBoardClick(i, j) {
        // console.log("Clicked:",i, j)
        const newBoard = [...board]
        newBoard[i][j] = activePlayer
        setBoard(newBoard)
        addPlayerMove(i,j)
        togglePlayer()
    }

    const displayBoardCols = (row, i) => (
        <ol>
            {row.map((col, j) => (
                <li key={`${i}-${j}`}>
                    <button onClick={() => handleBoardClick(i, j)}>
                        {col}
                    </button>
                </li>
            ))}
        </ol>
    )

    const visualiseBoard = (
        <ol id="game-board">
            {board.map((row, i) => (
                <li key={i}>{displayBoardCols(row, i)}</li>
            ))}
        </ol>
    )

    // console.log(vizBoard)
    return visualiseBoard
}

// Helper Function - 2 dimensional array
// map(rows), map(cols), set value ''
const createSquareArray = (n) =>
    [...Array(n)].map(() => [...Array(n)].map(() => ''))

/* Note the fill method seems to create the same object and replicate it, 
each row was pointing to the same object*/
// const [board, setBoard] = useState(
//     new Array(3).fill(new Array(3).fill('x'))
// )

import { useState } from 'react'
export default function GameBoard({
    playerProps,
    handleBoardClick,
    moveHistory,
}) {
    const { playersStates } = playerProps
    const board = deriveBoard(moveHistory, playersStates)

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

// Helper Function - derive board state
const deriveBoard = (moveHistory, playersStates) => {
    const board = createSquareArray(3)
    moveHistory.map((log) => {
        const [ind, row, col] = log
        board[row][col] = playersStates[ind].symbol
    })
    return board
}

// Helper Function - 2 dimensional array
// map(rows), map(cols), set value ''
export const createSquareArray = (n) =>
    [...Array(n)].map(() => [...Array(n)].map(() => ''))

/* Note the fill method seems to create the same object and replicate it, 
each row was pointing to the same object*/
// const [board, setBoard] = useState(
//     new Array(3).fill(new Array(3).fill('x'))
// )

/*
TODO:
create a derived board state using the move history
start with initial board and replay populating the board with symbols from the 

move history array 
and
Player symbol

*/

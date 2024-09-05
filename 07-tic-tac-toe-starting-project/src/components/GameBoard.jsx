import { useState } from "react"
export default function GameBoard() {
    const [board, setBoard] = useState(Array(3).fill(Array(3).fill('x')))

    function handleBoardClick(i,j){
        const newBoard = [...board]
        newBoard[i][j]=='x' ? newBoard[i][j]='o' : newBoard[i][j]='x'
        setBoard(newBoard)
    } 

    const displayBoardCols = (row, i) => (
        <ol>
            {row.map((col, j) => (
                <li id={j}>
                    <button onClick={() => console.log("Clicked on board - ","row: "+i,"col "+j)}>
                        {col}
                    </button>
                </li>
            ))}
        </ol>
    )

    const visualiseBoard = (
        <ol id="game-board">
            {board.map((row, i) => (
                <li key={i}>{displayBoardCols(row,i)}</li>
            ))}
        </ol>
    )
    
    
    
    // console.log(vizBoard)
    return visualiseBoard
}


    
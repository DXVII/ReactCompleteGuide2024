import { useState } from 'react'
import Player from './components/Player'
import GameBoard, { EMPTY_CELL, deriveBoard } from './components/GameBoard'
import Log from './components/Log'

import { WINNING_COMBINATIONS} from './winning-combinations'
const [GAME_WIN, GAME_DRAW, GAME_ONGOING] = [1, 0, -1]

export default function App() {
    // --- State ---
    const [playersStates, setPlayersStates] = useState([
        { name: 'Player 1', symbol: 'X' },
        { name: 'Player 2', symbol: 'O' },
    ])

    const [activeInd, setActiveInd] = useState(0)
    const [moveHistory, setMoveHistory] = useState([])
    const [gameResult, setGameResult] = useState(GAME_ONGOING)

    // --- Functions ---
    const togglePlayer = () => setActiveInd(activeInd === 0 ? 1 : 0)
    const handleBoardClick = (i, j) => {
        // console.log("Clicked:",i, j)
        addPlayerMove(i, j)
        const gameEnded = checkGameResult(moveHistory, playerProps, setGameResult)
        if (!gameEnded) togglePlayer()
    }
    const addPlayerMove = (row, col) => {
        const copyHistory = moveHistory
        copyHistory.push([activeInd, row, col])
        setMoveHistory(copyHistory)
    }

    const playerProps = {
        playersStates,
        setPlayersStates,
        activeInd,
    }
    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player playerProps={playerProps} playerIndex={0} />
                    <Player playerProps={playerProps} playerIndex={1} />
                </ol>
                <center>
                    <div id="game-board">Game Board</div>
                    <GameBoard
                        playerProps={playerProps}
                        handleBoardClick={handleBoardClick}
                        moveHistory={moveHistory}
                    />
                {gameResult == GAME_WIN && (
                    <div>{`Winner: ${playersStates[activeInd].name}`}</div>
                )}
                {gameResult == GAME_DRAW && (
                    <div>{`Draw between ${playersStates[0].name} and ${playersStates[1].name}`}</div>
                )}
                </center>
            </div>

            <Log playerProps={playerProps} moveHistory={moveHistory} />
            <center>
                <button onClick={() => window.location.reload(false)}>
                    Reset Game
                </button>
            </center>
        </main>
    )
}


function checkGameResult(moveHistory, playerProps, setGameResult) {
    const board = deriveBoard(moveHistory)
    const activePlayerInd = playerProps.activeInd
    
    if(checkWin(board, activePlayerInd )) {
        setGameResult(GAME_WIN)
        return true
    }
    else if (checkDraw(board)){
        setGameResult(GAME_DRAW)
        return true    
    }
    return false

}  

const checkDraw = (board) => {
    return board.every((row) => row.every((cell) => cell !== EMPTY_CELL))
}
const checkWin = (board, activePlayerInd) => {
    // console.log("Board:",board)
    // console.log('Active:', activePlayerInd)
    let winDetected = false
    WINNING_COMBINATIONS.forEach(
        (winningCombination) => {
            const winCells = winningCombination.map(
                (coord) => board[coord.row][coord.column]
            )
            // console.log("combo:", winningCombination)
            // console.log("winCells: ",winCells)
            const res = winCells.every((winCell) => winCell === activePlayerInd)
            console.log("res: ", res)
            if (res){ 
                winDetected = true
            }
        }
    )
    return winDetected
    
}

// const checkWin = (row, col, board) => {
//     console.log("Board:",board)
//     console.log('Clicked:', row,col)
    
//     const potentialWins = WINNING_COMBINATIONS.filter((winningCombination) =>
//         winningCombination.some(
//             (winCell) =>
//                 winCell.row === row &&
//                 winCell.column === col
//         )
//     )
//     console.log("PotentialWins:", potentialWins)

//     if (potentialWins){
//         potentialWins.forEach((combo) => {
//             const symbolSet = new Set(combo.map((cell) => board[cell.row][cell.column]))
//             if (symbolSet.size === 1 && !symbolSet.has(EMPTY_CELL)) return true
//         })
//     }
//     return false
// }
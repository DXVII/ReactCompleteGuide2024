import { useState } from 'react'
import Player from './components/Player'
import GameBoard, { EMPTY_CELL, deriveBoard } from './components/GameBoard'
import { ResetGame } from './components/ResetGame'
import Log from './components/Log'
import { WINNING_COMBINATIONS } from './winning-combinations'

export const [GAME_WIN, GAME_DRAW, GAME_ONGOING] = [1, 0, -1]

export default function App() {
    // --- State ---
    const [playersStates, setPlayersStates] = useState([
        { name: 'Player 1', symbol: 'X' },
        { name: 'Player 2', symbol: 'O' },
    ])

    const [activeInd, setActiveInd] = useState(0)
    const [moveHistory, setMoveHistory] = useState([])
    const [gameResult, setGameResult] = useState(GAME_ONGOING)
    const [winningCombo, setWinningCombo] = useState([])

    // --- Functions ---
    function handleBoardClick(i, j) {
        // console.log("Clicked:",i, j)
        addPlayerMove(i, j)
        checkGameResult(setWinningCombo)
        togglePlayer()
    }
    function addPlayerMove(row, col) {
        if (gameResult === GAME_ONGOING) {
            const copyHistory = moveHistory
            copyHistory.push([activeInd, row, col])
            setMoveHistory(copyHistory)
        }
    }
    function checkGameResult(setWinningCombo) {
        const board = deriveBoard(moveHistory)
        const activePlayerInd = playerProps.activeInd
        if (checkWin(board, activePlayerInd, setWinningCombo))
            setGameResult(GAME_WIN)
        else if (checkDraw(board)) setGameResult(GAME_DRAW)
    }

    function togglePlayer() {
        if (gameResult === GAME_ONGOING) setActiveInd(activeInd === 0 ? 1 : 0)
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
                    <Player
                        playerProps={playerProps}
                        playerIndex={0}
                        gameResult={gameResult}
                    />
                    <Player
                        playerProps={playerProps}
                        playerIndex={1}
                        gameResult={gameResult}
                    />
                </ol>
                <center>
                    <div id="game-board">Game Board</div>
                    <GameBoard
                        playerProps={playerProps}
                        handleBoardClick={handleBoardClick}
                        moveHistory={moveHistory}
                        gameResult={gameResult}
                    />
                    <ResetGame
                        setMoveHistory={setMoveHistory}
                        setGameResult={setGameResult}
                        setActiveInd={setActiveInd}
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
        </main>
    )
}

function checkDraw(board) {
    return board.every((row) => row.every((cell) => cell !== EMPTY_CELL))
}

function checkWin(board, activePlayerInd, setWinningCombo) {
    // console.log("Board:",board)
    // console.log('Active:', activePlayerInd)
    let winDetected = false
    WINNING_COMBINATIONS.forEach((winningCombination) => {
        const winCells = winningCombination.map(
            (coord) => board[coord.row][coord.column]
        )
        // console.log("combo:", winningCombination)
        // console.log("winCells: ",winCells)
        const res = winCells.every((winCell) => winCell === activePlayerInd)
        // console.log('res: ', res)
        if (res) {
            winDetected = true
            setWinningCombo(
                winningCombination.map((cell) => [cell.row, cell.column])
            )
        }
    })
    return winDetected
}

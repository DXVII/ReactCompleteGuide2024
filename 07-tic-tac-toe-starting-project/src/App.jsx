import { useState } from 'react'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log'

export default function App() {
    // --- State ---
    const [playersStates, setPlayersStates] = useState([
        { name: 'Player 1', symbol: 'X' },
        { name: 'Player 2', symbol: 'O' },
    ])

    const [activeInd, setActiveInd] = useState(0)
    const [moveHistory, setMoveHistory] = useState([])

    // --- Functions ---
    const togglePlayer = () => setActiveInd(activeInd === 0 ? 1 : 0)
    const handleBoardClick = (i, j) => {
        // console.log("Clicked:",i, j)
        addPlayerMove(i, j)
        togglePlayer()
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

import { useState } from 'react'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log'

export default function App() {
    // --- State ---
    const [activePlayer, setActivePlayer] = useState('X');
    const [moveHistory, setMoveHistory] = useState([]);


    // --- Functions ---
    const togglePlayer = () => setActivePlayer(activePlayer === 'X' ? 'O' : 'X')
    const addPlayerMove = (row, col) => {
        const copyHistory = moveHistory
        copyHistory.push([activePlayer, row, col])
        setMoveHistory(copyHistory)
      
    }
    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player
                        initialName="Player 1"
                        symbol="X"
                        activePlayer={activePlayer}
                    />
                    <Player
                        initialName="Player 2"
                        symbol="O"
                        activePlayer={activePlayer}
                    />
                </ol>
                <center>
                    <div id="game-board">Game Board</div>
                    <GameBoard
                        activePlayer={activePlayer}
                        togglePlayer={togglePlayer}
                        addPlayerMove={addPlayerMove}
                    />
                </center>
            </div>
            <Log logStack={moveHistory} />
            <center>
                <button onClick={() => window.location.reload(false)}>
                    Reset Game
                </button>
            </center>
        </main>
    )
}

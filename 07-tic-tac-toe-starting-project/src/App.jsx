import { useState } from 'react'
import Player from './components/Player'
import GameBoard from './components/GameBoard'

export default function App() {
    
    // --- State ---
    const [activePlayer, setActivePlayer] = useState('X')
    
    // --- Functions ---
    const togglePlayer = () => setActivePlayer(activePlayer === 'X' ? 'O' : 'X')

    return (
        <main>
            <div id="game-container">
                <ol id="players" className='highlight-player'>
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
                    />
                </center>
            </div>
            <center>
                <button>Reset Game</button>
            </center>
        </main>
    )
}

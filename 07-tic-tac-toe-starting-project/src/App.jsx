import React from 'react'
import Player from './components/Player'
export default function App() {
    return (
        <main>
            <div id="game-container">
                <ol id="players">
                    <Player playerName="Player 1" />
                    <Player playerName="Player 2" />
                </ol>
                <center>
                    <div id="game-board">Game Board</div>
                </center>
            </div>
            <center>
                <button>Reset Game</button>
            </center>
        </main>
    )
}

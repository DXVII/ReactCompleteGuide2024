function App() {
    return (
        <main>
            <div id="game-container">
                <ol id="players">
                    <li>
                        <span className="players">
                            <span className="player-name">Player 1</span>
                            <span className="player-symbol">X</span>
                        </span>
                        <button className="players">Edit Name</button>
                    </li>
                    <li>
                        <span className="players">
                            <span className="player-name">Player 2</span>
                            <span className="player-symbol">O</span>
                        </span>
                        <button className="players">Edit Name</button>
                    </li>
                </ol>
                <center>
                    <div id="game-board">
                        Game Board
                    </div> 
                </center>
            </div>
            <center>
                <button>Reset Game</button>
            </center>
        </main>
    )
}

export default App;

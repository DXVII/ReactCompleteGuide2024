import { GAME_ONGOING } from '../App'
export function ResetGame({ setMoveHistory, setGameResult, setActiveInd }) {
    return (
        <center>
            <button
                id="reset-button"
                onClick={() => {
                    setActiveInd(0)
                    setMoveHistory([])
                    setGameResult(GAME_ONGOING)
                }}
            >
                Reset Game
            </button>
        </center>
    )
}

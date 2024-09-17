export const EMPTY_CELL = ''
import { GAME_WIN } from '../App'
export default function GameBoard({
    playerProps,
    handleBoardClick,
    moveHistory,
    winningCombo,
}) {
    // --- States ---
    const { playersStates } = playerProps
    const board = deriveBoard(moveHistory, playersStates)

    // --- Functions ---

    const displayBoardCols = (row, i) => (
        <ol>
            {row.map((col, j) => {
                const isWinCell = winningCombo.some(
                    (cell) => cell[0] == i && cell[1] == j
                )

      
                return (
                    <li key={`${i}-${j}`}>
                        <button
                            onClick={() => handleBoardClick(i, j)}
                            className={isWinCell ? 'highlight' : ''}
                        >
                            {col}
                        </button>
                    </li>
                )
            })}
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
export const deriveBoard = (moveHistory, playersStates) => {
    const board = createSquareArray(3)
    moveHistory.map((log) => {
        const [ind, row, col] = log
        board[row][col] = playersStates ? playersStates[ind].symbol : ind
    })
    return board
}

// Helper Function - 2 dimensional array
// map(rows), map(cols), set value ''
export const createSquareArray = (n) =>
    [...Array(n)].map(() => [...Array(n)].map(() => EMPTY_CELL))

/* Note the fill method seems to create the same object and replicate it, 
each row was pointing to the same object*/
// const [board, setBoard] = useState(
//     new Array(3).fill(new Array(3).fill('x'))
// )

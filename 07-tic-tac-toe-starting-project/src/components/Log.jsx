export default function Log({ playerProps, moveHistory }) {
    const { playersStates } = playerProps
    // console.log(logStack)
    return (
        <div id="log">
            <ol>{generateStackList(moveHistory, playersStates)}</ol>
        </div>
    )
}

function generateStackList(moveHistory, playerStates) {
    return moveHistory.map((log) => {
        const [ind, row, col] = log
        const logtext = (
            <li>{`${playerStates[ind].name} played 
                ${playerStates[ind].symbol} on 
                row ${row + 1}, col ${col + 1}`}</li>
        )
        return logtext
    })
}

/*TODO:
    fix log 0 undefined error 
*/
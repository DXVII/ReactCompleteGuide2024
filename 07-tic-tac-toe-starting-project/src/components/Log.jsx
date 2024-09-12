export default function Log({logStack}) {
    // console.log(logStack)
    return (
        <div id="log">
            <ol>{generateStackList(logStack)}</ol>
        </div>
    )
}

function generateStackList(logStack){
    return logStack.map(elem => 
        <li>{`${elem[0]} played on row ${elem[1]+1}, col ${elem[2]+1}`}</li>
    )
}
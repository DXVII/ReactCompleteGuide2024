export default function Player({playerName}){
    return (
        <li>
            <span className="players">
                <span className="player-name">playerName</span>
                <span className="player-symbol">X</span>
            </span>
            <button className="players">Edit Name</button>
        </li>
    )
}
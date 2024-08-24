import React from "react"
import { useState } from "react"


export default function Player({ playerName, symbol }) {
    // --------------------------------------------------------------------------------
    // --- State ----------------------------------------------------------------------
    // --------------------------------------------------------------------------------
    const [isEditing, setIsEditing] = useState(false)
    const [chosenName, setChosenName] = useState(playerName)

    // --------------------------------------------------------------------------------
    // --- Functions ------------------------------------------------------------------
    // --------------------------------------------------------------------------------
    const handleEditClick = () => setIsEditing(true)
    const handleEditName = (e) => setChosenName(e.target.value)

    // --------------------------------------------------------------------------------
    // --- Conditional rendering ------------------------------------------------------
    // --------------------------------------------------------------------------------
    const playerNameBox = isEditing ? (
        <input
            type="text"
            defaultValue={chosenName}
            onChange={handleEditName}
        />
    ) : (
        <span className="player-name">{chosenName}</span>
    )

    const editSaveButton = isEditing ? (
        <button onClick={() => setIsEditing(false)}>Save</button>
    ) : (
        <button onClick={handleEditClick}>Edit</button>
    )

    // --------------------------------------------------------------------------------
    // --- Component Output -----------------------------------------------------------
    // --------------------------------------------------------------------------------
    return (
        <li>
            <span className="players">
                {playerNameBox}
                <span className="player-symbol">{symbol}</span>
            </span>
            {editSaveButton}
        </li>
    )
}

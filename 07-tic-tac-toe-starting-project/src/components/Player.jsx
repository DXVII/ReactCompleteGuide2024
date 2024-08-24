import React from 'react'
import { useState } from 'react'

export default function Player({ playerName, symbol }) {
    // --------------------------------------------------------------------------------
    // --- State ----------------------------------------------------------------------
    // --------------------------------------------------------------------------------
    const [isEditing, setIsEditing] = useState(false)
    const [chosenName, setChosenName] = useState(playerName)


    // --------------------------------------------------------------------------------
    // --- Functions ------------------------------------------------------------------
    // --------------------------------------------------------------------------------
    const handleEditName = (e) => setChosenName(e.target.value)


    // --------------------------------------------------------------------------------
    // --- Conditional rendering ------------------------------------------------------
    // --------------------------------------------------------------------------------
    
    // Logic: Editable Name Box
    // 1) when not editting, show chosenName state
    // 2) onCLick, set isEditing to true
    // 3) isEditing while true, display input field
    // 4) onChange, set chosenName to input value
    // 5) onCLick, set isEditing to false --> 1) display new chosenName state

    const playerNameBox = isEditing ? (
        <input
            type="text"
            defaultValue={chosenName}
            onChange={handleEditName}
        />
    ) : (
        <span className="player-name">{chosenName}</span>
    )

    // Logic: Edit/Save Button
    // 1) when editting, show save button, 
    // 2) onclicking save, switch isEditing to false
    // 3) now not editting, show edit button
    // 4) onclicking edit, switch isEditing to true
    // --> 1)
    const editSaveButton = isEditing ? (
        <button onClick={() => setIsEditing(false)}>Save</button>
    ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
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

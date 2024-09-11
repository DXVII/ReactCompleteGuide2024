import React from 'react'
import { useState } from 'react'

export default function Player({ initialName, symbol, activePlayer }) {
    // --- State ---
    const [isEditing, setIsEditing] = useState(false)
    const [chosenName, setChosenName] = useState(initialName)
    const isActive = activePlayer === symbol

    // --- Functions ---
    const handleEditName = (event) => setChosenName(event.target.value)

    // --- Conditional rendering ---

    // Logic: Editable Name Box (two way binding)
    // 1) when not editting, show chosenName state
    // 2) onCLick, set isEditing to true
    // 3) isEditing while true, display input field
    // 4) onChange, set chosenName to input value
    // 5) onCLick, set isEditing to false --> 1) display new chosenName state

    const playerNameBox = isEditing ? (
        <input
            className="player"
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
        <button id="players" onClick={() => setIsEditing(false)}>
            Save
        </button>
    ) : (
        <button id="players" onClick={() => setIsEditing(true)}>
            Edit
        </button>
    )

    // --- Component Output ---
    return (
        <li id="players" className={isActive ? 'active' : ''}>
            <span id="players">
                {playerNameBox}
                <span className="player-symbol">{symbol}</span>
                {editSaveButton}
            </span>
        </li>
    )
}

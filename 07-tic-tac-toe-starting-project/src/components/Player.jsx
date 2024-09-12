import React from 'react'
import { useState } from 'react'

export default function Player({ playerProps, playerIndex }) {
    const { playersStates, setPlayersStates, activeInd } = playerProps
    const { name, symbol } = playersStates[playerIndex]
    const isActive = playerIndex === activeInd

    // --- State ---
    const [isEditing, setIsEditing] = useState(false)

    // --- Functions ---
    const handleEditName = (event) => {
        const copyPlayerStates = playersStates
        copyPlayerStates[playerIndex].name = event.target.value
        setPlayersStates(copyPlayerStates)
    }

    const handleEditSymbol = (event) => {
        const copyPlayerStates = playersStates
        copyPlayerStates[playerIndex].symbol = event.target.value[0]
        setPlayersStates(copyPlayerStates)
    }

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
            size="10"
            defaultValue={name}
            onChange={handleEditName}
        />
    ) : (
        <span className="player-name">{name}</span>
    )

    // Logic: Editable SymbolBox
    const symbolNameBox = isEditing ? (
        <input
            className="player"
            type="text"
            maxlength="1"
            size ="1"
            defaultValue={symbol}
            onChange={handleEditSymbol}
        />
    ) : (
        <span className="player-symbol">
            {symbol}
        </span>
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
                {symbolNameBox}
                {editSaveButton}
            </span>
        </li>
    )
}

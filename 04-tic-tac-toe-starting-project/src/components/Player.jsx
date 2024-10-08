import React from 'react'
import { useState } from 'react'
import { GAME_ONGOING } from '../App'

export default function Player({ playerProps, playerIndex, gameResult }) {
    const { playersStates, setPlayersStates, activeInd } = playerProps
    const { name, symbol } = playersStates[playerIndex]
    const isActive = playerIndex === activeInd
    const isGameEnded = gameResult !== GAME_ONGOING

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
        // ensure input symbol is not an empty player input
        const inputSymbol =
            event.target.value[0].trim().length === 0
                ? '_'
                : event.target.value[0]
        copyPlayerStates[playerIndex].symbol = inputSymbol
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
            required
        />
    ) : (
        <span className="player-name">{name}</span>
    )

    // Logic: Editable SymbolBox
    const symbolNameBox = isEditing ? (
        <input
            className="player"
            type="text"
            maxLength="1"
            size="1"
            defaultValue={symbol}
            onChange={handleEditSymbol}
            required
        />
    ) : (
        <span className="player-symbol">{symbol}</span>
    )

    // Logic: Edit/Save Button
    // 1) when editting, show save button,
    // 2) onclicking save, switch isEditing to false
    // 3) now not editting, show edit button
    // 4) onclicking edit, switch isEditing to true
    // --> 1)
    const editSaveButton = () => {
        if (isGameEnded) {
            return (
                <button id="players" disabled>
                    Edit
                </button>
            )
        } else {
            return isEditing ? (
                <button id="players" onClick={() => setIsEditing(false)}>
                    Save
                </button>
            ) : (
                <button id="players" onClick={() => setIsEditing(true)}>
                    Edit
                </button>
            )
        }
    }

    // --- Component Output ---
    return (
        <li id="players" className={isActive ? 'active' : ''}>
            <span id="players">
                {playerNameBox}
                {symbolNameBox}
                {editSaveButton()}
            </span>
        </li>
    )
}

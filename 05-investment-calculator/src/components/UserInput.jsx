import {
    splitStateObjectInto2DArray,
    fromCamelCaseToLabelTitle,
} from '../util/formatting'

export default function UserInput({ numRows, userInputEventProps }) {
    console.log('State - UserInput', userInputEventProps.userInput)

    return (
        <>
            <section id="user-input">
                {createInputGroupRow(userInputEventProps, numRows)}
            </section>
        </>
    )
}

// --- Component Creation ---
function createInputGroupRow(userInputEventProps, numRows) {
    const { userInput } = userInputEventProps
    const userInput2DArray = splitStateObjectInto2DArray(userInput, numRows)

    return userInput2DArray.map((row, rowInd) => {
        const labelInput = row.map((userInputKey) =>
            createLabelAndInputCols(userInputEventProps, userInputKey)
        )
        return (
            <div key={rowInd} className="input-group">
                {labelInput}
            </div>
        )
    })
}
function createLabelAndInputCols(userInputEventProps, userInputKey) {
    const { userInput, handleChangeUserInput } = userInputEventProps
    const labelName = fromCamelCaseToLabelTitle(userInputKey)
    return (
        <p key={`labelInput-${labelName}`}>
            <label key={`label-${labelName}`}>{labelName}</label>
            <input
                key={`input-${labelName}`}
                required
                type="number"
                min={0}
                value={userInput[userInputKey]}
                onChange={(event) => handleChangeUserInput(userInputKey, event)}
                placeholder={labelName}
            />
        </p>
    )
}

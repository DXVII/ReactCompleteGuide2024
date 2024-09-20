
export default function UserInput({ numRows, userInputEventProps }) {
    console.log(
        'State - UserInput',
        userInputEventProps.userInput
    )

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
    const userInput2DArray = splitUserInputStateIntoLabelTitleRows(
        userInput,
        numRows
    )

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

// --- Helper Automation Functions --
function splitUserInputStateIntoLabelTitleRows(userInput, numRows) {
    if (numRows <= 0) {
        throw new Error('Number of rows must be greater than zero.')
    }
    const array = Object.keys(userInput)

    const result = []
    const numCols = Math.ceil(array.length / numRows) // Calculate the number of columns

    for (let i = 0; i < numRows; i++) {
        const start = i * numCols // Calculate the starting index for each row
        const end = start + numCols // Calculate the ending index
        const row = array.slice(start, end) // Get the slice of the array
        result.push(row) // Add the row to the result
    }

    return result
}

function fromCamelCaseToLabelTitle(input) {
    // Use a regular expression to insert spaces before capital letters
    return input
        .replace(/([A-Z])/g, ' $1') // Insert a space before each capital letter
        .replace(/^./, (str) => str.toUpperCase()) // Capitalize the first letter
        .trim() // Remove any leading/trailing whitespace
}

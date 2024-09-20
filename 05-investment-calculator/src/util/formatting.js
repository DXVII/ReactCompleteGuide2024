// --- Helper Automation Functions --
export function splitStateObjectInto2DArray(userInput, numRows) {
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

export function fromCamelCaseToLabelTitle(input) {
    // Use a regular expression to insert spaces before capital letters
    return input
        .replace(/([A-Z])/g, ' $1') // Insert a space before each capital letter
        .replace(/^./, (str) => str.toUpperCase()) // Capitalize the first letter
        .trim() // Remove any leading/trailing whitespace
}

import { useState } from 'react'

export function UserInput() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturns: 6,
        duration: 10,
    })
    function handleChangeUserInput(inputTitle, e) {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputTitle]: e.target.value,
            }
        })
    }
    const userInputEventProps = { userInput, handleChangeUserInput }
    console.log(userInput)
    return (
        <>
            <section id="user-input">
                {createInputGroupRow(userInputEventProps, [
                    ['Initial Investment', 'Annual Investment'],
                    ['Expected Returns', 'Duration'],
                ])}
            </section>
        </>
    )
}

function createInputGroupRow(userInputEventProps, inputTitles) {
    return inputTitles.map((row, rowInd) => {
        const labelInput = row.map((labelName) =>
            createLabelAndInputCols(userInputEventProps, labelName)
        )
        return (
            <div key={rowInd} className="input-group">
                {labelInput}
            </div>
        )
    })
}
function createLabelAndInputCols(userInputEventProps, labelName) {
    const { handleChangeUserInput, userInput } = userInputEventProps
    return (
        <p key={`labelInput-${labelName}`}>
            <label key={`label-${labelName}`}>{labelName}</label>
            <input
                key={`input-${labelName}`}
                required
                type="number"
                min={0}
                value={userInput[convertTitleToCamelCaseKey(labelName)]}
                onChange={(e) =>
                    handleChangeUserInput(
                        convertTitleToCamelCaseKey(labelName),
                        e
                    )
                }
                placeholder={labelName}
            />
        </p>
    )
}

function convertTitleToCamelCaseKey(title) {
    // remove all spaces
    let variable = title.replace(/\s+/g, '')
    // convert first char to lowerCase
    return variable.charAt(0).toLowerCase() + variable.slice(1)
}

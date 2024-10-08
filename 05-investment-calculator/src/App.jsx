import './index.css'
import { useState } from 'react'
import UserInput from './components/UserInput'
import Header from './components/Header'
import Results from './components/Results'

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 5.5,
        duration: 5,
    })
    const validDuration = userInput.duration > 0
    function handleChangeUserInput(userInputKey, event) {
        // takes previous state and deep copy
        // overwrite the only field that has changed
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [userInputKey]: Number(event.target.value),
            }
        })
    }
    const userInputEventProps = { userInput, handleChangeUserInput }

    return (
        <>
            <Header />
            <UserInput numRows={2} userInputEventProps={userInputEventProps} />
            <center>
                {validDuration ? (
                    <Results userInput={userInput} />
                ) : (
                    <p> Please enter a duration greater than 0 </p>
                )}
            </center>
        </>
    )
}

export default App

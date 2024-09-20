import { calculateInvestmentResults } from '../util/investment'

export default function Results({ userInput }) {
    // const { initialInvestment, annualInvestment, expectedReturn, duration } = userInput
    const investmentResult = calculateInvestmentResults(userInput)
    console.log('Investment Result', investmentResult)
    // const resultTable = generateInvestmentResultTable(investmentResult)

    return <p>{JSON.stringify(investmentResult)}</p>
    // return <p>{investmentResult}</p>
}

// function generateInvestmentResultTable(investmentResult){
//     const table = investmentResult.map(resultInstance => {

//     })
//     return <thead></thead>

// }

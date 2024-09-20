import { calculateInvestmentResults } from '../util/investment'
import { fromCamelCaseToLabelTitle } from '../util/formatting'

const DECIMAL_POINTS = 2

export default function Results({ userInput }) {
    // const { initialInvestment, annualInvestment, expectedReturn, duration } = userInput
    const investmentResult = calculateInvestmentResults(userInput)

    console.log('Results - Investment Result', investmentResult)

    return (
        <center>
            <table id="result" className="center">
                {investmentDetailHead(investmentResult)}
                {investmentDetailBody(investmentResult)}
            </table>
        </center>
    )
}

function investmentDetailHead(investmentResult) {
    const titles = Object.keys(investmentResult[0])
    return (
        <thead>
            <tr>
                {titles.map((name) => (
                    <th key={`investmentTable${name}`}>
                        {fromCamelCaseToLabelTitle(name)}
                    </th>
                ))}
            </tr>
        </thead>
    )
}

function investmentDetailBody(investmentResult) {
    return (
        <tbody>
            {investmentResult.map((dataRow) =>
                investmentDetailBodyRow(dataRow)
            )}
        </tbody>
    )
}

function investmentDetailBodyRow(dataRow) {
    const { year, ...financialData } = dataRow
    const financialDataCells = Object.keys(financialData).map((key) => (
        <td>{financialData[key].toFixed(DECIMAL_POINTS)}</td>
    ))
    return (
        <tr key={`investmentTableRow-${year}`}>
            <th>{year}</th>
            {financialDataCells}
        </tr>
    )
}

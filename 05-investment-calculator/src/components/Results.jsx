import { calculateInvestmentResults } from '../util/investment'
import { fromCamelCaseToLabelTitle } from '../util/formatting'
export default function Results({ userInput }) {
    // const { initialInvestment, annualInvestment, expectedReturn, duration } = userInput
    const investmentResult = calculateInvestmentResults(userInput)

    console.log('Results - Investment Result', investmentResult)

    return (
        <center>
            <table id='result' className='center'>
                {investmentDetailHead(investmentResult)}
                {investmentDetailBody(investmentResult)}
            </table>
        </center>
    )

}



function investmentDetailHead(investmentResult){
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
    return <tbody>{investmentResult.map((dataRow)=>
        investmentDetailBodyRow(dataRow)
    )}</tbody>
}

function investmentDetailBodyRow (dataRow) {
    const {year, interest, valueEndOfYear, annualInvestment} = dataRow
    return (
        <tr key={`investmentTableRow-${year}`}>
            <th>{year}</th>
            <td>{interest.toFixed(2)}</td>
            <td>{valueEndOfYear.toFixed(2)}</td>
            <td>{annualInvestment.toFixed(2)}</td>
        </tr>
    )
}
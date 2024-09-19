import HEADER_LOGO from '../assets/investment-calculator-logo.png'

export default function Header() {
    return (
        <header id="header">
            <img src={HEADER_LOGO} alt="header-logo" />
            <h1>React Investment Calculator</h1>
        </header>
    )
}

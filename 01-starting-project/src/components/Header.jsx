const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

function genRandomInt(max) {
    return Math.floor(Math.random() * max)
}

export default function Header() {
    const adjective = reactDescriptions[genRandomInt(reactDescriptions.length)]
    return (
        <header>
            <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {adjective} React concepts you will need for almost any app you
                are going to build!
            </p>
        </header>
    )
}

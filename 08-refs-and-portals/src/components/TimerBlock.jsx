export default function TimerBlock({ title, targetTime }) {
    function toggleTimer() {
        setTimeout(() => {}, targetTime * 1000)
    }
    const status = 'Ready'
    return (
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime !== 1 ? 's' : ''}
            </p>
            <button onClick={toggleTimer}>Start</button>
            <p className="">{status}</p>
        </section>
    )
}

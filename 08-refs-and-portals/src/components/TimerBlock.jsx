import { useState, useRef } from 'react'
import ResultModal from './ResultModal'
export default function TimerBlock({ title, targetTime }) {
    const timer = useRef()
    const [timerStarted, setTimerStarted] = useState(false)
    const [timerExpired, setTimerExpired] = useState(false)

    function handleStart() {
        setTimerStarted(true)
        timer.current = setTimeout(
            () => setTimerExpired(true),
            targetTime * 1000
        )
    }

    function handleStop() {
        clearTimeout(timer.current)
        setTimerStarted(false)
        setTimerExpired(false)
    }

    const status = timerStarted ? 'Running...' : 'Ready'

    return (
        <>
            {timerExpired && (
                <ResultModal result="Lost!" targetTime={targetTime} />
            )}
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime !== 1 ? 's' : ''}
                </p>
                <button onClick={timerStarted ? handleStop : handleStart}>
                    {timerStarted ? 'Stop' : 'Start'}
                </button>
                <p className={timerStarted ? 'active' : undefined}>{status}</p>
            </section>
        </>
    )
}

import { useState, useRef } from 'react'
import ResultModal from './ResultModal'

export default function TimerBlock({ title, targetTime }) {
    const timer = useRef()
    const dialog = useRef()
    console.log(dialog)

    const [timerStarted, setTimerStarted] = useState(false)
    const [timerExpired, setTimerExpired] = useState(false)

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true)
            dialog.current.showModal()
        }, targetTime * 1000)
        setTimerStarted(true)
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
                <ResultModal
                    result="Lost!"
                    targetTime={targetTime}
                    ref={dialog}
                />
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

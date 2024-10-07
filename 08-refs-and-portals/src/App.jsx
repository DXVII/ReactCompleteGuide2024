import Player from './components/Player.jsx'
import TimerBlock from './components/TimerBlock.jsx'
function App() {
    return (
        <>
            <Player />
            <div id="challenges">
                {[...Array(4).keys()].map((e) => {
                    return (
                        <TimerBlock
                            key={`challenge-${e + 1}`}
                            title={`Challenge ${e + 1}`}
                            targetTime={e + 1}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default App

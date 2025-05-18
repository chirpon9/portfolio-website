import { useState } from 'react'
import Wavify from "react-wavify";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="top-section">
        <div className="white-section">
          <h1>melhen / marco</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
          </div>
        </div>
        <div className="wave-container">
          <Wavify
            fill="#acd6e8" // light blue
            paused={false}
            options={{
              height: 10,
              amplitude: 30,
              speed: 0.25,
              points: 2,
            }}
            className="wave"
            width="100%"
          />
        </div>
      </div>
    </>
  )
}

export default App

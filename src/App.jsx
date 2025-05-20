import { useState } from 'react'
import './App.css'
import BackgroundHandler from './background_handler.jsx'
import { Analytics } from "@vercel/analytics/next"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BackgroundHandler />
        <div className="textbox">
          <div className="top-section">
            <h1>melhen / メルヘン</h1>
            <h3>from the german word "Märchen" meaning "fairy tale"</h3>
              <Analytics />
          </div>
        </div>
    </>
  )
}

export default App

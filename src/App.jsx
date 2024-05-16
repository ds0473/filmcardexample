import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Filmcard from './Filmcard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Filmcard/>
      </div>
      
    </>
  )
}

export default App

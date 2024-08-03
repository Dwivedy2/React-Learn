import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isChar, setIsChar] = useState(false);

  return (
    <>
      <h1 className='text-4xl text-center'>Password Generator</h1>
    </>
  )
}

export default App

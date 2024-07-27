import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {

  const [color, setColor] = useState('white');

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <ul className='w-full p-2 flex justify-center gap-2 absolute bottom-4'>
          <li onClick={() => setColor("red")} className='p-2 cursor-pointer bg-red-600 rounded-3xl text-white'>Red</li>
          <li onClick={() => setColor("green")} className='p-2 cursor-pointer bg-green-600 rounded-3xl text-white'>Green</li>
          <li onClick={() => setColor("blue")} className='p-2 cursor-pointer bg-blue-600 rounded-3xl text-white'>Blue</li>
          <li onClick={() => setColor("olive")} className='p-2 cursor-pointer rounded-3xl text-white' style={{backgroundColor: "olive"}}>Olive</li>
          <li onClick={() => setColor("gray")} className='p-2 cursor-pointer bg-gray-600 rounded-3xl text-white'>Gray</li>
          <li onClick={() => setColor("yellow")} className='p-2 cursor-pointer bg-yellow-600 rounded-3xl text-white'>Yellow</li>
          <li onClick={() => setColor("pink")} className='p-2 cursor-pointer bg-pink-600 rounded-3xl text-white'>Pink</li>
          <li onClick={() => setColor("purple")} className='p-2 cursor-pointer bg-purple-600 rounded-3xl text-white'>Purple</li>
          <li onClick={() => setColor("lavender")} className='p-2 cursor-pointer rounded-3xl text-black border border-cyan-300' style={{backgroundColor: "lavender"}}>Lavender</li>
          <li onClick={() => setColor("white")} className='p-2 cursor-pointer bg-white rounded-3xl text-black'>White</li>
          <li onClick={() => setColor("black")} className='p-2 cursor-pointer bg-black rounded-3xl text-white'>Black</li>
        </ul>
    </div>
  )
}

export default App

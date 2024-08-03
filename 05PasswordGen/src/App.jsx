import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'


function App() {
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isChar, setIsChar] = useState(false);
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if(isNumber) str += '0123456789';
    if(isChar) str += '~`!@#$%^&*()-={};:<>?//';

    for(let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(index)
    }

    setPassword(pass);

  }, [isNumber, isChar, length, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, isNumber, isChar, passwordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-black font-semibold bg-yellow-500'>
        <h1 className='text-3xl text-center'>Password Generator</h1>
        <div className='my-5 flex'>
          <input type="text"
                 value={password}
                 ref={passwordRef}
                 placeholder='Password'
                 readOnly
                 className='w-full rounded-md rounded-e-none p-1 px-2 outline-none' />
          <button className='bg-blue-600 text-white p-2 rounded-md rounded-s-none'
                  onClick={copyPasswordToClipboard}
          >Copy</button>
        </div>
        <div className='my-3 flex gap-2'>
          <input type="range" name="range" id="range" defaultValue={length} min={8} max={30} onChange={(e) => {setLength(e.target.value)}} />
          <label htmlFor="range">Length({length})</label>
          <input type="checkbox" name="isNumber" id="isNumber" defaultChecked={isNumber} onChange={() => {setIsNumber((prev) => !prev)}} />
          <label htmlFor="isNumber">Number</label>
          <input type="checkbox" name="isChar" id="isChar" defaultChecked={isChar} onChange={() => setIsChar((prev) => !prev)} />
          <label htmlFor="isNumber">Characters</label>
        </div>
      </div>
    </>
  )
}

export default App

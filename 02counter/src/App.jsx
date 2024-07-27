import { useState } from 'react'
import './App.css'

function App() {
  
  /*
      Concept:
        Here if you are just setting the value by one,
        then the UI will not update.

      To update the UI, you need to use hooks. There are many hooks
      among them we are currently using useState.

      it is a function, that returns array, which contains a variable
      which you can call anything(ex. counter, count, val, puppy etc)
      and a reference to a function again you can call anything(ex. counter, count, val, puppy etc)

      Generally its a convention to use a 'set' before a functio like
      setCounter, setPuppy,

      after this wherever you will be using this variable, its going to 
      be update when you will use this function, no requirement to use
      document.querySelector() to update UI
  */

  let [value, setValue] = useState(0);

  function add() {
    value++;
    setValue(value);
  }

  function subtract() {
    value--;
    setValue(value);
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Value: {value}</h2>

      <button onClick={add}>Add 1</button>
      <button onClick={subtract}>Subtract 1</button>
    </>
  )
}

export default App

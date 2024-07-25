import Comp1 from "./PractiseComp"

function App() {
  const username = "Preet";

  // Tip
  /*
    <p>Hello {username}</p>, this thing is the magic of jsx
    we call it expression or evaluated expression
  */

  return (
    // <div>
    //   <h1>Learn React | Om</h1>
    //   <Comp1/>
    // </div>

    // same thing called fragmentation
    <>
      <h1>Learn React | Om</h1>
      <p>Hello {username}</p>
    </>
  )
}

export default App

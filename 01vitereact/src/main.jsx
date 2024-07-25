import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <h1>Hi my app</h1>
  )
}

// Concept
/*  
  You can observe, whether its MyApp or App they returns html element
  like h1, div etc. which is converted to a react object similar to the
  below one.

  which is then compiled and rendered to browser.
*/

// Process
/*
  In the render function below

  <App /> or App() -> object like reactElement -> compiled -> rendered to 
  browser
*/

// Think
/*
  So in the end if object is going to be rendered then can we just write
  'reactElement' in place of '<App />'

  Yes ofcourse,
  but this object is made by us, so the syntax is different so will not
  work but the approach is same.
*/

const anotherelement = 'check';

const reactElement = {
  type: 'a',
  props: {
      href: 'https://www.google.com/',
      target: '_blank',
  },
  value: 'Visit Google',
};

// Correct syntax object, expected by React
const reactElement1 = React.createElement(
  'a',
  {
    href: "https://www.google.com",
    target: "_blank"
  },
  'Visit Google',
  anotherelement
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>    
    // <App />
    reactElement1
  // </React.StrictMode>,
)

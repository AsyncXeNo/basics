import React from 'react'
import ReactDOM from 'react-dom'

// stateless functional component
// always returns JSX

function Greeting () {
  return (
    <div>
      <h1>hello world</h1>
      <p>this is my meesage</p>
    </div>
  )
}

ReactDOM.render(<Greeting />, document.getElementById('root'))

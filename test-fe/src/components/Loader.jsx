import React from 'react'
import axios from 'axios'
function Loader(){

  function clickHandler(){
    axios('http://localhost:8000/api/leads')
    .then(res => console.log(res))
    .catch(err => console.log(err.message))
  }
  return (
    <div>
      <h1>Its Working!</h1>
      <button onClick={clickHandler}>Click me to get the leads</button>
    </div>
  )
}

export default Loader
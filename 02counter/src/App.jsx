import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
   let [count,setCounter ]=useState(15)

 

  let addValue=()=>{
   //console.log("ClickMe",count);
   // count=count+1;
   setCounter(count+1);

  }

  let removeValue=()=>{
    count=count-1;
    setCounter(count);
  }
  return (
    <>
    <h1>Hello </h1>
    <h2>Counter value {count} </h2>
    <button onClick={addValue}>Add value {count}</button>
    
    <br />
    <button onClick={removeValue}> Remove value {count}</button>

    <p>Footer: {count}</p>
    </>
  )
}

export default App

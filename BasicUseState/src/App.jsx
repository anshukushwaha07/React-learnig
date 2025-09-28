import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [advice,setAdvice]=useState("");
  const [count,setCount]=useState(0);
  async function getAdvice(){

    const res= await fetch("https://api.adviceslip.com/advice");
    const data= await res.json();
    setAdvice(data.slip.advice);
    setCount((c)=>c=c+1);
  }
  
  useEffect(function(){
  getAdvice();
  },[])
  
  

  return (
    <>
    <div>
    <h1>{advice}</h1>
    <button onClick={getAdvice} >Advice</button>   
    <p>have you read <strong>{count}</strong> pices of advice</p>
    </div> 
    </>
  )
}

export default App

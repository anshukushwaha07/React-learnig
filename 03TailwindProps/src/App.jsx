import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card';
function App() {
  const [count, setCount] = useState(0)
 let myobj={
    username:"ANshu",
    age:21,
  }

  let arr=[1,4,5,6]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'> Tailwind Test</h1>
      <Card username="Anshu " btnText="click me"/>
      <Card username="chai or code" btnText="visit me"/>
    </>
  )
}

export default App

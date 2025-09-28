import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

 
function Myapp(){
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )  
  }
//   const rectElement ={
//     type :'a',
//     props :{
//       href:'https://google.com',
//       target :'_blank'
//     },
//     children:'click me to visit google'
// }
  const anotherElement =(
    <a href="https://google.com" target='_blank'>Visit google</a>
  )
     
  const ReactElement = React.createElement(
    'a',
    {
      href:"https://google.com",target:'_blank'
    },
    'Click me to visit google',
     
  )
  

  
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <App/>
   
)

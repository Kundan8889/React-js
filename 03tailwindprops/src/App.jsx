import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"kundan",
    age:20
  }

  return (
    <>
     <h1 className= 'bg-green-400 text-black p-4 rounded-xl'>Tailwin test</h1> 
     {/* <Card channel="Kundan Rathore" someObj={myObj}/> */}
     <Card username="Kundan Rathore" btnText="click me" />
     <Card username=" aditi " btnText="visit me"/>
    </>
  )
}

export default App
// yha par aap class ki jagah className likhte ho

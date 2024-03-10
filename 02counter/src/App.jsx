// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   // hookes:
//   let [counter, setCounter] = useState(15)
//   // let counter=23;

//   // const addValue=()=>{
//   //   console.log("value added",Math.random());
//   // }
//   const addValue=()=>{
//     console.log("clicked",counter);
//     // counter+=1
//     setCounter(counter+1)
//   }
//   const removeValue=()=>{
//     setCounter(counter-1)
//   }
//   return (
//     <>
//       <h1>jay hind</h1>
//       <h2>Counter value: {counter} </h2>
//       <button onClick={addValue}>Add value</button>
//       <br />
//       <button onClick={removeValue}>Remove value</button>
//     </>
//   )
// }

// export default App
// assignment:=>
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // hookes:
  let [counter, setCounter] = useState(15)
  // let counter=23;

  // ''''''''''''Interview Question''''''''''''''''
  const addValue=()=>{
    // setCounter(counter+1)  //->ye bhi vhi counter ko updae kar raha
    // setCounter(counter+1)  //->ye bhi vhi counter ko updae kar raha, ek hi kaam ko repeat kar raha
    // setCounter(counter+1)
    // setCounter(counter+1)
    // kya ans aayega:15 hi aayega  ,yha same ya repeadly  hi pura ka pura banch bankar hi dekhensa 
    //to ishko ham aese kar sakte hain
    setCounter((prevCounter)=>prevCounter+1)  
    setCounter((prevCounter)=>prevCounter+1)  
    setCounter((prevCounter)=>prevCounter+1)  
    setCounter((prevCounter)=>prevCounter+1)  
  }
  const removeValue=()=>{
    setCounter((prevCounter)=>prevCounter-1)  
    setCounter((prevCounter)=>prevCounter-1)  
    setCounter((prevCounter)=>prevCounter-1)  
    setCounter((prevCounter)=>prevCounter-1)
  }


// now next:=>
  // const addValue=()=>{
  //   console.log("value added",Math.random());
  // }
  // const addValue=()=>{
  //   console.log("clicked",counter);
  //   // counter+=1
  //   if(counter<20){
  //     counter+=1;
  //     setCounter(counter)
  //   }
  // }
  // const removeValue=()=>{
  //   if(counter>0){
  //     counter-=1;
  //     setCounter(counter)
  //   }
    
  // }
  return (
    <>
      <h1>jay hind</h1>
      <h2>Counter value: {counter} </h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App


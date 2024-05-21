import React, { useState } from 'react'
import { Todoprovider } from './context/TodoContext'

const App = () => {
  const[todos,setTodos]=useState([])
  return (
    <Todoprovider>
      
    </Todoprovider>
  
  )
}

export default App

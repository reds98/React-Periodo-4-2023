import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Button texto={"Sumar"} color ={"red"}/>
     <Button texto={"Restar"} color ={"blue"}/>
    </>
  )
}

export default App

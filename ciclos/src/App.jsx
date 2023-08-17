import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
function App() {
  const [showCounter,setShowCounter]=useState(true)
  return (
    <>
    <h1>Ejemplo de ciclos de un componente</h1>
    <button onClick={()=>{setShowCounter(!showCounter)}}>
      Ocultar/mostrar Counter</button>
    {
      showCounter && <Counter/>
      // showCounter ? <Counter/> : <p>Hola</p>
    }
    </>
  )
}

export default App

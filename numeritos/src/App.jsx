import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserInfo from './UserInfo'
import CreationNumber from './CreationNumber'
function App() {
  const [count, setCount] = useState(0)
  const [usuario, setUsuario] = useState({ nombre: "Miguel", edad: 45 })

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <UserInfo usuario={usuario} />
          </div>
          <div className="col">
            <CreationNumber />
          </div>

        </div>
      </div>


    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserInfo from './UserInfo'
import CreationNumber from './CreationNumber'
import NumberList from './NumbersList'
function App() {
  const [count, setCount] = useState(0)
  const [usuario, setUsuario] = useState({ nombre: "Miguel", edad: 45 })
  const [numeros,setNumeros]=useState([])
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <UserInfo usuario={usuario} />
          </div>
          <div className="col">
            <CreationNumber numeros={numeros}
            setNumeros={setNumeros} />
          </div>

        </div>
        <div className="row">
          <div className="col">
            <NumberList numeros={numeros} />
          </div>
        </div>

      </div>

    </>
  )
}

export default App

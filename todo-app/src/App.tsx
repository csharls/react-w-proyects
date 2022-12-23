import { useState } from 'react'
import './App.css'
import ListaDeTareas from './components/ListaDeTareas'

import freecodeCampLogo from './images/freecodecamp-logo.png'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="aplicacion-tareas">
      <div className="freecodecamp-logo-contenedor">
        <img src={freecodeCampLogo} alt="logo de freeCodeCamp" className='freecodecamp-logo' />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import Boton from './components/Boton'
import Contador from './components/Contador'

import './App.css'

import  freeCodecampLogo from './images/freecodecamp-logo.png'

function App() {
  const [count, setCount] = useState(0)

  const manejarClic = () => {
    // setCount((prevCount) => prevCount+ 1)
    setCount(count + 1)
  }

  const reiniciarContador = () => { 
    setCount(0)
  }

  return (
    <div className="App">
     <div className="freecodecamp-logo-contenedor">
      <img src={freeCodecampLogo} alt="Logo de freedcodecamp" className="freecodecamp-logo" />
     </div>
     <main className="contenedor-principal">
      <Contador 
      numClics={count}/>
      <Boton 
      texto='Clic'
      esBotonDeClic={true}
      manejarClic= {manejarClic} />

      <Boton 
      texto='Reiniciar'
      esBotonDeClic={false}
      manejarClic= {reiniciarContador} />
     </main>
    </div>
  )
}

export default App

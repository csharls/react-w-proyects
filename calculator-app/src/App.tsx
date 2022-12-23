import { useState } from 'react'
import './App.css'
import Boton from './components/Boton'
import freecodeCampLogo from './images/freecodecamp-logo.png'
import Pantalla from './components/Pantalla'
import BotonClear from './components/BotonClear'
import { evaluate } from 'mathjs'


function App() {
  const [input, setInput] = useState('0')

  const agregarInput = (val: string) => {
    setInput(input + val)
  }

  const resetInput = () => {
    setInput('0')
  }

  ///definir componente para el logo
  /// corregir casos que no se ha manejado

  const calcularResultado = () => {
    input ? setInput(evaluate(input)) : alert('ingresa valores')
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img src={freecodeCampLogo} alt="Logo de freeCodeCamp" className="freecodecamp-logo" />
      </div>
      <main className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>

        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>

        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>

        </div>
        <div className="fila">
          <BotonClear manejarClic={resetInput}>Clear</BotonClear>
        </div>
      </main>

    </div>
  )
}

export default App

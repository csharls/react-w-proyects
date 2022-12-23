import '../estilos/TareaFormulario.css'
import { FormEvent, useState } from 'react'

import { v4 as uuidv4 } from 'uuid';

export default function TareaFormulario (props: any) {

  const [input, setInput] = useState('')

  const manejarEnvio = (e : FormEvent) => {
    e.preventDefault()

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }

    props.onSubmit(tareaNueva)
    setInput('')
  }

  const manejarCambio = (e:any) => {
    setInput(e.target.value)
  }


  return (
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input type="text" className="tarea-input" placeholder="Escribe una tarea" name="texto" onChange={manejarCambio} value={input}/>
      <button className="tarea-boton" >Agregar Tarea</button>
    </form>
  )
}
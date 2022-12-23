import TareaFormulario from "./TareaFormulario";

import '../estilos/ListaDeTareas.css'

import Tarea from "./Tarea";
import {useState} from 'react'

type Tarea = {
  id: string,
  texto: string,
  completada: boolean
}

export default function ListaDeTareas ()  {

  const [tareas, setTareas] = useState<Tarea[]>([])

const agregarTarea = (tarea: Tarea) => {
  if(tarea.texto.trim()) {
    setTareas(prevTareas => [tarea, ...prevTareas])
  }
  
}

const eliminarTarea = (id: string) => {
  setTareas(tareas.filter((t:Tarea) => t.id !== id))
}

const completarTarea = (id:string) => {
  setTareas(tareas.map((t:Tarea) =>  {
    if(t.id === id) {
      t.completada = !t.completada
    }
    return t
  }))
  
}
  return (
    <>
    <TareaFormulario onSubmit={agregarTarea}/>
    <div className="tareas-lista-contenedor">
      {
        tareas.map((tarea: Tarea) =>  <Tarea key ={tarea.id} id={tarea.id} texto={tarea.texto} completada={tarea.completada} eliminarTarea={eliminarTarea} completarTarea={completarTarea}/>

        )
      }
      
    </div>
    </>
  )
}
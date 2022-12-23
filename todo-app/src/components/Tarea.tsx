
import '../estilos/Tarea.css'
import { AiOutlineCloseCircle } from "react-icons/ai";


import { IconContext } from "react-icons";

export default function Tarea ({id, texto, completada, completarTarea, eliminarTarea}: {id?:string, texto?:string, completada?: boolean, completarTarea: Function, eliminarTarea: Function}) {
  return (
    <div className={completada ? "tarea-contenedor completada": 'tarea-contenedor'}>
      <div className="tarea-texto" onClick={() =>completarTarea(id)}>
        {texto}
      </div>
      <div className='tarea-contenedor-iconos' onClick={() => eliminarTarea(id)}>
      <IconContext.Provider value={{ className: 'tarea-icono' }}>
        <AiOutlineCloseCircle />
      </IconContext.Provider>
      </div>
    </div>
  )
}
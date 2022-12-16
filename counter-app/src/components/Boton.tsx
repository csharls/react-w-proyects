import React, { MouseEventHandler } from 'react'

import '../styles/Boton.css'

export default function Boton({texto, esBotonDeClic, manejarClic}: {texto:string, esBotonDeClic: boolean, manejarClic:MouseEventHandler}) {

  return (
    <button className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
    onClick={manejarClic}>
      {texto}
    </button>
  )
}
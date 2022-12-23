import '../styles/BotonClear.css'

const BotonClear = (props:any) => (
  <button className="boton-clear" onClick={()=>props.manejarClic()}>
    {props.children}
  </button>
)

export default BotonClear
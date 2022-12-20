import '../styles/BotonClear.css'

const BotonClear = (props:any) => (
  <button className="boton-clear">
    {props.children}
  </button>
)

export default BotonClear
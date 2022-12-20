import '../styles/Boton.css'

export default function Boton (props: any) {
  const esOperador = (valor: any) => {
    return isNaN(valor) && (valor!='.') && (valor != '=')
  }
  return (
    <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' :''}`.trimEnd()}>
      {props.children}
    </div>
  )
}
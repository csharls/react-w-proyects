import '../styles/Testimonio.css'
export default function Testimonio(props: any) {
  return (
    <div className="testimonio-container">
      {/* <img src={require('../images/testimonio-emma.jpg')} alt="photo of Emma" className='testimonio-img' /> */}
      <img src={`/src/images/testimonio-${props.imagen}.jpg`} alt={`photo of ${props.imagen}` } className='testimonio-img' />
      <div className="testimonio-text-container">
        <p className="nombre-testimonio">
          <strong>
            {props.nombre}
          </strong> en {props.pais}
        </p>
        <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="text-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  )
}
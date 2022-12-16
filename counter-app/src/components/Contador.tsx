import '../styles/Contador.css'

export default function Contador ({numClics} : {numClics: number}) {
  return (
    <div className="contador">
      {numClics}
    </div>
  )
}
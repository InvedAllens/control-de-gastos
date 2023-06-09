import { useEffect, useState } from 'react'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos'
import Modal from './components/Modal'
import iconoNuevoGasto from './images/nuevo-gasto.svg'
import { generarId } from './helpers'
import Filtros from './components/Filtros'


Header
function App() {
  const [presupuesto, setPresupuesto] = useState(`${Number(localStorage.getItem('presupuesto')) ?? 0}`)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animacionModal, setAnimacionModal] = useState(false)
  const [gastos, setGastos] = useState(localStorage.getItem('gastos') ? [...JSON.parse(localStorage.getItem('gastos'))] : [])
  const [editarGasto,setEditarGasto]=useState({})
  const [filtros,setFiltros]=useState('')
  const [gastosFiltrados,setGastosFiltrados]=useState([])

  const handleNuevoGasto = () => {
    setModal(true)
    setEditarGasto({})
    setTimeout(() => {
      setAnimacionModal(true)
    }, 200)
  }
  const guardarGasto = (gasto) => {
    if(gasto.id){
      const gastosActualizados=gastos.map(gastoState=> gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualizados)
      setEditarGasto({})
    }else{
      gasto.id=generarId()
      setGastos([...gastos, gasto])
    }
    console.log(gastos)
  }
  useEffect(()=>{
    if(Object.keys(editarGasto).length>0){
      setModal(true)
      setTimeout(() => {
      setAnimacionModal(true)
    }, 200)
    }
  },[editarGasto])

  const eliminarGasto=id=>{
    const gastosActualizados=gastos.filter(gasto=> gasto.id!=id)
    setGastos(gastosActualizados)
    console.log(gastosActualizados)
  }
  useEffect(()=>{
    localStorage.setItem('presupuesto',presupuesto ?? 0)
  },[presupuesto])
  useEffect(()=>{
    if(presupuesto>0){
      setPresupuesto(Number(localStorage.getItem('presupuesto')))
      setIsValidPresupuesto(true)
    }
  },[])
  useEffect(()=>{
      localStorage.setItem('gastos',JSON.stringify(gastos) )
  },[gastos])

  useEffect(()=>{
    const gastosConFiltro=gastos.filter(gasto=>gasto.categoria===filtros)
    setGastosFiltrados(gastosConFiltro)
    console.log(gastosFiltrados)
  },[filtros])
  return (
    <div className={modal ? 'fijar' :''}>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        gastos={gastos}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        setGastos={setGastos}
      />
      {isValidPresupuesto && (
        <>
        <main>
          <Filtros 

            filtros={filtros}
            setFiltros={setFiltros}
          
          />
          <ListadoGastos
            gastos={gastos}
            setEditarGasto={setEditarGasto}
            eliminarGasto={eliminarGasto}
            filtros={filtros}
            gastosFiltrados={gastosFiltrados}
          />
        </main>
        <div className='nuevo-gasto'>
          <img
            src={iconoNuevoGasto}
            alt="Icono Agregar Gasto"
            onClick={handleNuevoGasto} 
          />
        </div>
        </>)
        }

      {modal && (<Modal
        setModal={setModal}
        animacionModal={animacionModal}
        setAnimacionModal={setAnimacionModal}
        guardarGasto={guardarGasto}
        editarGasto={editarGasto}

      />)}
    </div>

  )
}

export default App

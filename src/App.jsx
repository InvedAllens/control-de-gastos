import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import iconoNuevoGasto from './images/nuevo-gasto.svg'

Header
function App() {
  const [presupuesto, setPresupuesto] = useState(Number)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animacionModal, setAnimacionModal] = useState(false)
  const [gastos, setGastos] = useState([])
  const handleNuevoGasto = () => {
    setModal(true)
    setTimeout(() => {
      setAnimacionModal(true)
    }, 200)
  }
  const guardarGasto = (gasto) => {
    setGastos([...gastos,gasto])
    console.log(gastos)
  }
  return (
    <div className="App">
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {isValidPresupuesto && (
        <div className='nuevo-gasto'>
          <img src={iconoNuevoGasto} alt="" onClick={handleNuevoGasto} />
        </div>)}

      {modal && (<Modal
        setModal={setModal}
        animacionModal={animacionModal}
        setAnimacionModal={setAnimacionModal}
        guardarGasto={guardarGasto}

      />)}
    </div>

  )
}

export default App

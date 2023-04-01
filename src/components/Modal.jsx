import React, { useState } from 'react'
import {generarId} from './../helpers'
import Mensaje from './Mensaje'
import iconoCerrarModal from './../images/cerrar.svg'

const Modal = ({ setModal, animacionModal, setAnimacionModal,guardarGasto}) => {
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [mensaje,setMensaje]=useState('')
    const ocultarModal = () => {
        setTimeout(() => {
            setModal(false)
        }, 300)
        setAnimacionModal(false)
    }
    const handleAgregarGasto=(event)=>{
        event.preventDefault()
        if([nombre,cantidad,categoria].includes('')){
            setMensaje("Todos los campos son obligatorios")
            setTimeout(()=>{
                setMensaje('')
            },3000)
            return
        }
        guardarGasto([nombre,cantidad,categoria,generarId()])
    }
    return (
        <div className='modal'>
            <p>Mensaje en modal</p>
            <div className='cerrar-modal'>
                <img src={iconoCerrarModal} alt="icono para cerrar modal" onClick={ocultarModal} />
            </div>
            <form 
                action="" 
                className={`formulario ${animacionModal ? 'animar' : 'cerrar'}`}
                onSubmit={handleAgregarGasto}
            >
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
                <legend>Agregar un Gasto</legend>
                <div className='campo'>
                    <label htmlFor="nombre">Nombre o identificador</label>
                    <input
                        type="text"
                        id='nombre'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                        placeholder='Nombre del gasto' />
                </div>
                <div className='campo'>
                    <label htmlFor="cantidad">Cantidad</label>
                    <input
                        id='cantidad'
                        type="number"
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))}
                        placeholder='Agrege una Cantidad'
                    />

                </div>

                <div className='campo'>
                    <label htmlFor="">Categoria</label>
                    <select
                        name="categoria"
                        id="categoria"
                        value={categoria}
                        onChange={e=>setCategoria(e.target.value)}

                    >
                        <option value="">--Seleccina una Categoria--</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="salud">Salud</option>
                        <option value="ocio">Ocio</option>
                        <option value="casa">Casa</option>
                        <option value="suscripciones">Suscripciones</option>
                        <option value="otros">Otros Gastos</option>
                    </select>
                </div>
                <input type="submit" value="Agregar" />

            </form>
        </div>
    )
}

export default Modal
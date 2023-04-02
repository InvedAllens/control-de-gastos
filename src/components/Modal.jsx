import React, { useEffect, useState } from 'react'
import {generarId} from './../helpers'
import Mensaje from './Mensaje'
import iconoCerrarModal from './../images/cerrar.svg'

const Modal = ({ setModal, animacionModal, setAnimacionModal,guardarGasto,editarGasto}) => {
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [fecha,setFecha]=useState('')
    const [id,setId]=useState(null)
    const [mensaje,setMensaje]=useState('')
    useEffect(()=>{
        if(Object.keys(editarGasto).length>0){
            setNombre(editarGasto.nombre)
            setCantidad(editarGasto.cantidad)
            setCategoria(editarGasto.categoria)
            setFecha(editarGasto.fecha)
            setId(editarGasto.id)
        }
    },[])
    
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
        if(id){
            guardarGasto({nombre:nombre,cantidad:cantidad,categoria:categoria,fecha:editarGasto.fecha,id:editarGasto.id})
        }else{
            const fecha=Date.now()
            guardarGasto({nombre:nombre,cantidad:cantidad,fecha:fecha,categoria:categoria})
        }
        
        setTimeout(() => {
            setModal(false)
        }, 300)
        setAnimacionModal(false)

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
                
                <legend>{Object.keys(editarGasto).length>0 ? 'Editar Gasto':'Nuevo Gasto'}</legend>
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
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
                <input type="submit" value={Object.keys(editarGasto).length>0 ? 'Guardar Cambios':'Añadir Gasto'} />

            </form>
        </div>
    )
}

export default Modal
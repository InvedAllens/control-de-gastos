import React, { useState } from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({ presupuesto, setPresupuesto,setIsValidPresupuesto }) => {
    const [mensaje, setMensaje] = useState()
    
    const handlePresupuesto = e => {
        e.preventDefault()
        if (!presupuesto || presupuesto < 0) {
            if (presupuesto != 0) {
                setMensaje('No es un presupuesto valido')
            } else {
                setMensaje('')
            }

        } else {
            setMensaje('')
            console.log('Presupuesto valido')
            setIsValidPresupuesto(true)
        }
    }
    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form action="" className='formulario' onSubmit={handlePresupuesto}>
                <div className='campo'>
                    <label htmlFor="">Definir Presupuesto</label>
                    <input
                        type="number"
                        className='nuevo-presupuesto'
                        placeholder='Añade tu presupuesto'
                        onChange={e => setPresupuesto(Number(e.target.value))}
                    />
                </div>
                <input type="submit" value="Añadir" />
                {mensaje && <Mensaje tipo={'error'}>{mensaje}</Mensaje>}
            </form>
        </div>
    )
}

export default NuevoPresupuesto
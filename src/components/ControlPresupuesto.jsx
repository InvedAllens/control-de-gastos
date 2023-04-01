import React, { useEffect, useState } from 'react'

const ControlPresupuesto = ({presupuesto,gastos}) => {

    const [disponible,setDisponible]=useState(0)
    const [gastado,setGastado]=useState(0)

    useEffect(()=>{
        const totalGastado=gastos.reduce((total,gasto)=>gasto.cantidad+total,0)
        setGastado(totalGastado)
        setDisponible(presupuesto-totalGastado)

    },[gastos])

    const formatearMoneda=cantidad=>{
    return cantidad.toLocaleString('en-US',{
        style:'currency',
        currency:'USD'
        })
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        
        <div>
            <p>grafica</p>
        </div>
        <div className='contenido-presupuesto'>
            <p><span>Presupuesto:</span>{formatearMoneda(presupuesto)}</p>

            <p><span>Disponible:</span>{formatearMoneda(disponible)}</p>
            <p><span>Gastado:</span>{formatearMoneda(gastado)}</p>
        </div>
        
            
    
    </div>
  )
}

export default ControlPresupuesto
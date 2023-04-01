import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {
const formatearMoneda=(cantidad)=>{
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

            <p><span>Disponible:</span>{formatearMoneda(0)}</p>
            <p><span>Gastado:</span>{formatearMoneda(0)}</p>
        </div>
        
            
    
    </div>
  )
}

export default ControlPresupuesto
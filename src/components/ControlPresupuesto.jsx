import React, { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ({presupuesto,gastos}) => {

    const [disponible,setDisponible]=useState(0)
    const [gastado,setGastado]=useState(0)
    const [porcentaje,setPorcentaje]=useState(0)

    useEffect(()=>{
        const totalGastado=gastos.reduce((total,gasto)=>gasto.cantidad+total,0)
        setGastado(totalGastado)
        setDisponible(presupuesto-totalGastado)
        setTimeout(()=>{
            setPorcentaje(totalGastado*100/presupuesto)
        },1000)
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
        <CircularProgressbar 
            value={porcentaje} 
            text={`${porcentaje.toFixed(1)}% Gastado`} 
            styles={buildStyles(
                {
                    pathColor: `${porcentaje<75 ? '#579BB1': porcentaje>100 ?'#EB455F':'#FFFBAC'}`,
                    trailColor: '#579BB120',
                    textColor:'#579BB1'
                }
                
                )}
        >
            {/* <img style={{ width: 80, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" /> */}
        </CircularProgressbar>
        </div>
        <div className='contenido-presupuesto'>
            <p><span>Presupuesto:</span>{formatearMoneda(presupuesto)}</p>

            <p className={disponible<0 ? 'negativo': null}><span>Disponible:</span>{formatearMoneda(disponible)}</p>
            <p><span>Gastado:</span>{formatearMoneda(gastado)}</p>
        </div>
        
            
    
    </div>
  )
}

export default ControlPresupuesto

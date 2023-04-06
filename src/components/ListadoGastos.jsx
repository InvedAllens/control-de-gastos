import React from 'react'
import Gasto from './Gasto'
const ListadoGastos = ({gastos,setEditarGasto,eliminarGasto,filtros,gastosFiltrados}) => {
  return (
    <div className='listado-gastos contenedor'>
    {
      filtros ? (
        <>
          <h2>{gastosFiltrados.length>0 ? `Gastos en ${filtros}`:`No Hay Gastos en ${filtros}`}</h2>
          {gastosFiltrados.map(gasto=>(
          <Gasto 
             key={gasto.id}
             gasto={gasto}
             setEditarGasto={setEditarGasto}
             eliminarGasto={eliminarGasto}
         />
         ))}
        </>
        
        
      ): (
        <>
        <h2>{gastos.length>0 ? 'Gastos':'No Hay Gastos'}</h2>
        {
          gastos.length ?
          gastos.map(gasto=>(
             <Gasto 

                key={gasto.id}
                gasto={gasto}
                setEditarGasto={setEditarGasto}
                eliminarGasto={eliminarGasto}
            />
        )): null}
        </>)}
        
    
    </div>
  )
}

export default ListadoGastos
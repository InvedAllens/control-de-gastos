import React from 'react'
import Gasto from './Gasto'
const ListadoGastos = ({gastos,setEditarGasto,eliminarGasto}) => {
  return (
    <div className='listado-gastos contenedor'>
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
            )):null
        }
    </div>
  )
}

export default ListadoGastos
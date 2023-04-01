import React from 'react'
import Gasto from './Gasto'
const ListadoGastos = ({gastos}) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>{gastos.length>0 ? 'Gastos':'No Hay Gastos'}</h2>

        {
            gastos.length ?
            gastos.map(gasto=>(
                 <Gasto 

                    key={gasto.id}
                    gasto={gasto}
                />
            )):null
        }
    </div>
  )
}

export default ListadoGastos
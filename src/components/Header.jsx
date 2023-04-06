import React, { useState } from 'react'
import ControlPresupuesto from './ControlPresupuesto'
import NuevoPresupuesto from './NuevoPresupuesto'


const Header = ({presupuesto,setPresupuesto,isValidPresupuesto,setIsValidPresupuesto,gastos,setGastos}) => {
  return (
    <header>
       <h1>Control de Gastos</h1> 
       {
        !isValidPresupuesto ? ( 
          <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
          />) : (
            <ControlPresupuesto
              presupuesto={presupuesto} 
              gastos={gastos}
              setIsValidPresupuesto={setIsValidPresupuesto}
              setGastos={setGastos}
              setPresupuesto={setPresupuesto}
            />
                    )
       }
       
    </header>
  )
}

export default Header

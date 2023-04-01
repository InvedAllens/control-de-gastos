import React, { useState } from 'react'
import ControlPresupuesto from './ControlPresupuesto'
import NuevoPresupuesto from './NuevoPresupuesto'


const Header = ({presupuesto,setPresupuesto,isValidPresupuesto,setIsValidPresupuesto}) => {
  return (
    <header>
       <h1>Header</h1> 
       {
        !isValidPresupuesto ? ( <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
            />) : (
            <ControlPresupuesto
            presupuesto={presupuesto}        
            />
                    )
       }
       
    </header>
  )
}

export default Header
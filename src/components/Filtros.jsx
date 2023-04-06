import React from 'react'

const Filtros = ({filtros,setFiltros}) => {
  return (
    <div className='filtros sombra contenedor'>
        <form action="">
            <div className='campo'>
                <label htmlFor="gastos">
                    Filtrar Gastos
                </label>
                <select name="gastos" id="gastos" value={filtros} onChange={(e)=>setFiltros(e.target.value)}>
                        <option value="">--Todas Las Categorías--</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="salud">Salud</option>
                        <option value="ocio">Ocio</option>
                        <option value="casa">Casa</option>
                        <option value="suscripciones">Suscripciones</option>
                        <option value="otros">Otros Gastos</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Filtros
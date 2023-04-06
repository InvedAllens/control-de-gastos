import React from 'react'

import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import { formatearFecha } from '../helpers'
import IconoAhorro from '../images/icono_ahorro2.svg'
import IconoCasa from '../images/icono_casa2.svg'
import IconoComida from '../images/icono_comida2.svg'
import IconoGastos from '../images/icono_gastos2.svg'
import IconoOcio from '../images/icono_ocio2.svg'
import IconoSalud from '../images/icono_salud2.svg'
import IconoSuscripciones from '../images/icono_suscripciones2.svg'

const Gasto = ({ gasto ,setEditarGasto,eliminarGasto}) => {
    const { nombre, cantidad, fecha, categoria, id } = gasto

    const diccionarioIconos = {
        ahorro: IconoAhorro,
        comida: IconoComida,
        salud: IconoSalud,
        ocio: IconoOcio,
        casa: IconoCasa,
        suscripciones: IconoSuscripciones,
        otros: IconoGastos
    }

    const leadingActions=()=>(
        <LeadingActions>
            <SwipeAction
            onClick={()=>{
                setEditarGasto(gasto)
                // setTimeout(()=>{
                //     setEditarGasto({})
                // },3000)
            }
        }

            >
                Editar
            </SwipeAction>

        </LeadingActions>
    )
    const trailingActions=()=>(
        <TrailingActions>
            <SwipeAction
            onClick={()=>eliminarGasto(id)}
            destructive={true}

            >
                Eliminar
            </SwipeAction>

        </TrailingActions>
    )
    return (

        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className='gasto sombra'>
                    <div className='contenido-gasto'>
                        <img src={diccionarioIconos[categoria]} alt="icono de la categoria del gasto" />
                        <div className='descripcion-gasto'>
                            <p className='categoria'>{categoria}</p>
                            <p className='nombre-gasto'>{nombre}</p>
                            <p className='fecha-gasto'>Agregado el :{''} <span> {formatearFecha(fecha)}</span></p>
                        </div>
                    </div>
                    <p className='cantidad-gasto'>${cantidad}</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default Gasto
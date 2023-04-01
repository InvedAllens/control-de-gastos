export const generarId=()=>{
    const cadenaR=Math.random().toString(36).substr(2)
    const fechaR=Date.now().toString(36)

    return cadenaR+fechaR
}
export const formatearFecha=fecha=>{
    const fechaNueva=new Date(fecha)
    const opciones={
        year:'numeric',
        month:'long',
        day:'2-digit'
    }
    return fechaNueva.toLocaleDateString('es-ES',opciones)
}
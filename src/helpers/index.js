export const generarId=()=>{
    const cadenaR=Math.random().toString(36).substr(2)
    const fechaR=Date.now().toString(36)

    return cadenaR+fechaR
}

import { useEffect, useState } from "react";
import sunnySVG from "../images/soleado.svg"
import parcialSVG from "../images/parcial.svg"
import nubladoSVG from "../images/nublado.svg"
import nocheDespejadoSVG from "../images/noche-despejado.svg"

const TiempoAhora = () => {    
    const [tiempo, setTiempo] = useState("")

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch("https://api.weatherapi.com/v1/current.json?key=9dab7e7803d44d69a1d03812220302&q=Santiago&aqi=no", 
                {
                    method: 'GET',
                    mode: 'cors'})
                const data = await response.json()
                setTiempo(data)
            } catch (error) {
                console.log(error)
            }

        }
        getData()
    }, []);

    const datosGeo =  tiempo.location
    const datosTiempo = tiempo.current

    if(datosTiempo === undefined){
        return <h4>Cargando...</h4>
    }

    const getDate = new Date()
    const fechaActual = getDate.toLocaleDateString()
    let horaActual = `${getDate.getHours()}:${getDate.getMinutes()}`

    if(getDate.getMinutes() <= 9){
        horaActual = `${getDate.getHours()}:0${getDate.getMinutes()}`

    }

    const climaActual = datosTiempo?.condition?.text
    const tempActual = datosTiempo?.temp_c

    const tomarClima= [climaActual]
    
    const imagenClima = () => {
        if(tomarClima.includes("Sunny")){
            return sunnySVG
        }else if(tomarClima.includes("Partly cloudy")){
            return parcialSVG
        }else if(tomarClima.includes("Clear")){
            return nocheDespejadoSVG
        }else if(tomarClima.includes("Cloudy")){
            return nubladoSVG
        }
    }
    const clima = () => {
        if(tomarClima.includes("Sunny")){
            return "Soleado"
        }else if(tomarClima.includes("Partly cloudy")){
            return "Parcialmente Nublado"
        }else if(tomarClima.includes("Clear")){
            return "Despejado"
        }else if(tomarClima.includes("Cloudy")){
            return "Nublado"
        }
    }



    return(
        <div className="tiempoA">
            <div className="titulo-line">
             <h4>El Tiempo Ahora</h4>
            </div>
            <div className="data-fecha">
                <p>{horaActual}</p>
                <p>{fechaActual}</p>
            </div>
            <div className="estado">
                <img height="120px" src={imagenClima()}></img>
                <p className="temperatura" >{`${tempActual}°C`}</p>
            </div>
            <p>{clima()}</p>
            <p>{datosGeo ? `${datosGeo.name}, ${datosGeo.region}` : null}</p>
        </div>
    )
}

export default TiempoAhora;

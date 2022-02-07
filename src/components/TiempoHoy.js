
import { useEffect, useState } from "react";
import sunnySVG from "../images/soleado.svg"
import parcialSVG from "../images/parcial.svg"
import nubladoSVG from "../images/nublado.svg"
import nocheDespejadoSVG from "../images/noche-despejado.svg"

const TiempoHoy = () => {    
    const [tiempo, setTiempo] = useState("")

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch("http://api.weatherapi.com/v1/forecast.json?key=9dab7e7803d44d69a1d03812220302&q=Santiago&days=2&aqi=no&alerts=no", 
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
    const datosTiempo = tiempo.forecast?.forecastday

    if(datosTiempo === undefined){
        return <h4>Cargando...</h4>
    }

    const getDate = new Date()
    const fechaActual = getDate.toLocaleDateString()


    const climaHoy = datosTiempo?.[0].day?.condition?.text
    const getTempHoy = datosTiempo?.[0].day?.maxtemp_c

    const tempHoy = parseInt(getTempHoy)


    const tomarClima= [climaHoy]
    
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

    // Traducir Clima
    const clima = () => {
        if(tomarClima.includes("Sunny")){
            return "Soleado"
        }else if(tomarClima.includes("Partly cloudy")){
            return "Parcialmente Nublado"
        }else if(tomarClima.includes("Clear")){
            return "Despejado"
        }else if(tomarClima.includes("Cloudy")){
            return "Nublado"
        }else {
            return tomarClima.values
        }
    }



    return(
        <div className="tiempoA">
            <div className="titulo-line">
             <h4>Hoy</h4>
            </div>
            <div className="data-fecha">
                <p>{fechaActual}</p>
            </div>
            <p>Max</p>
            <div className="estado block-line">
                <img height="120px" src={imagenClima()}></img>
                <p className="temperatura" >{`${tempHoy}°C`}</p>
            </div>
            <p>{clima()}</p>
            <p>{datosGeo ? `${datosGeo.name}, ${datosGeo.region}` : null}</p>
        </div>
    )
}

export default TiempoHoy;

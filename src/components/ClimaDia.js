import { useState, useEffect } from "react"
import sunnySVG from "../images/soleado.svg"
import parcialSVG from "../images/parcial.svg"
import nubladoSVG from "../images/nublado.svg"
import nocheDespejadoSVG from "../images/noche-despejado.svg"
import gotaSVG from "../images/gota.svg"

const ClimaDia = () => {
    const [tiempo, setTiempo] = useState("")

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch("https://api.weatherapi.com/v1/forecast.json?key=9dab7e7803d44d69a1d03812220302&q=Santiago&days=7&aqi=no&alerts=no")
                // {
                //     method: 'GET',
                //     mode: 'cors'})
                const data = await response.json()
                setTiempo(data)
            } catch (error) {
                console.log(error)
            }

        }
        getData()
    }, []);

    const getClimaDias = tiempo?.forecast?.forecastday

    if(getClimaDias === undefined){
        return <h4>Cargando...</h4>
    }

    const getImagen = (imagen) => {
        const img = [imagen]

        if(img.includes("Sunny")){
            return sunnySVG
        }else if(img.includes("Partly cloudy")){
            return parcialSVG
        }else if(img.includes("Clear")){
            return nocheDespejadoSVG
        }else if(img.includes("Cloudy")){
            return nubladoSVG
        }
    }

    const getEstado = (estado) => {
        const state = [estado]

        if(state.includes("Sunny")){
            return "Soleado"
        }else if(state.includes("Partly cloudy")){
            return "Parcialmente Nublado"
        }else if(state.includes("Clear")){
            return "Despejado"
        }else if(state.includes("Cloudy")){
            return "Nublado"
        }else {
            return state
        }
    }

    const getDias = (incrementador) => {
        const getFecha = new Date()

        const hoy = new Date(getFecha)

        const incrementoDia = hoy.setDate(hoy.getDate() + incrementador)

        const dia = new Date(incrementoDia).toDateString()


        const getDayName = [dia.substring(0, 3)]

        if(getDayName.includes("Mon")){
            return "Lun."
        } else if(getDayName.includes("Tue")){
            return "Mar."
        }else if(getDayName.includes("Wed")){
            return "Mie."
        }else if(getDayName.includes("Thu")){
            return "Jue."
        }else if(getDayName.includes("Fri")){
            return "Vie."
        }else if(getDayName.includes("Sat")){
            return "Sab."
        }else if(getDayName.includes("Sun")){
            return "Dom."
        }
    }

    
    
    const tiempoXDia = []

    for (let i = 0; i < getClimaDias?.length; i++){
        tiempoXDia.push(
            <div key={i} className="tiempoH" >
                <div className="detallesTiempoH" >
                    <p>{getDias(i)}</p>
                    <img className="state" src={getImagen(getClimaDias?.[i].day?.condition?.text)}></img>
                    <p>{`${getClimaDias?.[i].day?.maxtemp_c}°C`}</p>
                    <p>{getEstado(getClimaDias?.[i].day?.condition?.text)}</p>
                    <div className="precip" >
                        <img className="drop" src={gotaSVG}></img>
                        <p>{`${getClimaDias?.[i].day?.totalprecip_in}%`}</p>
                    </div>
                </div>
            </div>

        )
    }

    return(
        <div>
            {tiempoXDia}
        </div>
    )

}


export default ClimaDia;


import { useState, useEffect} from "react"
import sunnySVG from "../images/soleado.svg"
import parcialSVG from "../images/parcial.svg"
import nubladoSVG from "../images/nublado.svg"
import nocheDespejadoSVG from "../images/noche-despejado.svg"
import gotaSVG from "../images/gota.svg"

const ClimaHora = () => {
    const [tiempo, setTiempo] = useState("")

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch("https://api.weatherapi.com/v1/forecast.json?key=9dab7e7803d44d69a1d03812220302&q=Santiago&days=1&aqi=no&alerts=no")
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

    const getClimaHoras = tiempo?.forecast?.forecastday?.[0].hour

    if(getClimaHoras === undefined){
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

    
    const tiempoXhora = []

    for (let i = 0; i < getClimaHoras?.length; i++){
        tiempoXhora.push(
            <div key={i} className="tiempoH" >
                <div className="detallesTiempoH" >
                    <p>{[i]}</p>
                    <img  alt="weather"className="state" src={getImagen(getClimaHoras?.[i].condition?.text)}></img>
                    <p>{`${getClimaHoras?.[i].temp_c}°C`}</p>
                    <p>{getEstado(getClimaHoras?.[i].condition?.text)}</p>
                    <div className="precip" >
                        <img className="drop" src={gotaSVG}></img>
                        <p>{`${getClimaHoras?.[i].precip_in}%`}</p>
                    </div>
                </div>
            </div>

        )
    }

    return(
        <div>
            {tiempoXhora}
        </div>
    )

}


export default ClimaHora;


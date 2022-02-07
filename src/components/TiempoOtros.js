import { useEffect, useState, useRef } from "react";
import compassSVG from "../images/compass.svg"
import windSVG from "../images/wind.svg"
import waterSVG from "../images/water.svg"
import uvSVG from "../images/uv.svg"
import precipSVG from "../images/precip.svg"


const TiempoOtros = () => {    
    const [tiempo, setTiempo] = useState("")
    const uvRef = useRef(null)

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

    const datosTiempo = tiempo.current

    if(datosTiempo === undefined){
        return <h4>Cargando...</h4>
    }

    const dirWind = datosTiempo?.wind_dir
    const speedWind = `${datosTiempo?.wind_kph}Km/H`
    const humedad = `${datosTiempo?.humidity}%`
    const uv = datosTiempo?.uv
    const precip = datosTiempo?.precip_in
    
    const windD = [dirWind]

    const calculoWind = () => {
        if(windD.includes("N") || windD.includes("North")){
            return "Norte"
        } else if(windD.includes("S") || windD.includes("South")){
            return "Sur"
        }else if(windD.includes("E") || windD.includes("East")){
            return "Este"
        }else if(windD.includes("W") || windD.includes("West")){
            return "Oeste"
        }else if(windD.includes("NW") || windD.includes("NNW") || windD.includes("WNW")){
            return "Noroeste"
        }else if(windD.includes("NE") || windD.includes("NNE") || windD.includes("ENE")){
            return "Noreste"
        }else if(windD.includes("SW") || windD.includes("SSW") || windD.includes("WSW")){
            return "Suroeste"
        }else if(windD.includes("SE") || windD.includes("SSE") || windD.includes("ESE")){
            return "Sureste"
        }
    }

    // const uvNum = Number(uv)

    // if(uvNum <= 2 ){
    //     console.log("verde")
    // } else if(uvNum <= 5){
    //     console.log("amarillo")
    // } else if(uvNum  >= 6){
    //     console.log(uvRef.current.value)
    // }


    return(
        <div className="tiempoO">
            <div className="titulo-line">
                <h4>Detalles</h4>
            </div>
            <div className="detalle">
                <div className="detalle-a">
                    <img className="img-detalle" src={compassSVG}></img>
                    <p>Direccion del Viento</p>
                </div>
                <div className="detalle-b">
                    <p>{calculoWind()}</p>
                </div>
            </div>
            <div className="detalle">
                <div className="detalle-a">
                    <img className="img-detalle" src={windSVG}></img>
                    <p>Velocidad del Viento</p>
                </div>
                <div className="detalle-b">
                    <p>{speedWind}</p>
                </div>
            </div>
            <div className="detalle">
                <div className="detalle-a">
                    <img className="img-detalle" src={waterSVG}></img>
                    <p>Humedad</p>
                </div>
                <div className="detalle-b">
                    <p>{humedad}</p>
                </div>
            </div>
            <div className="detalle">
                <div className="detalle-a">
                    <img className="img-detalle uv" src={uvSVG}></img>
                    <p>UV</p>
                </div>
                <div className="detalle-b">
                    <p>{uv}</p>
                </div>
            </div>
            <div className="detalle">
                <div className="detalle-a">
                    <img className="img-detalle" src={precipSVG}></img>
                    <p>Precipitaciones</p>
                </div>
                <div className="detalle-b">
                    <p>{precip}%</p>
                </div>
            </div>
        </div>
    )
}

export default TiempoOtros;

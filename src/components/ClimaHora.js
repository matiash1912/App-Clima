import { useState, useEffect, useRef } from "react"
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

    const hora0 = getClimaHoras?.[0]

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

    


    

    return(
        <div>
            <div className="tiempoH" >
                <div className="detallesTiempoH" >
                    <p>0</p>
                    <img className="state" src={getImagen(hora0?.condition?.text)}></img>
                    <p>{`${getClimaHoras?.[0].temp_c}°C`}</p>
                    <p>{getEstado(hora0?.condition?.text)}</p>
                    <div className="precip" >
                        <img className="drop" src={gotaSVG}></img>
                        <p>{`${hora0?.precip_in}%`}</p>
                    </div>
                </div>
            </div>
            <div className="tiempoH" >
                <div className="detallesTiempoH" >
                    <p>1</p>
                    <img className="state" src={getImagen(getClimaHoras?.[1].condition?.text)}></img>
                    <p>{`${getClimaHoras?.[1].temp_c}°C`}</p>
                    <p>{getEstado(getClimaHoras?.[1].condition?.text)}</p>
                    <div className="precip" >
                        <img className="drop" src={gotaSVG}></img>
                        <p>{`${getClimaHoras?.[1].precip_in}%`}</p>
                    </div>
                </div>
            </div>
            <div className="tiempoH" >
                <div className="detallesTiempoH" >
                    <p>2</p>
                    <img className="state" src={getImagen(getClimaHoras?.[2].condition?.text)}></img>
                    <p>{`${getClimaHoras?.[2].temp_c}°C`}</p>
                    <p>{getEstado(getClimaHoras?.[2].condition?.text)}</p>
                    <div className="precip" >
                        <img className="drop" src={gotaSVG}></img>
                        <p>{`${getClimaHoras?.[2].precip_in}%`}</p>
                    </div>
                </div>
            </div>
            <div className="tiempoH" >
                <div className="detallesTiempoH" >
                    <p>3</p>
                    <img className="state" src={getImagen(getClimaHoras?.[3].condition?.text)}></img>
                    <p>{`${getClimaHoras?.[3].temp_c}°C`}</p>
                    <p>{getEstado(getClimaHoras?.[3].condition?.text)}</p>
                    <div className="precip" >
                        <img className="drop" src={gotaSVG}></img>
                        <p>{`${getClimaHoras?.[3].precip_in}%`}</p>
                    </div>
                </div>
            </div>
            <div className="tiempoH" >
                <div className="detallesTiempoH" >
                    <p>4</p>
                    <img className="state" src={getImagen(getClimaHoras?.[4].condition?.text)}></img>
                    <p>{`${getClimaHoras?.[4].temp_c}°C`}</p>
                    <p>{getEstado(getClimaHoras?.[4].condition?.text)}</p>
                    <div className="precip" >
                        <img className="drop" src={gotaSVG}></img>
                        <p>{`${getClimaHoras?.[4].precip_in}%`}</p>
                    </div>
                </div>
            </div>
            <div className="tiempoH" >
                <div className="detallesTiempoH" >
                    <p>5</p>
                    <img className="state" src={getImagen(getClimaHoras?.[5].condition?.text)}></img>
                    <p>{`${getClimaHoras?.[5].temp_c}°C`}</p>
                    <p>{getEstado(getClimaHoras?.[5].condition?.text)}</p>
                    <div className="precip" >
                        <img className="drop" src={gotaSVG}></img>
                        <p>{`${getClimaHoras?.[5].precip_in}%`}</p>
                    </div>
                </div>
            </div>
            <div className="tiempoH" >
                <div className="detallesTiempoH" >
                    <p>6</p>
                    <img className="state" src={getImagen(getClimaHoras?.[6].condition?.text)}></img>
                    <p>{`${getClimaHoras?.[6].temp_c}°C`}</p>
                    <p>{getEstado(getClimaHoras?.[6].condition?.text)}</p>
                    <div className="precip" >
                        <img className="drop" src={gotaSVG}></img>
                        <p>{`${getClimaHoras?.[6].precip_in}%`}</p>
                    </div>
                </div>
            </div>
            <div className="tiempoH" >
                <div className="detallesTiempoH" >
                    <p>7</p>
                    <img className="state" src={getImagen(getClimaHoras?.[7].condition?.text)}></img>
                    <p>{`${getClimaHoras?.[7].temp_c}°C`}</p>
                    <p>{getEstado(getClimaHoras?.[7].condition?.text)}</p>
                    <div className="precip" >
                        <img className="drop" src={gotaSVG}></img>
                        <p>{`${getClimaHoras?.[7].precip_in}%`}</p>
                    </div>
                </div>
            </div>
            <div className="tiempoH" >
                <div className="detallesTiempoH" >
                    <p>8</p>
                    <img className="state" src={getImagen(getClimaHoras?.[8].condition?.text)}></img>
                    <p>{`${getClimaHoras?.[8].temp_c}°C`}</p>
                    <p>{getEstado(getClimaHoras?.[8].condition?.text)}</p>
                    <div className="precip" >
                        <img className="drop" src={gotaSVG}></img>
                        <p>{`${getClimaHoras?.[8].precip_in}%`}</p>
                    </div>
                </div>
            </div>
            <div className="tiempoH" >
                <div className="detallesTiempoH" >
                    <p>9</p>
                    <img className="state" src={getImagen(getClimaHoras?.[9].condition?.text)}></img>
                    <p>{`${getClimaHoras?.[9].temp_c}°C`}</p>
                    <p>{getEstado(getClimaHoras?.[9].condition?.text)}</p>
                    <div className="precip" >
                        <img className="drop" src={gotaSVG}></img>
                        <p>{`${getClimaHoras?.[9].precip_in}%`}</p>
                    </div>
                </div>
            </div>
            <div className="tiempoH" >
                <div className="detallesTiempoH" >
                    <p>10</p>
                    <img className="state" src={getImagen(getClimaHoras?.[9].condition?.text)}></img>
                    <p>{`${getClimaHoras?.[10].temp_c}°C`}</p>
                    <p>{getEstado(getClimaHoras?.[10].condition?.text)}</p>
                    <div className="precip" >
                        <img className="drop" src={gotaSVG}></img>
                        <p>{`${getClimaHoras?.[10].precip_in}%`}</p>
                    </div>
                </div>
            </div>
            <div className="tiempoH" >
                <div className="detallesTiempoH" >
                    <p>11</p>
                    <img className="state" src={getImagen(getClimaHoras?.[11].condition?.text)}></img>
                    <p>{`${getClimaHoras?.[11].temp_c}°C`}</p>
                    <p>{getEstado(getClimaHoras?.[11].condition?.text)}</p>
                    <div className="precip" >
                        <img className="drop" src={gotaSVG}></img>
                        <p>{`${getClimaHoras?.[11].precip_in}%`}</p>
                    </div>
                </div>
            </div>
            <div className="tiempoH" >
                <div className="detallesTiempoH" >
                    <p>12</p>
                    <img className="state" src={getImagen(getClimaHoras?.[12].condition?.text)}></img>
                    <p>{`${getClimaHoras?.[12].temp_c}°C`}</p>
                    <p>{getEstado(getClimaHoras?.[12].condition?.text)}</p>
                    <div className="precip" >
                        <img className="drop" src={gotaSVG}></img>
                        <p>{`${getClimaHoras?.[12].precip_in}%`}</p>
                    </div>
                </div>
            </div>
            <div className="tiempoH" >
                <div className="detallesTiempoH" >
                    <p>13</p>
                    <img className="state" src={getImagen(getClimaHoras?.[13].condition?.text)}></img>
                    <p>{`${getClimaHoras?.[13].temp_c}°C`}</p>
                    <p>{getEstado(getClimaHoras?.[13].condition?.text)}</p>
                    <div className="precip" >
                        <img className="drop" src={gotaSVG}></img>
                        <p>{`${getClimaHoras?.[13].precip_in}%`}</p>
                    </div>
                </div>
            </div>
            <div className="tiempoH" >
                <div className="detallesTiempoH" >
                    <p>14</p>
                    <img className="state" src={getImagen(getClimaHoras?.[14].condition?.text)}></img>
                    <p>{`${getClimaHoras?.[14].temp_c}°C`}</p>
                    <p>{getEstado(getClimaHoras?.[14].condition?.text)}</p>
                    <div className="precip" >
                        <img className="drop" src={gotaSVG}></img>
                        <p>{`${getClimaHoras?.[14].precip_in}%`}</p>
                    </div>
                </div>
            </div>
            <div className="tiempoH" >
                <div className="detallesTiempoH" >
                    <p>15</p>
                    <img className="state" src={getImagen(getClimaHoras?.[15].condition?.text)}></img>
                    <p>{`${getClimaHoras?.[15].temp_c}°C`}</p>
                    <p>{getEstado(getClimaHoras?.[15].condition?.text)}</p>
                    <div className="precip" >
                        <img className="drop" src={gotaSVG}></img>
                        <p>{`${getClimaHoras?.[15].precip_in}%`}</p>
                    </div>
                </div>
            </div>
            <div className="tiempoH" >
                <div className="detallesTiempoH" >
                    <p>16</p>
                    <img className="state" src={getImagen(getClimaHoras?.[16].condition?.text)}></img>
                    <p>{`${getClimaHoras?.[16].temp_c}°C`}</p>
                    <p>{getEstado(getClimaHoras?.[16].condition?.text)}</p>
                    <div className="precip" >
                        <img className="drop" src={gotaSVG}></img>
                        <p>{`${getClimaHoras?.[16].precip_in}%`}</p>
                    </div>
                </div>
            </div>
            <div className="tiempoH" >
                <div className="detallesTiempoH" >
                    <p>17</p>
                    <img className="state" src={getImagen(getClimaHoras?.[17].condition?.text)}></img>
                    <p>{`${getClimaHoras?.[17].temp_c}°C`}</p>
                    <p>{getEstado(getClimaHoras?.[17].condition?.text)}</p>
                    <div className="precip" >
                        <img className="drop" src={gotaSVG}></img>
                        <p>{`${getClimaHoras?.[17].precip_in}%`}</p>
                    </div>
                </div>
            </div>
            <div className="tiempoH" >
                <div className="detallesTiempoH" >
                    <p>18</p>
                    <img className="state" src={getImagen(getClimaHoras?.[18].condition?.text)}></img>
                    <p>{`${getClimaHoras?.[18].temp_c}°C`}</p>
                    <p>{getEstado(getClimaHoras?.[18].condition?.text)}</p>
                    <div className="precip" >
                        <img className="drop" src={gotaSVG}></img>
                        <p>{`${getClimaHoras?.[18].precip_in}%`}</p>
                    </div>
                </div>
            </div>
            <div className="tiempoH" >
                <div className="detallesTiempoH" >
                    <p>19</p>
                    <img className="state" src={getImagen(getClimaHoras?.[19].condition?.text)}></img>
                    <p>{`${getClimaHoras?.[19].temp_c}°C`}</p>
                    <p>{getEstado(getClimaHoras?.[19].condition?.text)}</p>
                    <div className="precip" >
                        <img className="drop" src={gotaSVG}></img>
                        <p>{`${getClimaHoras?.[19].precip_in}%`}</p>
                    </div>
                </div>
            </div>
            <div className="tiempoH" >
                <div className="detallesTiempoH" >
                    <p>20</p>
                    <img className="state" src={getImagen(getClimaHoras?.[20].condition?.text)}></img>
                    <p>{`${getClimaHoras?.[20].temp_c}°C`}</p>
                    <p>{getEstado(getClimaHoras?.[20].condition?.text)}</p>
                    <div className="precip" >
                        <img className="drop" src={gotaSVG}></img>
                        <p>{`${getClimaHoras?.[20].precip_in}%`}</p>
                    </div>
                </div>
            </div>
            <div className="tiempoH" >
                <div className="detallesTiempoH" >
                    <p>21</p>
                    <img className="state" src={getImagen(getClimaHoras?.[21].condition?.text)}></img>
                    <p>{`${getClimaHoras?.[21].temp_c}°C`}</p>
                    <p>{getEstado(getClimaHoras?.[21].condition?.text)}</p>
                    <div className="precip" >
                        <img className="drop" src={gotaSVG}></img>
                        <p>{`${getClimaHoras?.[21].precip_in}%`}</p>
                    </div>
                </div>
            </div>
            <div className="tiempoH" >
                <div className="detallesTiempoH" >
                    <p>22</p>
                    <img className="state" src={getImagen(getClimaHoras?.[22].condition?.text)}></img>
                    <p>{`${getClimaHoras?.[22].temp_c}°C`}</p>
                    <p>{getEstado(getClimaHoras?.[22].condition?.text)}</p>
                    <div className="precip" >
                        <img className="drop" src={gotaSVG}></img>
                        <p>{`${getClimaHoras?.[22].precip_in}%`}</p>
                    </div>
                </div>
            </div>
            <div className="tiempoH" >
                <div className="detallesTiempoH" >
                    <p>23</p>
                    <img className="state" src={getImagen(getClimaHoras?.[23].condition?.text)}></img>
                    <p>{`${getClimaHoras?.[23].temp_c}°C`}</p>
                    <p>{getEstado(getClimaHoras?.[23].condition?.text)}</p>
                    <div className="precip" >
                        <img className="drop" src={gotaSVG}></img>
                        <p>{`${getClimaHoras?.[23].precip_in}%`}</p>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default ClimaHora;

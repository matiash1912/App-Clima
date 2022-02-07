import { useState, useEffect, useRef } from "react"

const ClimaHora = () => {
    const [tiempo, setTiempo] = useState("")

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch("https://api.weatherapi.com/v1/forecast.json?key=9dab7e7803d44d69a1d03812220302&q=Santiago&days=1&aqi=no&alerts=no", 
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

    const getClimaHoras = tiempo?.forecast?.forecastday?.[0].hour

    console.log(getClimaHoras)

    

    return(
        <div>
            
        </div>

    )
}
export default ClimaHora;

import { Route, Routes } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import TiempoAhora from './components/TiempoAhora'
import TiempoOtros from './components/TiempoOtros'
import TiempoHoy from './components/TiempoHoy'
import TiempoTomorrow from './components/TiempoTomorrow'
import ClimaHora from './components/ClimaHora'

const Hoy = () => {
  return(
    <div>
      <TiempoAhora />
      <TiempoOtros />
      <TiempoHoy />
      <TiempoTomorrow />
    </div>
  )
}

const CadaHora = () => {
  return(
    <div>
      <ClimaHora/>
    </div>
  )
}

const Diario = () => {
  return(
    <div>Diario</div>
  )
}

function App() {
  
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/cada-hora" element={<CadaHora/>}/>
        <Route path="/diario" element={<Diario/>}/>
        <Route path="/" element={<Hoy/>}/>
      </Routes>
 
      <Footer/>
    </div>

  )
}

export default App;

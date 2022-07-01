import {React, useState, useEffect} from 'react'
import { toast, ToastContainer } from 'react-toastify';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { NavbarLM } from '../components/Navbar/NavbarLM';
import { MiFooter } from '../components/Footer/footer';
import { DetalleReceta } from '../components/recetas/detalle/DetalleReceta';
import { MisRecetas } from '../components/recetas/misRecetas/MisRecetas';
import { Recetas } from '../components/recetas/Recetas';
import { FormReceta } from '../components/recetas/FormReceta';
import { DatosPersonales } from '../components/DatosPersonales/DatosPersonales';
import { Registro } from '../components/Registro/Registro';
import '../Style/variablesFijas.scss';
import 'react-toastify/dist/ReactToastify.css'

export const AppRouter = () => {
  
  const [usrLogged, setUserLogged] = useState(localStorage.getItem("token") != null);  
/*   useEffect(()=>{
    toast("fdfdf")
  }) */
  return (
        <BrowserRouter>
            
            <NavbarLM usrLogged={usrLogged} setUserLogged={setUserLogged} />
            <ToastContainer position='top-center'/>
            <Routes>
                <Route path="/receta/:recetaId" element={<DetalleReceta usrLogged={usrLogged}/>} />
                <Route path="/recetas" element={<Recetas />} />
                <Route path="/" element={<Navigate to="/recetas" />} />
                <Route path="/recetas/me" element={<MisRecetas />} />
                <Route path="/receta/carga/:recetaId" element={<FormReceta />} />
                <Route path="/receta/registro" element={<Registro/>}/>
                <Route path="/receta/carga/" element={<FormReceta />} />
                <Route path="/usuario" element={<DatosPersonales />}
                 />
            </Routes>
            
            <MiFooter></MiFooter>
        </BrowserRouter>
  )
}

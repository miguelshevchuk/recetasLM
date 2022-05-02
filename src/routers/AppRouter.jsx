
import {React, useState} from 'react'
import '../Style/variablesFijas.scss';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { NavbarLM } from '../components/layouts/NavbarLM';
import { DetalleReceta } from '../components/recetas/detalle/DetalleReceta';
import { MisRecetas } from '../components/recetas/misRecetas/MisRecetas';
import { Recetas } from '../components/recetas/Recetas';


export const AppRouter = () => {
  
  const [usrLogged, setUserLogged] = useState(localStorage.getItem("token") != null);  
  return (
        <BrowserRouter>
            
            <NavbarLM usrLogged={usrLogged} setUserLogged={setUserLogged} />
            <Routes>
                <Route path="/receta/:recetaId" element={<DetalleReceta />} />
                <Route path="/recetas" element={<Recetas />} />
                <Route path="/" element={<Navigate to="/recetas" />} />
                <Route path="/recetas/me" element={<MisRecetas />} />
            </Routes>
        </BrowserRouter>
  )
}

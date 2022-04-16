import {React,useState}  from 'react'
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
import { LoginTokens } from '../domain/model/auth';


export const AppRouter = () => {
  
  const [usrLogged, setUserLogged] = useState(localStorage.getItem("token") != 'undefined');  
  let login = () => {
    //localStorage.setItem('token', 'sadfasdfasdf')
    localStorage.setItem('tokenRefresh', 'sadfasdfasdf')
    localStorage.setItem('nombre', 'Miguel Shevchuk')
    localStorage.setItem('email', 'shevchuk.miguel@gmail.com')
    localStorage.setItem('usuarioId', 1)
  }
  

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

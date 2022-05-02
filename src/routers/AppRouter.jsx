import React from 'react'
import '../Style/variablesFijas.scss';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { NavbarLM } from '../components/layouts/NavbarLM';
import { DetalleReceta } from '../components/recetas/detalle/DetalleReceta';
import { Recetas } from '../components/recetas/Recetas';

export const AppRouter = () => {
  return (
        <BrowserRouter>
            <NavbarLM />
            <div className="container">
            <Routes>
                <Route path="/receta/:recetaId" element={<DetalleReceta />} />
                <Route path="/" element={<Recetas />} />
            </Routes>
            </div>
        </BrowserRouter>
  )
}

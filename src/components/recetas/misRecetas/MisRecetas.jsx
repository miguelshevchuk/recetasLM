import React from 'react'
import { Recetas } from '../Recetas'

export const MisRecetas = () => {
  
  return (
    <Recetas usuario={localStorage.getItem("usuarioId")} />
  )
}

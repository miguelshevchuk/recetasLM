import { recetas } from "./recetas"

export const getRecetaById = (recetaId) => {
    return recetas.find(receta => receta.id == recetaId)
}
import { getRecetasByFiltros, getRecetaDataById, saveOrUpdateReceta } from "../../../components/data/recetas/metodos"

export const getRecetas = (filtros) => {

    return getRecetasByFiltros(filtros);
    
}

export const getRecetaById = (id) => {
    return getRecetaDataById(id)
}

export const saveReceta = (receta) => {
    receta.usuario.id = localStorage.getItem("usuarioId")
    return saveOrUpdateReceta(receta)
}
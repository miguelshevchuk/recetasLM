import { getRecetasByFiltros, getRecetaDataById } from "../../../components/data/recetas/metodos"

export const getRecetas = (filtros) => {

    return getRecetasByFiltros(filtros);
    
}

export const getRecetaById = (id) => {
    return getRecetaDataById(id)
}
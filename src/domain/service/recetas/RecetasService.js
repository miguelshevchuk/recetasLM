import { getRecetasByFiltros } from "../../../components/data/recetas/metodos"

export const getRecetas = (filtros) => {

    return getRecetasByFiltros(filtros);
    
}
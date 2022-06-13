import recetaApi from "../../../api/RecetaAPI";
import { getRecetasByFiltros, getRecetaDataById, saveOrUpdateReceta, eliminarReceta, like, getAllRecetas } from "../../../components/data/recetas/metodos"

export const getRecetas = async () => {

    try {
        const {data} = await recetaApi.get('/recetas')
        return data    
    } catch (error) {
        console.log(error)
    }

  
}

export const getRecetaById = async (id) => {

    try {
        const data = await recetaApi.get(`/receta/${id}`)
        return data.data
    } catch (error) {
        console.log(error)
    }
    
}

export const saveReceta = (receta) => {
    receta.usuario.id = localStorage.getItem("usuarioId")
    return saveOrUpdateReceta(receta)
}

export const deleteReceta = (receta) => {
    return eliminarReceta(receta)
}

export const likeReceta = (id) => {
    like(id)
}
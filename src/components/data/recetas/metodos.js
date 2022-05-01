import { recetas } from "./recetas"

export const getRecetaDataById = (recetaId) => {
    return recetas.find(receta => receta.id == recetaId)
}

export const getRecetasByUsuario = (usuario) => {
    if(!usuario){
        return recetas
    }
    return recetas.filter(receta => receta.usuario == usuario)
}

export const getRecetasByFiltros = (filtros) => {
    let filtroUsuario = (receta) => {
        if(filtros.usuario){
            return receta.usuario == filtros.usuario
        }
        return true
    }

    let filtroDificultad = (receta) => {
        if(filtros.dificultad){
            return receta.dificultad == filtros.dificultad
        }
        return true
    }

    let filtroNombre = (receta) => {
        if(filtros.nombre){
            return receta.nombre.toLowerCase().includes(filtros.nombre.toLowerCase())
        }
        return true
    }

    let filtroTipo = (receta) => {
        if(filtros.tipo){
            return receta.tipo === filtros.tipo
        }
        return true
    }

    return recetas.filter(receta => filtroUsuario(receta) && filtroDificultad(receta) 
        && filtroNombre(receta) && filtroTipo(receta))
}
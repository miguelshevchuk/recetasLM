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

export const getAllRecetas = () => {
    
    return recetas
}

export const getRecetasByFiltros = (filtros) => {
    let filtroUsuario = (receta) => {
        if(filtros.usuario){
            return receta.usuario.id == filtros.usuario
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
            return receta.categoria.id == filtros.tipo
        }
        return true
    }

    return recetas.filter(receta => filtroUsuario(receta) && filtroDificultad(receta) 
        && filtroNombre(receta) && filtroTipo(receta))
}

export const saveOrUpdateReceta = (receta) => {
    receta.usuario.nombre = localStorage.getItem("nombre")
    receta.likes=0
    if(receta.id){
        //Modificacion pero no puedo con los arrays
        
    }else{
        receta.id = Math.max(...recetas.map(r => r.id))+1
        receta.imagen = "/assets/recetas/receta1.jpg"
        recetas.push(receta)
        
    }

    
}

export const eliminarReceta = (id) => {
    console.log("Eliminando receta "+id)
}

export const like = (id) => {
    recetas.map(r => {
        if(r.id == id){
            r.likes++
        }
    })
}
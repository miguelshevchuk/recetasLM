import {useState, useEffect} from 'react'
import recetaApi from "../api/RecetaAPI";

export const useRecetaStore = (recetaId) => {

    const [receta, setReceta] = useState();
    const [recetaExistente, setRecetaExistente] = useState(true);

    const reload = async () => {
        
        try {
            if(recetaId){
                const {data} = await recetaApi.get(`/receta/${recetaId}`)
                setReceta(data)
            }
        } catch (error) {
            setRecetaExistente(false)
        }
        
        
    }

    const createOrReplaceReceta = async (receta) => {
        try {
            if(receta.id){
                await recetaApi.put(`/receta`, receta)
            }else{
                await recetaApi.post(`/receta`, receta)
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    const calificarReceta = async (recetaId, calificacion) => {
        try {
            await recetaApi.post(`/calificacion`, {recetaId: recetaId, calificacion: calificacion})
        } catch (error) {
            console.log(error)
        }
    }

    useEffect( () => {
        reload();
    }, []);

    return [
        receta,
        recetaExistente,
        reload,
        calificarReceta
    ]

}
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

    const createReceta = async (receta) => {
        try {
            console.log(receta)
            await recetaApi.post(`/receta`, receta)
        } catch (error) {
            console.log(error)
        }
    }

    const removeReceta = () => {
        
    }

    const updateReceta = () => {
        
    }

    const calificarReceta = () => {
        
    }

    useEffect( () => {
        reload();
    }, []);

    return [
        receta,
        recetaExistente,
        reload,
        createReceta,
        removeReceta,
        updateReceta,
        calificarReceta
    ]

}
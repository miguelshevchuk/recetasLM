import {useState, useEffect} from 'react'
import recetaApi from "../api/RecetaAPI";
import { useParams, Navigate } from 'react-router-dom'

export const useRecetaStore = (recetaId) => {

    const [receta, setReceta] = useState();
    const [recetaExistente, setRecetaExistente] = useState(true);

    const reload = async () => {
        
        try {
            const {data} = await recetaApi.get(`/receta/${recetaId}`)
            setReceta(data)
        } catch (error) {
            setRecetaExistente(false)
        }
        
        
    }

    const createReceta = async (receta) => {
        try {
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
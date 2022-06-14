import {useState, useEffect} from 'react'
import recetaApi from "../api/RecetaAPI";

export const useDeleteRecetaStore = (recetaId) => {

    const [receta, setReceta] = useState(recetaId);

    const removeReceta = async () => {
        try {
            await recetaApi.delete(`/receta/${receta}`)
        } catch (error) {
            throw error
        }
    }

    return [
        receta,
        removeReceta
    ]

}
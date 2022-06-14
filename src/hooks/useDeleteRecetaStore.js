import {useState, useEffect} from 'react'
import recetaApi from "../api/RecetaAPI";

export const useDeleteRecetaStore = (recetaId) => {

    const [receta, setReceta] = useState(recetaId);

    const removeReceta = () => {
        try {
            //await recetaApi.delete(`/receta/${receta}`)
            throw new Error("Un error")
        } catch (error) {
            throw error
        }
    }

    return [
        receta,
        removeReceta
    ]

}
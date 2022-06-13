import { getRecetaBy, getRecetas } from "../domain/service/recetas/RecetasService"
import {useState, useEffect} from 'react'
import recetaApi from "../api/RecetaAPI";

export const useRecetasStore = () => {

    const [recetas, setRecetas] = useState([]);

    const reload = async () => {
        try {
            const {data} = await recetaApi.get('/recetas')
            setRecetas(data);      
        } catch (error) {
            console.log(error)
        }
          
    }

    useEffect( () => {
        reload();
    }, []);

    return [
        recetas,
        reload
    ]

}
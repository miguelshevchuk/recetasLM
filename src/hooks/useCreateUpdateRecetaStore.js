import {useState, useEffect} from 'react'
import recetaApi from "../api/RecetaAPI";
import { useForm } from './useForm';

export const useCreateUpdateRecetaStore = (recetaId, setIngredientes, setPreparacion) => {

    const [receta, setReceta] = useState();
    const [ formValues, handleInputChange, reset, changeValues] = useForm({
        nombreReceta: undefined,
        categoriaReceta: undefined,
        dificultadReceta: undefined,
        descripcionReceta: undefined,
        imagenReceta:undefined
    })

    const reload = async () => {
        
        try {
            if(recetaId){
                const {data} = await recetaApi.get(`/receta/${recetaId}`)
                setReceta(data)
                setIngredientes((data)?data.ingredientes:[])
                setPreparacion((data)?data.preparacion.map(paso=> paso.descripcion): [])   
                
                changeValues({
                    nombreReceta: (!data)?undefined: data.nombre,
                    categoriaReceta: (!data)?undefined: data.categoria.id,
                    dificultadReceta: (!data)?undefined: data.dificultad,
                    descripcionReceta: (!data)?undefined: data.descripcion,
                    imagenReceta:undefined
                  });
            }
        } catch (error) {
            console.log(error)
        }
        
        
    }

    const createOrReplaceReceta = async (newReceta) => {
        try {
            if(recetaId){
                await recetaApi.put(`/receta`, newReceta)
            }else{
                await recetaApi.post(`/receta`, newReceta)
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect( () => {
        reload()
    }, []);

    return [
        receta,
        createOrReplaceReceta,
        formValues, 
        handleInputChange
    ]

}
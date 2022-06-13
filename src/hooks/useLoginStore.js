import {useState, useEffect} from 'react'
import recetaApi from "../api/RecetaAPI";
import { useParams, Navigate } from 'react-router-dom'

export const useLoginStore = () => {

    const login = async (usuario, pass, setUserLogged) => {

        try {
            const {data} = await recetaApi.post(`/sesion`, {
                usuario: usuario,
                password: pass
            })

            console.log(data)

            localStorage.setItem('token', data.token)
            localStorage.setItem('tokenRefresh', data.refreshToken)
            localStorage.setItem('nombre', data.nombre)
            localStorage.setItem('email', data.email)
            localStorage.setItem('usuarioId', data.id)
            setUserLogged(true)
        } catch (error) {
            console.log(error)
            setUserLogged(false)
        }
        
        
    }

    return [
        login
    ]

}
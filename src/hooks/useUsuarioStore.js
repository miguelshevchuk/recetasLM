import {useState, useEffect} from 'react'
import recetaApi from "../api/RecetaAPI";

export const useUsuarioStore = () => {

    const [userLogueado, setUserLogueado] = useState()

    const login = async (usuario, pass, setUserLogged) => {

        try {
            const {data} = await recetaApi.post(`/sesion`, {
                usuario: usuario,
                password: pass
            })

            localStorage.setItem('token', data.jwt.token)
            localStorage.setItem('tokenRefresh', data.jwt.refreshToken)
            localStorage.setItem('nombre', data.usuario.nombre)
            localStorage.setItem('email', data.usuario.email)
            localStorage.setItem('usuarioId', data.usuario.id)
            setUserLogged(true)
            setUserLogueado(data.usuario)
        } catch (error) {
            console.log(error)
            setUserLogged(false)
        }
        
        
    }

    const logout = (setUserLogged) => {
        localStorage.removeItem("token")
        localStorage.removeItem('tokenRefresh')
        localStorage.removeItem('nombre')
        localStorage.removeItem('email')
        localStorage.removeItem('usuarioId')
        setUserLogged(false)
        setUserLogueado(undefined)
    }

    const getUsuarioLogueado = async () => {
        try {
            const {data} = await recetaApi.get(`/usuario`)
            setUserLogueado(data)
        } catch (error) {
            console.log(error)
        }
    }

    const registrarUsuario = async (email, password, nombreYApellido) => {
        try {
            await recetaApi.post(`/usuario`, {email: email, password: password, nombreApellido: nombreYApellido})
        } catch (error) {
            console.log(error)
        }
    }

    useEffect( () => {
        getUsuarioLogueado();
    }, []);

    return [
        userLogueado,
        login,
        logout,
        registrarUsuario
    ]

}
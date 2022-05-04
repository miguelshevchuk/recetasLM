import { changePass, getUsuarioBy, validarUsuario } from "../../../components/data/usuarios/metodosUsuario"

export const login = (usuario, pass, setUserLogged) => {

    let usuarioValidado = validarUsuario(usuario, pass)

    localStorage.setItem('token', 'sadfasdfasdf')
    localStorage.setItem('tokenRefresh', 'sadfasdfasdf')
    localStorage.setItem('nombre', usuarioValidado.nombre)
    localStorage.setItem('email', usuarioValidado.email)
    localStorage.setItem('usuarioId', usuarioValidado.id)
    setUserLogged(true)
}

export const logout = (setUserLogged) => {
    localStorage.removeItem("token")
    localStorage.removeItem('tokenRefresh')
    localStorage.removeItem('nombre')
    localStorage.removeItem('email')
    localStorage.removeItem('usuarioId')
    setUserLogged(false)
}

export const cambiarPass = (oldPass, newPass) => {
    changePass(localStorage.getItem("usuarioId"), oldPass, newPass);
}

export const getUsuarioLogueado = () => {
    return getUsuarioBy(localStorage.getItem("usuarioId"));
}
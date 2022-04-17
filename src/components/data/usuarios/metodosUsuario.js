import {usuarios} from './usuarios'

export const validarUsuario = (email, pass) => {
    let usuario = usuarios.find( usuario => usuario.email === email)

    if(!usuario || usuario.pass != pass){
        throw new Error("Los datos ingresados sin incorrectos")
    }

    return usuario

}
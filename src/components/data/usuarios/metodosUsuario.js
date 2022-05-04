import {usuarios} from './usuarios'

export const validarUsuario = (email, pass) => {
    let usuario = usuarios.find( usuario => usuario.email === email)

    if(!usuario || usuario.pass != pass){
        throw new Error("Los datos ingresados sin incorrectos")
    }

    return usuario

}

export const changePass = (usuarioId, oldPass, newPass) => {
    let usuario = usuarios.find( u => u.id == usuarioId)

    if(usuario.pass != oldPass){
        
        throw new Error("Los datos ingresados sin incorrectos")
    }
    
    usuario.pass = newPass

}

export const getUsuarioBy = (id) => {
    return usuarios.find( usuario => usuario.id == id)

}
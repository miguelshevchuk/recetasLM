export class Receta {
    id;
    nombre;
    descripcion;
    ingredientes;
    preparacion;
    imagen;
    usuario;
    categoria;
    dificultad;

    esRecetaPropia = (usuarioConsulta) => {
        return usuarioConsulta == this.usuario
    }

    constructor(){
        this.usuario = new Usuario()
    }

}

class Usuario{
    id;
    nombre;
}
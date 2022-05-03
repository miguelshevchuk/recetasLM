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
        this.categoria = new Categoria()
        this.usuario = new Usuario()
    }

}

class Categoria{
    descripcion;
    id;
}

class Usuario{
    id;
    nombre;
}
export class Receta {
    id;
    nombre;
    descripcion;
    ingredientes;
    preparacion;
    imagen;
    usuario;

    esRecetaPropia = (usuarioConsulta) => {
        return usuarioConsulta == this.usuario
    }
}
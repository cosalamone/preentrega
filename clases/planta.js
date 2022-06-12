export class Planta {
    constructor(producto) {
        this.numeroProducto = producto.numeroProducto;
        this.categoria = producto.categoria;
        this.especie = producto.especie;
        this.tipo = producto.tipo;
        this.precio = producto.precio;
        this.foto = producto.foto;
        this.descripcion = producto.descripcion;
    }


    titulo() {
        return (this.especie + " " + this.tipo)
    }
}


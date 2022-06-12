export class Maceta {
    constructor(producto) {
        this.numeroProducto = producto.numeroProducto;
        this.categoria = producto.categoria;
        this.material = producto.material;
        this.color = producto.color;
        this.tamaño = producto.tamaño;
        this.foto = producto.foto;
        this.precio = producto.precio;
        this.descripcion = producto.descripcion;
    }
    titulo() {
        return (this.categoria + " de " + this.material + " " + this.color + " n" + this.tamaño)
    }
}
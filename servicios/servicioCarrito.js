import { ItemCarrito } from "../clases/itemCarrito.js";
import { ServicioProductos } from "./servicioProductos.js";

let servicioProductos = new ServicioProductos();




export class ServicioCarrito {
    constructor() { }

    canasto = [];

    agregarProducto(numeroProducto) {
        

        let productoPorAgregarAlCarrito = servicioProductos.traerProductos().find(producto => producto.numeroProducto == numeroProducto);

        let findProductoEnCanasto = this.canasto.find(item => numeroProducto == item.MacetaOPlanta.numeroProducto);

        let cantidadPorAgregar = Number(this.cantidadProductosAlCarrito(productoPorAgregarAlCarrito))

        if (findProductoEnCanasto !== undefined) { //Si ya estaba agregado al canasto
            findProductoEnCanasto.cantidad = cantidadPorAgregar

        } else {
            this.canasto.push(new ItemCarrito(productoPorAgregarAlCarrito, cantidadPorAgregar))
        }
    };

    // funcion para cantidad de productos CARRITO 
    cantidadProductosAlCarrito(producto) {
        let cantidadProductosAAgregar = 0;
        let ubicacionCantidadProductosAAgregar = document.getElementById(`${producto.numeroProducto}`)
        cantidadProductosAAgregar = (ubicacionCantidadProductosAAgregar.value)
        return cantidadProductosAAgregar;
    }


}

import { Planta } from "../clases/planta.js";
import { Maceta } from "../clases/maceta.js";

export class ServicioStorage {
    constructor() { }
    almacenarProductos(canasto) {
        let jString = JSON.stringify(canasto);
        localStorage.setItem("carrito", jString);
    }

    recuperarProductosAlmacenadosAsync() {
        return new Promise((resolve, reject) => {

            const almacenados = JSON.parse(window.localStorage.getItem("carrito")) || [];
            let productosRecuperados = [];
            if (almacenados != null) {

                for (const productoGuardado of almacenados) {
                    let esPlanta = (productoGuardado.MacetaOPlanta.categoria == "planta");

                    let item = new ItemCarrito(
                        esPlanta ? new Planta(productoGuardado.MacetaOPlanta) : new Maceta(productoGuardado.MacetaOPlanta),
                        productoGuardado.cantidad);

                    productosRecuperados.push(item);
                }
                resolve(productosRecuperados);
            } else {
                let storageVacio = "No hay productos guardados en el carrito de compras";
                reject(storageVacio);
            }
        });
    }
}



import { Maceta } from "../clases/maceta.js";
import { Planta } from "../clases/planta.js";
import { ServicioGSheets } from "./servicioGSheets.js";

let servicioGSheets = new ServicioGSheets();


export class ServicioProductos {
    constructor() { }

    async obtenerProductosBD() {

        let BD = await servicioGSheets.importarBD();
        let listaProductos = [];
        for (const productoGuardado of BD) {
            let esPlanta = (productoGuardado.categoria == 'plantas');

            let item = esPlanta ? new Planta(productoGuardado) : new Maceta(productoGuardado);

            listaProductos.push(item);
        }
        return listaProductos
    };
}


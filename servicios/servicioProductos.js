import { Maceta } from "../clases/maceta.js";
import { Planta } from "../clases/planta.js";

let listaProductos = [
    new Planta({ numeroProducto: 1, categoria: "planta", especie: "haworthia", tipo: "fasciata", precio: 200, foto: "./fotos/rsz_haworthia_fasciata.jpg", descripcion: "¡Suculenta ideal para interior! Ideal para lugares iluminados sin sol directo." }),
    new Planta({ numeroProducto: 2, categoria: "planta", especie: "graptopetalum", tipo: "paraguayense", precio: 150, foto: "./fotos/rsz_suculentas-1.jpg", descripcion: "Ideal para lugares con sol directo entre 3 y 6 horas. En verano protegerla de las horas mpas fuertes de sol." }),
    new Planta({ numeroProducto: 3, categoria: "planta", especie: "echeveria", tipo: "caly argentea", precio: 250, foto: "./fotos/rsz_echeveriacalyargentea.jpg", descripcion: "Por su pruina aguanta bien las horas de sol. Hay que tener cuidado con no excederse con el riego, es propensa a pudrición de tallo" }),
    new Planta({ numeroProducto: 4, categoria: "planta", especie: "gasteria", tipo: "normal", precio: 250, foto: "./fotos/rsz_1suculenta-4.jpg", descripcion: "Necesitan cuidados similares a las haworthias, lugares con luz natural pero sin sol directo" }),
    new Planta({ numeroProducto: 5, categoria: "planta", especie: "sedum", tipo: "burrito", precio: 250, foto: "./fotos/rsz_sedumburrito.jpg", descripcion: "Hermosa suculenta colgante. Ideal para lugares iluminados con pocas horas de sol, preferentemente sol suave de la mañana o últimos de la tarde" }),
    new Planta({ numeroProducto: 6, categoria: "planta", especie: "calathea", tipo: "triostar", precio: 350, foto: "./fotos/rsz_calatheas.jpg", descripcion: "Ideal para lugares iluminados sin sol directo" }),
    new Planta({ numeroProducto: 7, categoria: "planta", especie: "pothus", tipo: "variegado", precio: 500, foto: "./fotos/rsz_pothos.jpg", descripcion: "Planta de interior, sin sol directo, ideal para lugares humedos como el baño" }),
    new Planta({ numeroProducto: 8, categoria: "planta", especie: "monstera deliciosa", tipo: "normal", precio: 1200, foto: "./fotos/rsz_monstera.jpg", descripcion: "Ideal para lugares con mediasombra, como debajo de un arbol o lugar semitechado" }),
    new Maceta({ numeroProducto: 9, categoria: "maceta", material: "plastico", color: "negra", tamaño: 8, foto: "./fotos/rsz_maceta-plastico-8-negra.jpg", precio: 50, descripcion: "Maceta de plastico de color negra. Tamaño numero 8" }),
    new Maceta({ numeroProducto: 10, categoria: "maceta", material: "plastico", color: "negra", tamaño: 12, foto: "./fotos/rsz_maceta-plastico-negra-12.jpg", precio: 70, descripcion: "Maceta de plastico de color negra. Tamaño numero 12" }),
    new Maceta({ numeroProducto: 11, categoria: "maceta", material: "plastico", color: "negra", tamaño: 24, foto: "./fotos/rsz_maceta-plastico-24-negra.jpg", precio: 140, descripcion: "Maceta de plastico de color negra. Tamaño numero 24" }),
    new Maceta({ numeroProducto: 12, categoria: "maceta", material: "plastico", color: "blanco", tamaño: 8, foto: "./fotos/rsz_maceta-plastico-blanca-8.jpg", precio: 50, descripcion: "Maceta de plastico de color blanco. Tamaño numero 8" }),
    new Maceta({ numeroProducto: 13, categoria: "maceta", material: "plastico", color: "blanco", tamaño: 12, foto: "./fotos/rsz_maceta-plastico-12.jpg", precio: 70, descripcion: "Maceta de plastico de color blanco. Tamaño numero 12" }),
    new Maceta({ numeroProducto: 14, categoria: "maceta", material: "plastico", color: "blanco", tamaño: 24, foto: "./fotos/rsz_maceta-plastico-blanca-24.jpg", precio: 140, descripcion: "Maceta de plastico de color blanco. Tamaño numero 24" }),
    new Maceta({ numeroProducto: 15, categoria: "maceta", material: "barro", color: "terracota", tamaño: 8, foto: "./fotos/rsz_maceta-barro-8.jpg", precio: 90, descripcion: "Maceta de barro. Tamaño numero 8" }),
    new Maceta({ numeroProducto: 16, categoria: "maceta", material: "barro", color: "terracota", tamaño: 12, foto: "./fotos/rsz_maceta-barro-12.jpg", precio: 120, descripcion: "Maceta de barro. Tamaño numero 12" }),
    new Maceta({ numeroProducto: 17, categoria: "maceta", material: "barro", color: "terracota", tamaño: 24, foto: "./fotos/rsz_maceta-barro-24.jpg", precio: 200, descripcion: "Maceta de barro. Tamaño numero 24" }),
]

export  class ServicioProductos {
    constructor () {}

    traerProductos(){
        return listaProductos;
    }
}


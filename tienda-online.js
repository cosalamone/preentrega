// CLASES PLANTAS Y MACETASif
class Planta {
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


class Maceta {
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


// ARRAY DE PRODUCTOS 
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


let html = "";
let canasto = [];
let envio = 349;


window.onload = mostrarProductos(listaProductos);
window.onload = recuperarProductosAlmacenados();


// FUNCION MOSTRARPRODUCTOS en tienda
function mostrarProductos(listaProductos) {
    let elementoArticulos = document.getElementById("articulos");
    elementoArticulos.innerHTML = "";

    for (let i = 0; i < listaProductos.length; i++) {
        elementoArticulos.innerHTML += generarHTML(listaProductos[i]);
    }
}


// FUNCION GENERARHTML para la tienda 
function generarHTML(producto) {
    html =
        `<div class="col">
    <div class="card animate__animated animate__fadeIn">
    <div title= "${producto.titulo()}" class="cover cover-small"
    style="background-image: url(${producto.foto})";>
    </div>
    
    <div class="card-body">
    <h5 class="card-title">${producto.titulo()}</h5>
    <p class="card-text">${producto.descripcion}</p>
    <p hidden> ${producto.numeroProducto} </p>
    <div>
    <span class="precio badge bg-dark">$${producto.precio}</span>
    <a class="nav-link" href="#!" onclick= agregarProducto(${producto.numeroProducto})><i class="iCarrito bi bi-cart-plus"></i></a></div>

    </div>
    </div>
    </div> `

    return (html);
}


// FUNCION FILTER LISTAPRODUCTOS en tienda
function filtro(categoria) {
    let listaFiltrada = [];

    listaFiltrada = listaProductos.filter(unProducto => unProducto.categoria == categoria);
    mostrarProductos(listaFiltrada);
}


// ICONOCARRITO - NAVBAR
let botonCarrito = document.getElementById("iconoCarrito");
botonCarrito.onclick = () => hideShowProductos();


let total = 0;
let productoAgregado = {};

// funcion agregar productos a carrito - CARRITO 
function agregarProducto(numeroProducto) {
    productoAgregado = listaProductos.find(producto => producto.numeroProducto == numeroProducto)
    canasto.push(productoAgregado);
    mostrarProductosCarrito(canasto);
    mostrarSubtotalEnvio();
}


// funcion mostrar subtotal y costo de envio - CARRITO 
function mostrarSubtotalEnvio() {
    let elementoContendorSubtotalEnvio = document.getElementById("subtotalEnvio");
    elementoContendorSubtotalEnvio.innerHTML = ` <li class="list-group-item">
    <div class="card-carrito">
    <p> Costo de envío: $${envio}</p>
        <h5 class="card-title">Total con envío: $${total + envio}</h5> 
    </div>
    </li>`
}

function costoCarrito(canasto) {
    total = 0;
    for (let i = 0; i < canasto.length; i++) {
        total += canasto[i].precio;
    }
    return (total);
}


// Funcion mostrarProductosCarrito - CARRITO 
function mostrarProductosCarrito(canasto) {
    let elementoContenedorCarrito = document.getElementById("contenedorCarrito");
    elementoContenedorCarrito.innerHTML = "";
    for (let i = 0; i < canasto.length; i++) {
        elementoContenedorCarrito.innerHTML += generarCardHTMLCarrito(canasto[i]);
    }
    costoCarrito(canasto);
    showCarrito();
    almacenarProductos();
}

// ALMACENAR productos del carrito - STORAGE
function almacenarProductos() {
    let jString = JSON.stringify(canasto);
    localStorage.setItem("carrito", jString);
}

// RECUPERAR productos del carrito - STORAGE
function recuperarProductosAlmacenados() {

    const almacenados = JSON.parse(window.localStorage.getItem("carrito"));
    productos = [];

    if (almacenados != null) {
        for (const productoGuardado of almacenados) {
            let esPlanta = (productoGuardado.categoria == "planta");
            productos.push(esPlanta ? new Planta(productoGuardado) : new Maceta(productoGuardado));
        }
    }
    canasto = productos;
}

// Generar HTMLCarrito ()
function generarCardHTMLCarrito(producto) {
    htmlCarrito = ` 
    <li class="list-group-item animate__animated animate__fadeIn">
    <div class="card-carrito">
    <h5 class="card-title">${producto.titulo()}</h5>
    <p hidden> ${producto.numeroProducto} </p>
    <div>
    <span class="precio badge bg-dark">$${producto.precio}</span> 
    <a onClick = eliminarProductoCarrito () > <i class="iTrash bi bi-trash3"></i></a>
    </div>
    </div>
    </li>`
    return (htmlCarrito);
}

const elementoCarrito = document.getElementById("popUpCarrito");

// funciones para mostrar y ocultar productos
function hideShowProductos() {
    if (elementoCarrito.style.display == "block") {
        elementoCarrito.style.display = "none";
    }

    else {
        elementoCarrito.style.display = "block"
        mostrarSubtotalEnvio();
        mostrarProductosCarrito(canasto);
    }


}


function showCarrito() {
    elementoCarrito.style.display = "block";
}

/*

function eliminarProductoCarrito (){

}
*/
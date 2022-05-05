// CLASES PLANTAS Y MACETAS
class Planta {
    constructor(numeroProducto, categoria, especie, tipo, precio, foto, descripcion,) {
        this.numeroProducto = numeroProducto;
        this.categoria = categoria;
        this.especie = especie;
        this.tipo = tipo;
        this.precio = precio;
        this.foto = foto;
        this.descripcion = descripcion;
    }
    titulo() {
        return (this.especie + " " + this.tipo)
    }
}


class Maceta {
    constructor(numeroProducto, categoria, material, color, tamaño, foto, precio, descripcion) {
        this.numeroProducto = numeroProducto;
        this.categoria = categoria;
        this.material = material;
        this.color = color;
        this.tamaño = tamaño;
        this.foto = foto;
        this.precio = precio;
        this.descripcion = descripcion;
    }
    titulo() {
        return (this.categoria + " de " + this.material + " " + this.color + " n" + this.tamaño)
    }
}


// ARRAY DE PRODUCTOS 
let listaProductos = [
    new Planta(1, "planta", "haworthia", "fasciata", 200, "./fotos/rsz_haworthia_fasciata.jpg", "¡Suculenta ideal para interior! Ideal para lugares iluminados sin sol directo."),
    new Planta(2, "planta", "graptopetalum", "paraguayense", 150, "./fotos/rsz_suculentas-1.jpg", "Ideal para lugares con sol directo entre 3 y 6 horas. En verano protegerla de las horas mpas fuertes de sol."),
    new Planta(3, "planta", "echeveria", "caly argentea", 250, "./fotos/rsz_echeveriacalyargentea.jpg", "Por su pruina aguanta bien las horas de sol. Hay que tener cuidado con no excederse con el riego, es propensa a pudrición de tallo"),
    new Planta(4, "planta", "gasteria", "normal", 250, "./fotos/rsz_1suculenta-4.jpg", "Necesitan cuidados similares a las haworthias, lugares con luz natural pero sin sol directo"),
    new Planta(5, "planta", "sedum", "burrito", 250, "./fotos/rsz_sedumburrito.jpg", "Hermosa suculenta colgante. Ideal para lugares iluminados con pocas horas de sol, preferentemente sol suave de la mañana o últimos de la tarde"),
    new Planta(6, "planta", "calathea", "triostar", 350, "./fotos/rsz_calatheas.jpg", "Ideal para lugares iluminados sin sol directo"),
    new Planta(7, "planta", "pothus", "variegado", 500, "./fotos/rsz_pothos.jpg", "Planta de interior, sin sol directo, ideal para lugares humedos como el baño"),
    new Planta(8, "planta", "monstera deliciosa", "normal", 1200, "./fotos/rsz_monstera.jpg", "Ideal para lugares con mediasombra, como debajo de un arbol o lugar semitechado"),
    new Maceta(9, "maceta", "plastico", "negra", 8, "./fotos/rsz_maceta-plastico-8-negra.jpg", 50, "Maceta de plastico de color negra. Tamaño numero 8"),
    new Maceta(10, "maceta", "plastico", "negra", 12, "./fotos/rsz_maceta-plastico-negra-12.jpg", 70, "Maceta de plastico de color negra. Tamaño numero 12"),
    new Maceta(11, "maceta", "plastico", "negra", 24, "./fotos/rsz_maceta-plastico-24-negra.jpg", 140, "Maceta de plastico de color negra. Tamaño numero 24"),
    new Maceta(12, "maceta", "plastico", "blanco", 8, "./fotos/rsz_maceta-plastico-blanca-8.jpg", 50, "Maceta de plastico de color blanco. Tamaño numero 8"),
    new Maceta(13, "maceta", "plastico", "blanco", 12, "./fotos/rsz_maceta-plastico-12.jpg", 70, "Maceta de plastico de color blanco. Tamaño numero 12"),
    new Maceta(14, "maceta", "plastico", "blanco", 24, "./fotos/rsz_maceta-plastico-blanca-24.jpg", 140, "Maceta de plastico de color blanco. Tamaño numero 24"),
    new Maceta(15, "maceta", "barro", "terracota", 8, "./fotos/rsz_maceta-barro-8.jpg", 90, "Maceta de barro. Tamaño numero 8"),
    new Maceta(16, "maceta", "barro", "terracota", 12, "./fotos/rsz_maceta-barro-12.jpg", 120, "Maceta de barro. Tamaño numero 12"),
    new Maceta(17, "maceta", "barro", "terracota", 24, "./fotos/rsz_maceta-barro-24.jpg", 200, "Maceta de barro. Tamaño numero 24"),
]


let html = "";
let canasto = [];
let envio = 349;


window.onload = mostrarProductos(listaProductos);


// FUNCION MOSTRARPRODUCTOS en tienda
function mostrarProductos(listaProductos) {
    let elementoArticulos = document.getElementById("articulos");
    elementoArticulos.innerHTML = "";

    for (let i = 0; i < listaProductos.length; i++) {
        elementoArticulos.innerHTML += generarHTML(listaProductos[i])
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
    <a class="nav-link" href="#!" onclick= agregarProducto(${producto.numeroProducto})  ><i class="iCarrito bi bi-bag-plus"></i></a></div>

    </div>
    </div>
    </div> `

    return (html)
}


// FUNCION FILTER LISTAPRODUCTOS en tienda
function filtro(categoria) {
    let listaFiltrada = []

    listaFiltrada = listaProductos.filter(unProducto => unProducto.categoria == categoria);
    mostrarProductos(listaFiltrada)
}


/*
// FUNCION CARRITOCOMPRA
function carritoCompra() {
    let compra = lista();

    calcularCosto(compra);
}


// funcion accesoria 1 - obtener la lista de compra 
function lista() {
    let compra = [];
    let promptIngresado = "";

    do {
        promptIngresado = prompt("¿Qué plantas querés comprar? Al finalizar su carrito escriba 'fin'").toLowerCase();

        if (promptIngresado != "fin")
            compra.push(promptIngresado);

    } while (promptIngresado != "fin")

    return (compra);
}



// funcion accesoria 2 - calcular costo de lista de compra 
function calcularCosto(compra) {

    let costo = 0;
    let sinStock = [];

    for (let i = 0; i < compra.length; i++) {
        let precio = precioProducto(compra[i]);

        if (precio != null) {
            costo = costo + precio;
        } else {
            sinStock.push(compra[i]);
        }
    }

    if (sinStock.length > 0) {
        alert("El/los producto/s " + sinStock + " no se agregaron al carrito de compras porque no contamos con stock");
    }
    if (costo > 0) {
        alert(`El valor total de tu compra incluyendo el costo de envío de $${envio} es de $${costo + envio}`);
    }
}


// funcion 3 - calcular Precio del Producto
function precioProducto(nombreProducto) {

    for (let i = 0; i < listaProductos.length; i++) {
        if (nombreProducto == listaProductos[i].titulo()) {
            return (listaProductos[i].precio);
        }
    }

    return (null);
}
*/



// ICONOCARRITO
let botonCarrito = document.getElementById("iconoCarrito")
botonCarrito.onclick = () => mostrarProductosCarrito(canasto)


let total = 0;


// funcion agregar productos a carrito
function agregarProducto(numeroProducto) {
    let productoAgregado = listaProductos.find(producto => producto.numeroProducto == numeroProducto)
    canasto.push(productoAgregado)
    mostrarProductosCarrito(canasto)
    mostrarSubtotalEnvio()
}


// funcion mostrar subtotal y costo de envio
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
    total = 0
    for (let i = 0; i < canasto.length; i++) {
        total += canasto[i].precio
    }
    return (total)
}


// Funcion mostrarPtoductosCarrito
function mostrarProductosCarrito(canasto) {
    let elementoContenedorCarrito = document.getElementById("contenedorCarrito");
    elementoContenedorCarrito.innerHTML = ""
    for (let i = 0; i < canasto.length; i++) {
        elementoContenedorCarrito.innerHTML += generarCardHTMLCarrito(canasto[i])
    }
    costoCarrito(canasto)
}


// Generar HTMLCarrito ()
function generarCardHTMLCarrito(producto) {
    htmlCarrito = ` 
    <li class="list-group-item">
    <div class="card-carrito">
    <h5 class="card-title">${producto.titulo()}</h5>
    <p hidden> ${producto.numeroProducto} </p>
    <div>
    <span class="precio badge bg-dark">$${producto.precio}</span>
    </div>
    </div>
    </li>`
    return (htmlCarrito)
}

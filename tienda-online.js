import { ServicioProductos } from "./servicios/servicioProductos.js";
import { ItemCarrito } from "./clases/itemCarrito.js";
import { ServicioMercadoPago } from "./servicios/servicioMercadoPago.js";
import { ServicioStorage } from "./servicios/servicioStorage.js";

let listaProductos = new ServicioProductos().traerProductos();
let itemCarrito = new ItemCarrito();
let servicioMercadoPago = new ServicioMercadoPago();
let servicioStorage = new ServicioStorage();


let html = "";
let canasto = [];
let envio = 349;


window.onload = function () {
    //ESTO SE HACE EN EL ONLOAD, CUANDO SE CARGUA LA PAGINA REVISA SI ES UN REENVIO DESDE MP -

    let searchParams = new URLSearchParams(window.location.search)
    searchParams.has('status') // true
    let param = searchParams.get('status')

    if (param != null && param != undefined) {

        if (param == 'approved') {
            Swal.fire({
                title: 'Compra realizada!',
                text: 'Su compra se realizó con éxito. En los proximos 2 días hábiles podrá retirar su producto en Av. Siempreviva 742',
                icon: 'success',
                confirmButtonText: 'Regresar a Sucu.home'
            })
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Hubo un error al momento del pago y no pudo registrarse su compra',
                icon: 'error',
                confirmButtonText: 'Regresar a Sucu.home'
            })
        }
    }

    mostrarProductos(listaProductos);
    servicioStorage.recuperarProductosAlmacenadosAsync().then(productosResult => canasto = productosResult);


    // counter de productos para el CARRITO
    let botonesDisminuirCantidad = document.getElementsByName("disminuirCantidad");
    let botonesAumentarCantidad = document.getElementsByName("aumentarCantidad");

    botonesDisminuirCantidad.forEach(elementoBoton =>
        elementoBoton.onclick = (event) => {
            var input = event.target.nextElementSibling;
            var value = parseInt(input.value, 10);
            if (value > 1) {
                value = isNaN(value) ? 0 : value;
                value--;
                input.value = value;
            }
        }
    );


    botonesAumentarCantidad.forEach(elementoBoton =>
        elementoBoton.onclick = (event) => {
            var input = event.target.previousElementSibling;
            var value = parseInt(input.value, 10);
            value = isNaN(value) ? 0 : value;
            value++;
            input.value = value;
        }
    );


    let botonesAddProducto = document.getElementsByName("botonAddProducto");

    botonesAddProducto.forEach(elementoBoton =>
        elementoBoton.onclick = (evento) => {
            let botonQueHicieronClick = evento.target;
            let numeroProducto = Number(botonQueHicieronClick.previousElementSibling.innerText);
            alert(numeroProducto);
        });
}


// FUNCION MOSTRARPRODUCTOS en tienda
function mostrarProductos(listaProductos) {
    let elementoArticulos = document.getElementById("articulos");
    elementoArticulos.innerHTML = "";

    for (let i = 0; i < listaProductos?.length; i++) {
        elementoArticulos.innerHTML += generarHTML(listaProductos[i]);
    }
}


// FUNCION GENERARHTML para la tienda 
function generarHTML(producto) {
    html = ` 
    <div class="col">
        <div class="card animate__animated animate__fadeIn">
            <div title="${producto?.titulo() || " [Producto inexistente]"}" class="cover cover-small"
                style="background-image: url(${producto?.foto})" ;>
            </div>

            <div class="card-body">
                <h5 class="card-title">${producto?.titulo() || "[Producto inexistente]"}</h5>
                <p class="card-text">${producto?.descripcion}</p>
                
                
                <div>
                    <div class="precio badge bg-dark">$${producto?.precio}</div>
                    <a class="nav-link" href="#!" name="botonAddProducto">
                        <p id="numeroProducto" hidden> ${producto?.numeroProducto} </p>
                        <i class="iCarrito bi bi-cart-plus"></i>
                    </a>
                </div>

                <div class="counter">
                    <span class="down" name= "disminuirCantidad">-</span>
                    <input type="text" disabled id="${producto?.numeroProducto}" value="1">
                    <span class="up" name= "aumentarCantidad">+</span>
                </div>
            </div>
        </div>
    </div>`

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




// funcion para cantidad de productos CARRITO 
let cantidadProductosAAgregar = 0

function cantidadProductosAlCarrito(producto) {
    let ubicacionCantidadProductosAAgregar = document.getElementById(`${producto.numeroProducto}`)
    cantidadProductosAAgregar = (ubicacionCantidadProductosAAgregar.value)
    return cantidadProductosAAgregar;
}

let total = 0;


// funcion agregar productos a carrito - CARRITO 
function agregarProducto(numeroProducto) {

    let productoPorAgregarAlCarrito = listaProductos.find(producto => producto.numeroProducto == numeroProducto);

    let findProductoEnCanasto = canasto.find(item => numeroProducto == item.MacetaOPlanta.numeroProducto);

    let cantidadPorAgregar = cantidadProductosAlCarrito(productoPorAgregarAlCarrito)

    if (findProductoEnCanasto !== undefined) { //Si ya estaba agregado al canasto
        findProductoEnCanasto.cantidad = cantidadPorAgregar

    } else {
        canasto.push(new ItemCarrito(productoPorAgregarAlCarrito, cantidadPorAgregar))
    }

    mostrarProductosCarrito(canasto);
    mostrarSubtotalEnvio();
}


// Funcion mostrarProductosCarrito - CARRITO 
function mostrarProductosCarrito() {
    let elementoContenedorCarrito = document.getElementById("contenedorCarrito");
    elementoContenedorCarrito.innerHTML = "";
    for (let i = 0; i < canasto.length; i++) {
        elementoContenedorCarrito.innerHTML += generarCardHTMLCarrito(canasto[i]);
    }
    costoCarrito(canasto);
    showCarrito();
    servicioStorage.almacenarProductos(canasto);
}


// Generar HTMLCarrito ()
function generarCardHTMLCarrito(itemCarrito) {
    let htmlCarrito = ` 
    <li class="list-group-item animate__animated animate__fadeIn">
    <div class="card-carrito">
    <h5 class="card-title">${itemCarrito.MacetaOPlanta.titulo() || "[Producto inexistente]"}</h5>
    <p> Cantidad: ${itemCarrito.cantidad} </p>
    <p hidden> ${itemCarrito.MacetaOPlanta.numeroProducto} </p>
    <div>
    <span class="precio badge bg-dark">$${(itemCarrito?.MacetaOPlanta.precio * itemCarrito.cantidad)}</span>  
    <a href="#!" onclick= "eliminarProductoCarrito(${itemCarrito.MacetaOPlanta.numeroProducto})"> <i class="iTrash bi bi-trash3"></i></a>
    </div>
    </div>
    </li>`
    return (htmlCarrito);
}


// funcion mostrar subtotal y costo de envio - CARRITO 
let elementoContendorSubtotalEnvio = document.getElementById("subtotalEnvio");
function mostrarSubtotalEnvio() {

    elementoContendorSubtotalEnvio.innerHTML = ` <li class="list-group-item">
    <div class="card-carrito">
    <p> Costo de envío: $${envio}</p>
    <h5 class="card-title">Total con envío: $${total + envio}</h5> 
    <button onclick="pagarClick(canasto)" class="choi-container">Pagá</button>
    </div>
    </li>`

}

function pagarClick(canasto) {
    pagarConMercadoPago(canasto);
}

function costoCarrito(canasto) {
    total = 0;
    for (let i = 0; i < canasto.length; i++) {
        total += (canasto[i].MacetaOPlanta.precio * canasto[i].cantidad);
    }
    return (total);

}

// funciones para mostrar y ocultar productos
const elementoCarrito = document.getElementById("popUpCarrito");

function hideShowProductos() {

    if (elementoCarrito.style.display == "block") {
        elementoCarrito.style.display = "none";
    }
    else {
        elementoCarrito.style.display = "block";

        mostrarProductosCarrito();
        mostrarSubtotalEnvio();
    }
}


function showCarrito() {
    elementoCarrito.style.display = "block";
}


// ELIMINAR productos de CANASTO
let posicionAEliminar = 0;

function eliminarProductoCarrito(numeroProducto) {
    posicionAEliminar = canasto.findIndex(producto => producto.numeroProducto == numeroProducto);
    canasto.splice(posicionAEliminar, 1);
    mostrarProductosCarrito(canasto);
    costoCarrito(canasto);
    mostrarSubtotalEnvio();
    showCarrito();
    if (canasto = []) { vaciarCarritoCompra() }
}

// Vaciar Carrito de compra
function vaciarCarritoCompra() {
    canasto = [];

    elementoContendorSubtotalEnvio.innerHTML = ` <li class="list-group-item">
    <div class="card-carrito">
    <p id="sinProductos" > No hay productos agregados</p>
         
    </div>
    </li>`
    mostrarProductosCarrito(canasto);
}

// MERCADOPAGO
const mp = new MercadoPago('TEST-14b726e0-811d-4ca1-ae2d-a2abd12469e8', {
    locale: 'es-AR',
    advancedFraudPrevention: true,
})

const checkout = mp.checkout({
    preference: {
        id: '3790521406371018'
    },
});




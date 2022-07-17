import { ServicioProductos } from "./servicios/servicioProductos.js";
import { ServicioMercadoPago } from "./servicios/servicioMercadoPago.js";
import { ServicioStorage } from "./servicios/servicioStorage.js";
import { ServicioCarrito } from "./servicios/servicioCarrito.js";



let servicioMercadoPago = new ServicioMercadoPago();
let servicioStorage = new ServicioStorage();
let servicioCarrito = new ServicioCarrito();
let servicioProductos = new ServicioProductos();


let html = "";
let envio = 349;
let elementoCarrito;
let elementoContendorSubtotalVacio;

window.onload = async function () {
    //ESTO SE HACE EN EL ONLOAD, CUANDO SE CARGUA LA PAGINA REVISA SI ES UN REENVIO DESDE MP ;
    let searchParams = new URLSearchParams(window.location.search)
    searchParams.has('status') // true
    let param = searchParams.get('status')

    if (param != null && param != undefined) {

        if (param == 'approved') {
            Swal.fire({
                title: 'Compra realizada!',
                text: 'Su compra se realizó con éxito.',
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
    };

    // let listaProductos = servicioProductos.obtenerProductosBD();

    mostrarProductos(await listaProductos);

    servicioStorage.recuperarProductosAlmacenadosAsync().then((response) => servicioCarrito.canasto = response)
        .catch(error => console.log(error, "error"));


    // ICONOCARRITO - NAVBAR
    let botonCarrito = document.getElementById("iconoCarrito");
    botonCarrito.onclick = () => hideShowProductos();


    //funcion mostrarproductos en filtro
    let botonProductos = document.getElementById("filtroProductos");
    botonProductos.onclick = async() => {
        document.getElementsByName("navBarFiltro").forEach(elemento => elemento.classList.remove("active"));

        document.getElementById("filtroProductos").classList.add("active")
        mostrarProductos(await listaProductos);
    };



    // FUNCION FILTER LISTAPRODUCTOS en tienda
    let elementosFiltro = document.getElementsByName("navBarFiltro");
    elementosFiltro.forEach(elementoBoton =>
        elementoBoton.onclick = async (evento) => {
            document.getElementById("filtroProductos").classList.remove("active")
            document.getElementsByName("navBarFiltro").forEach(elemento => elemento.classList.remove("active"));

            evento.target.classList.add("active");

            let botonQueHicieronClick = evento.target.innerText;
            let listaFiltrada = [];
            listaFiltrada =  (await listaProductos).filter(unProducto => unProducto.categoria == botonQueHicieronClick.toLowerCase());
            mostrarProductos(listaFiltrada);
        }
    )




    let botonVaciarCarrito = document.getElementById("botonVaciarCarrito");
    botonVaciarCarrito.onclick = () => {
        servicioCarrito.canasto = [];

        elementoContendorSubtotalVacio.innerHTML = ` 
            <li class="list-group-item">
                <div class="card-carrito">
                    <p id="sinProductos"> No hay productos agregados</p>
                </div>
            </li>`
        mostrarProductosCarrito(servicioCarrito.canasto);
    };
};


// FUNCION MOSTRARPRODUCTOS en tienda
function mostrarProductos(listaProductos) {
    let elementoArticulos = document.getElementById("articulos");
    elementoArticulos.innerHTML = "";

    for (let i = 0; i < listaProductos?.length; i++) {
        elementoArticulos.innerHTML += generarHTML(listaProductos[i]);
    };

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
            servicioCarrito.agregarProducto(numeroProducto); // LLAMAR A LA FUNCION DE AGREGAR PRODUCTO Y PASRLE EL NROPRODUCTO
            mostrarProductosCarrito(servicioCarrito.canasto);
            mostrarSubtotalEnvio();
        }
    );
};


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
};

let total = 0;

// Funcion mostrarProductosCarrito - CARRITO ;
function mostrarProductosCarrito() {
    let elementoContenedorCarrito = document.getElementById("contenedorCarrito");
    elementoContenedorCarrito.innerHTML = "";
    for (let i = 0; i < servicioCarrito.canasto.length; i++) {
        elementoContenedorCarrito.innerHTML += generarCardHTMLCarrito(servicioCarrito.canasto[i]);
    };
    costoCarrito(servicioCarrito.canasto);

    let botonesTacho = document.getElementsByName("tachoParaEliminar");
    botonesTacho.forEach(elementoBoton =>
        elementoBoton.onclick = (evento) => botonEliminarDelCarritoClick(evento)
    );

    showCarrito();
    servicioStorage.almacenarProductos(servicioCarrito.canasto);
};



function botonEliminarDelCarritoClick(evento) {
    let botonQueHicieronClick = evento.target;
    let numeroProducto = Number(botonQueHicieronClick.nextElementSibling.innerText);
    let posicionAEliminar = servicioCarrito.canasto.findIndex(producto => producto.MacetaOPlanta.numeroProducto == numeroProducto);
    servicioCarrito.canasto.splice(posicionAEliminar, 1);
    mostrarProductosCarrito(servicioCarrito.canasto);

    if (servicioCarrito.canasto.length === 0) {
        elementoContendorSubtotalVacio.innerHTML = ` 
            <li class="list-group-item">
                <div class="card-carrito">
                    <p id="sinProductos"> No hay productos agregados</p>
                </div>
            </li>`
    } else {
        costoCarrito(servicioCarrito.canasto);
        mostrarSubtotalEnvio();
        showCarrito();
    };
};

// Generar HTMLCarrito ()
function generarCardHTMLCarrito(itemCarrito) {
    let htmlCarrito = ` 
    <li class="list-group-item animate__animated animate__fadeIn">
        <div class="card-carrito">
            <h5 class="card-title">${itemCarrito.MacetaOPlanta.titulo() || "[Producto inexistente]"}</h5>
            <p> Cantidad: ${itemCarrito.cantidad} </p>
            <p hidden> ${itemCarrito.MacetaOPlanta.numeroProducto} </p>
            <div>
                <p>subtotal por producto: </p><span class="precio badge bg-dark"> $${(itemCarrito?.MacetaOPlanta.precio * itemCarrito.cantidad)}</span>  
                <a href="#!" name="tachoParaEliminar"> 
                <i class="iTrash bi bi-trash3"></i>
                <p hidden> ${itemCarrito.MacetaOPlanta.numeroProducto} </p>
                </a>
            </div>
        </div>
    </li>`

    return (htmlCarrito);
};

// funcion mostrar subtotal y costo de envio - CARRITO ;
function mostrarSubtotalEnvio() {
    elementoContendorSubtotalVacio = document.getElementById("subtotalEnvio");
    elementoContendorSubtotalVacio.innerHTML = ` <li class="list-group-item">
    <div class="card-carrito">
    <p> Costo de envío: $${envio}</p>
    <h5 class="card-title">Total con envío: $${total + envio}</h5> 
    <button id="botonMercadoPago"  class="choi-container">Pagá</button>
    </div>
    </li>`
    onClickParaAbonar();
};

function onClickParaAbonar() {
    let botonMercadoPago = document.getElementById("botonMercadoPago");
    botonMercadoPago.onclick = () => {
        servicioMercadoPago.pagarConMercadoPago(servicioCarrito.canasto);
    };
};

function costoCarrito() {
    total = 0;
    for (let i = 0; i < servicioCarrito.canasto.length; i++) {
        total += (servicioCarrito.canasto[i].MacetaOPlanta.precio * servicioCarrito.canasto[i].cantidad);
    };
    return (total);

};


// funciones para mostrar y ocultar productos;
function hideShowProductos() {

    elementoCarrito = document.getElementById("popUpCarrito");
    if (elementoCarrito.style.display == "block") {
        elementoCarrito.style.display = "none";
    } else {
        elementoCarrito.style.display = "block";
        if (servicioCarrito.canasto.length === 0) {
            mostrarSubtotalEnvio();
            elementoContendorSubtotalVacio.innerHTML = ` 
            <li class="list-group-item">
                <div class="card-carrito">
                    <p id="sinProductos"> No hay productos agregados</p>
                </div>
            </li>`

        } else {
            mostrarProductosCarrito();
            mostrarSubtotalEnvio();
            showCarrito()
        };
    };
};


function showCarrito() {
    elementoCarrito = document.getElementById("popUpCarrito");
    elementoCarrito.style.display = "block";
};

// MERCADOPAGO;
const mp = new MercadoPago('TEST-14b726e0-811d-4ca1-ae2d-a2abd12469e8', {
    locale: 'es-AR',
    advancedFraudPrevention: true,
});

const checkout = mp.checkout({
    preference: {
        id: '3790521406371018'
    },
});
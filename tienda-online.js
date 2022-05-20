// CLASES PLANTAS Y MACETAS
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


window.onload = function () {
    //ESTO HAY QUE HACERLO EN EL ONLOAD, CUANDO SE CARGUE LA PAGINA REVISAR SI ES UN REENVIO DESDE MP -- PENDIENTE TERMINAR 


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
        } else
            Swal.fire({
                title: 'Error!',
                text: 'Hubo un error al momento del pago y no pudo registrarse su compra',
                icon: 'error',
                confirmButtonText: 'Regresar a Sucu.home'
            })
    }

mostrarProductos(listaProductos);
recuperarProductosAlmacenados();
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
    html =
        `<div class="col">
    <div class="card animate__animated animate__fadeIn">
    <div title= "${producto?.titulo() ?? "[Producto inexistente]"}" class="cover cover-small"
    style="background-image: url(${producto?.foto})";>
    </div>
    
    <div class="card-body">
    <h5 class="card-title">${producto?.titulo() ?? "[Producto inexistente]"}</h5>
    <p class="card-text">${producto?.descripcion}</p>
    <p hidden> ${producto?.numeroProducto} </p>
    <div>
    <span class="precio badge bg-dark">$${producto?.precio}</span>
    <a class="nav-link" href="#!" onclick= "agregarProducto(${producto?.numeroProducto})"><i class="iCarrito bi bi-cart-plus"></i></a></div>

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
    productoAgregado = listaProductos.find(producto => producto.numeroProducto == numeroProducto);
    canasto.push(productoAgregado);
    mostrarProductosCarrito(canasto);
    mostrarSubtotalEnvio();
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


// Generar HTMLCarrito ()
function generarCardHTMLCarrito(producto) {
    htmlCarrito = ` 
    <li class="list-group-item animate__animated animate__fadeIn">
    <div class="card-carrito">
    <h5 class="card-title">${producto?.titulo() ?? "[Producto inexistente]"}</h5>
    <p hidden> ${producto?.numeroProducto} </p>
    <div>
    <span class="precio badge bg-dark">$${producto?.precio}</span> 
    <a href="#!" onclick= "eliminarProductoCarrito(${producto?.numeroProducto})"> <i class="iTrash bi bi-trash3"></i></a>
    </div>
    </div>
    </li>`
    return (htmlCarrito);
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


// ALMACENAR productos del carrito - STORAGE
function almacenarProductos() {
    let jString = JSON.stringify(canasto);
    localStorage.setItem("carrito", jString);
}

// RECUPERAR productos del carrito - STORAGE
function recuperarProductosAlmacenados() {

    const almacenados = JSON.parse(window.localStorage.getItem("carrito")) || [];
    productos = [];

    if (almacenados != null) {
        for (const productoGuardado of almacenados) {
            let esPlanta = (productoGuardado.categoria == "planta");
            productos.push(esPlanta ? new Planta(productoGuardado) : new Maceta(productoGuardado));
        }
    }
    canasto = productos;
}


const elementoCarrito = document.getElementById("popUpCarrito");


// funciones para mostrar y ocultar productos
function hideShowProductos() {
    if (elementoCarrito?.style.display == "block" ?? "Error en elementoCarrito.style.display") {
        elementoCarrito.style.display = "none";
    }

    else {
        elementoCarrito.style.display = "block";
        costoCarrito(canasto)
        mostrarSubtotalEnvio();
        mostrarProductosCarrito(canasto);
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
}

// MERCADOPAGO

const mp = new MercadoPago('TEST-14b726e0-811d-4ca1-ae2d-a2abd12469e8', {
    locale: 'es-AR',
    advancedFraudPrevention: true,
})

const checkout = mp.checkout({
    preference: {
        id: '3790521406371018'
    }
});

checkout.render({
    container: '.cho-container',
    label: 'Pagá',

});




// funcion que simula backend, ya que el acces token del vendedor deberia ir ahi, porque en el frontend está expuesto
function pagarConMercadoPago(canasto) {

    let myHeaders = new Headers();
    const ACCESS_TOKEN_VENDEDOR = "APP_USR-8855633324297819-051818-59fc62a2c58d61b5151a92d54660062e-1125631595";
    myHeaders.append("Authorization", `Bearer ${ACCESS_TOKEN_VENDEDOR}`);
    myHeaders.append("Content-Type", "application/json");

    let items = canasto.map(producto => {
        return {
            id: producto.numeroProducto,
            title: producto.titulo,
            currency_id: "ARS",
            picture_url: producto.foto,
            desription: producto.descripcion,
            category_id: "art",
            quantity: 1,
            unit_price: producto.precio,
        }
    })

    let raw = JSON.stringify(
        {
            items: items,

            payer: {
                name: "",
                surname: "",
                email: "",
                phone: {
                    area_code: "",
                    number: ""
                },
                identification: {
                    type: "",
                    number: ""
                },
                address: {
                    street_name: "",
                    street_number: 0,
                    zip_code: ""
                }
            },
            back_urls: {
                success: "https://cosalamone.github.io/tienda-sucuhome",
                failure: "https://cosalamone.github.io/tienda-sucuhome",
                pending: "https://cosalamone.github.io/tienda-sucuhome"
            },
            auto_return: "approved",
            payment_methods: {
                installments: 6
            },
            notification_url: "www.URL-WEBHOOK-FALSA-PORQUE-NO-TENGO-BACKEND.com",
            statement_descriptor: "Tienda sucuhome",
            external_reference: "mlplesoj9b"
        });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };


    fetch("https://api.mercadopago.com/checkout/preferences", requestOptions)
        .then(response => response.text())
        .then(result => {
            //ACA LLEGA COMO STRING, ENTRE OTRAS COSAS, LA URL DE PAGO A LA QUE REDIRECCIONO AL USUARIO.
            console.log(result)
            let resultParseado = JSON.parse(result)
            console.log(resultParseado)

            let linkPago = resultParseado.init_point
            location.href = linkPago;
        })
        .catch(error => console.log('error', error));
}

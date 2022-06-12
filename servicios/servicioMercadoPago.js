export  class ServicioMercadoPago {
    constructor (){}
    pagarConMercadoPago () {
        return pagarConMercadoPago(canasto);
    }

}

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

            shipments: {
                "cost": 349,
                "mode": "not_specified",
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
            external_reference: "mlplesoj9b",


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
            console.log(result) //ACA LLEGA COMO STRING LA URL DE PAGO A LA QUE REDIRECCIONO AL USUARIO, ENTRE OTRAS COSAS.
            let resultParseado = JSON.parse(result)
            console.log(resultParseado)

            let linkPago = resultParseado.init_point
            location.href = linkPago;
        })
        .catch(error => console.log('error', error));
}

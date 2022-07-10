export class ServicioGSheets {
    constructor() { }


    // Raw Format
    importarBD() {

        return new Promise((resolve, reject) => {


            fetch("https://sheet.best/api/sheets/e1e8826d-eda1-492f-a82b-baf5b680a6c1?_raw=1")
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    let arrayProductos = data;

                    resolve(arrayProductos)

                })
                .catch((error) => {
                    console.error(error);
                    reject("error")
                });

        });

    
    }
}
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; //llamado al XmlHttpRequest
const API = 'https://api.escuelajs.co/api/v1'; //En mayúsculas porque es una referencia que no va a cambiar

function fetchData(urlApi, callback) { //No confundir y colocar API
    let xhttp = new XMLHttpRequest(); //referencia a new XMLHttpRequest

    xhttp.open('GET', urlApi, true); //Petición "obtener" con true para habilitarlo
    xhttp.onreadystatechange = function (event) { //escucha diferentes estados de la solicitud y conocer cuando está disponible la información
        if (xhttp.readyState === 4) { //si el estado ha sido completada la llamada
            if(xhttp.status === 200) { // el servidor responde de forma correcta
                callback(null, JSON.parse(xhttp.responseText)); // Dentro de xhttp.responseText recibimos lo que entrega el servidor en texto y se hace la transferencia en JSON
            }else {
                const error = new Error('Error' + urlApi);
                return callback(error, null) // Es null porque no se está regresando ningún dato
            }
        }
    }
    xhttp.send();
}

fetchData(`${API}/products`, function(error1, data1) { //Llamamos la función con argumentos de url y función anónima
    if (error1) return console.error(error1); // Si se genera error retornamos error, info en data 1
    fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) { // Volvemos a llamar a la función
        if (error2) return console.error(error2); //Retornamos error2 (si se produce) e info guardada en data2
        fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) { // 3er llamado a la función
            if (error3) return console.error(error3); // Retorn. error3 (si se produce). Info guardada en data3
            console.log(data1[0]); // Mostramos los datos de la primera llamada (estudiar la api)
            console.log(data2.title); // Mostramos los datos de la 2da llamada
            console.log(data3.name); // 3er llamada
        });
    });
});
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; //llamado al XmlHttpRequest
const API = 'https://api.escuelajs.co/api/v1'; //En mayúsculas porque es una referencia que no va a cambiar

function fetchData(urlApi, callback) { //No confundir y colocar API
    let xhttp = new XMLHttpRequest(); //referencia a new XMLHttpRequest

    xhttp.open('GET', urlApi, true); //Petición "obtener" con true para habilitarlo
    xhttp.onreadystatechange = function (event) { //escucha diferentes estados de la solicitud y conocer cuando está disponible la información
        if (xhttp.readyState === 4) { //si el estado ha sido completada la llamada
            if(xhttp.status === 200) { // el servidor responde de forma correcta
                callback(null, JSON.parse(xhttp.responseText)) // Dentro de xhttp.responseText recibimos lo que entrega el servidor en texto y se hace la transferencia en JSON
            }
        }else {
            const error = new Error('Error' + urlApi);
            return callback(error, null) // Es null porque no se está regresando ningún dato
        }
    }
    xhttp.send();
}
import fetch from 'node-fetch'; 
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) { // Ya no se solicita información si no que se guardará información
    const response = fetch(urlApi, {
       method: 'POST', // Tiene que ir en mayúscula
       mode: 'cors', // cors es el permiso que va a tener. Por defecto va a estar siempre en cors
       credentials: 'same-origin', //Es opcional
       headers: {
        'Content-Type': 'application/json' //Necesario indicar que lo que se está enviando  es de tipo json
       },
       body: JSON.stringify(data) // El metodo JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON
    });
    return response;
}
// En https://fakeapi.platzi.com/doc/products se consigue la estructura de como debe ser el objeto que se quiere crear con POST
const data = {
  "title": "227",
  "price": 227,
  "description": "A description",
  "categoryId": 1,
  "images": ["https://placeimg.com/640/480/any"]
}
// Podemos usar el posData como una promesa y con .then obtener la respuesta como un objeto json y mostrarlo después en la consola
postData(`${API}/products`, data)
.then(response => response.json())
.then(data => console.log(data));
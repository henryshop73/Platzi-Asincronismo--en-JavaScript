import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';
// Lógica de async: ir por los datos, luego esperar por ellos y finalmente retornarlos hacia el usuario

async function fetchData(urlApi) { //Siempre async antes de function
    const response = await fetch(urlApi); //Hacemos uso del fetch
    const data = await response.json(); //Estructura de los datos transformados en json
    return data; //Retorna la información de la API que stamos solicitando
}
// También se puede colocar la palabra async antes del argumento y se usa arrow function
const anotherFunction = async (urlApi) => {
    try { //En try estará todo lo que queremos que suceda con la lógica de la aplicación
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

        console.log(products);
        console.log(product.title);
        console.log(category.name);
    } catch (error) { //Atraparemos un error en caso de que haya uno
        console.error(error);
    }
}

anotherFunction(API); // Se hace el llamado
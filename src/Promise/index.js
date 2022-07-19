const promise = new Promise(function (resolve, reject) {
    resolve('hey!')
});

const cows = 15; // Valor inicial de vacas

const countCows = new Promise(function(resolve, reject) { // Solo si el número de vacas supera 10, se llama al resolve. De lo contrario se llama a reject
    if (cows > 10) {
        resolve(`We have ${cows} cows on the farm`);
    } else {
        reject("There is no cows on the farm");
    }
});

countCows.then((result) => { // Con solo .then se obtiene el resultado de la promesa de acuerdo a resolve o reject.
    console.log(result);
}).catch((error) => { // Con .catch podemos obtener más información de un futuro error que se presente
    console.log(error);
}).finally(() => console.log('Finally')); // Con .finally podemos imprimir un mensaje que indica que ya se ejecutó la promesa
 // Se usan arrow function () =>
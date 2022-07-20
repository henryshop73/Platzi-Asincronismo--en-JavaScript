const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) // Se usó operador ternario y se está forzando con true que se cumpla la condición
        ? setTimeout(() => resolve('Async!!'), 2000)
        : reject(new Error('Error!')); // Arroja "error" en caso de que la condición sea falsa
    })
}

const anotherFn = async () => { //La palabra async es para el cuerpo de la función
    const something = await fnAsync(); // la palabra await estará dentro de la lógica a implementar
    console.log(something); // Se imprime mientras se espera
    console.log('Hello');
}

console.log('Before'); // Al ser la primera orden con solo console.log, 'Before' se imprime primero
anotherFn(); // Es el segundo en llamar, pero aún así no se imprimen los console de su lógica y tarda 2 s en ser ejecutada
console.log('After'); // Aparece justo después del 'Before' porque anotherFn() está esperando una promesa y aún así el programa no se detiene, sino que sigue y así tenemos 'After' de segundo al imprimir
/* Las salida al correr con Run queda:
Before
After
Async!!
Hello!
*/
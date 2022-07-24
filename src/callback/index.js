function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) { // No necesariamente se debe llamar callback
    return callback(num1, num2);
}

console.log(calc(2, 2, sum)); // sum debe estar sin () y sin argumentos

// setTimeout

setTimeout(function() { 
    console.log('Hola JavaScript'); 
}, 5000)
// La función es anónima por eso no tiene nombre

//--------------------------------------

function gretting(name) {
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, 'Oscar');
// Se pasa primero la función, de segundo el tiempo de espera y el argumento
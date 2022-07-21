//Decalaración de la función del Generador
function* gen() { 
    yield 1;
    yield 2;
    yield 3;
}

const g = gen(); //Expresión de la función generadora
//Llamada del método next en el obgeto del Generador
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

// Ejemplo iterando en un array
// Declaración de la función del Generador pasando un argumento
function* iterate(array) {
    for (let value of array) { // El loop del for revisa cada elemento del array
        yield value // value es asignado en cada ciclo
    }
}

const it = iterate(['oscar', 'omar', 'ana', 'lucia', 'juan']);
// La diferencia con el ejemplo anterior es que al iterador se le pasa un argumento
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value); // Coloca undefined por que ya no existe otro elemento en el array
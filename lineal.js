// Algoritmo Lineal
function algoritmoLineal(semilla, multiplicador, incremento, modulo, cantidad = 100) {
    let numeros = [];
    let actual = semilla;

    for (let i = 0; i < cantidad; i++) {
        actual = (multiplicador * actual + incremento) % modulo; // Aplica la fórmula lineal
        numeros.push(actual);
    }
    return numeros;
}

// Parámetros de los algoritmos
const semillaMultiplicador = 123; // Semilla para el algoritmo de multiplicador constante
const multiplicadorConstanteValor = 2; // Multiplicador para el algoritmo de multiplicador constante

const semillaLineal = 123; // Semilla para el algoritmo lineal
const multiplicadorLineal = 1664525; // Multiplicador para el algoritmo lineal
const incrementoLineal = 1013904223; // Incremento para el algoritmo lineal
const moduloLineal = 2 ** 32; // Módulo para el algoritmo lineal

// Generar números pseudoaleatorios
const numerosMultiplicador = multiplicadorConstante(semillaMultiplicador, multiplicadorConstanteValor);
const numerosLineales = algoritmoLineal(semillaLineal, multiplicadorLineal, incrementoLineal, moduloLineal);

console.log("Números generados por el Algoritmo de Multiplicador Constante:");
console.log(numerosMultiplicador);

console.log("\nNúmeros generados por el Algoritmo Lineal:");
console.log(numerosLineales);

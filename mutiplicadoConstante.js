import { utils, writeFile } from 'xlsx'; // Importa la biblioteca xlsx

// Algoritmo de Multiplicador Constante
function multiplicadorConstante(semilla, multiplicador, cantidad = 100) {
    let numeros = [];
    let actual = semilla / Number.MAX_SAFE_INTEGER; // Normaliza la semilla entre 0 y 1

    for (let i = 0; i < cantidad; i++) {
        actual = (multiplicador * actual); // Aplica la fórmula del multiplicador constante
        if (actual > 1) {
            actual = actual % 1; // Mantiene el número en el rango [0, 1]
        }
        numeros.push(actual);
    }
    return numeros;
}

// Algoritmo Lineal
function algoritmoLineal(semilla, multiplicador, incremento, modulo, cantidad = 100) {
    let numeros = [];
    let actual = semilla;

    for (let i = 0; i < cantidad; i++) {
        actual = (multiplicador * actual + incremento) % modulo; // Aplica la fórmula lineal
        numeros.push(actual / modulo); // Normaliza el número para que esté entre 0 y 1
    }
    return numeros;
}

// Función para exportar a Excel
function exportarAExcel(numerosMultiplicador, numerosLineales) {
    const wb = utils.book_new(); // Crea un nuevo libro de trabajo

    // Crea una hoja para los números del multiplicador constante
    const wsMultiplicador = utils.aoa_to_sheet([["Multiplicador Constante"], ...numerosMultiplicador.map(num => [num])]);
    utils.book_append_sheet(wb, wsMultiplicador, "Multiplicador Constante");

    // Crea una hoja para los números del algoritmo lineal
    const wsLineal = utils.aoa_to_sheet([["Algoritmo Lineal"], ...numerosLineales.map(num => [num])]);
    utils.book_append_sheet(wb, wsLineal, "Algoritmo Lineal");

    // Escribe el archivo Excel
    writeFile(wb, "numeros_pseudoaleatorios.xlsx");
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

// Exportar a Excel
exportarAExcel(numerosMultiplicador, numerosLineales);

console.log("Los números han sido exportados a 'numeros_pseudoaleatorios.xlsx'.");

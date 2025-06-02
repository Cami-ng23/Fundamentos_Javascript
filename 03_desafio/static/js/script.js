// Declaración de variables
let edadCamilo = 16;
let precioTomate = 12.99;
let saludoFrances = "salut mon ami";
let eresMalo = true;
let arregloNumeros = [1, 2, 3, 4];
let objetoPersona = { nombre: "Ana", edad: 30 };
let valorIndefinido;
let valorNulo = null;
const mes = "Junio";

// Funciones para mostrar cada valor con alert()
function mostrarEdadCamilo() {
    alert("Edad camilo: " + edadCamilo);
}

function mostrarPrecioTomate() {
    alert("Precio Tomate: " + precioTomate);
}

function mostrarSaludoFrances() {
    alert("Saludo Frances: " + saludoFrances);
}

function mostrarEresMalo() {
    alert("Eres Malo: " + eresMalo);
}

function mostrarArreglo() {
    alert("Arreglo de números: " + arregloNumeros);
}

function mostrarObjeto() {
    alert("Objeto persona: " + JSON.stringify(objetoPersona));
}

function mostrarIndefinido() {
    alert("Valor indefinido: " + valorIndefinido);
}

function mostrarNulo() {
    alert("Valor nulo: " + valorNulo);
}

function mostrarConstante() {
    alert("Constante mes: " + mes);
}

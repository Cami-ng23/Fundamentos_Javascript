

function usarString() {
    //Uso de String Ejemplos

    let nombre = prompt("Ingrese su nombre:"); //Variable tipo texto

    let primeraLetra = nombre[0];
    //asignamos valor a primeraLetra con posición 0 de nombre
    let ultimaLetra = nombre[nombre.length - 1];
    alert("Primera Letra es:" + primeraLetra +
        "\nUltima letra es: " + ultimaLetra
    );
}



function manipularApellido() {

    let apellido = prompt("Ingrese su apellido:");

    let segundaLetra = apellido[1];
    let penultimaLetra = apellido[apellido.length - 2];
    alert("Segunda letra es: " + segundaLetra +
        "\nPenultima Letra es: " + penultimaLetra
    );
}


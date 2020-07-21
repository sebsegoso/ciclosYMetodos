let seleccionarEjercicio = prompt("Ingrese un número del 1 al 5")

switch (seleccionarEjercicio) {
    case '1':
        ejercicio1();
        break;
    case '2':
        ejercicio2();
        break;
    case '3':
        ejercicio3();
        break;
    case '4':
        ejercicio4();
        break;
    case '5':
        ejercicio5();
        break;
    default:
        alert("El número ingresado debe ser entre 1 y 5");
        document.location.reload(false);
}

//1
function ejercicio1() {
    let numeroDel1Al100 = +prompt("Ejercicio N°1: \nIngrese un número del 1 al 100");
    if (numeroDel1Al100 > 100 || numeroDel1Al100 < 1) {
        alert("El número debe ser entre 1 y 100. \nReintente nuevamente.");
        ejercicio1();
    }

    for (i = 0; i <= numeroDel1Al100; i++) console.log(i);
}
//2
function ejercicio2() {
    let respuestaColorDelCaballo = prompt("Ejercicio N°2: \n¿De qué color es el caballo blanco de Napoleón?").trim();
    const color = "blanco";

    respuestaColorDelCaballo.toLowerCase() == color.toLowerCase()
        ? alert("Respuesta correcta! \nEl caballo blanco de Napoleón es blanco")
        : ejercicio2();
}
//3
function ejercicio3() {
    let promedioMate = +prompt("Por favor, introduce el promedio de notas de Matemática");
    let promedioFisi = +prompt("Ahora introduce el promedio de notas de Física");
    let promedioCiencias = +prompt("Finalmente introduce el promedio de notas de Ciencias");

    let promedioFinal = (promedioMate + promedioFisi + promedioCiencias) / 3;
    let promedioFinalAproximado = Math.round(promedioFinal);
    alert(`El promedio final de notas es: ${promedioFinalAproximado}`);
}

//4
function ejercicio4() {
    let cantidad = [1,2,3];
    let frutas = [];
    
    cantidad.forEach(() => {
        let fruta = prompt("Por favor, escribe el nombre de una fruta");
        frutas.push(fruta);
    });

    frutas.forEach(f => {
        if (f !== "manzana"){
            console.log(f);4
        }
    });
}

//5
function ejercicio5() {
    let nombre = prompt("Escriba su nombre por favor");
    let vocales = ["a", "e", "i", "o", "u"];
    let nombre2 = nombre.split("");
    let cantidadVocales = 0;
    let cantidadConsonantes = 0;

    nombre2.forEach(letra => {
        vocales.includes(letra) ? cantidadVocales++ : cantidadConsonantes++;
    });
    console.log(`Cantidad de vocales en "${nombre}" = ${cantidadVocales}`);
    console.log(`Cantidad de consonantes en "${nombre}" = ${cantidadConsonantes}`);
}
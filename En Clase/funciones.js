//function primerFuncion() {
//    var a = 40
//    console.log(a);
//}
//
//primerFuncion();

//Parametros de una funcion.

// function imprimir(Nombre, Apellido) {
//     console.log(Nombre + " " + Apellido); //Concatenar dos variables sting.
//     console.log($ { Nombre }
//         $ { Apellido });
// }
// //var nombre = "juan" // Declaracion explicita.
imprimir("Ricardo", "Darin") // Declaracion anonima.

// los parametros pueden ser objetos, variables, variables primitivas o ,inclusive, otras funciones.

// Enviar objetos anonimos.

function imprimir(fn) {
    fn(); // Le estamos pasando una funcion como parametro.
}

var persona = {
    nombre: "Luke",
    apellido: "Skywalker"
}

var miFuncion = function() {
    console.log("miFuncion"); // Declarar una funcion explicita dentro de otra funcion.
}

imprimir(miFuncion);

// imprimir(function() {
//     console.log("Funcion Anonima");
// })
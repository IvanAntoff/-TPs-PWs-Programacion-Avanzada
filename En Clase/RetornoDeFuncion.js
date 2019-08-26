// function obtenerAleatorio() {
//     return Math.random();
// }

// console.log(obtenerAleatorio() + 10)

function crearPersona(nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido //notacion por pares.
    }
}

var persona = crearPersona("Lucas", "Caminacielos")
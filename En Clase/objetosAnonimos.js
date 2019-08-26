// function imprimir(nombre) {
//     console.log(nombre);
// }

// //Declaracion de objeto anonimo.
// imprimir({ 
//     nombre: "Belen"
//     apellido: "Paz"
// });

funcion imprimir(persona) {
    // persona.nombre = "Maria"; - aca lo actualizaria.
    console.log(persona.nombre + "" + persona.apellido);
    // persona.nombre = "Maria"; - aca NO lo actualizaria.
}

var obj = {
    nombre: 'Belen'
    apellido: 'Padilla'
}

imprimir(obj)
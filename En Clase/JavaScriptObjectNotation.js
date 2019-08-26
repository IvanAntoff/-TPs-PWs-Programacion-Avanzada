// Son objetos en formato clave valor.
// entre llave o corchete (arrays).

var objetoJS = {
    nombre: "Pedro",
    apellido: "Richard",
    dimiciolio: "Rosario",
    numero: 171
};

console.log("objeto literal", objetoJS);

var jasonString = JSON.stringify(objetoJS) //NO AMIGO ESTO ES BUENARDDDO TE ARMA EL JASON BORGIES

console.log(jasonString);

var objetoDesdeJson = JSON.parse(jasonString); //EPICARDO AMIGO TE VUELVE EL JSON EN OBJETO ahre.
console.log(objetoDesdeJson)

console.log(objetoDesdeJson.nombre + "" + objetoDesdeJson.apellido);
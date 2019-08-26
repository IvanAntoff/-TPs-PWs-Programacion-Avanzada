// es parecido al concepto de clases en otros lenguajes

funcion jedi() {
    this.nombre = "Kylo"
    this.apellido = "Ren"
    this.edad = "123"

    console.log("esto paso por aca");
}

var juan = new jedi(); //invocacion a la funcion.

console.log(juan);
// nos permite expandir los tipos de objetos en funciones
// mejora el manejo de los objetos

function Persona() {
    this.nombre = "Juan";
    this.apellido = "Perdroza";
    this.edad = 42;
    this.pais = "Argentina";

    this.imprimirInfo = function() {
        console.log(this.nombre + " " + this.apellido + " " + this.edad + " " + this.pais)
    }
}

Persona.prototype.pais = "Argentina"
console.log(Persona.prototype.pais)

var Info = new Persona();
console.log(Info)
console.log("-------------------------- EJEMPLO 2 -----------------------------")
console.log(Info.pais)
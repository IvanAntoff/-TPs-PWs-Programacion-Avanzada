/*
Destructuracion de objetos
*/

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function() {
        return `${this.nombre}${this.apillido}${this.poder}`
    }
}

let { nombre, apellido, poder } = deadpool;

console.log(nombre, apellido, poder)
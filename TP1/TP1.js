//1. Realice una concatenación entre dos cadenas literales para que devuelva su edad en un 
//console.log( “” )
//2. Utilice los elementos de valores numéricos para: Sumar, Restar, Dividir, multiplicar, dividir dos 
//números.
//3. Utilizando condicionales múltiples, realice un <script> que verifique la edad de Jubilación de 
//una persona.
//4. Ídem ejercicio anterior, verificando el sexo, siendo que la edad de Jubilación para el Hombre 
//es de 65 años y la Mujer a los 60 años.
//5. En el siguiente ejemplo se ven los BUCLES de interacción.

mensajeEj = 0;

function separador() {
    mensajeEj = ++mensajeEj;
    console.log();
    console.log('|--------------------- Ej: ' + mensajeEj + ' ---------------------------|');
}

separador();
// Ej. 1:

var edad = 33;
var Mensaje = String;

Mensaje = ('Su edad es: ');

console.log(Mensaje + "" + edad);
console.info(Mensaje + ' ' + edad);
console.warn(Mensaje + '' + edad);

separador();

//Ej. 2 - con resultado.

var suma = 5 + 11;
var resta = 15 - 44;
var multiplicacion = 9 * 3;
var division = 78 / 6;
var modulo = 43 % 10;

console.log('El resultado de la suma 5+11 es: ', suma)
console.log('El resultado de la resta 15-44 es: ', resta)
console.log('El resultado de la multiplicacion 9*3 es: ', multiplicacion)
console.log('El resultado de la division es: 78/6', resta)

separador();
separador();
//Ej. 3 y 4

var persona = {
    edad: 61,
    genero: 'h'
}

function verificarJubilacion(edad, genero) {
    if ((edad >= 65) && (genero === 'h')) {
        console.log('Usted puede tramitar su jubilacion.')
    } else if ((edad >= 60) && (genero === 'm')) {
        console.log('Usted pued tramitar su jubilacion.')
    } else {
        console.log('Usted NO puede tramitar su jubilacion.')
    }
}

verificarJubilacion(persona.edad, persona.genero);

separador();

// contador hasta el num 10.
var contador = 1;

for (contador = 1; contador <= 10; contador++) {
    console.log('El contador es: ' + '' + contador);
}

separador();
// Ej. Cambio de fondo.

function colorFondoRojo() {
    document.bgColor = "red";
}

function colorFondoVerde() {
    document.bgColor = "green";
}

function colorFondoAzul() {
    document.bgColor = "blue";
}

function colorFondoBlanco() {
    document.bgColor = "white";
}

separador();

var nombres = new Array();

nombres[0] = 'Nacho';
nombres[1] = 'Arek';
nombres[2] = 'Laura';
nombres[3] = 'Sonia';
nombres[4] = 'Gonzalo';
nombres[5] = 'Eva';
nombres[6] = 'Pedro';

i = 0;

function buscarAlumno(buscado) {
    for (i = 0; i <= nombres.length; i++) {
        if ((nombres[i]) == (buscado)) {
            return true;
        }
    }
    return false;
}

function leerAlumno() {
    var resultado;
    var mensaje;
    var buscado = prompt("Introduzca el alumno a buscar:", "Arek");


    if (buscado != null || buscado != "") {
      resultado = buscarAlumno(buscado)     
    } else {
      mensaje = "Has cancelado o introducido el nombre vacío"
    } 


    if (resultado == true) {
        mensaje = (`El alumno ${buscado} esta registrado`)
    } else {
        mensaje = (`El alumno ${buscado} NO esta registrado`)
    }
    document.getElementById("respuesta").innerHTML = mensaje;
}

separador();
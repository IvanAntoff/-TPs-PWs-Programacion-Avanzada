/*
Ciclo de vida de node js:
Ejecuta la pila de procesos, entra en el main(), lee las variables, barre la funcion
 y, antes de ejecutarla la saca de la pila de procesos y lo coloca en la pila de node apis.
 Luego de pasar todos los procesos a la pila de apis, pasa los callbacks a la cola de callbacks.
 Y antes de ejecutarlo ejecuta las funciones del main, luego recolecta las funciones del callbacks
 pasandolas al main.
 */

//RECORDAR: NO BLOQUEAR EL NODE APIS y LA PILA DE COLLBACKS

console.log('Inicio del programa');

setTimeout(function() {
    console.log('Primer TimeOut.');
}, 3000)

setTimeout(function() {
    console.log('Segundo timeout.')
}, 0)

setTimeout(function() {
    console.log('Tercer TimeOut')
}, 0)

console.log('Fin del programa.')
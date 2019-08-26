// Asincronismo con JavaSript, javasript funciona a un solo hilo (ejecuta lina a linea)
//, pero tiene la capacidad de delegar, las tareas a otras funciones, event loop.
// 

// Ante un callback, se busca una peticion y al resivir una respuesta
// guarda la respuesta en una pila de tareas, para ejecutarla al finalizar
// la ejecucion de funciones.
// NO SOBRECARGAR EL EVENT LOOP - NO BLOQUEAR EL EVENT LOOP.
// Hoy laburamos con jQuery y callback papi.

// no usar variables, usar contante, basicamente... porque no varian bro.

const API_URL = 'https://swapi.co/api' // Declara las constantes coon mayuscula bbto
const PEOPLE_URL = '/people/'
var id = String

const lukeUrl = `${API_URL}${PEOPLE_URL}${id = "1"}` //el backtip es ctrl + alt "]}`"

$.get(lukeUrl, function(luke) {
    console.log(`"Hola Soy", ${luke.name}`)
})

// los callbacks son funciones, que se va a pasar por parametro
// se va a ejecutar una vez que termine la respuesta

// de la api listar: poner 1,2,3,4,5 y al hacer refresh tienen que mostrarse ordenandos.
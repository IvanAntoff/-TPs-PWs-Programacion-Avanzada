/* Nos permite ejecutar sincrono o asincrono.
Es una funcion que hace algo despues de una tarea, es decir:
Nos permite ejecutar un trabajo de manera asincrona o sincrona.
LUEGO de ejecutar una tarea.
*/

let empleado = [{
        id: 1,
        nombre: 'Tito'
    },
    {
        id: 2,
        nombre: 'Pedro'
    }, {
        id: 3,
        nombre: 'Juan'
    }
];

let salarios = [{
    id: 1,
    salario: 3000
}, {
    id: 2,
    salario: 4000
}];

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        // el resolve se llama si la promesa es exitosa.
        // el reject se llama si la promesa fracasa o no existe el objeto solicitado.
        let empleadoDB = empleado.find(empleado => empleado.id)
        if (!empleadoDB) {
            reject(`No existe el empleado con el ID ${id }`)
        } else {
            resolve(empleadoDB)
        }
    })
}
getEmpleado(10).then(empleado => {
    console.log('El empleado de DB es ', empleado);
}, (error) => {
    console.log(error);
})

let getSalario = (id) => {
    return new Promise((resolve, reject) => {
        // el resolve se llama si la promesa es exitosa.
        // el reject se llama si la promesa fracasa o no existe el objeto solicitado.
        let salarioDB = salarios.find(salarios => salarios.id)
        if (!salarioDB) {
            reject(`No existe el empleado con el ID ${id}`)
        } else {
            resolve(salarioDB)
        }
    })
}

getSalario(10).then(salarios => {
    console.log('El empleado de DB es ', salarios);
}, (error) => {
    console.log(error);
})
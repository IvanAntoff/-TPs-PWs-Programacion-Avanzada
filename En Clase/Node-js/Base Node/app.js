const fs = require('fs');

let base = 3;
let data = '';

for (let i = 1; i <= 10; i++) {
    data += (`${base} * ${i} =  ${base*i}\n`)
}

fs.writeFile('tabla del 3.txt', data, (err) => {
    if (err) throw err; {
        console.log('El archivo tabla.txt ha sido creado')
    }
})

//mirar documentacion de nodejs
// https://nodejs.org/dist/latest-v10.x/docs/api/fs.html
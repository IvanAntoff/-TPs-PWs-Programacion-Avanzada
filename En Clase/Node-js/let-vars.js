//let evita que pises una variable que ya estas usando.

let nombre = 'Wolverine';

if (true) {
    let nombre = 'Magneto'
}

nombre = 'Wolverine1';
nombre = 'Wolverine2';
nombre = 'Wolverine3';
nombre = 'Wolverine4';


console.log(nombre);
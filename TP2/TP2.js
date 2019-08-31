function Coche (marca, modelo, precio){
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
}

var coche1 = new Coche ('Renault', 'Laguna', 18000);
var coche2 = new Coche ('Ford', 'Mondeo', 23000);
var coche3 = new Coche ('Mercedes', '600', 85000);
var coche4 = new Coche ('Seat', 'Cordoba', 30000);
var cadena;

cadena = `El coche ${coche1.marca}, ${coche1.modelo} vale: ${coche1.precio} dolares.`
document.write (cadena + '<br>');
cadena = `El coche ${coche2.marca}, ${coche2.modelo} vale: ${coche2.precio} dolares.`
document.write (cadena + '<br>');
cadena = `El coche ${coche3.marca}, ${coche3.modelo} vale: ${coche3.precio} dolares.`
document.write (cadena + '<br>');
cadena = `El coche ${coche4.marca}, ${coche4.modelo} vale: ${coche4.precio} dolares.`
document.write (cadena + '<br>');
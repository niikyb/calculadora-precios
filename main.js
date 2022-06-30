let precioCompra = parseFloat(prompt("Ingrese el precio de compra"));
let porcentaje = parseFloat(prompt("Ingrese el porcentaje de ganancia"));

let precioVenta = (precioCompra / 100) * porcentaje + precioCompra;

let salida = ("El precio de venta es $" + precioVenta);

alert(salida)

console.log (salida)
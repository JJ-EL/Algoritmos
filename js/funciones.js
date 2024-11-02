const precioOriginal = 1000;

const porcentajeDeDescuento = 15;

function calcularPorDescuento(precioProducto, descuento){
    const resultado = (precioProducto * descuento) / 100;
    const precioConDescuento = precioProducto - resultado;

    return precioConDescuento;
}

const precioFinal = calcularPorDescuento(precioOriginal, porcentajeDeDescuento);  

console.log(precioFinal);



// Calculo Precio con Iva

class Producto{
    constructor(nombre, cantidad, precio){
    this.nombre = nombre
    this.cantidad = cantidad
    this.precio = precio
    this.precioConIVA = function(){
        let precioIVA = this.precio * 1.9;
        return "$" + precioIVA+  " " + "iva"
    }
    this.precioConDescuento = function(){
        let precioConDescuento = this.precio * 1.9
        if(precioConDescuento >= 9000){
            return "$" + (precioConDescuento-(precioConDescuento * 0.20)) +  " " + "20% descuento"
        }
        else{
            return "$" + precioConDescuento + " " +"Sin descuento"
        }
    }
}
}
const productos=[
    new Producto("producto1", 1, 5000),
    new Producto("producto2", 1, 6000),
    new Producto("producto3", 1, 10000),
    new Producto("producto4", 1, 2000)
]
//Agregar un producto nuevo
productos.push(new Producto("producto5", 1, 2000))

for(const Producto of productos){
    console.log(Producto.precioConIVA())
    console.log(Producto.precioConDescuento())
}

//lista productos con IVA y descuennto
productos.forEach
((producto)=>console.log(producto.nombre,producto.precioConIVA(),producto.precioConDescuento()))

// filtrar producto
const filtro1 = productos.filter(item=>item.precio <= 3000)
console.log(filtro1)

//Busqueda
const resultado= productos.find((productos)=> productos.precio <=5000)
console.log(resultado)

//Sumar carrito de compras
const precioTotal = productos.reduce(function(acumulador,producto){
    return acumulador + (producto.precio * 1.9)
}, 0)
console.log("$" + precioTotal);

// Calcular el precio  en cuanto a la cantidad de productos
let NUMERO = parseInt(prompt("Calcular precio x cantidad. Ingrese precio iva"))
for(let i=0; i<10; i++){
    let RESULTADO = NUMERO * i
    console.log(NUMERO + "x" + i + "=" + RESULTADO)
}
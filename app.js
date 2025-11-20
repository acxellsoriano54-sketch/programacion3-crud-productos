console.log('Sistema CRUD de productos iniciado');

let productos = [];
let idCounter = 1;

function agregarProducto(nombre, precio) {
    const nuevo = {
        id: idCounter++,
        nombre,
        precio
    };

    productos.push(nuevo);
    console.log('Producto agregado:', nuevo);
}

console.log('Ejemplo: agregarProducto("Laptop", 15000)');

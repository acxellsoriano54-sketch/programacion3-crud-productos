console.log('=== CRUD DE PRODUCTOS ===');

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

function listarProductos() {
    console.log('Listado de productos:');
    console.table(productos);
}

function buscarProducto(id) {
    return productos.find(p => p.id === id);
}

function editarProducto(id, nuevoNombre, nuevoPrecio) {
    const producto = buscarProducto(id);
    if (!producto) {
        console.log('Producto no encontrado');
        return;
    }
    producto.nombre = nuevoNombre;
    producto.precio = nuevoPrecio;
    console.log('Producto actualizado:', producto);
}

function eliminarProducto(id) {
    const index = productos.findIndex(p => p.id === id);
    if (index === -1) {
        console.log('Producto no encontrado');
        return;
    }
    const eliminado = productos.splice(index, 1);
    console.log('Producto eliminado:', eliminado[0]);
}

console.log('Funciones disponibles:');
console.log('- agregarProducto("Nombre", Precio)');
console.log('- listarProductos()');
console.log('- buscarProducto(ID)');
console.log('- editarProducto(ID, "Nombre", Precio)');
console.log('- eliminarProducto(ID)');


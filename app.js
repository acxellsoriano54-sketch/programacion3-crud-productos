console.log('=== CRUD DE PRODUCTOS (con validaciones) ===');

let productos = [];
let idCounter = 1;

function validarProducto(nombre, precio) {
    const errores = [];

    if (!nombre || nombre.trim().length === 0) {
        errores.push('El nombre del producto es obligatorio.');
    }

    if (precio === undefined || precio === null || isNaN(precio)) {
        errores.push('El precio debe ser un número.');
    } else if (Number(precio) <= 0) {
        errores.push('El precio debe ser mayor que 0.');
    }

    if (errores.length > 0) {
        console.log(' Error al validar producto:');
        errores.forEach(e => console.log('- ' + e));
        return false;
    }

    return true;
}

function agregarProducto(nombre, precio) {
    if (!validarProducto(nombre, precio)) {
        return;
    }

    const nuevo = {
        id: idCounter++,
        nombre: nombre.trim(),
        precio: Number(precio)
    };

    productos.push(nuevo);
    console.log(' Producto agregado:', nuevo);
}

function listarProductos() {
    if (productos.length === 0) {
        console.log('No hay productos registrados.');
        return;
    }
    console.log(' Listado de productos:');
    console.table(productos);
}

function buscarProducto(id) {
    return productos.find(p => p.id === id);
}

function editarProducto(id, nuevoNombre, nuevoPrecio) {
    const producto = buscarProducto(id);
    if (!producto) {
        console.log(' Producto no encontrado para edición.');
        return;
    }

    if (!validarProducto(nuevoNombre, nuevoPrecio)) {
        return;
    }

    producto.nombre = nuevoNombre.trim();
    producto.precio = Number(nuevoPrecio);

    console.log(' Producto actualizado:', producto);
}

function eliminarProducto(id) {
    const index = productos.findIndex(p => p.id === id);
    if (index === -1) {
        console.log(' Producto no encontrado para eliminación.');
        return;
    }

    const eliminado = productos.splice(index, 1)[0];
    console.log(' Producto eliminado:', eliminado);
}

console.log('Funciones disponibles:');
console.log('- agregarProducto(\"Nombre\", Precio)');
console.log('- listarProductos()');
console.log('- buscarProducto(ID)');
console.log('- editarProducto(ID, \"Nombre\", Precio)');
console.log('- eliminarProducto(ID)');
console.log('');
console.log('Ejemplo rápido:');
console.log('  agregarProducto(\"Laptop\", 15000);');
console.log('  listarProductos();');

console.log('=== CRUD DE PRODUCTOS (validaciones, filtros y búsquedas) ===');

let productos = [];
let idCounter = 1;

// ---------------- VALIDACIONES ----------------
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

// ---------------- OPERACIONES BÁSICAS CRUD ----------------
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

// ---------------- FILTROS Y BÚSQUEDAS ----------------

// Filtrar por coincidencia en el nombre (contiene texto)
function filtrarPorNombre(texto) {
    const t = texto.toLowerCase();
    const resultado = productos.filter(p => p.nombre.toLowerCase().includes(t));

    console.log( Productos cuyo nombre contiene "":);
    console.table(resultado);
    return resultado;
}

// Filtrar por precio mínimo
function filtrarPorPrecioMinimo(min) {
    const resultado = productos.filter(p => p.precio >= Number(min));
    console.log( Productos con precio >= :);
    console.table(resultado);
    return resultado;
}

// Filtrar por precio máximo
function filtrarPorPrecioMaximo(max) {
    const resultado = productos.filter(p => p.precio <= Number(max));
    console.log( Productos con precio <= :);
    console.table(resultado);
    return resultado;
}

// Filtrar por rango [min, max]
function filtrarPorRango(min, max) {
    const minimo = Number(min);
    const maximo = Number(max);
    const resultado = productos.filter(p => p.precio >= minimo && p.precio <= maximo);

    console.log( Productos con precio entre  y :);
    console.table(resultado);
    return resultado;
}

// Búsqueda por nombre exacto
function buscarPorNombreExacto(nombre) {
    const n = nombre.toLowerCase();
    const resultado = productos.find(p => p.nombre.toLowerCase() === n);

    console.log( Búsqueda por nombre exacto "":);
    console.log(resultado ?? 'No se encontró producto.');
    return resultado;
}

// Búsqueda por parte del nombre (devuelve lista)
function buscarPorNombreParcial(texto) {
    console.log(' Búsqueda por nombre parcial (usa filtrarPorNombre):');
    return filtrarPorNombre(texto);
}

// ---------------- AYUDA ----------------
console.log('Funciones disponibles:');
console.log('- agregarProducto(\"Nombre\", Precio)');
console.log('- listarProductos()');
console.log('- editarProducto(ID, \"Nombre\", Precio)');
console.log('- eliminarProducto(ID)');
console.log('- filtrarPorNombre(\"texto\")');
console.log('- filtrarPorPrecioMinimo(monto)');
console.log('- filtrarPorPrecioMaximo(monto)');
console.log('- filtrarPorRango(min, max)');
console.log('- buscarPorNombreExacto(\"Nombre\")');
console.log('- buscarPorNombreParcial(\"texto\")');
console.log('');
console.log('Ejemplo rápido:');
console.log('  agregarProducto(\"Laptop\", 15000);');
console.log('  agregarProducto(\"Mouse\", 500);');
console.log('  filtrarPorRango(400, 16000);');

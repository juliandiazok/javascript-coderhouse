/* CODIGO DEL PET SHOP, CORRESPONDIENTE A LA PRIMER ENTREGA DE CODERHOUSE*/

//Consulta, Alta, Baja y Modificación de Productos del PetShop

class Producto {
	constructor(nombre, marca, pesoLitros, tipo, precio) {
		this.nombre = nombre.toUpperCase();
		this.marca = marca.toUpperCase();
		this.pesoLitros = pesoLitros;
		this.tipo = tipo.toUpperCase();
		this.precio = precio;
	}
}

const cachorrosProPlan = new Producto(
	'Perros Cachorros',
	'Pro-Plan',
	5,
	'Alimento Balanceado',
	3000
);
const adultosProPlan = new Producto(
	'Perros Adultos',
	'Pro-Plan',
	5,
	'Alimento Balanceado',
	2800
);
const perrosMedianosRoyalCanin = new Producto(
	'Perros Medianos',
	'Royal Canin',
	8,
	'Alimento Balanceado',
	3500
);
const perrosPequenosRoyalCanin = new Producto(
	'Perros Pequeños',
	'Royal Canin',
	8,
	'Alimento Balanceado',
	3200
);
const platoMediano = new Producto(
	'Plato de Agua',
	'Generica',
	1,
	'Accesorios',
	1500
);
const pelota = new Producto('Pelota de Tenis', 'Generica', 1, 'Juguetes', 500);

const Productos = [];

Productos.push(
	cachorrosProPlan,
	adultosProPlan,
	perrosMedianosRoyalCanin,
	perrosPequenosRoyalCanin,
	platoMediano,
	pelota
);

console.log(Productos);

// CONSULTA

function consultaProducto() {
	let nombre = prompt('Ingrese el nombre del producto');
	nombre = nombre.toUpperCase();
	let marca = prompt('Ingrese la marca del producto');
	marca = marca.toUpperCase();
	let producto = Productos.find(
		(producto) => producto.nombre === nombre && producto.marca === marca
	);
	if (producto == undefined) {
		alert('No se encontró el producto');
	} else {
		console.log(producto);
	}
}

// ALTA

function altaProducto() {
	let nombre = prompt('Ingrese el nombre del producto');
	let marca = prompt('Ingrese la marca del producto');
	let pesoLitros = parseInt(
		prompt('Ingrese el peso o los litros del producto')
	);
	let tipo = prompt('Ingrese el tipo del producto');
	let precio = parseInt(prompt('Ingrese el precio del producto'));
	let producto = new Producto(nombre, marca, pesoLitros, tipo, precio);
	Productos.push(producto);
	alert('Se ha registrado el ingreso del producto!');
	console.log(producto);
}

// BAJA

function bajaProducto() {
	let nombre = prompt('Ingrese el nombre del producto');
	nombre = nombre.toUpperCase();
	let marca = prompt('Ingrese la marca del producto');
	marca = marca.toUpperCase();
	let producto = Productos.find(
		(producto) => producto.nombre === nombre && producto.marca === marca
	);
	if (producto == undefined) {
		alert('No se encontró el producto');
	} else {
		let indice = Productos.indexOf(producto);
		Productos.splice(indice, 1);
		alert('Se ha eliminado el producto');
		console.log(Productos);
	}
}

// MODIFICAR

function modificarProducto() {
	let nombre = prompt('Ingrese el nombre del producto');
	nombre = nombre.toUpperCase();
	let marca = prompt('Ingrese la marca del producto');
	marca = marca.toUpperCase();
	let producto = Productos.find(
		(producto) => producto.nombre === nombre && producto.marca === marca
	);
	if (producto == undefined) {
		alert('No se encontró el producto');
	} else {
		let indice = Productos.indexOf(producto);
		let pesoLitros = parseInt(
			prompt('Ingrese el peso o los litros del producto')
		);
		let tipo = prompt('Ingrese el tipo del producto');
		let precio = parseInt(prompt('Ingrese el precio del producto'));
		let nuevoProd = new Producto(nombre, marca, pesoLitros, tipo, precio);
		Productos.splice(indice, 1, nuevoProd);
		alert('Se ha modificado el producto');
		console.log(Productos);
	}
}

// MENU

function menuPetShop() {
	alert(
		'Bienvenido al ABM del PetShop PONZOO, pulse Aceptar para continuar con el menú interactivo'
	);
	let eleccion = parseInt(
		prompt(
			'Elija la opción que desee: \n 1) Visualizar un producto \n 2) Crear un producto \n 3) Eliminar un producto \n 4) Modificar un producto \n 5) Terminar'
		)
	);
	return eleccion;
}

do {
	let opcionElegida = menuPetShop();
	if (opcionElegida == 1) {
		consultaProducto();
		break;
	} else if (opcionElegida == 2) {
		altaProducto();
		break;
	} else if (opcionElegida == 3) {
		bajaProducto();
		break;
	} else if (opcionElegida == 4) {
		modificarProducto();
		break;
	} else if (opcionElegida == 5) {
		alert('Lo esperamos cuando desee! :)');
		break;
	} else {
		alert('Ingresaste cualquier cosa, comencemos de nuevo!');
		break;
	}
} while (opcionElegida !== 5);

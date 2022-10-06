class Producto {
	constructor(id, nombre, marca, pesoLitros, tipo, precio, cantidad) {
		this.id = id;
		this.nombre = nombre.toUpperCase();
		this.marca = marca.toUpperCase();
		this.pesoLitros = pesoLitros;
		this.tipo = tipo.toUpperCase();
		this.precio = precio;
		this.cantidad = cantidad;
	}
}

const cachorrosProPlan = new Producto(
	1,
	'Perros Cachorros',
	'Pro-Plan',
	5,
	'Alimento Balanceado',
	3000,
	1
);
const adultosProPlan = new Producto(
	2,
	'Perros Adultos',
	'Pro-Plan',
	5,
	'Alimento Balanceado',
	2800,
	1
);
const perrosMedianosRoyalCanin = new Producto(
	3,
	'Perros Medianos',
	'Royal Canin',
	8,
	'Alimento Balanceado',
	3500,
	1
);
const perrosPequenosRoyalCanin = new Producto(
	4,
	'Perros Pequeños',
	'Royal Canin',
	8,
	'Alimento Balanceado',
	3200,
	1
);
const platoMediano = new Producto(
	5,
	'Plato de Agua',
	'Generica',
	1,
	'Accesorios',
	1500,
	1
);
const pelota = new Producto(
	6,
	'Pelota de Tenis',
	'Generica',
	1,
	'Juguetes',
	500,
	1
);

const Productos = [];

Productos.push(
	cachorrosProPlan,
	adultosProPlan,
	perrosMedianosRoyalCanin,
	perrosPequenosRoyalCanin,
	platoMediano,
	pelota
);

const contenedorProductos = document.getElementById('contenedorProductos');

Productos.forEach((p) => {
	const divProducto = document.createElement('div');
	divProducto.classList.add('card', 'col-xxl-3');
	divProducto.innerHTML = `
                            <div>
                              <br>
                                <img src="../images/store/${p.id}.jpg" class="imageCard card-img-top" width="50%" height="50%">
                                  <div class="card-body">
                                    <h5 class="card-title">Nombre: ${p.nombre}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Marca: ${p.marca}</h6>
                                    <p class="card-text">Peso/Litros: ${p.pesoLitros}</p>
                                    <p class="card-text">Tipo: ${p.tipo}</p>
                                    <p class="card-text">Precio: $${p.precio}</p>
                                    <button id="boton${p.id}" class="btn" style="background-color: #f48c06"> Agregar al Carrito </button>
                                  </div>
                              <br>
                            </div>
                          `;
	contenedorProductos.appendChild(divProducto);
	const boton = document.getElementById(`boton${p.id}`);
	boton.addEventListener('click', () => {
		Toastify({
			text: 'Producto agregado al carrito',
			duration: 3000,
			//close: true,
			gravity: 'bottom',
			position: 'right',
			//backgroundColor: "#B7950B",
			//destination: "https://www.google.com",
			style: {
				background: '#f48c06',
				color: 'black',
			},
			//className: "info",
		}).showToast();
		agregarAlCarro(p.id);
	});
});

const cart = [];
let productoId = '';

if (localStorage.getItem('carrito')) {
	let carrito = JSON.parse(localStorage.getItem('carrito'));
	/* reservas.push(...reserva); */
	for (let i = 0; i < carrito.length; i++) {
		cart.push(carrito[i]);
	}
}

const totalCompra = document.getElementById('totalCompra');

const calcularCompra = () => {
	let total = 0;
	let storage = JSON.parse(localStorage.getItem('carrito'));
	storage.forEach((p) => {
		total += p.precio * p.cantidad;
	});
	totalCompra.innerHTML = total;
};

const agregarAlCarro = (id) => {
	const producto = Productos.find((p) => p.id === id);
	const productoEnCarro = cart.find((p) => p.id === id);
	if (productoEnCarro) {
		productoEnCarro.cantidad++;
	} else {
		cart.push(producto);
	}
	localStorage.setItem('carrito', JSON.stringify(cart));
	actualizarCarro();
};

const contenedorCarro = document.getElementById('contenedorCarro');
const verCarro = document.getElementById('verCarro');
let eliminar = '';

verCarro.addEventListener('click', actualizarCarro());

function actualizarCarro() {
	localStorage.setItem('carrito', JSON.stringify(cart));
	let aux = '';
	cart.forEach((p) => {
		aux += `
            <div>
              <br>
                <div class="card">
                  <img src="../images/store/${p.id}.jpg" class="imageCard card-img-top">
                  <div class="card-body">
                    <h5 class="card-title">Nombre: ${p.nombre}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Marca: ${p.marca}</h6>
                    <p class="card-text">Peso/Litros: ${p.pesoLitros}</p>
                    <p class="card-text">Tipo: ${p.tipo}</p>
                    <p class="card-text">Precio: $${p.precio}</p>
                    <p class="card-text">Cantidad: ${p.cantidad}</p>
                    <button onClick = "eliminarDelCarro(${p.id})" class="btn" style="background-color: #f48c06" id="botonEliminar"> Eliminar del Carrito </button>
                  </div>
                </div>
              <br>
            </div>
          `;
	});

	contenedorCarro.innerHTML = aux;
	calcularCompra();
}

const asignarId = (id) => {
	productoId = id;
};

const vaciarCarro = document.getElementById('vaciarCarro');

vaciarCarro.addEventListener('click', () => {
	Swal.fire({
		title: '¿Esta seguro de eliminar el producto?',
		icon: 'warning',
		background: '#FDEBD0',
		confirmButtonText: 'Aceptar',
		showCancelButton: true,
		cancelButtonText: 'Cancelar',
		cancelButtonColor: '#f48c06',
		confirmButtonColor: '#f48c06',
	}).then((result) => {
		if (result.isConfirmed) {
			//elimino el producto fideos del carrito
			cart.splice(0, cart.length);
			localStorage.clear('carrito');
			totalCompra.innerHTML = 0;
			actualizarCarro();
			Swal.fire({
				title: 'Producto eliminado',
				icon: 'success',
				background: '#FDEBD0',
				confirmButtonText: 'Aceptar',
				confirmButtonColor: '#f48c06',
			});
		}
	});
});

const eliminarDelCarro = (id) => {
	const producto = cart.find((p) => p.id === id);
	const indice = cart.indexOf(producto);
	if (producto.cantidad === 1) {
		cart.splice(cart.indexOf(producto), 1);
	} else {
		cart[indice].cantidad = cart[indice].cantidad - 1;
	}
	actualizarCarro();
};

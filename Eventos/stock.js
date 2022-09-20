class Producto {
	constructor(nombre, marca, pesoLitros, tipo, precio) {
		this.nombre = nombre.toUpperCase();
		this.marca = marca.toUpperCase();
		this.pesoLitros = pesoLitros;
		this.tipo = tipo.toUpperCase();
		this.precio = precio;
	}
}

const arrayProductos = [];

const miFormulario = document.getElementById('miFormulario');

miFormulario.addEventListener('submit', (e) => {
	e.preventDefault();
	agregarProducto();
});

function agregarProducto() {
	const nombre = document.getElementById('formNombre').value;
	const marca = document.getElementById('formMarca').value;
	const pesoLitros = document.getElementById('formPesoLitros').value;
	const tipo = document.getElementById('formTipo').value;
	const precio = document.getElementById('formPrecio').value;
	const producto = new Producto(nombre, marca, pesoLitros, tipo, precio);
	arrayProductos.push(producto);
	miFormulario.reset();
}

const verStockDisponible = document.getElementById('verStock');
const contenedorStock = document.getElementById('contenedorStock');
verStockDisponible.addEventListener('click', () => {
	mostrarStock();
});

function mostrarStock() {
	contenedorStock.innerHTML = '';
	arrayProductos.forEach((producto) => {
		const div = document.createElement('div');
		div.innerHTML = `
											<br>
											<div class="container" style="display: flex; justify-content: center;">
												<div class="card" style="width: 18rem;">
													<div class="card-body">
														<h5 class="card-title">Nombre: ${producto.nombre}</h5>
														<h6 class="card-subtitle mb-2 text-muted">Marca: ${producto.marca}</h6>
														<p class="card-text">Peso/Litros: ${producto.pesoLitros}</p>
														<p class="card-text">Tipo: ${producto.tipo}</p>
														<p class="card-text">Precio: $${producto.precio}</p>
													</div>
												</div>
											</div>
											<br>
										`;
		contenedorStock.appendChild(div);
	});
}

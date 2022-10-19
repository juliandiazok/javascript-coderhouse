let storage = JSON.parse(localStorage.getItem('carrito'));

const contenedorCarrito = document.getElementById('listaCarrito');

let total = 0;

storage.forEach((p) => {
	const listaCarrito = document.createElement('div');
	total += p.precio * p.cantidad;
	listaCarrito.innerHTML = `
                              <li class="list-group-item d-flex justify-content-between align-items-center">
                                ${p.nombre}   |   ${
		p.marca
	}   |   Precio Unitario: $${p.precio}   |   Total: $${p.precio * p.cantidad}
                                <span class="badge bg-primary rounded-pill" style="background-color: #f48c06!important;">${
																	p.cantidad
																}</span>
                              </li>
                          `;
	contenedorCarrito.appendChild(listaCarrito);
});

totalCompra.innerHTML = total;

const pagarAhora = document.getElementById('pagarAhora');

pagarAhora.addEventListener('click', () => {
	Swal.fire({
		title: '¿Quiere realizar el pago?',
		icon: 'warning',
		background: '#FDEBD0',
		confirmButtonText: 'Aceptar',
		showCancelButton: true,
		cancelButtonText: 'Cancelar',
		cancelButtonColor: '#B7950B',
		confirmButtonColor: '#B7950B',
	}).then((result) => {
		if (result.isConfirmed) {
			Swal.fire({
				title: 'Pago Realizado',
				icon: 'success',
				background: '#FDEBD0',
				confirmButtonText: 'Regresar a la tienda',
				confirmButtonColor: '#f48c06',
			});
			/*let storage = JSON.parse(localStorage.getItem('carrito'));
			console.log(storage);
			window.location = '../pages/checkout.html';*/
		}
	});
});

console.log(total);

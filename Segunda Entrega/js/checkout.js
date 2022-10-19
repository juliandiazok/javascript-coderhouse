let storage = JSON.parse(localStorage.getItem('carrito'));

const contenedorCarrito = document.getElementById('listaCarrito');

storage.forEach((p) => {
	const listaCarrito = document.createElement('div');
	listaCarrito.innerHTML = `
                            <ul class="list-group list-group-horizontal-lg">
                              <li class="list-group-item">${p.nombre}</li>
                              <li class="list-group-item">$${p.precio}</li>
                              <li class="list-group-item">${p.cantidad}</li>
                            </ul>
                          `;
	contenedorCarrito.appendChild(listaCarrito);
});

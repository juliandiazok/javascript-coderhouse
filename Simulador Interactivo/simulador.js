/* CODIGO DEL SIMULADOR DE CUOTAS */

let continuar = 'Y';
let montoBruto = 0;
let cuotas = 0;
let porcentajeInt = 0;
let flagInteres = '';

const calcularMontoConInteres = (montoBruto, cuotas, interes) => {
	let montoTotal = montoBruto + (montoBruto * interes) / 100;
	let montoCuota = montoTotal / cuotas;
	for (let i = 1; i <= cuotas; i++) {
		return alert(
			'Monto total: ' +
				montoCuota +
				'. En la cuota: ' +
				i +
				' se debe pagar: ' +
				montoCuota
		);
	}
};

while (continuar === 'Y') {
	while (montoBruto < 1 || montoBruto == '') {
		montoBruto = parseInt(
			prompt('Ingresar el precio de contado del producto a comprar')
		);
		console.log(montoBruto);
		if (montoBruto <= 1 || montoBruto == '') {
			alert('Ingrese un monto mas alto por favor');
		}
	}

	while (cuotas < 1) {
		cuotas = parseInt(
			prompt(
				'Ingrese las cuotas en las que se va a pagar el producto (Si paga de contado, ingrese 1)'
			)
		);
		console.log(cuotas);
		if (cuotas < 1) {
			alert('Ingrese un numero de cuotas mas alto por favor');
		}
	}

	while (flagInteres !== 'Y' || flagInteres !== 'N') {
		flagInteres = prompt(
			'El producto tiene interes? Si la rta es positiva ingrese Y, sino ingrese N'
		);
		console.log(flagInteres);
		if (flagInteres != 'Y') {
			alert('Ingrese una rta valida');
		} else if (flagInteres != 'N') {
			alert('Ingrese una rta valida');
		}
	}

	if (flagInteres == 'Y') {
		while (porcentajeInt <= 0) {
			let porcentajeInt = parseInt(
				prompt('Ingrese el porcentaje de interes (sólo el numero, sin el %)')
			);
			if (porcentajeInt <= 0) {
				alert('Ingrese un numero de cuotas mas alto por favor');
			}
		}
		calcularMontoConInteres(montoBruto, cuotas, porcentajeInt);
	} else {
		alert('El monto a pagar es: ' + montoBruto);
	}
	continuar = prompt(
		'Desea continuar? Si la rta es positiva, ingrese Y, sino ingrese N'
	);
}
